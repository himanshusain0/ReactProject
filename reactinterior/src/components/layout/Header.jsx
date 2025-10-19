import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../../src/assets/logo/logo1.jpg';

const Header = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isServicesOpen, setIsServicesOpen] = React.useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  // Services data with proper links
  const services = [
    {
      title: "Residential Design",
      description: "Beautiful home interiors",
      path: "/services/residential-design"
    },
    {
      title: "Commercial Design",
      description: "Professional workspace design",
      path: "/services/commercial-design"
    },
    {
      title: "Office Interiors",
      description: "Productive office environments",
      path: "/services/office-interiors"
    },
    {
      title: "Custom Furniture",
      description: "Bespoke furniture solutions",
      path: "/services/custom-furniture"
    },
    {
      title: "Space Planning",
      description: "Optimized space utilization",
      path: "/services/space-planning"
    },
    {
      title: "Consultation",
      description: "Expert design advice",
      path: "/services/consultation"
    }
  ];

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close services dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (isServicesOpen && !event.target.closest('.services-dropdown')) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isServicesOpen]);

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const closeAllMenus = () => {
    setIsServicesOpen(false);
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 ${
        isScrolled 
          ? "bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4" 
          : "bg-transparent backdrop-blur-md py-4 md:py-6"
      }`}
    >
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2" onClick={closeAllMenus}>
        <img 
          src={logo} 
          alt="Zeenat Interior" 
          className={`h-8 w-auto transition-all duration-500 ${
            isScrolled ? "" : "filter brightness-0 invert"
          }`}
        />
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-4 lg:gap-8">
        {navLinks.map((link, i) => {
          if (link.name === 'Services') {
            return (
              <div key={i} className="services-dropdown relative">
                {/* Services Link with Click Handler */}
                <div
                  onClick={toggleServices}
                  className={`group flex flex-col gap-0.5 font-medium transition cursor-pointer ${
                    location.pathname.startsWith('/services')
                      ? isScrolled ? 'text-blue-600 font-semibold' : 'text-white font-semibold'
                      : isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-gray-200 hover:text-white'
                  }`}
                >
                  Services
                  <div 
                    className={`h-0.5 w-0 group-hover:w-full transition-all duration-300 ${
                      location.pathname.startsWith('/services') 
                        ? 'w-full' 
                        : ''
                    } ${
                      isScrolled 
                        ? location.pathname.startsWith('/services') ? 'bg-blue-600' : 'bg-gray-700' 
                        : location.pathname.startsWith('/services') ? 'bg-white' : 'bg-white'
                    }`} 
                  />
                </div>

                {/* Services Dropdown Menu */}
                {isServicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-lg rounded-xl shadow-2xl border border-gray-200/50 py-3 z-50">
                    <div className="flex flex-col space-y-1">
                      {services.map((service, index) => (
                        <Link
                          key={index}
                          to={service.path}
                          onClick={closeAllMenus}
                          className={`px-4 py-3 transition-all duration-200 group ${
                            location.pathname === service.path
                              ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600'
                              : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                          }`}
                        >
                          <div className="font-medium text-sm group-hover:translate-x-1 transition-transform duration-200">
                            {service.title}
                          </div>
                          <div className="text-xs text-gray-500 mt-1 group-hover:text-gray-600">
                            {service.description}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          }

          return (
            <Link
              key={i}
              to={link.path}
              className={`group flex flex-col gap-0.5 font-medium transition ${
                location.pathname === link.path
                  ? isScrolled ? 'text-blue-600 font-semibold' : 'text-white font-semibold'
                  : isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-gray-200 hover:text-white'
              }`}
            >
              {link.name}
              <div 
                className={`h-0.5 w-0 group-hover:w-full transition-all duration-300 ${
                  location.pathname === link.path 
                    ? 'w-full' 
                    : ''
                } ${
                  isScrolled 
                    ? location.pathname === link.path ? 'bg-blue-600' : 'bg-gray-700' 
                    : location.pathname === link.path ? 'bg-white' : 'bg-white'
                }`} 
              />
            </Link>
          );
        })}
      </nav>

      {/* Desktop Right Section */}
      <div className="hidden md:flex items-center gap-4">
        <span className={`hidden lg:inline text-sm transition-all duration-500 ${
          isScrolled ? "text-gray-600" : "text-gray-200"
        }`}>
          +956 789 4823
        </span>
      </div>

      {/* Mobile Menu Button */}
      <div className="flex items-center gap-3 md:hidden">
        <span className={`text-sm transition-all duration-500 ${
          isScrolled ? "text-gray-600" : "text-gray-200"
        }`}>
          +956 789 4823
        </span>
        <svg 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className={`h-6 w-6 cursor-pointer transition-all duration-500 ${
            isScrolled ? "text-gray-700" : "text-white"
          }`} 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          viewBox="0 0 24 24"
        >
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${
        isMenuOpen ? "translate-x-0" : "-translate-x-full"
      }`}>
        <button 
          className="absolute top-4 right-4" 
          onClick={closeAllMenus}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {navLinks.map((link, i) => {
          if (link.name === 'Services') {
            return (
              <div key={i} className="flex flex-col items-center">
                <div
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className={`text-lg font-medium transition cursor-pointer flex items-center gap-2 ${
                    location.pathname.startsWith('/services') 
                      ? 'text-blue-600 font-semibold' 
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  Services
                  <svg 
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isServicesOpen ? 'rotate-180' : ''
                    }`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                
                {/* Mobile Services Submenu */}
                {isServicesOpen && (
                  <div className="flex flex-col gap-3 mt-4 pl-4 border-l-2 border-gray-200">
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        to={service.path}
                        onClick={closeAllMenus}
                        className={`text-sm transition ${
                          location.pathname === service.path
                            ? 'text-blue-600 font-semibold'
                            : 'text-gray-600 hover:text-blue-600'
                        }`}
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          }

          return (
            <Link
              key={i}
              to={link.path}
              onClick={closeAllMenus}
              className={`text-lg font-medium transition ${
                location.pathname === link.path ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    </header>
  );
};

export default Header;