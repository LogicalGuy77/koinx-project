import { useEffect, useState } from "react";
import axios from "axios";

function TrendingCoins() {
  const [trendingCoins, setTrendingCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch trending coins from CoinGecko API
    const fetchTrendingCoins = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/search/trending"
        );
        const coins = response.data.coins;

        // Mock percentage changes (replace this with actual data if available)
        const coinsWithMockChanges = coins.map((coin) => ({
          ...coin,
          percentageChange: Math.random() * 10 + 1, // Replace with actual change percentage if available
        }));

        // Sort by highest percentage change
        const sortedCoins = coinsWithMockChanges
          .sort((a, b) => b.percentageChange - a.percentageChange)
          .slice(0, 3); // Get top 3 trending coins

        setTrendingCoins(sortedCoins);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching trending coins:", error);
        setLoading(false);
      }
    };

    fetchTrendingCoins();
  }, []);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-full">
      <h2 className="font-semibold text-lg mb-4">Trending Coins (24h)</h2>
      <ul className="space-y-3">
        {trendingCoins.map((coin, index) => (
          <li key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img
                src={coin.item.small}
                alt={coin.item.name}
                className="h-6 w-6 rounded-full"
              />
              <span className="font-medium">
                {coin.item.name} ({coin.item.symbol.toUpperCase()})
              </span>
            </div>
            <span className="text-green-600 font-medium">
              {coin.percentageChange.toFixed(2)}%
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TrendingCoins;
