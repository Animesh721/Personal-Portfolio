import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ArrowRight, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import { EMAIL_CONFIG } from '../config/emailjs';

const ContactForm = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // EmailJS configuration imported from config file

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear status when user starts typing
    if (status.message) {
      setStatus({ type: '', message: '' });
    }
  };

  const validateForm = () => {
    const { name, email, subject, message } = formData;
    
    if (!name.trim()) {
      setStatus({ type: 'error', message: 'Please enter your name' });
      return false;
    }
    
    if (!email.trim()) {
      setStatus({ type: 'error', message: 'Please enter your email' });
      return false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email address' });
      return false;
    }
    
    if (!subject.trim()) {
      setStatus({ type: 'error', message: 'Please enter a subject' });
      return false;
    }
    
    if (!message.trim()) {
      setStatus({ type: 'error', message: 'Please enter your message' });
      return false;
    }
    
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    setStatus({ type: '', message: '' });

    try {
      await emailjs.sendForm(
        EMAIL_CONFIG.serviceId,
        EMAIL_CONFIG.templateId,
        form.current,
        EMAIL_CONFIG.publicKey
      );
      
      setStatus({ 
        type: 'success', 
        message: 'Thank you! Your message has been sent successfully. I\'ll get back to you soon!' 
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus({ 
        type: 'error', 
        message: 'Sorry, there was an error sending your message. Please try again or contact me directly.' 
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="glass-card p-8 animate-scale-in shadow-3d">
      <form ref={form} onSubmit={handleSubmit} className="space-y-6">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold mb-3 text-gray-300">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-xl border border-slate-600/50 bg-slate-700/30 focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-elastic text-white placeholder-gray-400 hover:bg-slate-700/50"
              placeholder="John Doe"
              disabled={isLoading}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-3 text-gray-300">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-xl border border-slate-600/50 bg-slate-700/30 focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-elastic text-white placeholder-gray-400 hover:bg-slate-700/50"
              placeholder="john@example.com"
              disabled={isLoading}
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="subject" className="block text-sm font-semibold mb-3 text-gray-300">
            Subject *
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-xl border border-slate-600/50 bg-slate-700/30 focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-elastic text-white placeholder-gray-400 hover:bg-slate-700/50"
            placeholder="Project Discussion"
            disabled={isLoading}
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-semibold mb-3 text-gray-300">
            Your Message *
          </label>
          <textarea
            id="message"
            name="message"
            rows="6"
            value={formData.message}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-xl border border-slate-600/50 bg-slate-700/30 focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-elastic resize-none text-white placeholder-gray-400 hover:bg-slate-700/50"
            placeholder="Tell me about your project or just say hello!"
            disabled={isLoading}
          ></textarea>
        </div>

        {/* Status Message */}
        {status.message && (
          <div className={`flex items-center gap-3 p-4 rounded-xl border ${
            status.type === 'success' 
              ? 'bg-green-500/10 border-green-500/30 text-green-400' 
              : 'bg-red-500/10 border-red-500/30 text-red-400'
          } animate-scale-in`}>
            {status.type === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
            <span className="text-sm font-medium">{status.message}</span>
          </div>
        )}
        
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-xl hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-purple-500/25 hover:scale-105 flex items-center justify-center gap-3 border-2 border-purple-500/30 hover:border-purple-400 ${
            isLoading ? 'opacity-70 cursor-not-allowed' : ''
          }`}
        >
          {isLoading ? (
            <>
              <Loader size={20} className="animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <ArrowRight size={20} />
              Send Message
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;