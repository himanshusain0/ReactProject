import React from 'react';
import HeroSection from '../components/sections/hero/Herosection';
import BeforeAfter from '../components/sections/features/BeforeAfter';
import commercialHero1 from '../assets/images/commImg1.jpg';
import commercialHero2 from '../assets/images/commImg2.jpg';
import commercialHero3 from '../assets/images/commImg3.jpg';

const CommercialDesign = () => {
  // Commercial design ke liye images
  const commercialImages = [
    commercialHero1,
    commercialHero2, 
    commercialHero3
  ];

  // Commercial Before-After transformation data
  const transformationData = [
    {
      title: "Office Space Transformation",
      beforeImage: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      afterImage: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Transformed a traditional office into a modern, collaborative workspace with ergonomic furniture and smart technology integration."
    },
    {
      title: "Restaurant Interior",
      beforeImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      afterImage: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Complete restaurant overhaul with ambient lighting, premium seating, and a sophisticated dining atmosphere."
    },
    {
      title: "Retail Store Design",
      beforeImage: "https://images.unsplash.com/photo-1561715276-a2d087060f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      afterImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Created an engaging retail environment with strategic product placement and customer-friendly layout."
    },
    {
      title: "Hotel Lobby Upgrade",
      beforeImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      afterImage: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Luxury hotel lobby transformation with premium materials, elegant seating, and impressive reception area."
    },
    {
      title: "Conference Room",
      beforeImage: "https://images.unsplash.com/photo-1531498860502-7c67cf02c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      afterImage: "https://images.unsplash.com/photo-1560769684-55063c5d4d31?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "State-of-the-art conference room with advanced audio-visual systems and comfortable executive seating."
    },
    {
      title: "Medical Clinic",
      beforeImage: "https://images.unsplash.com/photo-1516549655669-df6654e447e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      afterImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Modern medical facility design focusing on patient comfort, hygiene, and efficient workflow."
    },
    {
      title: "Co-working Space",
      beforeImage: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      afterImage: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Dynamic co-working environment with flexible workspaces, meeting pods, and collaborative areas."
    },
    {
      title: "Showroom Design",
      beforeImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      afterImage: "https://images.unsplash.com/photo-1561715276-a2d087060f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Premium showroom showcasing products in an elegant and customer-engaging display environment."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-white">
      {/* HeroSection Component Use karo */}
      <HeroSection 
        images={commercialImages}
        title="COMMERCIAL DESIGN"
        subtitle="Elevate your business space with professional commercial interiors that boost productivity and impress clients"
        primaryButtonText="VIEW COMMERCIAL PORTFOLIO"
        secondaryButtonText="GET BUSINESS CONSULTATION"
        primaryButtonLink="/portfolio/commercial"
        secondaryButtonLink="/contact"
        autoSlideInterval={6000}
      />
      
      {/* Before-After Section - HeroSection ke niche add karo */}
      <section className="py-20 px-4 bg-gradient-to-b from-amber-100 to-amber-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
              Commercial Transformations
            </h2>
            <p className="text-xl text-amber-700 max-w-2xl mx-auto">
              See how we've transformed business spaces to enhance productivity, brand image, and customer experience
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

      {/* Commercial Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-amber-900 mb-8">
            Our Commercial Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg border border-amber-100 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Office Design</h3>
              <p className="text-amber-700">Productive and inspiring workspace designs that foster creativity and collaboration.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-amber-100 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Retail Store Design</h3>
              <p className="text-amber-700">Engaging retail environments that enhance customer experience and boost sales.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-amber-100 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Restaurant & Cafe</h3>
              <p className="text-amber-700">Memorable dining spaces that reflect your brand and delight your customers.</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-amber-100 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Hotel & Hospitality</h3>
              <p className="text-amber-700">Luxurious hospitality spaces that create unforgettable guest experiences.</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-amber-100 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Healthcare Facilities</h3>
              <p className="text-amber-700">Comfortable and efficient medical spaces prioritizing patient care.</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-amber-100 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Educational Spaces</h3>
              <p className="text-amber-700">Inspiring learning environments that promote education and innovation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Commercial Features */}
      <section className="py-20 px-4 bg-gradient-to-b from-amber-500 to-amber-600 border-t border-amber-400">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Why Choose Our Commercial Design Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-white text-2xl">🏢</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Brand Alignment</h3>
              <p className="text-amber-100">Designs that reflect and enhance your brand identity</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Productivity Focus</h3>
              <p className="text-amber-100">Spaces designed to maximize efficiency and workflow</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-white text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">ROI Driven</h3>
              <p className="text-amber-100">Designs that deliver measurable business returns</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-white text-2xl">⏱️</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Timely Delivery</h3>
              <p className="text-amber-100">Projects completed on schedule with minimal disruption</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommercialDesign;