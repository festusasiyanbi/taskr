import React, { useState } from "react";
import Layout from "./Layout";
import "../styles/contact.css";

const ContactForm = () => {
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    if (!token) {
      setError("User not authenticated");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Something went wrong");
      }

      const data = await response.json();
      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      return data;
    } catch (error) {
      console.error("Error sending email:", error.message);
      setSuccess(false);
    }
  };
  
  if (success) {
    alert("Success: Your message has been successfully sent!");
  }

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
          <button type="submit" className="authBtn">
            Send
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default ContactForm;
