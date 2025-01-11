const Tokenomics = () => {
  const distributionData = [
    { label: "Crowdsale Investors", value: 80, color: "#007BFF" },
    { label: "Foundation", value: 20, color: "#FFA500" },
  ];

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h2 className="text-xl font-bold mb-4">Tokenomics</h2>

      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-4">Initial Distribution</h3>

        <div className="flex mb-6">
          <div className="relative w-48 h-48">
            {/* SVG Donut Chart */}
            <svg
              viewBox="0 0 100 100"
              className="transform -rotate-90 w-full h-full"
            >
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="#007BFF"
                strokeWidth="20"
                fill="none"
                strokeDasharray={`${80 * 2.51327} ${100 * 2.51327}`}
              />
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="#FFA500"
                strokeWidth="20"
                fill="none"
                strokeDasharray={`${20 * 2.51327} ${100 * 2.51327}`}
                strokeDashoffset={`${-80 * 2.51327}`}
              />
            </svg>
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-col gap-2">
          {distributionData.map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-sm text-gray-700">
                {item.label}: {item.value}%
              </span>
            </div>
          ))}
        </div>
      </div>

      <p className="text-gray-600 text-sm">
        Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare
        vestibulum nunc dignissim vel consequat. Leo etiam nectetur bibendum
        amet emet leo amet. At metus orci augue fusce eleifend lectus eu fusce
        adipiscing. Volutpat ultrices nibh sodales massa habitasse urna felis
        augue. Gravida aliquam fermentum augue eu. Imperdiet bibendum amet
        aliquam donec. Eget justo dui metus odio rutrum. Vel ipsum eget in at
        curabitur sem posuere facilisis vitae. Sed lorem sit mauris id eget arcu
        ut. Volutplate ipsum aliquet odio nisi eu ac risus.
      </p>
    </div>
  );
};

export default Tokenomics;
