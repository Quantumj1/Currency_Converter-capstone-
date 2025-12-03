import { Globe, ArrowRight, Zap, TrendingUp, Shield } from 'lucide-react';

function LandingPage({ onGetStarted }) {

    return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <nav className="flex justify-between items-center mb-20">
          <div className="flex items-center gap-2">
            <Globe className="w-8 h-8 text-indigo-600" />
            <span className="text-xl text-gray-900">CurrencySwap</span>
          </div>
          <button
            onClick={onGetStarted}
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Launch App
          </button>
        </nav>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-32">
          <div>
            <h1 className="text-5xl text-gray-900 mb-6">
              Convert Currency <span className="text-indigo-600">Instantly</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Get real-time exchange rates for over 150 currencies worldwide. Fast, accurate, and easy to use.
            </p>
            <button
              onClick={onGetStarted}
              className="px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80"
              alt="Currency exchange"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-32">
          <h2 className="text-center text-3xl text-gray-900 mb-4">
            Why Choose CurrencySwap?
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Everything you need for quick and reliable currency conversion
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl text-gray-900 mb-3">Lightning Fast</h3>
              <p className="text-gray-600">
                Get instant conversions with our optimized calculation engine. No delays, no waiting.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl text-gray-900 mb-3">Real-Time Rates</h3>
              <p className="text-gray-600">
                Access up-to-date exchange rates from reliable financial data sources.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl text-gray-900 mb-3">150+ Currencies</h3>
              <p className="text-gray-600">
                Support for all major world currencies and many regional currencies too.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 text-center">
          <h2 className="text-3xl text-white mb-4">
            Ready to Start Converting?
          </h2>
          <p className="text-indigo-100 mb-8 text-lg">
            Join thousands of users who trust CurrencySwap for their conversion needs
          </p>
          <button
            onClick={onGetStarted}
            className="px-8 py-4 bg-white text-indigo-600 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Launch Converter
          </button>
        </div>
      </div>
    </div>
    );
}

export default LandingPage;