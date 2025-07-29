import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com'; // <-- Add this line
import Header from '../Header';
import './Contact.css';

const Contact = () => {
  useEffect(() => {
    document.title = "Contact";
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceID = 'service_ytow5f9';     // e.g. service_abcd123
    const templateID = 'template_vpqt57g';   // e.g. template_xyz456
    const publicKey = 'BioBWeovFIaImzvHp';     // e.g. dXxWb0aBcDeFG1234

    try {
      await emailjs.send(serviceID, templateID, {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      }, publicKey);

      setSubmissionStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Email send error:', error);
      setSubmissionStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmissionStatus(null), 5000);
    }
  };

  return (
    <div className="contact-page">
      <Header />
      <div className="contact-container">
        <h1>Contact</h1>
        <p className="contact-subtitle">
          Have questions or want to discuss a project? Feel free to reach out!
        </p>

        <div className="contact-content">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="What would you like to discuss?"
              ></textarea>
            </div>

            <button
              type="submit"
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {submissionStatus === 'success' && (
              <div className="success-message">
                <i className="fas fa-check-circle"></i>
                Thank you! Your message has been sent successfully.
              </div>
            )}

            {submissionStatus === 'error' && (
              <div className="error-message">
                <i className="fas fa-exclamation-circle"></i>
                Oops! Something went wrong. Please try again.
              </div>
            )}
          </form>

          <div className="contact-info">
            <h2>Contact Information</h2>
            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <div>
                <h3>Email</h3>
                <span>yasithprashan@gmail.com</span>
              </div>
            </div>
            <div className="info-item">
              <i className="fas fa-phone-alt"></i>
              <div>
                <h3>Phone</h3>
                <span>+94 76 866 9806</span>
              </div>
            </div>
            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h3>Location</h3>
                <span>Colombo, Sri Lanka</span>
              </div>
            </div>

            <div className="social-links">
              <a href="https://linkedin.com/in/yasith-prashan" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/foryasith" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="mailto:yasithprashan@gmail.com" aria-label="Email">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
