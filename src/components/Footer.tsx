import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-max">
        <div className="text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2">CommuteTimely</h3>
            <p className="text-gray-400">
              Your commute, optimized.
            </p>
          </div>

          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="#" 
              className="text-gray-400 hover:text-white transition-colors duration-200"
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
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Twitter
            </a>
            <a 
              href="https://github.com/commutetimely" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              GitHub
            </a>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400">
              Built with ❤️ by the CommuteTimely team
            </p>
            <p className="text-sm text-gray-500 mt-2">
              © 2024 CommuteTimely. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 