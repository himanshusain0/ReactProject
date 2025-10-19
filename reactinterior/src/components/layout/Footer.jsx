import React from 'react';
import logo from '../../assets/logo/logo.jpg'

const Footer = () => {
  return (
    <footer className="px-6 pt-8 md:px-16 lg:px-36 w-full text-gray-300 bg-gray-800">
      <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500 pb-10">
        {/* Company Info */}
        <div className="md:max-w-96">
          <img 
            alt="Zeenat Interior" 
            className="h-11" 
            src={logo} 
          />
          <p className="mt-6 text-sm text-gray-300">
            Creating beautiful and functional interior spaces that reflect your personality and style. 
            We transform your vision into reality with expert craftsmanship and innovative designs.
          </p>
          {/* App Download Buttons */}
          <div className="flex items-center gap-2 mt-4">
            <img 
              src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/refs/heads/main/assets/appDownload/googlePlayBtnBlack.svg" 
              alt="google play" 
              className="h-10 w-auto border border-white rounded cursor-pointer hover:opacity-80 transition-opacity" 
            />
            <img 
              src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/refs/heads/main/assets/appDownload/appleStoreBtnBlack.svg" 
              alt="app store" 
              className="h-10 w-auto border border-white rounded cursor-pointer hover:opacity-80 transition-opacity" 
            />
          </div>
        </div>

        {/* Links and Contact Section */}
        <div className="flex-1 flex items-start md:justify-end gap-20 md:gap-40">
          {/* Quick Links */}
          <div>
            <h2 className="font-semibold mb-5 text-white">Company</h2>
            <ul className="text-sm space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-300 hover:text-white transition-colors duration-300">
                  About us
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Contact us
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Privacy policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="font-semibold mb-5 text-white">Get in touch</h2>
            <div className="text-sm space-y-2 text-gray-300">
              <p className="hover:text-white transition-colors duration-300 cursor-pointer">
                📞 +1-234-567-890
              </p>
              <p className="hover:text-white transition-colors duration-300 cursor-pointer">
                📧 contact@zeenatinterior.com
              </p>
              <p className="hover:text-white transition-colors duration-300 cursor-pointer">
                🏢 123 Design Street, Creative City
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="pt-4 text-center text-sm pb-5">
        <p className="text-gray-300">
          Copyright {new Date().getFullYear()} © <a href="/" className="text-white hover:text-gray-200 transition-colors">Zeenat Interior</a>. All Right Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;