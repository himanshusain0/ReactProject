import React from 'react';
import HeroSection from '../components/sections/hero/Herosection';
import BeforeAfter from '../components/sections/features/BeforeAfter';
import officeHero1 from '../assets/images/officeImg1.jpg';
import officeHero2 from '../assets/images/officeImg2.jpg';
import officeHero3 from '../assets/images/officeImg3.jpg';
import ZeenatInteriorTestimonials from '../components/sections/testimonials/ZeenatInteriorTestimonials';

const OfficeInteriors = () => {
  // Office interiors ke liye images
  const officeImages = [
    officeHero1,
    officeHero2, 
    officeHero3
  ];

  // Office Before-After transformation data
  const transformationData = [
    {
      title: "Corporate Headquarters",
      beforeImage: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      afterImage: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Transformed traditional corporate offices into a modern, collaborative workspace with open areas and private cabins."
    },
    {
      title: "Startup Office Space",
      beforeImage: "https://images.unsplash.com/photo-1531498860502-7c67cf02c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      afterImage: "https://images.unsplash.com/photo-1560769684-55063c5d4d31?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Created an energetic startup environment with flexible seating, breakout areas, and creative collaboration zones."
    },
    {
      title: "Executive Suite",
      beforeImage: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      afterImage: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Luxurious executive suite with premium finishes, custom cabinetry, and sophisticated meeting area."
    },
    {
      title: "Conference Room",
      beforeImage: "https://images.unsplash.com/photo-1531498860502-7c67cf02c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      afterImage: "https://images.unsplash.com/photo-1560769684-55063c5d4d31?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "State-of-the-art conference room with advanced audio-visual systems and comfortable executive seating."
    },
    {
      title: "Reception Area",
      beforeImage: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      afterImage: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Impressive reception area that creates a strong first impression for clients and visitors."
    },
    {
      title: "Collaboration Zone",
      beforeImage: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      afterImage: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Dynamic collaboration space with comfortable seating, whiteboards, and technology integration."
    },
    {
      title: "Cafeteria & Break Area",
      beforeImage: "https://images.unsplash.com/photo-1531498860502-7c67cf02c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      afterImage: "https://images.unsplash.com/photo-1560769684-55063c5d4d31?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Comfortable break area with modern kitchen facilities and relaxing seating for employees."
    },
    {
      title: "Focus Work Pods",
      beforeImage: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      afterImage: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Private focus pods for concentrated work with soundproofing and ergonomic furniture."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-white">
      {/* HeroSection Component Use karo */}
      <HeroSection 
        images={officeImages}
        title="OFFICE INTERIORS"
        subtitle="Designing productive workspaces that inspire innovation, foster collaboration, and reflect your company culture"
        primaryButtonText="VIEW OFFICE PORTFOLIO"
        secondaryButtonText="GET OFFICE CONSULTATION"
        primaryButtonLink="/portfolio/office"
        secondaryButtonLink="/contact"
        autoSlideInterval={6000}
      />
      
      {/* Before-After Section - HeroSection ke niche add karo */}
      <section className="py-20 px-4 bg-gradient-to-b from-amber-100 to-amber-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
              Office Transformations
            </h2>
            <p className="text-xl text-amber-700 max-w-2xl mx-auto">
              See how we've transformed ordinary offices into extraordinary workspaces that boost productivity and employee satisfaction
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

      {/* Office Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-amber-900 mb-8">
            Our Office Interior Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg border border-amber-100 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Corporate Office Design</h3>
              <p className="text-amber-700">Professional workspaces that reflect your brand and enhance productivity.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-amber-100 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Startup & Tech Offices</h3>
              <p className="text-amber-700">Creative and flexible spaces for innovative companies and growing teams.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-amber-100 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Executive Suites</h3>
              <p className="text-amber-700">Luxurious and functional spaces for leadership and important meetings.</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-amber-100 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Conference Rooms</h3>
              <p className="text-amber-700">Professional meeting spaces with advanced technology and comfortable seating.</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-amber-100 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Reception Areas</h3>
              <p className="text-amber-700">Impressive entry spaces that create strong first impressions.</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-amber-100 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Breakout Zones</h3>
              <p className="text-amber-700">Comfortable areas for relaxation, collaboration, and informal meetings.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Design Benefits */}
      <section className="py-20 px-4 bg-gradient-to-b from-amber-500 to-amber-600 border-t border-amber-400">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Benefits of Professional Office Design
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-white text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Increased Productivity</h3>
              <p className="text-amber-100">Well-designed spaces can boost employee productivity by up to 20%</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-white text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Better Collaboration</h3>
              <p className="text-amber-100">Spaces designed to encourage teamwork and creative brainstorming</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Employee Retention</h3>
              <p className="text-amber-100">Great workspaces help attract and retain top talent</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-white text-2xl">💼</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Brand Image</h3>
              <p className="text-amber-100">Office design that reflects and strengthens your company brand</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-white text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Innovation</h3>
              <p className="text-amber-100">Creative environments that foster innovation and new ideas</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-white text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Wellbeing</h3>
              <p className="text-amber-100">Designs that prioritize employee health, comfort, and wellbeing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Design Process */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-amber-900 mb-12">
            Our Office Design Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold shadow-lg">1</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Consultation</h3>
              <p className="text-amber-700">Understanding your company culture, workflow, and requirements</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold shadow-lg">2</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Space Planning</h3>
              <p className="text-amber-700">Creating efficient layouts that maximize space and functionality</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold shadow-lg">3</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Design Development</h3>
              <p className="text-amber-700">Developing detailed designs, material selection, and furniture planning</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold shadow-lg">4</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Execution</h3>
              <p className="text-amber-700">Professional implementation with minimal disruption to your business</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
 
export default OfficeInteriors;