import React, { useState, useEffect } from 'react';

const CTASection = () => {
  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [cooldown, setCooldown] = useState(null);

  // Disposable and test email domains list
  const invalidDomains = [
    'mailinator.com', 'tempmail.com', 'guerrillamail.com', 
    '10minutemail.com', 'throwawaymail.com', 'fakeinbox.com',
    'yopmail.com', 'trashmail.com', 'maildrop.cc', 'example.com'
  ];

  // Common test email patterns
  const testPatterns = [
    'test', 'demo', 'temp', 'fake', 'dummy', 
    'user', 'admin', 'no-reply', 'noreply'
  ];

  // Check cooldown timer from localStorage
  useEffect(() => {
    const lastSubmission = localStorage.getItem('lastEmailSubmission');
    if (lastSubmission) {
      const now = new Date().getTime();
      const diff = now - parseInt(lastSubmission, 10);
      const remaining = Math.max(0, 7200000 - diff); // 2 hours in ms
      
      if (remaining > 0) {
        setCooldown(remaining);
        const timer = setInterval(() => {
          setCooldown(prev => {
            if (prev <= 1000) {
              clearInterval(timer);
              localStorage.removeItem('lastEmailSubmission');
              return null;
            }
            return prev - 1000;
          });
        }, 1000);
        return () => clearInterval(timer);
      }
    }
  }, []);

  const validateEmail = (email) => {
    // Basic email format validation
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!re.test(email)) {
      return 'Please enter a valid email address';
    }
    
    const [localPart, domain] = email.split('@');
    
    // Check for disposable/test domains
    if (invalidDomains.includes(domain.toLowerCase())) {
      return 'Please use your professional email address';
    }
    
    // Check for test patterns in local part
    if (testPatterns.some(pattern => 
      localPart.toLowerCase().includes(pattern))) {
      return 'Please use your real email address';
    }
    
    // Check for common test domains
    if (domain.toLowerCase().includes('test') || 
        domain.toLowerCase().includes('example')) {
      return 'Test domains are not accepted';
    }
    
    return '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate email
    const validationError = validateEmail(email);
    if (validationError) {
      setError(validationError);
      return;
    }
    
    setIsLoading(true);
    setError('');
    
    try {
      // Send to Google Apps Script
      await fetch(
        'https://script.google.com/macros/s/AKfycbx_EpZLawq48T5aAC8nl3qy_NIlCs0zWaQyGtZotziClOyKlpR0oHcUMsAeb76xhdKu/exec', 
        {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: `email=${encodeURIComponent(email)}`
        }
      );
      
      // Set cooldown timer
      localStorage.setItem('lastEmailSubmission', new Date().getTime().toString());
      setCooldown(7200000); // 2 hours in milliseconds
      
      setIsSubmitted(true);
      setEmail('');
      
      // Start countdown timer
      const timer = setInterval(() => {
        setCooldown(prev => {
          if (prev <= 1000) {
            clearInterval(timer);
            localStorage.removeItem('lastEmailSubmission');
            return null;
          }
          return prev - 1000;
        });
      }, 1000);
      
      setTimeout(() => {
        setShowForm(false);
        setIsSubmitted(false);
      }, 3000);
    } catch (submitError) {
      console.error('Consultation request failed:', submitError);
      setError('Failed to submit. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const formatTime = (ms) => {
    const hours = Math.floor(ms / 3600000);
    const minutes = Math.floor((ms % 3600000) / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    
    return `${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <div className="bg-gradient-to-r from-blue-50/50 to-primary-light/40 py-20 px-6 sm:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">
          Connect With Us
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
          Ready to Transform Your Financial Health?
        </h2>
        <p className="mt-4 text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
          Get expert audit and advisory services tailored to your organizational needs.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="tel:+9779851135421"
            className="px-8 py-4 border border-transparent text-base font-bold rounded-lg text-white bg-primary hover:bg-primary-dark shadow-md hover:shadow-lg transition duration-200 ease-in-out cursor-pointer"
          >
            Call Us Now
          </a>
          
          <button
            onClick={() => {
              if (!cooldown) {
                setShowForm(!showForm);
                setError('');
              }
            }}
            className={`px-8 py-4 border border-transparent text-base font-bold rounded-lg transition duration-200 ease-in-out cursor-pointer ${
              showForm 
                ? 'bg-gray-800 text-white hover:bg-gray-900' 
                : cooldown
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'text-primary bg-primary-light hover:bg-blue-100'
            }`}
            disabled={!!cooldown}
          >
            {cooldown ? 'Try Again Later' : showForm ? 'Close Form' : 'Schedule Consultation'}
          </button>
        </div>

        {cooldown && (
          <div className="mt-4 text-sm text-gray-600 font-medium">
            You can only schedule once every 2 hours. Time remaining: {formatTime(cooldown)}
          </div>
        )}

        {showForm && (
          <form onSubmit={handleSubmit} className="mt-8 max-w-md mx-auto bg-white p-6 rounded-xl border border-gray-100 shadow-lg text-left">
            <div className="flex flex-col gap-3">
              <div>
                <label htmlFor="cta-email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Professional Email Address
                </label>
                <input
                  type="email"
                  id="cta-email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError('');
                  }}
                  placeholder="e.g., manager@yourcompany.com"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary-light focus:outline-none transition-all text-sm"
                  aria-invalid={!!error}
                  aria-describedby={error ? "cta-email-error" : undefined}
                />
                {error && (
                  <p id="cta-email-error" className="mt-2 text-xs font-semibold text-red-600 text-left flex items-center">
                    <span className="mr-1">⚠</span> {error}
                  </p>
                )}
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-3 px-4 rounded-lg text-sm font-bold text-white transition duration-200 ease-in-out cursor-pointer ${
                  isLoading
                    ? 'bg-primary-light text-primary cursor-not-allowed'
                    : 'bg-primary hover:bg-primary-dark shadow-sm'
                }`}
              >
                {isLoading ? 'Submitting Request...' : 'Request consultation'}
              </button>
            </div>
            {isSubmitted && (
              <div className="mt-4 p-3 bg-emerald-50 text-emerald-800 rounded-lg text-xs font-semibold text-center border border-emerald-100">
                ✓ Thank you! We will get back to you shortly.
              </div>
            )}
          </form>
        )}

        <div className="mt-8 flex items-center justify-center space-x-2 text-xs font-medium text-gray-500">
          <svg
            className="h-4.5 w-4.5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
              clipRule="evenodd"
            />
          </svg>
          <span>Support Hours: Sunday - Friday, 10:00 AM - 5:00 PM</span>
        </div>
      </div>
    </div>
  );
};

export default CTASection;