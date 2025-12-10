import React, { useState, useEffect } from 'react';
import { Globe, ArrowRight, Zap, TrendingUp, Shield, Home, RefreshCw, AlertCircle, ArrowLeftRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

//API HERE

function UserInput() {
    //States
    const [amount, setAmount] = useState();
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('EUR');
    const [convertedAmount, setConvertedAmount] = useState();
    const [exchangeRates, setExchangeRates] = useState({});
    const [lastUpdated, setLastUpdated] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const navigate = useNavigate();
    const onBackToHome = () => {
    navigate('/');
  };





    // Common currency names
    const currencyNames = {
        USD: 'US Dollar',
        EUR: 'Euro',
        GBP: 'British Pound',
        JPY: 'Japanese Yen',
        AUD: 'Australian Dollar',
        CAD: 'Canadian Dollar',
        CHF: 'Swiss Franc',
        CNY: 'Chinese Yuan',
        INR: 'Indian Rupee',
        MXN: 'Mexican Peso',
        BRL: 'Brazilian Real',
        ZAR: 'South African Rand',
        KRW: 'South Korean Won',
        SGD: 'Singapore Dollar',
        NZD: 'New Zealand Dollar',
        SEK: 'Swedish Krona',
        NOK: 'Norwegian Krone',
        DKK: 'Danish Krone',
        PLN: 'Polish Zloty',
        THB: 'Thai Baht',
        RUB: 'Russian Ruble',
        HKD: 'Hong Kong Dollar',
        TRY: 'Turkish Lira',
        IDR: 'Indonesian Rupiah',
        MYR: 'Malaysian Ringgit',
        PHP: 'Philippine Peso',
        VND: 'Vietnamese Dong',
    };
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <nav className="flex justify-between items-center mb-12">
          <div className="flex items-center gap-2">
            <Globe className="w-8 h-8 text-indigo-600" />
            <span className="text-xl text-gray-900">CurrencySwap</span>
          </div>
          <button
            onClick={onBackToHome}
            className="px-4 py-2 text-gray-700 hover:text-indigo-600 transition-colors flex items-center gap-2"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </button>
        </nav>

        {/* Converter Card */}
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl text-gray-900">
              Currency Converter
            </h1>
            <button
              onClick={fetchExchangeRates}
              disabled={loading}
              className="flex items-center gap-2 px-4 py-2 text-indigo-600 hover:text-indigo-700 transition-colors disabled:opacity-50"
              title="Refresh rates"
            >
              <RefreshCw className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} />
              Refresh
            </button>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-red-800">{error}</p>
                <button
                  onClick={fetchExchangeRates}
                  className="text-red-600 hover:text-red-700 underline mt-2"
                >
                  Try again
                </button>
              </div>
            </div>
          )}

          {/* Loading State */}
          {loading && !error && (
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
              <div className="flex justify-center mb-4">
                <RefreshCw className="w-8 h-8 text-indigo-600 animate-spin" />
              </div>
              <p className="text-gray-600">Loading exchange rates...</p>
            </div>
          )}

          {/* Converter Form */}
          {!loading && (
            <div className="bg-white rounded-2xl shadow-xl p-8">
              {/* API Status Badge */}
              {!API_CONFIG.enabled && (
                <div className="mb-4 bg-yellow-50 border border-yellow-200 rounded-lg p-3 text-center">
                  <p className="text-yellow-800">
                    Using demo data. To use live rates, configure your API in ConverterPage.tsx
                  </p>
                </div>
              )}

              {/* From Currency */}
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">From</label>
                <div className="flex gap-4">
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Enter amount"
                  />
                  <select
                    value={fromCurrency}
                    onChange={(e) => setFromCurrency(e.target.value)}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                  >
                    {currencies.map((currency) => (
                      <option key={currency} value={currency}>
                        {currency} {currencyNames[currency] ? `- ${currencyNames[currency]}` : ''}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Swap Button */}
              <div className="flex justify-center mb-6">
                <button
                  onClick={handleSwapCurrencies}
                  className="p-3 bg-indigo-100 hover:bg-indigo-200 rounded-full transition-colors"
                >
                  <ArrowLeftRight className="w-6 h-6 text-indigo-600" />
                </button>
              </div>

              {/* To Currency */}
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">To</label>
                <div className="flex gap-4">
                  <input
                    type="text"
                    value={convertedAmount.toFixed(2)}
                    readOnly
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg bg-gray-50"
                  />
                  <select
                    value={toCurrency}
                    onChange={(e) => setToCurrency(e.target.value)}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                  >
                    {currencies.map((currency) => (
                      <option key={currency} value={currency}>
                        {currency} {currencyNames[currency] ? `- ${currencyNames[currency]}` : ''}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Exchange Rate Info */}
              <div className="bg-indigo-50 rounded-lg p-4 text-center">
                <p className="text-gray-700">
                  1 {fromCurrency} = {rate} {toCurrency}
                </p>
                {lastUpdated && (
                  <p className="text-gray-500">
                    Last updated: {lastUpdated.toLocaleTimeString()}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Quick Convert Options */}
          {!loading && !error && (
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[100, 500, 1000, 5000].map((value) => (
                <button
                  key={value}
                  onClick={() => setAmount(value.toString())}
                  className="px-4 py-3 bg-white rounded-lg shadow hover:shadow-md transition-shadow text-gray-700 hover:text-indigo-600"
                >
                  {value}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 

export default UserInput;