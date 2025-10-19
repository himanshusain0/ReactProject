// components/BeforeAfter.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BeforeAfter = ({ 
  items = [],
  className = "",
  showDescription = true
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showBefore, setShowBefore] = useState(true);

  if (!items || items.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No images to display
      </div>
    );
  }

  const currentItem = items[activeIndex];

  return (
    <div className={`w-full max-w-6xl mx-auto px-4 ${className}`}>
      {/* Main Image Comparison */}
      <div className="relative w-full h-80 md:h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-2xl mb-6">
        {/* Before Image */}
        <AnimatePresence mode="wait">
          {showBefore && (
            <motion.div
              key="before"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 w-full h-full"
            >
              <img
                src={currentItem.beforeImage}
                alt={`Before - ${currentItem.title}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                Before
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* After Image */}
        <AnimatePresence mode="wait">
          {!showBefore && (
            <motion.div
              key="after"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 w-full h-full"
            >
              <img
                src={currentItem.afterImage}
                alt={`After - ${currentItem.title}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                After
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle Buttons */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          <button
            onClick={() => setShowBefore(true)}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
              showBefore
                ? 'bg-white text-black shadow-lg'
                : 'bg-black/50 text-white hover:bg-black/70'
            }`}
          >
            Before
          </button>
          <button
            onClick={() => setShowBefore(false)}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
              !showBefore
                ? 'bg-green-600 text-white shadow-lg'
                : 'bg-black/50 text-white hover:bg-black/70'
            }`}
          >
            After
          </button>
        </div>
      </div>

      {/* Description */}
      {showDescription && currentItem.description && (
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h3 className="text-2xl font-bold text-white mb-2">
            {currentItem.title}
          </h3>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            {currentItem.description}
          </p>
        </motion.div>
      )}

      {/* Thumbnail Navigation */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
        {items.map((item, index) => (
          <button
            key={index}
            onClick={() => {
              setActiveIndex(index);
              setShowBefore(true); // Reset to before view when changing items
            }}
            className={`relative aspect-square rounded-lg overflow-hidden transition-all duration-300 ${
              activeIndex === index
                ? 'ring-2 ring-white scale-105'
                : 'opacity-70 hover:opacity-100 hover:scale-105'
            }`}
          >
            <img
              src={item.beforeImage}
              alt={`Thumbnail - ${item.title}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <span className="text-white text-xs font-medium px-1 text-center">
                {item.title.split(' ')[0]}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default BeforeAfter;