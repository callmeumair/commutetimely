import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-gray-800 py-8 lg:py-12">
      <div className="container-max">
        <div className="text-center">
          <div className="mb-6 fade-in">
            <h3 className="text-xl sm:text-2xl font-bold mb-2 gradient-text">CommuteTimely</h3>
            <p className="text-sm sm:text-base text-gray-400">
              Your commute, optimized.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 lg:space-x-8 mb-6 lg:mb-8 fade-in">
            <a 
              href="#" 
              className="text-sm sm:text-base text-gray-400 hover:text-white transition-all duration-300 ease-in-out hover:scale-110"
              onClick={(e) => {
                e.preventDefault();
                alert('Privacy Policy - Coming soon!');
              }}
            >
              Privacy Policy
            </a>
            <a 
              href="https://twitter.com/commutetimely" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm sm:text-base text-gray-400 hover:text-white transition-all duration-300 ease-in-out hover:scale-110"
            >
              Twitter
            </a>
            <a 
              href="https://github.com/commutetimely" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm sm:text-base text-gray-400 hover:text-white transition-all duration-300 ease-in-out hover:scale-110"
            >
              GitHub
            </a>
          </div>

          <div className="border-t border-gray-800 pt-6 lg:pt-8 fade-in">
            <p className="text-sm sm:text-base text-gray-400">
              Built with ❤️ by the CommuteTimely team
            </p>
            <p className="text-xs sm:text-sm text-gray-500 mt-2">
              © 2025 CommuteTimely. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 