import React, { useState, useEffect } from 'react';
import { fetchAuditData, fetchAvailableYears } from '../components/dataFetcher';

const Insights = () => {
  const [clients, setClients] = useState([]);
  const [metrics, setMetrics] = useState([]);
  const [availableYears, setAvailableYears] = useState([]);
  const [selectedFiscalYear, setSelectedFiscalYear] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const initializeData = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const years = await fetchAvailableYears();
        setAvailableYears(years);
        
        const defaultYear = years.length > 0 ? years[0] : '';
        setSelectedFiscalYear(defaultYear);
        
        if (defaultYear) {
          await loadYearData(defaultYear);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    initializeData();
  }, []);

  const loadYearData = async (fiscalYear) => {
    setLoading(true);
    setError(null);
    
    try {
      const { clients, fiscalYear: actualYear } = await fetchAuditData(fiscalYear);
      
      setSelectedFiscalYear(actualYear);
      setClients(clients);
      setMetrics(calculateMetrics(clients, actualYear));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const calculateMetrics = (clients, fiscalYear) => {
    const totalVat = clients.reduce((sum, client) => sum + client.vatReturns, 0);
    const totalSales = clients.reduce((sum, client) => sum + client.sales, 0);
    const totalPurchases = clients.reduce((sum, client) => sum + client.purchases, 0);
    const compliantClients = clients.filter(c => c.status === 'completed').length;
    
    return [
      {
        id: 1,
        title: 'Total VAT Filed',
        value: `Rs. ${totalVat.toLocaleString('en-NP')}`,
        icon: '📑',
        description: `Fiscal Year ${fiscalYear}`
      },
      {
        id: 2,
        title: 'Completion Rate',
        value: `${Math.round((compliantClients / clients.length) * 100)}%`,
        icon: '✅',
        description: `${compliantClients} of ${clients.length} clients`
      },
      {
        id: 3,
        title: 'Total Sales',
        value: `Rs. ${totalSales.toLocaleString('en-NP')}`,
        icon: '💰',
        description: 'Across all clients'
      },
      {
        id: 4,
        title: 'Total Purchases',
        value: `Rs. ${totalPurchases.toLocaleString('en-NP')}`,
        icon: '🛒',
        description: 'Across all clients'
      }
    ];
  };

  const handleYearChange = async (year) => {
    setSelectedFiscalYear(year);
    await loadYearData(year);
  };

  if (loading && !selectedFiscalYear) {
    return <div className="p-6 text-center">Loading initial data...</div>;
  }

  if (error) {
    return (
      <div className="p-6 text-center text-red-500">
        Error: {error}
        <button 
          onClick={() => window.location.reload()}
          className="ml-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <header className="mb-8">
        <div className="flex justify-between items-start flex-wrap gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">S. Suresh & Associates</h1>
            <p className="text-gray-600 mt-1">Chartered Accountants - Audit Insights</p>
          </div>
          
          <div className="flex items-center gap-4">
            {availableYears.length > 0 && (
              <select
                value={selectedFiscalYear}
                onChange={(e) => handleYearChange(e.target.value)}
                className="bg-white border border-gray-300 rounded-md px-3 py-2"
                disabled={loading}
              >
                {availableYears.map(year => (
                  <option key={year} value={year}>
                    Fiscal Year {year}
                  </option>
                ))}
              </select>
            )}
            
            {loading && (
              <span className="text-gray-500">Loading...</span>
            )}
          </div>
        </div>
      </header>

      {/* Metrics Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {metrics.map(metric => (
          <div key={metric.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">{metric.title}</p>
                <p className="mt-1 text-2xl font-semibold text-gray-800">{metric.value}</p>
              </div>
              <span className="text-2xl">{metric.icon}</span>
            </div>
            <p className="mt-2 text-xs text-gray-500">{metric.description}</p>
          </div>
        ))}
      </div>

      {/* Clients Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
        <div className="px-6 py-4 border-b border-gray-100">
          <h2 className="text-lg font-semibold text-gray-800">Client Details</h2>
          <p className="text-sm text-gray-500">Fiscal Year {selectedFiscalYear}</p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">VAT Returns</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sales</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purchases</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {clients.length > 0 ? (
                clients.map(client => (
                  <tr key={client.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{client.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Rs. {client.vatReturns.toLocaleString('en-NP')}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Rs. {client.sales.toLocaleString('en-NP')}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Rs. {client.purchases.toLocaleString('en-NP')}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        client.status === 'completed' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {client.status}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="px-6 py-4 text-center text-sm text-gray-500">
                    {loading ? 'Loading client data...' : 'No client data available for this fiscal year'}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Insights;