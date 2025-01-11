const Overview = () => {
  const GradientBar = ({ value, min, max }) => {
    const percentage = ((value - min) / (max - min)) * 100;

    return (
      <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-red-500 via-yellow-400 to-green-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
    );
  };

  const InfoRow = ({ label, value, additionalValue, className = "" }) => (
    <div className={`flex justify-between py-3 ${className}`}>
      <span className="text-gray-500">{label}</span>
      <div className="flex items-center gap-1">
        <span className="text-gray-900">{value}</span>
        {additionalValue && (
          <span
            className={`${
              additionalValue.includes("-") ? "text-red-500" : "text-green-500"
            }`}
          >
            {additionalValue}
          </span>
        )}
      </div>
    </div>
  );

  return (
    <div className="space-y-4">
      {/* Performance Section */}
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-6">Performance</h2>

        <div className="space-y-6">
          {/* Today's Range */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-600">
              <span>Today's Low</span>
              <span>Today's High</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-900">46,930.22</span>
              <div className="flex-grow">
                <GradientBar value={48637.83} min={46930.22} max={49343.83} />
              </div>
              <span className="text-gray-900">49,343.83</span>
            </div>
            <div className="flex justify-center text-sm text-gray-600">
              <span>$48,637.83</span>
            </div>
          </div>

          {/* 52W Range */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-600">
              <span>52W Low</span>
              <span>52W High</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-900">16,930.22</span>
              <div className="flex-grow">
                <GradientBar value={48637.83} min={16930.22} max={49743.83} />
              </div>
              <span className="text-gray-900">49,743.83</span>
            </div>
          </div>
        </div>
      </div>

      {/* Fundamentals Section */}
      <div className="bg-white rounded-lg p-6">
        <div className="flex items-center gap-2 mb-6">
          <h2 className="text-xl font-semibold">Fundamentals</h2>
          <div className="w-4 h-4 rounded-full bg-gray-100 flex items-center justify-center text-xs text-gray-500">
            i
          </div>
        </div>

        <div className="flex">
          {/* Left Column */}
          <div className="flex-1 border-r border-gray-200 pr-8">
            <InfoRow
              label="Bitcoin Price"
              value="$16,815.46"
              className="border-b border-gray-200"
            />
            <InfoRow
              label="24h Low / 24h High"
              value="$16,382.07 / $16,874.12"
              className="border-b border-gray-200"
            />
            <InfoRow
              label="7d Low / 7d High"
              value="$16,382.07 / $16,874.12"
              className="border-b border-gray-200"
            />
            <InfoRow
              label="Trading Volume"
              value="$23,249,202,782"
              className="border-b border-gray-200"
            />
            <InfoRow label="Market Cap Rank" value="#1" />
          </div>

          {/* Right Column */}
          <div className="flex-1 pl-8">
            <InfoRow
              label="Market Cap"
              value="$323,507,290,047"
              className="border-b border-gray-200"
            />
            <InfoRow
              label="Market Cap Dominance"
              value="38.343%"
              className="border-b border-gray-200"
            />
            <InfoRow
              label="Volume / Market Cap"
              value="0.0718"
              className="border-b border-gray-200"
            />
            <InfoRow
              label="All-Time High"
              value="$69,044.77"
              additionalValue="-75.6%"
              className="border-b border-gray-200"
            />
            <InfoRow
              label="All-Time Low"
              value="$67.81"
              additionalValue="24729.1%"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
