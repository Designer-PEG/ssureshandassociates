import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { siteConfig } from '../data/siteContent';

// List of disposable email domains (prevents spam)
const DISPOSABLE_EMAIL_DOMAINS = [
  'yopmail.com', 'mailinator.com', 'tempmail.com', '10minutemail.com',
  'guerrillamail.com', 'trashmail.com', 'fakeinbox.com', 'throwawaymail.com'
];

// Configurable Form Submission Target (Swap for Formspree / backend later)
const FORM_SUBMIT_ENDPOINT = 'https://formspree.io/f/placeholder'; // Placeholder API

const Contact = () => {
  const [searchParams] = useSearchParams();
  const serviceParam = searchParams.get('service') || '';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Prefill service from URL query parameter if available
  useEffect(() => {
    if (serviceParam) {
      setFormData(prev => ({
        ...prev,
        service: serviceParam
      }));
    }
  }, [serviceParam]);

  const validateField = (fieldName, value) => {
    let error = '';
    
    if (fieldName === 'name') {
      if (!value.trim()) {
        error = 'Full name is required';
      }
    }
    
    if (fieldName === 'email') {
      const emailValue = value.trim();
      if (!emailValue) {
        error = 'Email address is required';
      } else {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!re.test(emailValue)) {
          error = 'Please enter a valid email address';
        } else {
          const domain = emailValue.split('@')[1];
          if (DISPOSABLE_EMAIL_DOMAINS.includes(domain.toLowerCase())) {
            error = 'Disposable email addresses are not accepted';
          }
        }
      }
    }
    
    if (fieldName === 'message') {
      if (!value.trim()) {
        error = 'Message content is required';
      } else if (value.trim().length < 10) {
        error = 'Message must be at least 10 characters long';
      }
    }
    
    setErrors(prev => ({
      ...prev,
      [fieldName]: error
    }));
    
    return error;
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    validateField(name, value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (touched[name]) {
      validateField(name, value);
    }
  };

  const validateForm = () => {
    const nameErr = validateField('name', formData.name);
    const emailErr = validateField('email', formData.email);
    const msgErr = validateField('message', formData.message);
    
    return !nameErr && !emailErr && !msgErr;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setTouched({
      name: true,
      email: true,
      company: true,
      service: true,
      message: true
    });
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setErrors({});
    
    try {
      // Mock submit logs request and mimics success since Formspree target is placeholder.
      // Swap out this fetch logic when connecting a real endpoint.
      console.log('Submitting Contact Request data:', formData);
      
      // Simulate API lag
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        message: ''
      });
      setTouched({});
    } catch (submitError) {
      console.error('Contact form submission failed:', submitError);
      setErrors({
        form: 'Inquiry dispatch failed. Check your internet connection or email the partners directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-brand-ivory min-h-screen">
      
      {/* Page Header (Ledger style) */}
      <section className="bg-brand-navy text-white py-20 relative">
        <div className="max-w-7xl mx-auto px-6 z-10 relative">
          <span className="text-brand-gold font-mono-ledger font-bold uppercase tracking-[0.2em] text-xs">
            Connect
          </span>
          <h1 className="font-serif-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mt-2">
            Schedule Consultation
          </h1>
          <div className="w-16 h-0.5 bg-brand-gold mt-4 mb-6"></div>
          <p className="text-gray-300 font-sans-ui leading-relaxed text-base md:text-lg max-w-3xl">
            Have direct questions regarding auditing requirements, VAT updates, or business advisory in Nepal? Connect with our team.
          </p>
        </div>
      </section>

      {/* Main Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Sidebar Details Block */}
            <div className="lg:col-span-5 bg-white p-8 md:p-10 border border-brand-navy/10 shadow-sm space-y-8 relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-brand-gold"></div>
              
              <h2 className="font-serif-display text-2xl font-bold text-brand-navy pb-4 border-b border-brand-navy/5">
                Office Information
              </h2>
              
              <div className="space-y-6">
                {/* Location */}
                <div className="flex items-start gap-4">
                  <span className="text-brand-gold text-xl mt-0.5">📍</span>
                  <div>
                    <h3 className="text-[10px] font-mono-ledger font-bold text-gray-400 uppercase tracking-wider">Office Address</h3>
                    <div className="mt-1 flex items-center gap-1.5 flex-wrap">
                      <a 
                        href="https://maps.app.goo.gl/StsAueTS1QknMu7x5" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-brand-navy font-bold text-base hover:text-brand-gold hover:underline"
                      >
                        {siteConfig.contact.address}
                      </a>
                      {siteConfig.contact.isPlaceholder && (
                        <span className="bg-amber-500/10 text-amber-500 text-[8px] font-mono-ledger font-bold px-1.5 py-0.5 uppercase tracking-wide border border-amber-500/20">Staging</span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start gap-4">
                  <span className="text-brand-gold text-xl mt-0.5">📞</span>
                  <div>
                    <h3 className="text-[10px] font-mono-ledger font-bold text-gray-400 uppercase tracking-wider">Direct Hotline</h3>
                    <div className="mt-1 flex items-center gap-1.5 flex-wrap">
                      <a href="tel:+9779851135421" className="text-brand-navy font-bold text-base hover:text-brand-gold hover:underline">
                        {siteConfig.contact.phone}
                      </a>
                      {siteConfig.contact.isPlaceholder && (
                        <span className="bg-amber-500/10 text-amber-500 text-[8px] font-mono-ledger font-bold px-1.5 py-0.5 uppercase tracking-wide border border-amber-500/20">Staging</span>
                      )}
                    </div>
                    <p className="text-[10px] text-gray-400 font-sans-ui mt-0.5">Sunday - Friday, 10:00 AM - 5:00 PM</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <span className="text-brand-gold text-xl mt-0.5">✉️</span>
                  <div>
                    <h3 className="text-[10px] font-mono-ledger font-bold text-gray-400 uppercase tracking-wider">Partner Inbox</h3>
                    <div className="mt-1 flex items-center gap-1.5 flex-wrap">
                      <a href="mailto:2015casuresh@gmail.com" className="text-brand-navy font-bold text-base hover:text-brand-gold hover:underline break-all">
                        {siteConfig.contact.email}
                      </a>
                      {siteConfig.contact.isPlaceholder && (
                        <span className="bg-amber-500/10 text-amber-500 text-[8px] font-mono-ledger font-bold px-1.5 py-0.5 uppercase tracking-wide border border-amber-500/20">Staging</span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <span className="text-brand-gold text-xl mt-0.5">🕒</span>
                  <div>
                    <h3 className="text-[10px] font-mono-ledger font-bold text-gray-400 uppercase tracking-wider">Business Schedule</h3>
                    <p className="text-sm font-bold text-brand-navy mt-1">
                      {siteConfig.contact.hours}
                    </p>
                    <p className="text-xs text-gray-400 font-sans-ui mt-0.5">Saturdays & Government Holidays: Closed</p>
                  </div>
                </div>
              </div>

              {/* Map block */}
              <div className="pt-6 border-t border-brand-navy/5">
                <div className="rounded border border-brand-navy/10 overflow-hidden h-60 bg-gray-50 shadow-inner">
                  <iframe 
                    src={siteConfig.contact.mapEmbedUrl}
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Office Map Pin"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Contact Form Block */}
            <div className="lg:col-span-7 bg-white p-8 md:p-10 border border-brand-navy/10 shadow-sm relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-brand-navy"></div>
              
              <h2 className="font-serif-display text-2xl font-bold text-brand-navy pb-4 border-b border-brand-navy/5 mb-6">
                Send Inquiry
              </h2>
              
              {errors.form && (
                <div className="rounded bg-red-50 p-4 mb-6 border border-red-200 text-xs font-semibold text-red-800">
                  {errors.form}
                </div>
              )}

              {submitted ? (
                <div className="rounded p-8 bg-emerald-50 border border-emerald-200 text-center flex flex-col items-center">
                  <span className="text-3xl block mb-3 text-emerald-600">✓</span>
                  <h3 className="font-serif-display text-lg font-bold text-emerald-800">
                    Message Dispatched Successfully
                  </h3>
                  <p className="mt-2 text-xs md:text-sm text-emerald-700 max-w-sm">
                    Thank you. S. Suresh & Associates will review your compliance inquiry and get back to you within 2 business days.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-5 py-2 bg-brand-navy text-white text-xs font-bold font-sans-ui uppercase tracking-wider"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Name and Email Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        className={`w-full bg-brand-ivory/30 border p-3 text-sm focus:bg-white focus:border-brand-gold focus:outline-none transition-all ${
                          errors.name && touched.name ? 'border-red-400 ring-1 ring-red-200' : 'border-brand-navy/10'
                        }`}
                        placeholder="e.g. Ramesh Adhikari"
                      />
                      {errors.name && touched.name && (
                        <p className="mt-1.5 text-xs text-red-600 font-medium">⚠️ {errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        className={`w-full bg-brand-ivory/30 border p-3 text-sm focus:bg-white focus:border-brand-gold focus:outline-none transition-all ${
                          errors.email && touched.email ? 'border-red-400 ring-1 ring-red-200' : 'border-brand-navy/10'
                        }`}
                        placeholder="e.g. manager@firm.com"
                      />
                      {errors.email && touched.email && (
                        <p className="mt-1.5 text-xs text-red-600 font-medium">⚠️ {errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Company and Dropdown Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        id="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full bg-brand-ivory/30 border border-brand-navy/10 p-3 text-sm focus:bg-white focus:border-brand-gold focus:outline-none transition-all"
                        placeholder="e.g. ABC Traders Pvt. Ltd."
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-2">
                        Interested Practice Area
                      </label>
                      <select
                        name="service"
                        id="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full bg-brand-ivory/30 border border-brand-navy/10 p-3 text-sm focus:bg-white focus:border-brand-gold focus:outline-none transition-all bg-white"
                      >
                        <option value="">-- Select Option --</option>
                        {siteConfig.services.map(s => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message block */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-2">
                      Detailed Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      className={`w-full bg-brand-ivory/30 border p-3 text-sm focus:bg-white focus:border-brand-gold focus:outline-none transition-all ${
                        errors.message && touched.message ? 'border-red-400 ring-1 ring-red-200' : 'border-brand-navy/10'
                      }`}
                      placeholder="Detail your compliance requests, operational volume, or audit scheduling inquiries..."
                    />
                    {errors.message && touched.message && (
                      <p className="mt-1.5 text-xs text-red-600 font-medium">⚠️ {errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-4 text-xs font-bold uppercase tracking-widest text-white shadow-md transition-all duration-300 cursor-pointer ${
                        isSubmitting 
                          ? 'bg-brand-gold/50 text-brand-navy cursor-not-allowed' 
                          : 'bg-brand-navy hover:bg-brand-gold hover:text-brand-navy shadow-lg'
                      }`}
                    >
                      {isSubmitting ? 'Sending Request...' : 'Send Inquiry Message'}
                    </button>
                    
                    <p className="text-[10px] text-gray-400 text-center mt-3 font-sans-ui leading-normal">
                      Form is ready to connect with endpoints like Formspree. Standard validation filters applied.
                    </p>
                  </div>

                </form>
              )}
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;