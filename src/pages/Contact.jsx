import React, { useState, useEffect } from 'react';

// List of disposable email domains
const DISPOSABLE_EMAIL_DOMAINS = [
  'yopmail.com', 'mailinator.com', 'tempmail.com', '10minutemail.com',
  'guerrillamail.com', 'trashmail.com', 'fakeinbox.com', 'throwawaymail.com'
];

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzJzKRDquR6I_v4J3FmckEXduIEEM3neELOn-O3Yrg9bIFQv7hqv3burrtvFnTe71aK/exec';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastSubmissionTime, setLastSubmissionTime] = useState(null);

  // Check if user can submit again (1 hour cooldown)
  const canSubmit = !lastSubmissionTime || 
                   (Date.now() - lastSubmissionTime) > 3600000; // 1 hour in ms

  useEffect(() => {
    // Check localStorage for last submission time
    const savedTime = localStorage.getItem('lastContactFormSubmission');
    if (savedTime) {
      setLastSubmissionTime(parseInt(savedTime));
    }
  }, []);

  const validateEmail = (email) => {
    // Basic email regex
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!re.test(email)) {
      return 'Please enter a valid email address';
    }
    
    // Check for disposable emails
    const domain = email.split('@')[1];
    if (DISPOSABLE_EMAIL_DOMAINS.includes(domain)) {
      return 'Disposable email addresses are not allowed';
    }
    
    return '';
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    const emailError = validateEmail(formData.email);
    if (emailError) {
      newErrors.email = emailError;
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!canSubmit) {
      setErrors({
        form: `Please wait before submitting again. You can submit again in 
               ${Math.ceil((3600000 - (Date.now() - lastSubmissionTime)) / 60000)} minutes.`
      });
      return;
    }
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
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
          subject: '',
          message: ''
        });
        
        // Set submission time in state and localStorage
        const now = Date.now();
        setLastSubmissionTime(now);
        localStorage.setItem('lastContactFormSubmission', now.toString());
        
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setErrors({
          form: 'There was an error submitting your form. Please try again later.'
        });
      }
    } catch (error) {
      setErrors({
        form: 'Network error. Please check your connection and try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Get in Touch
          </h1>
          <div className="mt-6 max-w-2xl mx-auto">
            <p className="text-xl text-gray-600">
              Have questions or want to discuss a project? Reach out—we're always happy to help.
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Contact Information */}
          <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
            <h2 className="text-3xl font-semibold text-gray-900 mb-8">Our Contact Info</h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-indigo-50 p-3 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                <a href="tel:+9779851135421" className="mt-1 text-blue-600 hover:text-blue-800 hover:underline">
                  +977 (98) 5113 5421
                </a>
                  <p className="mt-1 text-sm text-gray-500">Sun-Fri, 10am-5pm</p>
                </div>
              </div>

              <div className="flex items-start">
              <div className="flex-shrink-0 bg-indigo-50 p-3 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Email</h3>
                <a href="mailto:2015casuresh@gmail.com" className="mt-1 text-blue-600 hover:text-blue-800 hover:underline">
                  2015casuresh@gmail.com
                </a>
                <p className="mt-1 text-sm text-gray-500">Typically reply within 2-4 business days</p>
              </div>
            </div>
            
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-indigo-50 p-3 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Office</h3>
                  <a 
                    href="https://maps.app.goo.gl/StsAueTS1QknMu7x5" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-1 text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    Tinkune, Kathmandu, Nepal
                  </a>
                  <p className="mt-1 text-sm text-gray-500">Click address for directions</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-indigo-50 p-3 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Hours</h3>
                  <p className="mt-1 text-green-600">Sunday - Friday: 10:00 AM - 5:00 PM</p>
                  <p className="mt-1 text-red-600">Saturday : Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
            <h2 className="text-3xl font-semibold text-gray-900 mb-8">Send Us a Message</h2>
            
            {errors.form && (
              <div className="rounded-xl bg-red-50 p-4 mb-6 border border-red-100">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-red-800">
                      {errors.form}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {submitted ? (
              <div className="rounded-xl bg-green-50 p-4 mb-6 border border-green-100">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-green-800">
                      Thank you! Your message has been sent successfully.
                    </h3>
                    <p className="mt-1 text-sm text-green-700">
                      We'll get back to you within 2-4 business days.
                    </p>
                  </div>
                </div>
              </div>
            ) : null}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`pl-10 py-3 px-4 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border ${
                      errors.name ? 'border-red-300' : ''
                    }`}
                    placeholder="Suresh Sharma"
                  />
                </div>
                {errors.name && (
                  <p className="mt-2 text-sm text-red-600">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`pl-10 py-3 px-4 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border ${
                      errors.email ? 'border-red-300' : ''
                    }`}
                    placeholder="S.Suresh@Associates.CA"
                  />
                </div>
                {errors.email && (
                  <p className="mt-2 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`pl-10 py-3 px-4 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border ${
                      errors.subject ? 'border-red-300' : ''
                    }`}
                    placeholder="How can we help?"
                  />
                </div>
                {errors.subject && (
                  <p className="mt-2 text-sm text-red-600">{errors.subject}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message
                </label>
                <div className="relative">
                  <div className="absolute top-3 left-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={`pl-10 py-3 px-4 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border ${
                      errors.message ? 'border-red-300' : ''
                    }`}
                    placeholder="Tell us more about your needs..."
                  />
                </div>
                {errors.message && (
                  <p className="mt-2 text-sm text-red-600">{errors.message}</p>
                )}
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting || !canSubmit}
                  className={`w-full flex justify-center items-center py-3 px-6 border border-transparent rounded-lg shadow-sm text-base font-medium text-white ${
                    isSubmitting || !canSubmit ? 'bg-indigo-400' : 'bg-indigo-600 hover:bg-indigo-700'
                  } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      {canSubmit ? 'Send Message' : 'Please Wait'}
                    </>
                  )}
                </button>
                {!canSubmit && (
                  <p className="mt-2 text-sm text-gray-500 text-center">
                    You can submit again in {Math.ceil((3600000 - (Date.now() - lastSubmissionTime)) / 60000)} minutes
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;