import { useState, useEffect } from "react";
import axios from "axios";

const BTCHeader = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_KEY = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url =
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr,usd&include_24hr_change=true";

        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
          },
        });

        setData(response.data.bitcoin); // Extract Bitcoin data
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch data. Please try again later.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-4 max-w-lg bg-white ">
      {/* Bitcoin Info Header */}
      <div className="flex items-center space-x-4">
        <img
          src="https://cryptologos.cc/logos/bitcoin-btc-logo.png" // Replace with a CDN logo if needed
          alt="Bitcoin Logo"
          className="w-12 h-12"
        />
        <div>
          <h1 className="text-xl font-bold">Bitcoin</h1>
          <span className="text-gray-500 text-sm">BTC</span>
        </div>
        <span className="ml-auto px-3 py-1 text-sm bg-[#808A9D] text-white rounded-lg">
          Rank #1
        </span>
      </div>

      {/* Price Details */}
      <div className="flex">
        <div className="mt-4">
          <p className="text-3xl font-bold">${data.usd.toLocaleString()}</p>
          <p className="text-gray-500 text-lg">₹{data.inr.toLocaleString()}</p>
        </div>
        <div className="ml-10 mt-5">
          <div className="mt-2 flex items-center">
            <span
              className={`inline-block px-2 py-1 ml-2 rounded ${
                data.usd_24h_change > 0
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {data.usd_24h_change.toFixed(2)}%
            </span>
            <span className="text-gray-400 text-base ml-2">(24H)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BTCHeader;
