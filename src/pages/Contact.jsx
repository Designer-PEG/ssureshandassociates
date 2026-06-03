import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import servicesData from '../data/services.json';

// List of disposable email domains
const DISPOSABLE_EMAIL_DOMAINS = [
  'yopmail.com', 'mailinator.com', 'tempmail.com', '10minutemail.com',
  'guerrillamail.com', 'trashmail.com', 'fakeinbox.com', 'throwawaymail.com'
];

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwdN3RsbBL9870hsny1l0IRzqjgi6H-565LXpbI8yEwM5Od1tRlIcohjMzf78WxC-og/exec';

const Contact = () => {
  const [searchParams] = useSearchParams();
  const serviceParam = searchParams.get('service') || '';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    service: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastSubmissionTime, setLastSubmissionTime] = useState(null);

  // Prefill service from URL query parameter
  useEffect(() => {
    if (serviceParam) {
      setFormData(prev => ({
        ...prev,
        service: serviceParam,
        subject: prev.subject || `Inquiry about ${serviceParam}`
      }));
    }
  }, [serviceParam]);

  // Check cooldown timer from localStorage
  const canSubmit = !lastSubmissionTime || 
                   (Date.now() - lastSubmissionTime) > 3600000; // 1 hour in ms

  useEffect(() => {
    const savedTime = localStorage.getItem('lastContactFormSubmission');
    if (savedTime) {
      setLastSubmissionTime(parseInt(savedTime, 10));
    }
  }, []);

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
    
    if (fieldName === 'subject') {
      if (!value.trim()) {
        error = 'Subject is required';
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
    
    // Clear field-specific error as user types if they already blurred
    if (touched[name]) {
      validateField(name, value);
    }
  };

  const validateForm = () => {
    const nameErr = validateField('name', formData.name);
    const emailErr = validateField('email', formData.email);
    const subjectErr = validateField('subject', formData.subject);
    const msgErr = validateField('message', formData.message);
    
    const formErrors = {
      name: nameErr,
      email: emailErr,
      subject: subjectErr,
      message: msgErr
    };
    
    const isFormValid = !Object.values(formErrors).some(err => !!err);
    return isFormValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Mark all as touched
    setTouched({
      name: true,
      email: true,
      phone: true,
      subject: true,
      service: true,
      message: true
    });
    
    if (!canSubmit) {
      const waitTime = Math.ceil((3600000 - (Date.now() - lastSubmissionTime)) / 60000);
      setErrors({
        form: `Security limit: Please wait ${waitTime} minutes before submitting another request.`
      });
      return;
    }
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setErrors({});
    
    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData)
      });
      
      const result = await response.json();
      
      if (result.result === 'success') {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          service: '',
          message: ''
        });
        setTouched({});
        
        // Cooldown logging
        const now = Date.now();
        setLastSubmissionTime(now);
        localStorage.setItem('lastContactFormSubmission', now.toString());
      } else {
        setErrors({
          form: 'Unable to submit your message. Our servers are undergoing maintenance. Please try calling directly.'
        });
      }
    } catch (submitError) {
      console.error('Contact form submission failed:', submitError);
      setErrors({
        form: 'Network response timed out. Please check your internet connection or email us directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-light py-20 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">
            Get in Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2">
            Schedule a Consultation
          </h1>
          <div className="w-16 h-1 bg-blue-600 mx-auto my-4 rounded-full"></div>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Have questions about compliance, auditing, or tax planning in Nepal? Contact our CAs directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-12">
          {/* Contact Information Sidebar */}
          <div className="lg:col-span-5 bg-white p-8 md:p-10 rounded-2xl shadow-md border border-gray-100 space-y-8">
            <h2 className="text-2xl font-bold text-gray-800 border-b border-gray-100 pb-4">Office Contact Details</h2>
            
            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start">
                <div className="bg-blue-50 text-blue-600 p-3 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1.0.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Direct Phone</h3>
                  <a href="tel:+9779851135421" className="text-lg font-bold text-primary hover:underline block mt-0.5">
                    +977-9851135421
                  </a>
                  <p className="text-xs text-gray-400 mt-1">Sun - Fri, 10:00 AM - 5:00 PM</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start">
                <div className="bg-blue-50 text-blue-600 p-3 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Official Email</h3>
                  <a href="mailto:2015casuresh@gmail.com" className="text-lg font-bold text-primary hover:underline block mt-0.5">
                    2015casuresh@gmail.com
                  </a>
                  <p className="text-xs text-gray-400 mt-1">Direct partner email inbox</p>
                </div>
              </div>
            
              {/* Office Location */}
              <div className="flex items-start">
                <div className="bg-blue-50 text-blue-600 p-3 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Office Address</h3>
                  <a 
                    href="https://maps.app.goo.gl/StsAueTS1QknMu7x5" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg font-bold text-primary hover:underline block mt-0.5"
                  >
                    Tinkune, Kathmandu, Nepal
                  </a>
                  <p className="text-xs text-gray-400 mt-1">Map pin opens in new window</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start">
                <div className="bg-blue-50 text-blue-600 p-3 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Office Hours</h3>
                  <p className="text-sm font-bold text-emerald-600 mt-0.5">Sunday - Friday: 10:00 AM - 5:00 PM</p>
                  <p className="text-sm font-semibold text-red-500">Saturdays & Public Holidays: Closed</p>
                </div>
              </div>
            </div>
            
            {/* Embedded Google Map */}
            <div className="pt-4 border-t border-gray-100">
              <div className="rounded-xl overflow-hidden shadow-inner h-56 border border-gray-200">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.1557995817084!2d85.3444444!3d27.6831521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1994e1dcdcc9%3A0xe1003444e99ee5ec!2sTinkune%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1680000000000!5m2!1sen!2snp" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Suresh & Associates Office Map"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Contact Form Block */}
          <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-2xl shadow-md border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 border-b border-gray-100 pb-4 mb-6">Send an Inquiry</h2>
            
            {errors.form && (
              <div className="rounded-lg bg-red-50 p-4 mb-6 border border-red-200 text-xs font-semibold text-red-800 flex items-center">
                <span className="mr-2 text-lg">⚠</span> {errors.form}
              </div>
            )}

            {submitted ? (
              <div className="rounded-xl bg-emerald-50 p-6 mb-6 border border-emerald-200 text-center">
                <span className="text-3xl block mb-2">✓</span>
                <h3 className="font-bold text-emerald-800 text-base">
                  Inquiry Sent Successfully!
                </h3>
                <p className="mt-2 text-sm text-emerald-700">
                  Our Chartered Accountants will respond to your business request within 2 business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      autoComplete="name"
                      className={`py-3 px-4 block w-full border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary-light focus:outline-none transition-all text-sm ${
                        errors.name && touched.name ? 'border-red-300 ring-2 ring-red-100' : 'border-gray-200'
                      }`}
                      placeholder="e.g., Ramesh Adhikari"
                      aria-invalid={errors.name && touched.name ? 'true' : 'false'}
                      aria-describedby={errors.name && touched.name ? 'name-error' : undefined}
                    />
                    {errors.name && touched.name && (
                      <p id="name-error" className="mt-2 text-xs font-semibold text-red-600 flex items-center">
                        <span className="mr-1">⚠</span> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      autoComplete="email"
                      className={`py-3 px-4 block w-full border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary-light focus:outline-none transition-all text-sm ${
                        errors.email && touched.email ? 'border-red-300 ring-2 ring-red-100' : 'border-gray-200'
                      }`}
                      placeholder="e.g., manager@company.com"
                      aria-invalid={errors.email && touched.email ? 'true' : 'false'}
                      aria-describedby={errors.email && touched.email ? 'email-error' : undefined}
                    />
                    {errors.email && touched.email && (
                      <p id="email-error" className="mt-2 text-xs font-semibold text-red-600 flex items-center">
                        <span className="mr-1">⚠</span> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">
                      Phone Number <span className="text-gray-400 font-normal">(optional)</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      autoComplete="tel"
                      className="py-3 px-4 block w-full border border-gray-200 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary-light focus:outline-none transition-all text-sm"
                      placeholder="e.g., 9851000000"
                    />
                  </div>

                  {/* Interested Service Dropdown */}
                  <div>
                    <label htmlFor="service" className="block text-sm font-bold text-gray-700 mb-2">
                      Interested Service <span className="text-gray-400 font-normal">(optional)</span>
                    </label>
                    <select
                      name="service"
                      id="service"
                      value={formData.service}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="py-3 px-4 block w-full border border-gray-200 rounded-lg bg-white focus:border-primary focus:ring-2 focus:ring-primary-light focus:outline-none transition-all text-sm"
                    >
                      <option value="">-- Select Service --</option>
                      {servicesData.map(s => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-bold text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`py-3 px-4 block w-full border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary-light focus:outline-none transition-all text-sm ${
                      errors.subject && touched.subject ? 'border-red-300 ring-2 ring-red-100' : 'border-gray-200'
                    }`}
                    placeholder="Brief description of requirements"
                    aria-invalid={errors.subject && touched.subject ? 'true' : 'false'}
                    aria-describedby={errors.subject && touched.subject ? 'subject-error' : undefined}
                  />
                  {errors.subject && touched.subject && (
                    <p id="subject-error" className="mt-2 text-xs font-semibold text-red-600 flex items-center">
                      <span className="mr-1">⚠</span> {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">
                    Detailed Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`py-3 px-4 block w-full border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary-light focus:outline-none transition-all text-sm ${
                      errors.message && touched.message ? 'border-red-300 ring-2 ring-red-100' : 'border-gray-200'
                    }`}
                    placeholder="Please detail your audit, accounting or advisory requests..."
                    aria-invalid={errors.message && touched.message ? 'true' : 'false'}
                    aria-describedby={errors.message && touched.message ? 'message-error' : undefined}
                  />
                  {errors.message && touched.message && (
                    <p id="message-error" className="mt-2 text-xs font-semibold text-red-600 flex items-center">
                      <span className="mr-1">⚠</span> {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex justify-center items-center py-3.5 px-6 border border-transparent rounded-lg shadow-md text-base font-bold text-white transition-all duration-200 cursor-pointer ${
                      isSubmitting ? 'bg-primary-light text-primary cursor-not-allowed' : 'bg-primary hover:bg-primary-dark shadow-lg'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending Inquiry...
                      </>
                    ) : (
                      <>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Send Inquiry Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;