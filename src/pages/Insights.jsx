import React, { useState, useEffect, useCallback } from 'react';
import { fetchAuditData, fetchAvailableYears } from '../components/dataFetcher';

const Insights = () => {
  const [clients, setClients] = useState([]);
  const [metrics, setMetrics] = useState([]);
  const [availableYears, setAvailableYears] = useState([]);
  const [selectedFiscalYear, setSelectedFiscalYear] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Search and filter states
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const loadYearData = useCallback(async (fiscalYear) => {
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
  }, []);

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
  }, [loadYearData]);

  const calculateMetrics = (clients, fiscalYear) => {
    const totalVat = clients.reduce((sum, client) => sum + client.vatReturns, 0);
    const totalSales = clients.reduce((sum, client) => sum + client.sales, 0);
    const totalPurchases = clients.reduce((sum, client) => sum + client.purchases, 0);
    const compliantClients = clients.filter(c => c.status === 'completed' || c.status === 'filed' || c.status === 'success').length;
    
    const rate = clients.length > 0 ? Math.round((compliantClients / clients.length) * 100) : 0;

    return [
      {
        id: 1,
        title: 'Total VAT Filed',
        value: `Rs. ${totalVat.toLocaleString('en-NP')}`,
        icon: (
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        ),
        description: `Fiscal Year ${fiscalYear}`,
        type: 'vat'
      },
      {
        id: 2,
        title: 'Completion Rate',
        value: `${rate}%`,
        icon: (
          <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
        description: `${compliantClients} of ${clients.length} completed`,
        type: 'completion',
        rateValue: rate
      },
      {
        id: 3,
        title: 'Total Sales Audited',
        value: `Rs. ${totalSales.toLocaleString('en-NP')}`,
        icon: (
          <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
        description: 'Cumulative client revenues',
        type: 'sales'
      },
      {
        id: 4,
        title: 'Total Purchases Audited',
        value: `Rs. ${totalPurchases.toLocaleString('en-NP')}`,
        icon: (
          <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        ),
        description: 'Cumulative transactions verified',
        type: 'purchases'
      }
    ];
  };

  const handleYearChange = async (year) => {
    setSelectedFiscalYear(year);
    await loadYearData(year);
  };

  // Filter clients locally
  const filteredClients = clients.filter(client => {
    const matchesSearch = client.name.toLowerCase().includes(searchTerm.toLowerCase());
    const isCompleted = client.status === 'completed' || client.status === 'filed' || client.status === 'success';
    
    if (statusFilter === 'completed') {
      return matchesSearch && isCompleted;
    } else if (statusFilter === 'pending') {
      return matchesSearch && !isCompleted;
    }
    return matchesSearch;
  });

  if (loading && !selectedFiscalYear) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] bg-gray-50">
        <svg className="animate-spin h-10 w-10 text-blue-600 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <span className="text-gray-500 font-medium text-sm">Synchronizing Client Portal...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-md mx-auto mt-20 p-8 bg-white border border-red-100 rounded-2xl shadow-xl text-center">
        <span className="text-4xl block mb-4">⚠</span>
        <h3 className="text-lg font-bold text-gray-800">Connection Failed</h3>
        <p className="text-gray-500 text-sm mt-2 leading-relaxed">
          {error || 'Unable to fetch audit records from Inland Revenue macro.'}
        </p>
        <button 
          onClick={() => window.location.reload()}
          className="mt-6 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-md transition-all cursor-pointer"
        >
          Retry Connection
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 md:p-8 bg-neutral-light min-h-screen">
      <header className="mb-10 bg-white p-6 rounded-2xl border border-gray-100 shadow-xs">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">
              Portal Overview
            </span>
            <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 mt-1">Audit Insights Dashboard</h1>
            <p className="text-gray-500 text-sm mt-1">S. Suresh & Associates — Client Compliance Directory</p>
          </div>
          
          <div className="flex items-center gap-3 w-full sm:w-auto">
            {availableYears.length > 0 && (
              <div className="relative w-full sm:w-auto">
                <select
                  value={selectedFiscalYear}
                  onChange={(e) => handleYearChange(e.target.value)}
                  className="bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm font-bold text-gray-700 shadow-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none w-full cursor-pointer"
                  disabled={loading}
                >
                  {availableYears.map(year => (
                    <option key={year} value={year}>
                      Fiscal Year {year}
                    </option>
                  ))}
                </select>
              </div>
            )}
            
            {loading && (
              <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1.5 rounded-lg animate-pulse flex-shrink-0">
                Updating...
              </span>
            )}
          </div>
        </div>
      </header>

      {/* Metrics Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {metrics.map(metric => {
          if (metric.type === 'completion') {
            // Visual circle meter representation
            const radius = 28;
            const stroke = 5;
            const normalizedRadius = radius - stroke * 2;
            const circumference = normalizedRadius * 2 * Math.PI;
            const strokeDashoffset = circumference - (metric.rateValue / 100) * circumference;

            return (
              <div key={metric.id} className="bg-white p-6 rounded-2xl shadow-xs border border-gray-100 flex items-center justify-between">
                <div className="flex-grow">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">{metric.title}</p>
                  <p className="mt-1 text-2xl font-extrabold text-gray-900">{metric.value}</p>
                  <p className="mt-2 text-xs font-semibold text-gray-500">{metric.description}</p>
                </div>
                <div className="relative flex items-center justify-center flex-shrink-0 ml-4">
                  <svg className="w-16 h-16 transform -rotate-90">
                    <circle
                      className="text-gray-100"
                      strokeWidth={stroke}
                      stroke="currentColor"
                      fill="transparent"
                      r={normalizedRadius}
                      cx={radius}
                      cy={radius}
                    />
                    <circle
                      className="text-emerald-500 transition-all duration-500"
                      strokeWidth={stroke}
                      strokeDasharray={circumference + ' ' + circumference}
                      style={{ strokeDashoffset }}
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="transparent"
                      r={normalizedRadius}
                      cx={radius}
                      cy={radius}
                    />
                  </svg>
                  <span className="absolute text-[10px] font-bold text-emerald-600">{metric.rateValue}%</span>
                </div>
              </div>
            );
          }

          return (
            <div key={metric.id} className="bg-white p-6 rounded-2xl shadow-xs border border-gray-100 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">{metric.title}</p>
                <p className="mt-1 text-2xl font-extrabold text-gray-900 leading-tight">{metric.value}</p>
                <p className="mt-2 text-xs font-semibold text-gray-500">{metric.description}</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-xl flex-shrink-0 ml-4">
                {metric.icon}
              </div>
            </div>
          );
        })}
      </div>

      {/* Clients Table Box */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
        <div className="px-6 py-5 border-b border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white">
          <div>
            <h2 className="text-lg font-bold text-gray-800">Client Compliance Registry</h2>
            <p className="text-xs text-gray-400 mt-0.5">Tax Filing Registry for Fiscal Year {selectedFiscalYear}</p>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            {/* Search Input */}
            <div className="relative w-full sm:w-64">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search clients..."
                className="w-full bg-gray-50 border border-gray-200 rounded-lg pl-9 pr-4 py-2 text-xs focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all"
              />
              <span className="absolute left-3 top-2.5 text-gray-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </span>
            </div>

            {/* Status Select */}
            <div className="relative w-full sm:w-auto">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full sm:w-auto bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-xs font-bold text-gray-700 focus:bg-white focus:border-primary focus:outline-none cursor-pointer"
              >
                <option value="all">All Status</option>
                <option value="completed">Completed / Filed</option>
                <option value="pending">Pending Audit</option>
              </select>
            </div>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-100">
            <thead className="bg-gray-50/75">
              <tr>
                <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Client Name</th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">VAT Returns</th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Sales Revenue</th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Purchases Audited</th>
                <th scope="col" className="px-6 py-4 scope text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Compliance Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100 text-sm">
              {filteredClients.length > 0 ? (
                filteredClients.map(client => {
                  const isCompleted = client.status === 'completed' || client.status === 'filed' || client.status === 'success';
                  
                  return (
                    <tr key={client.id} className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap font-bold text-gray-800">{client.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-600 font-medium">Rs. {client.vatReturns.toLocaleString('en-NP')}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-600 font-medium">Rs. {client.sales.toLocaleString('en-NP')}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-600 font-medium">Rs. {client.purchases.toLocaleString('en-NP')}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border ${
                          isCompleted
                            ? 'bg-emerald-50 text-emerald-700 border-emerald-200' 
                            : 'bg-amber-50 text-amber-700 border-amber-200 animate-pulse-subtle'
                        }`}>
                          <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${isCompleted ? 'bg-emerald-500' : 'bg-amber-500'}`}></span>
                          {isCompleted ? 'Completed' : 'Pending Audit'}
                        </span>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan="5" className="px-6 py-8 text-center text-sm text-gray-400 font-medium">
                    {loading ? 'Refreshing client data...' : 'No client records found matching search filters.'}
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