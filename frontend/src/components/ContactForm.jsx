import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Layout from './Layout';
import '../styles/contact.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'CodeFusion Team'
      };

      const response = await emailjs.send(
        'service_l2dgq9d',
        'template_72xnw9c',
        templateParams,
        'SeKIBOO6XpLegtARZ'
      );
      alert('Email sent successfully!');
      setFormData({name: "", email: "", message: ""});
      return response;
    } catch (error) {
      alert('Error sending email: ', error);
    }
  };

  return (
    <Layout>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h1>Contact Us</h1>
          <div className="inputs">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="inputs">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="inputs">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              required
            />
          </div>
          <button type="submit" className="authBtn">Send</button>
        </form>
      </div>
    </Layout>
  );
};

export default ContactForm;
