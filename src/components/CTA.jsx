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
        'https://script.google.com/macros/s/AKfycbwu_nfGT_kgGw87lICkuSaZUYJih6pBOyigVnriLDLv-vQ3NzNlnSLUbRxIn_3Km99v/exec', 
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
    } catch (err) {
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
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Ready to Transform Your Financial Health?
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Get expert audit and advisory services tailored to your business needs.
        </p>
        
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="tel:+9779851135421"
            className="px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition duration-150 ease-in-out"
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
            className={`px-6 py-3 border border-transparent text-base font-medium rounded-md transition duration-150 ease-in-out ${
              showForm 
                ? 'bg-indigo-800 text-white hover:bg-indigo-900' 
                : cooldown
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'text-indigo-700 bg-indigo-100 hover:bg-indigo-200'
            }`}
            disabled={!!cooldown}
          >
            {cooldown ? 'Try Again Later' : showForm ? 'Close Form' : 'Schedule Consultation'}
          </button>
        </div>

        {cooldown && (
          <div className="mt-4 text-sm text-gray-600">
            You can only schedule once every 2 hours. Time remaining: {formatTime(cooldown)}
          </div>
        )}

        {showForm && (
          <form onSubmit={handleSubmit} className="mt-6 max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError('');
                  }}
                  placeholder="Enter your professional email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                />
                {error && (
                  <p className="mt-1 text-sm text-red-600 text-left">{error}</p>
                )}
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className={`px-4 py-2 rounded-md transition duration-150 ease-in-out sm:mt-0 mt-2 ${
                  isLoading
                    ? 'bg-indigo-400 cursor-not-allowed'
                    : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                }`}
              >
                {isLoading ? 'Sending...' : 'Submit'}
              </button>
            </div>
            {isSubmitted && (
              <p className="mt-2 text-sm text-green-600">
                Thank you! We'll contact you shortly.
              </p>
            )}
          </form>
        )}

        <div className="mt-6 flex items-center justify-center space-x-2 text-sm text-gray-500">
          <svg
            className="h-5 w-5 text-gray-400"
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
          <span>Available Sunday-Friday, 10:00 AM - 5:00 PM</span>
        </div>
      </div>
    </div>
  );
};

export default CTASection;