/**
 * Fetches audit data for a specific fiscal year
 * @param {string} fiscalYear - Format "2081/82"
 */
export async function fetchAuditData(fiscalYear) {
  return new Promise((resolve, reject) => {
    const callbackName = `jsonp_${Date.now()}`;
    const script = document.createElement('script');
    
    // Replace with your actual web app URL
    const WEB_APP_URL = `https://script.google.com/macros/s/AKfycbyDFKh8mM4aH1RU6IUk7T6BcXWtKxAPbMqohEfVBmVkkHunuZW5sWvfBlEiR1mT8kMd/exec?year=${encodeURIComponent(fiscalYear)}&callback=${callbackName}`;
    
    window[callbackName] = (response) => {
      cleanUp();
      
      if (response.error || !response.success) {
        reject(new Error(response.error || "Invalid data received"));
        return;
      }

      // Map the data to your frontend structure
      const clients = response.data.map(item => ({
        id: (item.Client || 'unknown').replace(/\s+/g, '-').toLowerCase(),
        name: item.Client || 'Unknown Client',
        vatReturns: parseFinancialValue(item.VAT_Returns),
        sales: parseFinancialValue(item.Sales),
        purchases: parseFinancialValue(item.Purchases),
        status: (item.Status || 'unknown').toLowerCase().trim()
      }));

      resolve({
        clients,
        fiscalYear: response.fiscalYear,
        availableYears: response.availableYears || []
      });
    };

    const cleanUp = () => {
      delete window[callbackName];
      if (script.parentNode) {
        document.body.removeChild(script);
      }
    };

    script.src = WEB_APP_URL;
    script.onerror = () => {
      cleanUp();
      reject(new Error('Network error: Failed to load data'));
    };
    
    document.body.appendChild(script);
  });
}

/**
 * Fetches available fiscal years
 */
export async function fetchAvailableYears() {
  return new Promise((resolve, reject) => {
    const callbackName = `jsonp_${Date.now()}_years`;
    const script = document.createElement('script');
    
    const WEB_APP_URL = `https://script.google.com/macros/s/AKfycbyDFKh8mM4aH1RU6IUk7T6BcXWtKxAPbMqohEfVBmVkkHunuZW5sWvfBlEiR1mT8kMd/exec?callback=${callbackName}`;
    
    window[callbackName] = (response) => {
      cleanUp();
      
      if (response.error) {
        reject(new Error(response.error));
        return;
      }

      resolve(response.availableYears || []);
    };

    const cleanUp = () => {
      delete window[callbackName];
      if (script.parentNode) {
        document.body.removeChild(script);
      }
    };

    script.src = WEB_APP_URL;
    script.onerror = () => {
      cleanUp();
      reject(new Error('Network error: Failed to load available years'));
    };
    
    document.body.appendChild(script);
  });
}

/**
 * Parses financial values (handles strings, numbers, and formatted numbers)
 */
function parseFinancialValue(value) {
  if (typeof value === 'number') return value;
  if (!value) return 0;
  
  // Handle currency strings like "$1,000.50"
  const numericValue = parseFloat(
    value.toString()
      .replace(/[^\d.-]/g, '')
  );
  
  return isNaN(numericValue) ? 0 : numericValue;
}