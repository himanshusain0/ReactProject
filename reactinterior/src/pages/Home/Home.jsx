import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion, AnimatePresence } from "framer-motion";
import { Link } from 'react-router-dom';
import { CardBody, CardContainer, CardItem } from "../../components/ui/template/3d-card.jsx";
import { AnimatedTooltip } from "../../components/ui/template/animated-tooltip.jsx";
import { customerStories } from '../../data/customerStories.js';
import hero1 from '../../assets/images/hero1.jpg';
import hero2 from '../../assets/images/hero2.jpg';
import hero3 from '../../assets/images/hero3.jpg';
import BlurText from '../../components/ui/template/BlurText.jsx';
import DreamRewards from '../../components/sections/features/DreamRewards.jsx';

const Home = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);

  const faqs = [
    {
      question: 'Do you provide customized interior designs?',
      answer: 'Yes! We tailor every design to match your lifestyle, budget, and aesthetic preferences.',
    },
    {
      question: 'What is the typical project timeline?',
      answer: 'Project timelines vary, but most residential projects are completed in 4–8 weeks.',
    },
    {
      question: 'Do you offer on-site consultations?',
      answer: 'Yes, our experts can visit your site for an in-depth consultation and planning session.',
    },
    {
      question: 'What is your design process?',
      answer: 'Our process includes consultation, concept development, design presentation, and project execution with regular updates.',
    },
    {
      question: 'Do you work with existing furniture?',
      answer: 'Absolutely! We incorporate your existing pieces with new elements for a cohesive look.',
    },
  ];

  const people = customerStories.map(customer => ({
    id: customer.id,
    name: customer.name,
    designation: customer.designation,
    image: customer.avatar
  }));

  const heroImages = [hero1, hero2, hero3];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const services = [
    {
      title: "Residential Design",
      description: "Beautiful home interiors that match your lifestyle and preferences.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      buttonText: "View Projects →"
    },
    {
      title: "Commercial Design", 
      description: "Professional workspace designs that boost productivity and creativity.",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      buttonText: "View Projects →"
    },
    {
      title: "Consultation",
      description: "Expert advice to help you make the right design decisions.",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      buttonText: "Get Quote →"
    }
  ];

  const featuredCollections = [
    {
      title: "Living Room",
      description: "Elegant and comfortable living spaces designed for relaxation and entertainment.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      buttonText: "Explore →"
    },
    {
      title: "Bedroom", 
      description: "Serene and personalized bedrooms for ultimate comfort and restful sleep.",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      buttonText: "Explore →"
    },
    {
      title: "Kitchen",
      description: "Functional and stylish kitchens that inspire culinary creativity.",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      buttonText: "Explore →"
    },
    {
      title: "Outdoor",
      description: "Beautiful outdoor spaces that extend your living area to nature.",
      image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      buttonText: "Explore →"
    }
  ];

  const justInItems = [
    {
      title: "Modern Minimalist",
      description: "Clean lines and sophisticated simplicity for contemporary living.",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      buttonText: "View Details →"
    },
    {
      title: "Luxury Classic", 
      description: "Timeless elegance with premium materials and craftsmanship.",
      image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      buttonText: "View Details →"
    },
    {
      title: "Industrial Chic",
      description: "Raw textures and urban appeal meet modern comfort.",
      image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      buttonText: "View Details →"
    }
  ];

  const trendingSectionals = [
    {
      title: "Modular Cloud Sofa",
      description: "Ultra-comfortable modular design with premium fabric and customizable configurations.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      buttonText: "Shop Now →"
    },
    {
      title: "L-Shaped Executive",
      description: "Professional elegance meets ultimate comfort for your living space.",
      image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      buttonText: "Shop Now →"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* 1️⃣ Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Images Slider */}
        {heroImages.map((img, index) => (
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          {/* ZEENAT INTERIOR text with BlurText animation */}
          <div className="mb-6">
            <BlurText
              text="ZEENAT"
              delay={100}
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight"
              animateBy="words"
              direction="top"
              animationFrom={{ filter: 'blur(10px)', opacity: 0, y: -50 }}
              animationTo={[
                { filter: 'blur(5px)', opacity: 0.5, y: 5 },
                { filter: 'blur(0px)', opacity: 1, y: 0 }
              ]}
              stepDuration={0.5}
            />
            <BlurText
              text="INTERIOR"
              delay={150}
              className="text-4xl md:text-6xl lg:text-7xl font-light text-white tracking-tight"
              animateBy="words"
              direction="bottom"
              animationFrom={{ filter: 'blur(10px)', opacity: 0, y: 50 }}
              animationTo={[
                { filter: 'blur(5px)', opacity: 0.5, y: -5 },
                { filter: 'blur(0px)', opacity: 1, y: 0 }
              ]}
              stepDuration={0.5}
            />
          </div>
          
          {/* Subtitle with BlurText */}
          <BlurText
            text="Crafting timeless spaces that inspire and transform your vision into reality"
            delay={50}
            className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
            animateBy="words"
            direction="top"
            animationFrom={{ filter: 'blur(8px)', opacity: 0, y: -30 }}
            animationTo={[
              { filter: 'blur(4px)', opacity: 0.7, y: 3 },
              { filter: 'blur(0px)', opacity: 1, y: 0 }
            ]}
            stepDuration={0.4}
          />
          
          {/* Buttons */}
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <button className="bg-white text-black px-8 py-4 rounded-none hover:bg-gray-100 font-semibold text-lg tracking-wider transition-all duration-300 transform hover:scale-105">
              EXPLORE PROJECTS
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-none hover:bg-white hover:text-black font-semibold text-lg tracking-wider transition-all duration-300">
              GET CONSULTATION
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <div className="flex flex-col items-center">
            <span className="text-white text-sm mb-2 tracking-widest">SCROLL TO EXPLORE</span>
            <div className="w-px h-16 bg-white/60"></div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 right-8 flex flex-col gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-2 h-8 transition-all duration-300 ${
                currentImage === index ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Rest of the sections remain the same */}
      {/* 2️⃣ Services Grid with 3D Cards */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-200 mb-16" data-aos="fade-up">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <CardContainer key={index} className="inter-var">
                <CardBody className="bg-gradient-to-br from-slate-900 to-black relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border border-slate-800">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-slate-200 dark:text-white"
                  >
                    {service.title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-slate-400 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    {service.description}
                  </CardItem>
                  <CardItem 
                    translateZ="100" 
                    rotateX={20} 
                    rotateZ={-10} 
                    className="w-full mt-4"
                  >
                    <img
                      src={service.image}
                      height="1000"
                      width="1000"
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt={service.title}
                    />
                  </CardItem>
                  <div className="flex justify-between items-center mt-20">
                    <CardItem
                      translateZ={20}
                      translateX={-40}
                      as="button"
                      className="px-4 py-2 rounded-xl text-xs font-normal text-slate-300 dark:text-white hover:text-white transition-colors"
                    >
                      {service.buttonText}
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      translateX={40}
                      as="button"
                      className="px-4 py-2 rounded-xl bg-slate-700 dark:bg-slate-600 dark:text-white text-white text-xs font-bold hover:bg-slate-600 transition-colors"
                    >
                      Learn More
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            ))}
          </div>
        </div>
      </section>

      {/* 3️⃣ Featured Collections with 3D Cards */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-900 to-black border-y border-slate-800">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-200 mb-16" data-aos="fade-up">
            Featured Collections
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredCollections.map((collection, index) => (
              <CardContainer key={index} className="inter-var">
                <CardBody className="bg-gradient-to-br from-slate-900 to-black relative group/card dark:hover:shadow-2xl dark:hover:shadow-cyan-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border border-slate-800">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-slate-200 dark:text-white text-center"
                  >
                    {collection.title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-slate-400 text-sm max-w-sm mt-2 dark:text-neutral-300 text-center"
                  >
                    {collection.description}
                  </CardItem>
                  <CardItem 
                    translateZ="100" 
                    rotateX={15} 
                    rotateZ={-8} 
                    className="w-full mt-4"
                  >
                    <img
                      src={collection.image}
                      height="1000"
                      width="1000"
                      className="h-48 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt={collection.title}
                    />
                  </CardItem>
                  <div className="flex justify-center items-center mt-12">
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-6 py-3 rounded-xl bg-slate-700 dark:bg-slate-600 dark:text-white text-white text-sm font-bold hover:bg-slate-600 transition-colors"
                    >
                      {collection.buttonText}
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            ))}
          </div>
        </div>
      </section>

      {/* 4️⃣ Just In with 3D Cards */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-200 mb-16" data-aos="fade-up">
            Just In: Fresh Styles for Your Home
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {justInItems.map((item, index) => (
              <CardContainer key={index} className="inter-var">
                <CardBody className="bg-gradient-to-br from-slate-900 to-black relative group/card dark:hover:shadow-2xl dark:hover:shadow-purple-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border border-slate-800">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-slate-200 dark:text-white"
                  >
                    {item.title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-slate-400 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    {item.description}
                  </CardItem>
                  <CardItem 
                    translateZ="100" 
                    rotateX={18} 
                    rotateZ={-12} 
                    className="w-full mt-4"
                  >
                    <img
                      src={item.image}
                      height="1000"
                      width="1000"
                      className="h-48 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt={item.title}
                    />
                  </CardItem>
                  <div className="flex justify-between items-center mt-16">
                    <CardItem
                      translateZ={20}
                      translateX={-40}
                      as="button"
                      className="px-4 py-2 rounded-xl text-xs font-normal text-slate-300 dark:text-white hover:text-white transition-colors"
                    >
                      {item.buttonText}
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      translateX={40}
                      as="button"
                      className="px-4 py-2 rounded-xl bg-slate-700 dark:bg-slate-600 dark:text-white text-white text-xs font-bold hover:bg-slate-600 transition-colors"
                    >
                      Get Quote
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            ))}
          </div>
        </div>
      </section>

      <DreamRewards/>

      {/* 5️⃣ Trending Sectionals with 3D Cards */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-900 to-black border-y border-slate-800">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-200 mb-16" data-aos="fade-up">
            Trending Modular Sectionals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {trendingSectionals.map((item, index) => (
              <CardContainer key={index} className="inter-var">
                <CardBody className="bg-gradient-to-br from-slate-900 to-black relative group/card dark:hover:shadow-2xl dark:hover:shadow-orange-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border border-slate-800">
                  <CardItem
                    translateZ="50"
                    className="text-2xl font-bold text-slate-200 dark:text-white"
                  >
                    {item.title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-slate-400 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    {item.description}
                  </CardItem>
                  <CardItem 
                    translateZ="100" 
                    rotateX={22} 
                    rotateZ={-15} 
                    className="w-full mt-4"
                  >
                    <img
                      src={item.image}
                      height="1000"
                      width="1000"
                      className="h-64 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt={item.title}
                    />
                  </CardItem>
                  <div className="flex justify-between items-center mt-20">
                    <CardItem
                      translateZ={20}
                      translateX={-40}
                      as="button"
                      className="px-4 py-2 rounded-xl text-xs font-normal text-slate-300 dark:text-white hover:text-white transition-colors"
                    >
                      {item.buttonText}
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      translateX={40}
                      as="button"
                      className="px-4 py-2 rounded-xl bg-slate-700 dark:bg-slate-600 dark:text-white text-white text-xs font-bold hover:bg-slate-600 transition-colors"
                    >
                      Learn More
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            ))}
          </div>
        </div>
      </section>

      {/* 6️⃣ Happy Customers with Animated Tooltip */}
      <section className="py-20 px-4 text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-slate-200 mb-8" data-aos="fade-up">Happy Customers Served</h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-12 text-lg" data-aos="fade-up" data-aos-delay="200">
            Over <span className="font-semibold text-slate-300">10,000+</span> customers have trusted us to transform their spaces beautifully.
          </p>
          
          {/* Animated Tooltip */}
          <div className="flex flex-row items-center justify-center mb-10 w-full">
            <AnimatedTooltip items={people} />
          </div>

          {/* Customer Testimonials with Links to Stories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {customerStories.slice(0, 3).map((customer, index) => (
              <CardContainer key={customer.id} className="inter-var">
                <CardBody className="bg-gradient-to-br from-slate-900 to-black relative group/card dark:hover:shadow-2xl dark:hover:shadow-pink-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border border-slate-800">
                  <CardItem 
                    translateZ="80" 
                    rotateX={10} 
                    rotateZ={-5} 
                    className="w-full flex justify-center"
                  >
                    <div className="h-20 w-20 bg-slate-700 rounded-full mx-auto mb-6 overflow-hidden">
                      <img 
                        src={customer.avatar}
                        alt={customer.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CardItem>
                  <CardItem
                    translateZ="50"
                    className="text-lg font-semibold text-slate-200 dark:text-white mb-4"
                  >
                    {customer.name}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-slate-400 text-sm mb-2 dark:text-neutral-300"
                  >
                    {customer.designation}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-slate-400 text-sm mb-4 dark:text-neutral-300 italic"
                  >
                    "{customer.story.testimonial.split('"').join('').substring(0, 100)}..."
                  </CardItem>
                  <div className="flex justify-center items-center">
                    <Link to={`/story/${customer.id}`}>
                      <CardItem
                        translateZ={20}
                        as="button"
                        className="px-4 py-2 rounded-xl bg-slate-700 dark:bg-slate-600 dark:text-white text-white text-xs font-bold hover:bg-slate-600 transition-colors"
                      >
                        Read Full Story →
                      </CardItem>
                    </Link>
                  </div>
                </CardBody>
              </CardContainer>
            ))}
          </div>
        </div>
      </section>

      {/* 7️⃣ NEW FAQ Section with Provided Design */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-900 to-black border-y border-slate-800">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start justify-center gap-8 md:gap-12">
            {/* Image Section */}
            <div className="w-full md:max-w-sm" data-aos="fade-right">
              <img
                className="w-full rounded-xl h-auto shadow-lg"
                src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?q=80&w=830&h=844&auto=format&fit=crop"
                alt="Interior Design Consultation"
              />
            </div>
            
            {/* FAQ Content Section */}
            <div className="w-full" data-aos="fade-left">
              <p className="text-indigo-400 text-sm font-medium mb-2">FAQ's</p>
              <h2 className="text-3xl font-semibold text-slate-200 mb-4">Looking for answers?</h2>
              <p className="text-sm text-slate-400 mb-8">
                Get all your questions answered about our interior design services, process, and what to expect when working with us.
              </p>
              
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="border-b border-slate-700 pb-4 cursor-pointer transition-all duration-300 hover:border-slate-500"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-base font-medium text-slate-200 pr-4">
                        {faq.question}
                      </h3>
                      <svg 
                        width="18" 
                        height="18" 
                        viewBox="0 0 18 18" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg" 
                        className={`flex-shrink-0 transition-all duration-500 ease-in-out ${
                          openIndex === index ? "rotate-180" : ""
                        }`}
                      >
                        <path 
                          d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2" 
                          stroke="#94a3b8" 
                          strokeWidth="1.5" 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                        />
                      </svg>
                    </div>
                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-sm text-slate-400 transition-all duration-500 ease-in-out pt-3 leading-relaxed"
                        >
                          {faq.answer}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
              
              {/* Additional CTA */}
              <div className="mt-8 p-4 bg-slate-800 rounded-lg border border-slate-700">
                <p className="text-slate-300 text-sm mb-3">Still have questions?</p>
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors duration-300">
                  Contact Our Team
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;