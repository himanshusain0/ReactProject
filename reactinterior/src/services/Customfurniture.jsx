import React from 'react';
import HeroSection from '../components/sections/hero/Herosection';
import BeforeAfter from '../components/sections/features/BeforeAfter';
import furnitureHero1 from '../assets/images/furnitureImg1.jpg';
import furnitureHero2 from '../assets/images/furnitureImg2.jpg';
import furnitureHero3 from '../assets/images/furnitureImg3.jpg';

const CustomFurniture = () => {
  // Custom furniture ke liye images
  const furnitureImages = [
    furnitureHero1,
    furnitureHero2, 
    furnitureHero3
  ];

  // Custom Furniture Before-After transformation data
  const transformationData = [
    {
      title: "Custom Sofa Set",
      beforeImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      afterImage: "https://images.unsplash.com/photo-1615529328331-f8917597711f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Handcrafted modular sofa set with premium fabric, custom dimensions, and ergonomic design for ultimate comfort."
    },
    {
      title: "Built-in Wardrobe",
      beforeImage: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      afterImage: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Space-efficient built-in wardrobe with smart storage solutions, soft-close mechanisms, and custom finishes."
    },
    {
      title: "Dining Table Set",
      beforeImage: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      afterImage: "https://images.unsplash.com/photo-1631656882328-8c44f14b1d0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Elegant custom dining table with matching chairs, crafted from solid wood with exquisite detailing."
    },
    {
      title: "Entertainment Unit",
      beforeImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      afterImage: "https://images.unsplash.com/photo-1584622781569-0d312c6d0e5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Modern entertainment unit with hidden cable management, LED lighting, and ample storage for media equipment."
    },
    {
      title: "Study Desk",
      beforeImage: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      afterImage: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Ergonomic study desk with built-in charging ports, drawer storage, and adjustable height features."
    },
    {
      title: "Coffee Table",
      beforeImage: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      afterImage: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Unique coffee table with artistic design, premium materials, and functional storage compartments."
    },
    {
      title: "Bed Frame",
      beforeImage: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      afterImage: "https://images.unsplash.com/photo-1615529328331-f8917597711f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Custom king-size bed frame with upholstered headboard, under-bed storage, and premium finishing."
    },
    {
      title: "Bookshelf Unit",
      beforeImage: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      afterImage: "https://images.unsplash.com/photo-1494522358652-f30e61ad4f6a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Floor-to-ceiling bookshelf unit with adjustable shelves, display areas, and integrated lighting."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* HeroSection Component Use karo */}
      <HeroSection 
        images={furnitureImages}
        title="CUSTOM FURNITURE"
        subtitle="Bespoke furniture pieces crafted to perfection, designed specifically for your space, style, and functional needs"
        primaryButtonText="VIEW FURNITURE PORTFOLIO"
        secondaryButtonText="GET CUSTOM QUOTE"
        primaryButtonLink="/portfolio/furniture"
        secondaryButtonLink="/contact"
        autoSlideInterval={6000}
      />
      
      {/* Before-After Section - HeroSection ke niche add karo */}
      <section className="py-20 px-4 bg-gradient-to-b from-slate-900 to-black">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Furniture Transformations
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              See how we transform raw materials into exquisite custom furniture pieces that perfectly fit your space and style
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

      {/* Custom Furniture Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-8">
            Our Custom Furniture Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Living Room Furniture</h3>
              <p className="text-gray-300">Custom sofas, coffee tables, entertainment units, and shelving solutions.</p>
            </div>
            
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Bedroom Furniture</h3>
              <p className="text-gray-300">Bespoke bed frames, wardrobes, nightstands, and dressing tables.</p>
            </div>
            
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Dining Room Sets</h3>
              <p className="text-gray-300">Custom dining tables, chairs, sideboards, and display cabinets.</p>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Home Office Furniture</h3>
              <p className="text-gray-300">Ergonomic desks, bookshelves, storage units, and conference tables.</p>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Built-in Furniture</h3>
              <p className="text-gray-300">Custom built-in wardrobes, kitchen cabinets, and storage solutions.</p>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Outdoor Furniture</h3>
              <p className="text-gray-300">Weather-resistant custom furniture for balconies, patios, and gardens.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Materials & Craftsmanship */}
      <section className="py-20 px-4 bg-gradient-to-b from-slate-900 to-black border-t border-slate-800">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Premium Materials & Craftsmanship
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🌳</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Solid Wood</h3>
              <p className="text-gray-300">Premium teak, oak, walnut, and sheesham wood for durability and beauty</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🛠️</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Expert Craftsmanship</h3>
              <p className="text-gray-300">Skilled artisans with decades of experience in fine furniture making</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Custom Finishes</h3>
              <p className="text-gray-300">Wide range of stains, paints, and polish options to match your decor</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Modern Hardware</h3>
              <p className="text-gray-300">Premium hinges, handles, and mechanisms for smooth operation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Furniture Process */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Our Custom Furniture Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">1</div>
              <h3 className="text-lg font-semibold text-white mb-2">Consultation & Design</h3>
              <p className="text-gray-300">Understanding your needs, space constraints, and design preferences</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">2</div>
              <h3 className="text-lg font-semibold text-white mb-2">Material Selection</h3>
              <p className="text-gray-300">Choosing the perfect wood, finishes, and hardware for your piece</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">3</div>
              <h3 className="text-lg font-semibold text-white mb-2">Crafting & Production</h3>
              <p className="text-gray-300">Skilled artisans handcraft your furniture with attention to detail</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">4</div>
              <h3 className="text-lg font-semibold text-white mb-2">Delivery & Installation</h3>
              <p className="text-gray-300">Professional delivery and installation at your location</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Custom Furniture */}
      <section className="py-20 px-4 bg-gradient-to-b from-slate-900 to-black border-t border-slate-800">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Why Choose Custom Furniture?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-3">Perfect Fit</h3>
              <p className="text-gray-300">Furniture designed specifically for your space dimensions and layout</p>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-3">Unique Design</h3>
              <p className="text-gray-300">One-of-a-kind pieces that reflect your personal style and taste</p>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-3">Superior Quality</h3>
              <p className="text-gray-300">Handcrafted with premium materials and expert craftsmanship</p>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-3">Functional Design</h3>
              <p className="text-gray-300">Customized storage solutions and features for your specific needs</p>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-3">Longevity</h3>
              <p className="text-gray-300">Built to last for generations with proper care and maintenance</p>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-3">Value Addition</h3>
              <p className="text-gray-300">Enhances your property value and creates a cohesive interior look</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomFurniture;