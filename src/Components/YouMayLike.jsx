import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { ArrowLeft, ArrowRight } from "lucide-react";

const YouMayLike = () => {
  const [coins, setCoins] = useState([]);
  const [trendingCoins, setTrendingCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [likeScrollPosition, setLikeScrollPosition] = useState(0);
  const [trendScrollPosition, setTrendScrollPosition] = useState(0);
  const likeContainerRef = useRef(null);
  const trendContainerRef = useRef(null);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/search/trending"
        );
        const coinsData = response.data.coins.map((coin) => ({
          ...coin,
          priceChange: (Math.random() * 10 - 5).toFixed(2),
        }));

        // Sort by price change for trending section
        const sortedCoins = [...coinsData].sort(
          (a, b) => parseFloat(b.priceChange) - parseFloat(a.priceChange)
        );

        setCoins(coinsData);
        setTrendingCoins(
          sortedCoins.filter((coin) => parseFloat(coin.priceChange) > 0)
        );
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchCoins();
  }, []);

  const scroll = (direction, type) => {
    const container =
      type === "like" ? likeContainerRef.current : trendContainerRef.current;
    const position = type === "like" ? likeScrollPosition : trendScrollPosition;
    const setPosition =
      type === "like" ? setLikeScrollPosition : setTrendScrollPosition;

    if (!container) return;

    const scrollAmount = 300;
    const maxScroll = container.scrollWidth - container.clientWidth;

    if (direction === "left") {
      const newPosition = Math.max(position - scrollAmount, 0);
      setPosition(newPosition);
      container.scrollTo({ left: newPosition, behavior: "smooth" });
    } else {
      const newPosition = Math.min(position + scrollAmount, maxScroll);
      setPosition(newPosition);
      container.scrollTo({ left: newPosition, behavior: "smooth" });
    }
  };

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto p-4">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-48 mb-4"></div>
          <div className="flex gap-4">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="bg-gray-200 rounded-lg w-[300px] h-[160px]"
              ></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto p-4">
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          Error loading coins: {error}
        </div>
      </div>
    );
  }

  const CoinCard = ({ coin }) => (
    <div className="min-w-[300px] p-6 bg-white rounded-lg shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <img
          src={coin.item.small}
          alt={coin.item.name}
          className="w-8 h-8 rounded-full"
        />
        <span className="text-lg">{coin.item.symbol.toUpperCase()}</span>
        <span
          className={`${
            parseFloat(coin.priceChange) > 0 ? "text-green-500" : "text-red-500"
          }`}
        >
          {coin.priceChange}%
        </span>
      </div>
      <div className="font-bold text-lg mb-4">
        {coin.item.price_btc.toFixed(8)} BTC
      </div>
      <img
        src={coin.item.data.sparkline}
        alt="price graph"
        className="w-full h-24 object-contain"
      />
    </div>
  );

  return (
    <div className="relative max-w-7xl pt-10 pl-20">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">You May Also Like</h2>
        <div className="relative">
          <button
            onClick={() => scroll("left", "like")}
            className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div
            ref={likeContainerRef}
            className="flex overflow-x-auto gap-4 hide-scrollbar scroll-smooth"
          >
            {coins.map((coin, index) => (
              <CoinCard key={index} coin={coin} />
            ))}
          </div>
          <button
            onClick={() => scroll("right", "like")}
            className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50"
          >
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Trending Coins</h2>
        <div className="relative">
          <button
            onClick={() => scroll("left", "trend")}
            className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div
            ref={trendContainerRef}
            className="flex overflow-x-auto gap-4 hide-scrollbar scroll-smooth"
          >
            {trendingCoins.map((coin, index) => (
              <CoinCard key={index} coin={coin} />
            ))}
          </div>
          <button
            onClick={() => scroll("right", "trend")}
            className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50"
          >
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default YouMayLike;
