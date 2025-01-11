const AboutCoin = () => {
  const stats = {
    price: "US$16,951.82",
    volume: "$19.14 B",
    change24h: "+0.36%",
    sevenDayHigh: "$18,366.66",
    sevenDayLow: "$16,394.75",
    circulatingSupply: "19.24 M BTC",
    maxSupply: "21 M BTC",
  };

  return (
    <div className="max-w-4xl p-4 space-y-8">
      <section className="space-y-4">
        <h1 className="text-2xl font-bold">About Bitcoin</h1>

        <div className="space-y-2">
          <h2 className="text-xl font-semibold">What is Bitcoin?</h2>
          <p className="text-gray-700">
            Bitcoin's price today is {stats.price}, with a 24-hour trading
            volume of {stats.volume}. BTC is {stats.change24h} in the last 24
            hours. It is currently -7.70% from its 7-day all-time high of{" "}
            {stats.sevenDayHigh}, and 3.40% from its 7-day all-time low of{" "}
            {stats.sevenDayLow}. BTC has a circulating supply of{" "}
            {stats.circulatingSupply} and a max supply of {stats.maxSupply}.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Lorem ipsum dolor sit amet</h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit
            lobortis tristique pharetra. Diam id et lectus urna et tellus
            aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut
            sed. Quam scelerisque fermentum sapien morbi sodales odio sed
            rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut sed.
            Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.
          </p>
          <p className="text-gray-700">
            Diam praesent massa dapibus magna aliquam a dictumst volutpat.
            Egestas vitae pellentesque auctor amet. Nunc sagittis libero
            adipiscing cursus felis pellentesque interdum. Odio cursus phasellus
            velit in senectus enim dui. Turpis tristique placerat interdum sed
            volutpat. Id imperdiet magna eget eros donec cursus nunc. Mauris
            faucibus diam mi nunc praesent massa turpis a. Integer dignissim
            augue viverra nulla et quis lobortis phasellus. Integer pellentesque
            enim convallis ultricies at.
          </p>
          <p className="text-gray-700">
            Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
            massa vel convallis duis ac. Mi adipiscing semper scelerisque
            porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia
            congue ipsum fames amet dui. Purus ultricies tincidunt volutpat in
            eget. Ullamcorper dui
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Already Holding Bitcoin?</h2>

        <div className="grid md:grid-cols-2 gap-4">
          {/* Calculator Card 1 */}
          <div className="rounded-lg overflow-hidden shadow-lg bg-gradient-to-r from-emerald-400 to-blue-500">
            <div className="p-4 flex items-center gap-8">
              <div className="h-32 w-32 relative">
                <img
                  src="/profit.png"
                  alt="Trading chart"
                  className="object-cover rounded w-full h-full"
                />
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-lg font-semibold text-white">
                  Calculate your Profits
                </h3>
                <a
                  href="https://app.koinx.com/calculate-profits"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-100 transition-colors duration-200 text-center"
                >
                  Check Now →
                </a>
              </div>
            </div>
          </div>

          {/* Calculator Card 2 */}
          <div className="rounded-lg overflow-hidden shadow-lg bg-gradient-to-r from-orange-400 to-red-500">
            <div className="p-4 flex items-center gap-8">
              <div className="h-32 w-32 relative">
                <img
                  src="/tax.png"
                  alt="Tax calculator"
                  className="object-cover rounded w-full h-full"
                />
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-lg font-semibold text-white">
                  Calculate your tax liability
                </h3>
                <a
                  href="https://app.koinx.com/calculate-tax"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-100 transition-colors duration-200 text-center"
                >
                  Check Now →
                </a>
              </div>
            </div>
          </div>
        </div>

        <p className="text-gray-700">
          Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
          massa vel convallis duis ac. Mi adipiscing semper scelerisque
          porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia
          congue ipsum fames amet dui. Purus ultricies tincidunt volutpat in
          eget. Ullamcorper dui
        </p>
      </section>
    </div>
  );
};

export default AboutCoin;
