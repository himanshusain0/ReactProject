import React from 'react';
import { motion } from "framer-motion";
import { LampContainer } from "../../components/ui/template/lamp";

const About = () => {
  // Animation variants for scroll-triggered animations - BOTH DIRECTIONS
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, margin: "-50px" }, // once: false for both directions
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const slideInLeft = {
    initial: { opacity: 0, x: -80 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: false, margin: "-50px" }, // once: false for both directions
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const slideInRight = {
    initial: { opacity: 0, x: 80 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: false, margin: "-50px" }, // once: false for both directions
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    whileInView: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-white">
      {/* Lamp Component Section */}
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }} 
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-amber-600 to-amber-800 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          About Zeenat Interior
        </motion.h1>
      </LampContainer>

      {/* Rest of the content with amber color scheme */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Story Section - Image Left, Text Right */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div 
              className="order-2 md:order-1"
              {...slideInLeft}
            >
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=958&q=80" 
                  alt="Zeenat Interior Design Studio" 
                  className="w-full h-80 md:h-96 object-cover rounded-2xl shadow-lg border border-amber-200"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent rounded-2xl"></div>
              </div>
            </motion.div>
            
            <motion.div 
              className="order-1 md:order-2"
              {...staggerContainer}
            >
              <motion.h2 
                {...fadeInUp}
                className="text-3xl font-bold text-amber-900 mb-6"
              >
                Our Story
              </motion.h2>
              <motion.p 
                {...fadeInUp}
                className="text-amber-700 text-lg mb-6"
              >
                Founded with a passion for transforming spaces, Zeenat Interior has been at the forefront 
                of interior design excellence. We believe that every space has a story to tell, and our 
                mission is to bring that story to life through thoughtful design and meticulous craftsmanship.
              </motion.p>
              <motion.p 
                {...fadeInUp}
                className="text-amber-700 text-lg"
              >
                With years of experience in residential and commercial interiors, we've built a reputation 
                for creating environments that are not just beautiful, but also functional and sustainable.
              </motion.p>
            </motion.div>
          </div>

          {/* Why Choose Us - Text Left, Image Right */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              {...staggerContainer}
            >
              <motion.h2 
                {...fadeInUp}
                className="text-3xl font-bold text-amber-900 mb-6"
              >
                Why Choose Zeenat Interior?
              </motion.h2>
              <motion.div 
                className="space-y-4"
                variants={staggerContainer}
              >
                <motion.div 
                  {...fadeInUp}
                  className="flex items-start space-x-4"
                >
                  <div className="bg-gradient-to-br from-amber-500 to-amber-600 p-2 rounded-lg flex-shrink-0">
                    <span className="text-white">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Personalized Design Solutions</h4>
                    <p className="text-amber-700">Custom designs tailored to your unique style and requirements</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  {...fadeInUp}
                  className="flex items-start space-x-4"
                >
                  <div className="bg-gradient-to-br from-amber-500 to-amber-600 p-2 rounded-lg flex-shrink-0">
                    <span className="text-white">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Quality Craftsmanship</h4>
                    <p className="text-amber-700">Premium materials and skilled artisans for lasting results</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  {...fadeInUp}
                  className="flex items-start space-x-4"
                >
                  <div className="bg-gradient-to-br from-amber-500 to-amber-600 p-2 rounded-lg flex-shrink-0">
                    <span className="text-white">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Timely Delivery</h4>
                    <p className="text-amber-700">We respect your time with strict project deadlines</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              {...slideInRight}
            >
              <img 
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Interior Design Process" 
                className="w-full h-80 md:h-96 object-cover rounded-2xl shadow-lg border border-amber-200"
              />
            </motion.div>
          </div>

          {/* Vision & Mission Section */}
          <motion.div 
            className="grid md:grid-cols-2 gap-8 mb-20"
            {...staggerContainer}
          >
            <motion.div 
              {...fadeInUp}
              className="bg-white p-8 rounded-2xl border border-amber-100 hover:border-amber-300 transition-all duration-300 shadow-lg"
            >
              <div className="text-amber-500 text-4xl mb-4 text-center">🎯</div>
              <h3 className="text-2xl font-bold text-amber-900 mb-4 text-center">Our Vision</h3>
              <p className="text-amber-700 text-center">
                To be the most trusted interior design partner, known for creating spaces that inspire, 
                comfort, and reflect the unique personalities of our clients while setting new standards 
                in design innovation.
              </p>
            </motion.div>
            
            <motion.div 
              {...fadeInUp}
              className="bg-white p-8 rounded-2xl border border-amber-100 hover:border-amber-300 transition-all duration-300 shadow-lg"
            >
              <div className="text-amber-500 text-4xl mb-4 text-center">🚀</div>
              <h3 className="text-2xl font-bold text-amber-900 mb-4 text-center">Our Mission</h3>
              <p className="text-amber-700 text-center">
                To deliver exceptional interior solutions that exceed client expectations through 
                creative design, quality execution, and seamless project management, making beautiful 
                and functional spaces accessible to everyone.
              </p>
            </motion.div>
          </motion.div>

          {/* Services Section with Images */}
          <motion.div 
            className="mb-20"
            {...staggerContainer}
          >
            <motion.h2 
              {...fadeInUp}
              className="text-3xl font-bold text-amber-900 text-center mb-12"
            >
              Our Services
            </motion.h2>
            <motion.div 
              className="grid md:grid-cols-3 gap-8"
              variants={staggerContainer}
            >
              <motion.div 
                {...fadeInUp}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-amber-100 hover:border-amber-300 transition-all duration-300 hover:transform hover:scale-105"
              >
                <img 
                  src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Residential Interiors" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">Residential Interiors</h4>
                  <p className="text-amber-700">Beautiful homes, apartments, and living spaces designed for comfort and style</p>
                </div>
              </motion.div>
              
              <motion.div 
                {...fadeInUp}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-amber-100 hover:border-amber-300 transition-all duration-300 hover:transform hover:scale-105"
              >
                <img 
                  src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q-80" 
                  alt="Commercial Spaces" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">Commercial Spaces</h4>
                  <p className="text-amber-700">Professional offices, showrooms, and retail spaces that impress clients</p>
                </div>
              </motion.div>
              
              <motion.div 
                {...fadeInUp}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-amber-100 hover:border-amber-300 transition-all duration-300 hover:transform hover:scale-105"
              >
                <img 
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Custom Furniture" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">Custom Furniture</h4>
                  <p className="text-amber-700">Bespoke furniture pieces crafted to perfection for your space</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Stats Section */}
          <motion.div 
            {...fadeInUp}
            className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl p-8 text-white text-center border border-amber-400 shadow-lg"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <div className="text-3xl font-bold mb-2">50+</div>
                <div className="text-amber-100">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">5+</div>
                <div className="text-amber-100">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-amber-100">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-amber-100">Support Available</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;