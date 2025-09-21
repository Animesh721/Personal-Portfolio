import React from 'react';
import { Mail } from 'lucide-react';

const ContactForm = () => {
  const handleGmailClick = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const email = 'kranimesh721@gmail.com';
    const subject = 'Hello from your portfolio!';
    const body = 'Hi Animesh,\n\nI visited your portfolio and would like to get in touch.\n\nBest regards,';

    if (isMobile) {
      // For mobile devices, try to open Gmail app first, fallback to mailto
      const gmailAppUrl = `googlegmail://co?to=${email}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      // Try to open Gmail app
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      iframe.src = gmailAppUrl;
      document.body.appendChild(iframe);

      // Fallback to mailto after a short delay
      setTimeout(() => {
        document.body.removeChild(iframe);
        window.location.href = mailtoUrl;
      }, 1000);
    } else {
      // For desktop/PC, open Gmail in browser
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.open(gmailUrl, '_blank');
    }
  };

  return (
    <div className="glass-card p-8 animate-scale-in shadow-3d">
      <div className="text-center space-y-6">
        <div className="space-y-4">
          <div className="w-20 h-20 mx-auto bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full flex items-center justify-center border border-purple-500/30 animate-bounce-gentle">
            <Mail className="w-10 h-10 text-purple-400" />
          </div>

          <h3 className="text-2xl font-bold text-white mb-2">
            Ready to start a conversation?
          </h3>

          <p className="text-gray-400 leading-relaxed max-w-md mx-auto">
            Click the button below to compose an email directly in Gmail. I'll get back to you as soon as possible!
          </p>
        </div>

        <button
          onClick={handleGmailClick}
          className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-xl hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-purple-500/25 hover:scale-105 flex items-center justify-center gap-3 border-2 border-purple-500/30 hover:border-purple-400"
        >
          <Mail size={20} />
          Send me a message
        </button>

        <p className="text-sm text-gray-500">
          Opens Gmail on desktop or Gmail app on mobile devices
        </p>
      </div>
    </div>
  );
};

export default ContactForm;