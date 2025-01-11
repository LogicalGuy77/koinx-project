import { useState } from "react";
import { ChevronLeft, ChevronRight, Newspaper, TrendingUp } from "lucide-react";

const Sentiment = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const keyEvents = [
    {
      icon: <Newspaper className="text-white w-8 h-8" />,
      bgColor: "bg-blue-500",
      title:
        "Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.",
    },
    {
      icon: <TrendingUp className="text-white w-8 h-8" />,
      bgColor: "bg-green-500",
      title:
        "Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra in a adipiscing metus quis del.",
    },
    // Add more events as needed
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % keyEvents.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + keyEvents.length) % keyEvents.length);
  };

  return (
    <div className="bg-white rounded-lg p-6">
      {/* Sentiment Header */}
      <h2 className="text-xl font-semibold mb-6">Sentiment</h2>

      {/* Key Events Section */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <h3 className="text-base font-semibold">Key Events</h3>
          <div className="w-4 h-4 rounded-full bg-gray-100 flex items-center justify-center text-xs text-gray-500">
            i
          </div>
        </div>

        {/* Slider Container */}
        <div className="relative">
          <div className="flex overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {keyEvents.map((event, index) => (
                <div key={index} className="min-w-full flex gap-4">
                  <div className="flex-1 bg-blue-50 rounded-lg p-4">
                    <div className="flex gap-4 mb-2">
                      <div className={`${event.bgColor} rounded-full p-2`}>
                        {event.icon}
                      </div>
                      <p className="font-medium">{event.title}</p>
                    </div>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Analyst Estimates Section */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <h3 className="text-base font-semibold">Analyst Estimates</h3>
          <div className="w-4 h-4 rounded-full bg-gray-100 flex items-center justify-center text-xs text-gray-500">
            i
          </div>
        </div>

        <div className="flex items-center gap-8">
          <div className="w-32 h-32 rounded-full bg-green-50 flex items-center justify-center">
            <span className="text-3xl text-green-500">
              76<span className="text-lg">%</span>
            </span>
          </div>

          <div className="flex-1 space-y-4">
            {/* Buy */}
            <div className="flex items-center gap-4">
              <span className="w-8 text-gray-500">Buy</span>
              <div
                className="flex-1/2 h-2 bg-green-500 rounded"
                style={{ width: "76%" }}
              ></div>
              <span className="w-8 text-right text-gray-500">76%</span>
            </div>

            {/* Hold */}
            <div className="flex items-center gap-4">
              <span className="w-8 text-gray-500">Hold</span>
              <div
                className="flex-1/5 h-2 bg-gray-200 rounded"
                style={{ width: "8%" }}
              ></div>
              <span className="w-8 text-right text-gray-500">8%</span>
            </div>

            {/* Sell */}
            <div className="flex items-center gap-4">
              <span className="w-8 text-gray-500">Sell</span>
              <div
                className="flex-1/3 h-2 bg-red-500 rounded"
                style={{ width: "16%" }}
              ></div>
              <span className="w-8 text-right text-gray-500">16%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sentiment;
