import React, { useState } from 'react';
import Header from '../Header';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    
    // Simulate form submission
    setSubmissionStatus('success');
    setFormData({ name: '', email: '', message: '' });
    
    // Reset status after 5 seconds
    setTimeout(() => setSubmissionStatus(null), 5000);
  };

  return (
    <div className="contact-page">
      <Header /> {/* Make sure your Header is transparent or matches the theme */}
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p>Have questions or feedback? We'd love to hear from you!</p>
        
        <div className="contact-content">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
              ></textarea>
            </div>
            
            <button type="submit" className="submit-btn">Send Message</button>
            
            {submissionStatus === 'success' && (
              <div className="success-message">
                Thank you for your message! We'll get back to you soon.
              </div>
            )}
          </form>
          
          <div className="contact-info">
            <h2>Other Ways to Reach Us</h2>
            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <span>contact@example.com</span>
            </div>
            <div className="info-item">
              <i className="fas fa-phone"></i>
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <span>123 Main Street, City, Country</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;