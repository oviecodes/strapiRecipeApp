module.exports = ({ env }) => ({
  email: {
    provider: 'nodemailer',
    providerOptions: {
        service: 'Gmail',
		host: 'smtp.gmail.com',
		port: 465,
		ssl: false,
        tls: false,
        
        auth: {
            user: env('GMAIL_USER'),
            pass: env('GMAIL_PASS'),
        },
      // ... any custom nodemailer options
    },
    settings: {
      defaultFrom: 'noreply@recipee.com',
      defaultReplyTo: 'nonreply@recipee.com',
    },
  },
});