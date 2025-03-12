# KoinX Frontend Project

A React-based cryptocurrency dashboard that displays real-time Bitcoin data, price trends, and market analysis.

## Technologies Used
- React + Vite
- Tailwind CSS for styling
- Axios for API calls
- React-responsive for mobile responsiveness
- TradingView Widget API
- CoinGecko API for crypto data
- Lucide React for icons

## Key Features
- Real-time Bitcoin price tracking
- Interactive TradingView chart
- Mobile responsive design
- Trending coins carousel
- Market sentiment analysis
- Tokenomics visualization
- Team information section

## Challenges Faced & Solutions

### 1. TradingView Widget Integration
- Challenge: Multiple widget instances loading on state changes
- Solution: Implemented cleanup function and unique script ID

### 2. API Rate Limiting
- Challenge: CoinGecko API rate limits
- Solution: Implemented error handling and loading states

### 3. Responsive Carousel
- Challenge: Smooth scrolling on mobile and desktop
- Solution: Custom scroll implementation with ref-based navigation

### 4. Component Architecture
- Challenge: Managing multiple complex components
- Solution: Modular component structure with clear separation of concerns

## Setup Instructions
1. Clone the repository
```bash
git clone https://github.com/LogicalGuy77/koinx-project.git
cd koinx-project
npm install
```
Add environment variables
```VITE_API_KEY=your_coingecko_api_key```

Run development server
```npm run dev```

src/
├── components/
│   ├── BitcoinComponent/
│   │   ├── BTCGraph.jsx
│   │   ├── BTCHeader.jsx
│   │   └── TradingViewWidget.jsx
│   ├── AboutCoin.jsx
│   ├── DetailsComponent.jsx
│   ├── Navbar.jsx
│   ├── Overview.jsx
│   ├── Sentiment.jsx
│   ├── Team.jsx
│   ├── Tokenomics.jsx
│   └── YouMayLike.jsx
└── App.jsx

#### Learning Outcomes
* Advanced React component patterns
* Real-time data integration
* Responsive design implementation
* API integration and error handling
* State management in complex UIs
#### Future Improvements
* Implement caching for API calls
* Add more cryptocurrency options
* Add dark mode support