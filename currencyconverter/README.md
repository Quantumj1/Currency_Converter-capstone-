# Currency Converter - Real-Time Currency Converter

A modern, responsive currency converter web application built with React and Vite. Get real-time exchange rates for over 150 currencies worldwide with an intuitive and fast user interface.

![Currency Converter Preview](https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80)

##  Features

- **Real-Time Exchange Rates**: Live currency conversion using reliable financial data sources
- **150+ Currencies Supported**: Comprehensive coverage of major world currencies and regional currencies
- **Lightning Fast**: Optimized calculation engine for instant conversions
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Currency Swap**: Easy one-click currency pair swapping
- **Quick Amount Selection**: Preset buttons for common amounts (100, 500, 1000, 5000)
- **Exchange Rate Display**: Shows current exchange rate and last update time
- **Error Handling**: Robust error handling with retry functionality
- **Modern UI**: Clean, professional interface with smooth animations

##  Tech Stack

- **Frontend**: React 18 with Hooks
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **HTTP Client**: Axios
- **State Management**: TanStack Query (React Query)
- **API**: CurrencyAPI (free tier)
- **Linting**: ESLint

##  Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd currencyconverter
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure API (Optional)**
   - The app uses ExchangeRate-API by default (free tier)
   - For production use, consider upgrading to a paid API plan
   - API configuration can be modified in `src/components/UserInput.jsx`

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   - Navigate to `http://localhost:5173`

##  Usage

### Basic Conversion
1. Enter the amount you want to convert
2. Select the source currency from the dropdown
3. Select the target currency from the dropdown
4. View the converted amount instantly

### Advanced Features
- **Swap Currencies**: Click the swap button (↔️) to reverse currency pair
- **Quick Amounts**: Use preset buttons for common amounts
- **Refresh Rates**: Click the refresh button to update exchange rates
- **Real-time Updates**: Rates are automatically updated when the page loads

##  API Configuration

The application uses ExchangeRate-API for real-time exchange rates. Configuration is located in `src/api/exchangeAPI.js`:

```javascript
const API_CONFIG = {
    enabled: true,
    url: 'https://api.currencyapi.com/v3/latest?apikey=cur_live_sz5m7BR4dg86NwHyIxq7Eaw3EFgrvSoRGJgFgwhk',
    apiKey: 'cur_live_sz5m7BR4dg86NwHyIxq7Eaw3EFgrvSoRGJgFgwhk', // Add your API key here if using paid tier
    baseCurrency: 'USD',
};
```

### API Options
- **Free Tier**: Limited to USD as base currency
- **Paid Tier**: Access to all base currencies and higher rate limits



- `VITE_EXCHANGE_URL`: The base URL for the currency API (defaults to the free tier URL if not set)
- `VITE_EXCHANGE_API_KEY`: Your CurrencyAPI key (optional for free tier, required for paid tier)

##  Project Structure

```
currencyconverter/
├── public/
│   └── vite.svg
├── src/
│   ├── api/
│   │   └── exchangeApi.js
│   ├── assets/
│   │   ├── currencylogo.png
│   │   └── react.svg
│   ├── components/
│   │   ├── LandingPage.jsx
│   │   └── UserInput.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

##  Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

##  Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

##  License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

##  Acknowledgments

- Exchange rates provided by [currencyapi.com](https://currencyapi.com/)
- Icons by [Lucide React](https://lucide.dev)
- UI inspiration from modern currency converter applications

##  Support

If you have any questions or issues, please open an issue on GitHub or me.

---

**Made with love using React & Vite**
