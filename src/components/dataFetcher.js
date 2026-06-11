// Local high-fidelity fallback dataset for offline/development resilience
const fallbackYears = ["2081/82", "2080/81", "2079/80"];

const fallbackData = {
  "2081/82": [
    { id: "client-a", name: "Client A", vatReturns: 25000, sales: 180000, purchases: 140000, status: "completed" },
    { id: "client-b", name: "Client B", vatReturns: 40000, sales: 290000, purchases: 250000, status: "pending" },
    { id: "client-c", name: "Client C", vatReturns: 20000, sales: 150000, purchases: 130000, status: "completed" },
    { id: "client-d", name: "Client D", vatReturns: 40000, sales: 330000, purchases: 290000, status: "pending" },
    { id: "client-e", name: "Client E", vatReturns: 55000, sales: 450000, purchases: 390000, status: "completed" },
    { id: "client-f", name: "Client F", vatReturns: 15000, sales: 100000, purchases: 80000, status: "completed" }
  ],
  "2080/81": [
    { id: "client-a", name: "Client A", vatReturns: 20000, sales: 170000, purchases: 130000, status: "completed" },
    { id: "client-b", name: "Client B", vatReturns: 35000, sales: 260000, purchases: 230000, status: "completed" },
    { id: "client-c", name: "Client C", vatReturns: 15000, sales: 140000, purchases: 120000, status: "completed" },
    { id: "client-d", name: "Client D", vatReturns: 40000, sales: 300000, purchases: 270000, status: "completed" }
  ],
  "2079/80": [
    { id: "client-a", name: "Client A", vatReturns: 20000, sales: 150000, purchases: 120000, status: "completed" },
    { id: "client-b", name: "Client B", vatReturns: 30000, sales: 240000, purchases: 210000, status: "completed" },
    { id: "client-c", name: "Client C", vatReturns: 15000, sales: 120000, purchases: 105000, status: "completed" }
  ]
};

/**
 * Fetches audit data for a specific fiscal year
 * @param {string} fiscalYear - Format "2081/82"
 */
export async function fetchAuditData(fiscalYear) {
  return new Promise((resolve) => {
    const callbackName = `jsonp_${Date.now()}`;
    const script = document.createElement('script');
    
    // Replace with your actual web app URL
    const WEB_APP_URL = `https://script.google.com/macros/s/AKfycbyDFKh8mM4aH1RU6IUk7T6BcXWtKxAPbMqohEfVBmVkkHunuZW5sWvfBlEiR1mT8kMd/exec?year=${encodeURIComponent(fiscalYear)}&callback=${callbackName}`;
    
    const getFallbackPayload = () => {
      const clients = fallbackData[fiscalYear] || fallbackData["2081/82"];
      return {
        clients,
        fiscalYear: fiscalYear,
        availableYears: fallbackYears
      };
    };

    // 4 second timeout trigger for fallback
    const timeoutId = setTimeout(() => {
      cleanUp();
      console.warn(`fetchAuditData for ${fiscalYear} timed out. Falling back to local mock data.`);
      resolve(getFallbackPayload());
    }, 4000);

    window[callbackName] = (response) => {
      clearTimeout(timeoutId);
      cleanUp();
      
      if (response.error || !response.success) {
        console.warn("Error fetching audit data, falling back:", response.error);
        resolve(getFallbackPayload());
        return;
      }

      // Map the data to your frontend structure with anonymization and masking
      const clients = response.data.map((item, index) => {
        const letter = String.fromCharCode(65 + (index % 26));
        const suffix = index >= 26 ? ` ${Math.floor(index / 26) + 1}` : "";
        const anonName = `Client ${letter}${suffix}`;

        // Obfuscate exact financial figures by rounding to the nearest 5,000
        const maskValue = (val) => Math.round(val / 5000) * 5000;

        return {
          id: `client-${index + 1}`,
          name: anonName,
          vatReturns: maskValue(parseFinancialValue(item.VAT_Returns)),
          sales: maskValue(parseFinancialValue(item.Sales)),
          purchases: maskValue(parseFinancialValue(item.Purchases)),
          status: (item.Status || 'unknown').toLowerCase().trim()
        };
      });

      resolve({
        clients,
        fiscalYear: response.fiscalYear || fiscalYear,
        availableYears: response.availableYears || fallbackYears
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
      clearTimeout(timeoutId);
      cleanUp();
      console.warn(`fetchAuditData for ${fiscalYear} network error. Falling back to local mock data.`);
      resolve(getFallbackPayload());
    };
    
    document.body.appendChild(script);
  });
}

/**
 * Fetches available fiscal years
 */
export async function fetchAvailableYears() {
  return new Promise((resolve) => {
    const callbackName = `jsonp_${Date.now()}_years`;
    const script = document.createElement('script');
    
    const WEB_APP_URL = `https://script.google.com/macros/s/AKfycbyDFKh8mM4aH1RU6IUk7T6BcXWtKxAPbMqohEfVBmVkkHunuZW5sWvfBlEiR1mT8kMd/exec?callback=${callbackName}`;
    
    // 4 second timeout trigger for fallback
    const timeoutId = setTimeout(() => {
      cleanUp();
      console.warn("fetchAvailableYears timed out. Falling back to local mock data.");
      resolve(fallbackYears);
    }, 4000);

    window[callbackName] = (response) => {
      clearTimeout(timeoutId);
      cleanUp();
      
      if (response.error) {
        console.warn("Error fetching years, falling back:", response.error);
        resolve(fallbackYears);
        return;
      }

      resolve(response.availableYears || fallbackYears);
    };

    const cleanUp = () => {
      delete window[callbackName];
      if (script.parentNode) {
        document.body.removeChild(script);
      }
    };

    script.src = WEB_APP_URL;
    script.onerror = () => {
      clearTimeout(timeoutId);
      cleanUp();
      console.warn("fetchAvailableYears network error. Falling back to local mock data.");
      resolve(fallbackYears);
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