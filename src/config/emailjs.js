// EmailJS Configuration
// Replace these values with your actual EmailJS credentials

export const EMAIL_CONFIG = {
  // Your EmailJS service ID (from environment variables)
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  
  // Your EmailJS template ID (from environment variables)
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  
  // Your EmailJS public key (from environment variables)
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
};

/* 
SETUP INSTRUCTIONS:

1. Copy .env.example to .env
2. Go to https://www.emailjs.com/ and create an account
3. Create a new service (Gmail, Outlook, etc.)
4. Create a new email template with these variables:
   - {{name}} - sender's name
   - {{email}} - sender's email  
   - {{subject}} - email subject
   - {{message}} - email message
5. Get your Service ID, Template ID, and Public Key
6. Add them to your .env file

Environment Variables Required:
- VITE_EMAILJS_SERVICE_ID=your_service_id
- VITE_EMAILJS_TEMPLATE_ID=your_template_id  
- VITE_EMAILJS_PUBLIC_KEY=your_public_key

Example template:
---
Subject: New Contact Form Message: {{subject}}

Hello Animesh,

You have received a new message from your portfolio website:

Name: {{name}}
Email: {{email}}
Subject: {{subject}}

Message:
{{message}}

---

Best regards,
Your Portfolio Website
---
*/