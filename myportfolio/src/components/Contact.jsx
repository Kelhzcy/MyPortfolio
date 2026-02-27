import { useState } from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const socialLinks = [
    {
      name: 'Facebook',
      icon: FacebookIcon,
      url: 'https://facebook.com',
      color: '#1877F2',
    },
    {
      name: 'GitHub',
      icon: GitHubIcon,
      url: 'https://github.com',
      color: '#333333',
    },
    {
      name: 'LinkedIn',
      icon: LinkedInIcon,
      url: 'https://linkedin.com',
      color: '#0A66C2',
    },
    {
      name: 'Instagram',
      icon: InstagramIcon,
      url: 'https://instagram.com',
      color: '#E4405F',
    },
  ];

  const contactInfo = [
    {
      icon: EmailIcon,
      label: 'Email',
      value: 'arnoellkelhzcy@gmail.com',
      link: 'mailto:arnoellkelhzcy@gmail.com',
    },
    {
      icon: PhoneIcon,
      label: 'Phone',
      value: '09094811849',
      link: 'tel:09094811849',
    },
    {
      icon: LocationOnIcon,
      label: 'Address',
      value: 'Balete, Diadi, Nueva Vizcaya',
      link: null,
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-container">
      <header className="contact-header">
        <h1>Get In Touch</h1>
        <p>I'd love to hear from you. Let's connect!</p>
      </header>

      <div className="contact-content">
        {/* Contact Information */}
        <div className="contact-info-section">
          <h2>Contact Information</h2>
          <div className="contact-info-cards">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div key={index} className="info-card">
                  <div className="info-icon-wrapper">
                    <Icon className="info-icon" />
                  </div>
                  <div className="info-content">
                    <h3>{info.label}</h3>
                    {info.link ? (
                      <a href={info.link} className="info-link">
                        {info.value}
                      </a>
                    ) : (
                      <p>{info.value}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Social Media Links */}
          <div className="social-section">
            <h2>Follow Me</h2>
            <div className="social-links">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    title={social.name}
                    style={{ '--social-color': social.color }}
                  >
                    <Icon className="social-icon" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send Me a Message</h2>

          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              placeholder="Your name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="your@email.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              required
              placeholder="Message subject"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              placeholder="Your message here..."
              rows="5"
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
