import React, { useState } from 'react';
import './ContactForm.css'
function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({ name: '', email: '', phone: '' });
  const [loading, setLoading] = useState(false);

  const validateName = (value) => value.trim().length >= 2;
  const validateEmail = (value) => /^\S+@\S+\.\S+$/.test(value);
  const validatePhone = (value) => /^[0-9]{10}$/.test(value);

  const validateField = (fieldName, value) => {
    switch (fieldName) {
      case 'name':
        return validateName(value) ? '' : 'Please enter a valid name (at least 2 characters)';
      case 'email':
        return validateEmail(value) ? '' : 'Please enter a valid email address';
      case 'phone':
        return validatePhone(value) ? '' : 'Please enter a 10-digit mobile number';
      default:
        return '';
    }
  };

  const handleChange = (field, value) => {
    switch (field) {
      case 'name':
        setName(value);
        setErrors((prev) => ({ ...prev, name: validateField('name', value) }));
        break;
      case 'email':
        setEmail(value);
        setErrors((prev) => ({ ...prev, email: validateField('email', value) }));
        break;
      case 'phone':
        setPhone(value);
        setErrors((prev) => ({ ...prev, phone: validateField('phone', value) }));
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nameError = validateField('name', name);
    const emailError = validateField('email', email);
    const phoneError = validateField('phone', phone);

    setErrors({ name: nameError, email: emailError, phone: phoneError });

    if (nameError || emailError || phoneError) return;

    setLoading(true);
    try {
      const response = await fetch('https://xsfunds.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone }),
      });
      const data = await response.json();
      if (response.ok) {
        alert('Message sent successfully!');
        setName('');
        setEmail('');
        setPhone('');
        setErrors({ name: '', email: '', phone: '' });
      } else {
        alert(data.message || 'Submission failed, please try again.');
      }
    } catch (error) {
      console.error(error);
      alert('Failed to submit form, please submit it again');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="fade-in">
      <h2>Let's Build Your Future</h2>
      <div className="underline"></div>
      <p className="info-message">
        Ready to take the next step? Contact us today for a free, no-obligation consultation and unlock your financial potential.
      </p>
      <form id="contact-form" noValidate onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          placeholder="Your Name"
          value={name}
          onChange={(e) => handleChange('name', e.target.value)}
        />
        <small className="error-message" style={{ color: 'red' }}>{errors.name}</small>

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="your.email@example.com"
          value={email}
          onChange={(e) => handleChange('email', e.target.value)}
        />
        <small className="error-message" style={{ color: 'red' }}>{errors.email}</small>

        <label htmlFor="phone">Mobile Number</label>
        <input
          type="tel"
          id="phone"
          placeholder="10 Digits Mobile Number"
          maxLength={10}
          value={phone}
          onChange={(e) => handleChange('phone', e.target.value)}
        />
        <small className="error-message" style={{ color: 'red' }}>{errors.phone}</small>

        <button type="submit" disabled={loading}>
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      {loading && (
        <div id="loader-overlay" style={{ display: 'flex' }}>
          <div className="loader-container">
            <div className="spinner"></div>
            <span className="loading-text">Loading...</span>
          </div>
        </div>
      )}

      <div className="contact-info">
        <p>Xs Funds</p>
        <p>📍 Address: Near Palnadu Busstand, Narasaraopet(522601)</p>
        <p>📞 Phone: +91 6300228212</p>
      </div>
    </section>
  );
}

export default Contact;
