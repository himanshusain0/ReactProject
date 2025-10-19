import React from 'react';
import HeroSection from '../../components/sections/hero/Herosection';
import PricingCard from '../../contexts/PricingCard'; // ✅ PricingCard import karo
import servicesHero1 from '../../assets/images/hero1.jpg';
import servicesHero2 from '../../assets/images/hero2.jpg';
import servicesHero3 from '../../assets/images/hero3.jpg';

const Services = () => {
  // Services page ke liye images
  const servicesImages = [
    servicesHero1,
    servicesHero2, 
    servicesHero3
  ];

  const services = [
    {
      title: "Residential Interior Design",
      description: "We create beautiful, functional homes that reflect your personality and lifestyle. Our residential design service includes complete space planning, material selection, furniture design, and execution.",
      features: ["Complete Home Design", "Space Planning", "Material Selection", "Furniture Curation", "Project Management"],
      price: "Starting from ₹50,000",
      learnMoreLink: "/services/residential-design" // ✅ Link add kiya
    },
    {
      title: "Commercial Space Design",
      description: "Professional workspace designs that enhance productivity and reflect your brand identity. We specialize in creating efficient, inspiring commercial environments.",
      features: ["Office Design", "Retail Spaces", "Brand Integration", "Workflow Optimization", "Client Presentations"],
      price: "Starting from ₹1,00,000",
      learnMoreLink: "/services/commercial-design" // ✅ Link add kiya
    },
    {
      title: "Office Interiors",
      description: "Create productive and collaborative work environments that foster innovation and teamwork. We design office spaces that balance functionality with aesthetics.",
      features: ["Ergonomic Design", "Collaborative Spaces", "Technology Integration", "Employee Wellness", "Brand Alignment"],
      price: "Starting from ₹80,000",
      learnMoreLink: "/services/office-interiors" // ✅ Link add kiya
    },
    {
      title: "Custom Furniture",
      description: "Bespoke furniture pieces crafted to perfection for your specific needs and space constraints. We design and create custom furniture that combines functionality with artistic expression.",
      features: ["Custom Dimensions", "Premium Materials", "Handcrafted Quality", "Unique Designs", "Lifetime Support"],
      price: "Starting from ₹25,000",
      learnMoreLink: "/services/custom-furniture" // ✅ Link add kiya
    },
    {
      title: "3D Design Visualization",
      description: "See your space come to life before implementation with our realistic 3D renderings and virtual walkthroughs. This service helps you make informed decisions.",
      features: ["Photorealistic Rendering", "Virtual Walkthrough", "Multiple Design Options", "Material Visualization", "Layout Planning"],
      price: "Starting from ₹15,000",
      learnMoreLink: "/services/3d-design" // ✅ Link add kiya
    },
    {
      title: "Consultation & Planning",
      description: "Expert guidance and comprehensive planning to help you make the right design decisions. Perfect if you need professional advice but want to handle execution yourself.",
      features: ["Site Assessment", "Design Recommendations", "Budget Planning", "Vendor Coordination", "Project Timeline"],
      price: "Starting from ₹5,000",
      learnMoreLink: "/services/consultation" // ✅ Link add kiya
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* HeroSection Component */}
      <HeroSection 
        images={servicesImages}
        title="OUR SERVICES"
        subtitle="Comprehensive interior design solutions to transform your spaces with creativity and expertise"
        primaryButtonText="VIEW OUR WORK"
        secondaryButtonText="GET FREE QUOTE"
        primaryButtonLink="/portfolio"
        secondaryButtonLink="/contact"
        autoSlideInterval={6000}
      />
      
      {/* Services Grid Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From concept to completion, we provide end-to-end interior design services tailored to your unique needs and vision
            </p>
          </div>

          {/* Simple Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-slate-500 transition-all duration-300 hover:transform hover:scale-105"
              >
                {/* Service Title */}
                <h3 className="text-xl font-bold text-white mb-4">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">What's Included:</h4>
                  <ul className="text-gray-400 text-sm space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="text-green-400 mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price and CTA */}
                <div className="flex justify-between items-center mt-6">
                  <span className="text-green-400 font-semibold">
                    {service.price}
                  </span>
                  <a 
                    href={service.learnMoreLink} // ✅ Link use kiya
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-semibold"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-slate-900 to-black">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options to suit your project requirements and budget
            </p>
          </div>
          
          {/* PricingCard Component */}
          <PricingCard />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Why Choose Our Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Expert Team</h3>
              <p className="text-gray-300">15+ years of experience in interior design and execution</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">On-Time Delivery</h3>
              <p className="text-gray-300">We complete projects within agreed timelines</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Transparent Pricing</h3>
              <p className="text-gray-300">No hidden costs, clear breakdown of all expenses</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🔧</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Quality Assurance</h3>
              <p className="text-gray-300">Premium materials and craftsmanship guaranteed</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-slate-900 to-black">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and let's bring your vision to life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-black px-8 py-4 rounded-lg hover:bg-gray-100 font-semibold text-lg transition-colors"
            >
              BOOK CONSULTATION
            </a>
            <a 
              href="tel:+9567894823" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-black font-semibold text-lg transition-colors"
            >
              CALL: +956 789 4823
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;