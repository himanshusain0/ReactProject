import React from 'react';
import HeroSection from '../components/sections/hero/Herosection';
import BeforeAfter from '../components/sections/features/BeforeAfter';
import residentialHero1 from '../assets/images/resImg1.jpg';
import residentialHero2 from '../assets/images/resImg2.jpg';
import residentialHero3 from '../assets/images/resImg3.jpg';
import ZeenatInteriorTestimonials from '../components/sections/testimonials/ZeenatInteriorTestimonials';

const ResidentialDesign = () => {
  // Residential design ke liye images
  const residentialImages = [
    residentialHero1,
    residentialHero2, 
    residentialHero3
  ];

  // Before-After transformation data
  const transformationData = [
    {
      title: "Living Room Makeover",
      beforeImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      afterImage: "https://images.unsplash.com/photo-1615529328331-f8917597711f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Transformed a cluttered living space into a modern, functional family area with custom storage solutions and elegant lighting."
    },
    {
      title: "Kitchen Renovation",
      beforeImage: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      afterImage: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Complete kitchen overhaul with premium finishes, smart storage, and state-of-the-art appliances for the modern home chef."
    },
    {
      title: "Bedroom Transformation",
      beforeImage: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      afterImage: "https://images.unsplash.com/photo-1631656882328-8c44f14b1d0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Created a serene bedroom sanctuary with custom cabinetry, mood lighting, and premium textiles for ultimate comfort."
    },
    {
      title: "Bathroom Upgrade",
      beforeImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      afterImage: "https://images.unsplash.com/photo-1584622781569-0d312c6d0e5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Luxury bathroom transformation with spa-like features, premium tiles, and intelligent space utilization."
    },
    {
      title: "Home Office",
      beforeImage: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      afterImage: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Designed a productive home office with ergonomic furniture, ample storage, and professional aesthetics."
    },
    {
      title: "Dining Area",
      beforeImage: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      afterImage: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Elegant dining space transformation perfect for family gatherings and entertaining guests."
    },
    {
      title: "Kids Room",
      beforeImage: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      afterImage: "https://images.unsplash.com/photo-1615529328331-f8917597711f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Creative and functional kids room with themed decor, study area, and plenty of play space."
    },
    {
      title: "Balcony Garden",
      beforeImage: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      afterImage: "https://images.unsplash.com/photo-1494522358652-f30e61ad4f6a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Transformed empty balcony into a lush green retreat with comfortable seating and beautiful planters."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-white">
      {/* HeroSection Component Use karo */}
      <HeroSection 
        images={residentialImages}
        title="RESIDENTIAL DESIGN"
        subtitle="Transform your living space into a personalized sanctuary with our expert residential interior design services"
        primaryButtonText="VIEW OUR PORTFOLIO"
        secondaryButtonText="GET FREE CONSULTATION"
        primaryButtonLink="/portfolio/residential"
        secondaryButtonLink="/contact"
        autoSlideInterval={6000}
      />
      
      {/* Before-After Section - HeroSection ke niche add karo */}
      <section className="py-20 px-4 bg-gradient-to-b from-amber-100 to-amber-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
              Witness The Transformation
            </h2>
            <p className="text-xl text-amber-700 max-w-2xl mx-auto">
              See how we've transformed ordinary spaces into extraordinary homes
            </p>
          </div>

          {/* BeforeAfter Component Use karo */}
          <BeforeAfter 
            items={transformationData}
            className="mb-16"
            showDescription={true}
          />
        </div>
      </section>
      <ZeenatInteriorTestimonials/>

      {/* Yahan par aapki residential design page ka baaki content hoga */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-amber-900 mb-8">
            Our Residential Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg border border-amber-100 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Living Room Design</h3>
              <p className="text-amber-700">Beautiful and functional living spaces for relaxation and entertainment.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-amber-100 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Bedroom Design</h3>
              <p className="text-amber-700">Serene and comfortable bedrooms for restful sleep.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-amber-100 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Kitchen Design</h3>
              <p className="text-amber-700">Modern and efficient kitchen designs for culinary enthusiasts.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResidentialDesign;