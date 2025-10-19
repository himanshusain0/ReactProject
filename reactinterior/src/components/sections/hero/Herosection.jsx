import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BlurText from '../../ui/template/BlurText';

const HeroSection = ({ 
  images = [],
  title = "ZEENAT INTERIOR",
  subtitle = "Crafting timeless spaces that inspire and transform your vision into reality",
  primaryButtonText = "EXPLORE PROJECTS",
  secondaryButtonText = "GET CONSULTATION",
  primaryButtonLink = "/projects",
  secondaryButtonLink = "/contact",
  autoSlideInterval = 5000,
  showScrollIndicator = true,
  showSlideIndicators = true,
  overlay = true
}) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    if (images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
      }, autoSlideInterval);
      return () => clearInterval(interval);
    }
  }, [images.length, autoSlideInterval]);

  const handleImageChange = (index) => {
    setCurrentImage(index);
  };

  const renderTitle = () => {
    if (typeof title === 'string') {
      const [firstWord, ...restWords] = title.split(' ');
      const remainingTitle = restWords.join(' ');
      
      return (
        <div className="mb-6">
          <BlurText
            text={firstWord}
            delay={100}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-amber-900 tracking-tight"
            animateBy="words"
            direction="top"
            animationFrom={{ filter: 'blur(10px)', opacity: 0, y: -50 }}
            animationTo={[
              { filter: 'blur(5px)', opacity: 0.5, y: 5 },
              { filter: 'blur(0px)', opacity: 1, y: 0 }
            ]}
            stepDuration={0.5}
          />
          {remainingTitle && (
            <BlurText
              text={remainingTitle}
              delay={150}
              className="text-4xl md:text-6xl lg:text-7xl font-light text-amber-800 tracking-tight"
              animateBy="words"
              direction="bottom"
              animationFrom={{ filter: 'blur(10px)', opacity: 0, y: 50 }}
              animationTo={[
                { filter: 'blur(5px)', opacity: 0.5, y: -5 },
                { filter: 'blur(0px)', opacity: 1, y: 0 }
              ]}
              stepDuration={0.5}
            />
          )}
        </div>
      );
    }
    
    return title;
  };

  const renderSubtitle = () => {
    if (typeof subtitle === 'string') {
      return (
        <BlurText
          text={subtitle}
          delay={50}
          className="text-lg md:text-xl lg:text-2xl text-amber-700 mb-8 max-w-2xl mx-auto leading-relaxed"
          animateBy="words"
          direction="top"
          animationFrom={{ filter: 'blur(8px)', opacity: 0, y: -30 }}
          animationTo={[
            { filter: 'blur(4px)', opacity: 0.7, y: 3 },
            { filter: 'blur(0px)', opacity: 1, y: 0 }
          ]}
          stepDuration={0.4}
        />
      );
    }
    
    return subtitle;
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Images Slider */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            currentImage === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={img}
            alt={`hero-${index}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      
      {/* Gradient Overlay */}
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-amber-900/70 via-amber-800/40 to-transparent"></div>
      )}

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {renderTitle()}
        {renderSubtitle()}
        
        <div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          {primaryButtonText && (
            <button 
              onClick={() => primaryButtonLink && (window.location.href = primaryButtonLink)}
              className="bg-amber-600 text-white px-8 py-4 rounded-lg hover:bg-amber-700 font-semibold text-lg tracking-wider transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              {primaryButtonText}
            </button>
          )}
          
          {secondaryButtonText && (
            <button 
              onClick={() => secondaryButtonLink && (window.location.href = secondaryButtonLink)}
              className="border-2 border-amber-600 text-amber-700 px-8 py-4 rounded-lg hover:bg-amber-600 hover:text-white font-semibold text-lg tracking-wider transition-all duration-300 shadow-lg"
            >
              {secondaryButtonText}
            </button>
          )}
        </div>
      </div>

      {showScrollIndicator && (
        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <div className="flex flex-col items-center">
            <span className="text-amber-800 text-sm mb-2 tracking-widest">SCROLL TO EXPLORE</span>
            <div className="w-px h-16 bg-amber-600/60"></div>
          </div>
        </div>
      )}

      {showSlideIndicators && images.length > 1 && (
        <div className="absolute bottom-8 right-8 flex flex-col gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => handleImageChange(index)}
              className={`w-2 h-8 transition-all duration-300 ${
                currentImage === index ? 'bg-amber-600' : 'bg-amber-400/30'
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default HeroSection;