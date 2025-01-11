import { useMediaQuery } from "react-responsive";
import { useState } from "react";

const Navbar = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const DesktopNav = () => (
    <ul className="hidden md:flex space-x-8 text-gray-700 font-semibold font-sans">
      <li>
        <a
          href="#home"
          className="hover:text-blue-800 transition-colors duration-200"
        >
          Crypto Taxes
        </a>
      </li>
      <li>
        <a
          href="#about"
          className="hover:text-blue-800 transition-colors duration-200"
        >
          Free Tools
        </a>
      </li>
      <li>
        <a
          href="#services"
          className="hover:text-blue-800 transition-colors duration-200"
        >
          Resource Center
        </a>
      </li>
      <li>
        <a
          href="https://app.koinx.com/get-started"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-[#2870EA] via-[#1B4AEF] to-[#1B4AEF] 
              text-white font-bold py-2 px-6 rounded-lg 
              shadow-md hover:opacity-90 transition-opacity duration-300"
        >
          Get Started
        </a>
      </li>
    </ul>
  );

  const MobileNav = () => (
    <div className="md:hidden">
      <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {isMenuOpen && (
        <div
          className="absolute top-full right-0 w-52 mt-2 mr-4 bg-white rounded-lg shadow-lg z-50 
    transform transition-transform duration-200 ease-in-out"
        >
          <ul className="flex flex-col p-4 space-y-4 text-right">
            <li className="px-4">
              <a
                href="#home"
                className="hover:text-blue-800 transition-colors duration-200"
              >
                Crypto Taxes
              </a>
            </li>
            <li className="px-4">
              <a
                href="#about"
                className="hover:text-blue-800 transition-colors duration-200"
              >
                Free Tools
              </a>
            </li>
            <li className="px-4">
              <a
                href="#services"
                className="hover:text-blue-800 transition-colors duration-200"
              >
                Resource Center
              </a>
            </li>
            <li className="px-4">
              <a
                href="https://app.koinx.com/get-started"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#2870EA] via-[#1B4AEF] to-[#1B4AEF] 
              text-white font-bold py-2 px-6 rounded-lg inline-block"
              >
                Get Started
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );

  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <a href="/" className="flex items-center">
          <img src="/KoinXLogo.png" alt="KoinX Logo" className="h-8" />
        </a>

        {isMobile ? (
          <MobileNav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        ) : (
          <DesktopNav />
        )}
      </nav>
    </header>
  );
};

export default Navbar;
