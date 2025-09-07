import React from 'react';
import { DarkLogo, FooterLogo } from './icons';

const Footer = () => {
  return (
    <footer className=" text-white pt-12 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center mb-6">
          <DarkLogo/>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
          <div className="flex flex-col lg:flex-col lg:space-x-16 mb-8 lg:mb-0 gap-10">
            <div className="flex flex-col sm:flex-row sm:space-x-12 lg:space-x-16">
              <div className="flex flex-col space-y-3 mb-6 sm:mb-0">
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Home
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                  About us
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Support
                </a>
              </div>
              <div className="flex flex-col space-y-3">
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Contact
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                  FAQ
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Explore
                </a>
              </div>
            </div>
            <div className="mb-8 lg:mb-0">
              <p className="text-gray-300 flex items-center">
                Curated with <span className="text-red-500 mx-1">❤</span> by team Ecomint
              </p>
            </div>
          </div>

          <div className='flex flex-col gap-4'>
            <div className="bg-gray-200 rounded-3xl p-6 shadow-lg border border-gray-100">
              <div className="text-black mb-4">
                <span className="text-xl font-semibold">Get started</span>
              </div>
              <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center shadow-md">
                Explore Now
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
            <div className="text-right">
              <p className="text-gray-400 text-sm">
                © 2025 BlueMint. All rights reserved.
              </p>
            </div>          
          </div>
        </div>
        

        <div className="mb-0 mx-2">
          <FooterLogo/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
