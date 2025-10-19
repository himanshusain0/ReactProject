import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { customerStories } from '../../data/customerStories';
import { motion } from 'framer-motion';

const CustomerStory = () => {
  const { id } = useParams();
  const story = customerStories.find(s => s.id === parseInt(id));

  if (!story) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-amber-900">Story Not Found</h1>
          <Link to="/" className="text-amber-600 hover:text-amber-700">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-white">
      {/* Navigation */}
      <nav className="border-b border-amber-200 py-4">
        <div className="container mx-auto px-4">
          <Link to="/" className="text-amber-600 hover:text-amber-700 transition">
            ← Back to Home
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="flex justify-center mb-6">
              <img
                src={story.avatar}
                alt={story.name}
                className="w-24 h-24 rounded-full border-4 border-amber-200"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
              {story.story.title}
            </h1>
            <p className="text-xl text-amber-700 mb-2">{story.name}</p>
            <p className="text-amber-600">{story.designation} • {story.location}</p>
          </motion.div>

          {/* Project Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-lg p-6 text-center border border-amber-100 shadow-lg">
              <h3 className="text-amber-600 text-sm mb-2">PROJECT TYPE</h3>
              <p className="text-gray-800 text-lg font-semibold">{story.projectType}</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center border border-amber-100 shadow-lg">
              <h3 className="text-amber-600 text-sm mb-2">DURATION</h3>
              <p className="text-gray-800 text-lg font-semibold">{story.duration}</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center border border-amber-100 shadow-lg">
              <h3 className="text-amber-600 text-sm mb-2">BUDGET</h3>
              <p className="text-gray-800 text-lg font-semibold">{story.budget}</p>
            </div>
          </div>

          {/* Story Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Text Content */}
            <div className="space-y-8">
              {/* Challenge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold text-amber-900 mb-4">The Challenge</h2>
                <p className="text-amber-700 leading-relaxed">{story.story.challenge}</p>
              </motion.div>

              {/* Solution */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2 className="text-2xl font-bold text-amber-900 mb-4">Our Solution</h2>
                <p className="text-amber-700 leading-relaxed">{story.story.solution}</p>
              </motion.div>

              {/* Result */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h2 className="text-2xl font-bold text-amber-900 mb-4">The Result</h2>
                <p className="text-amber-700 leading-relaxed">{story.story.result}</p>
              </motion.div>

              {/* Testimonial */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="bg-amber-50 rounded-xl p-6 border border-amber-200 shadow-lg"
              >
                <h3 className="text-xl font-bold text-amber-900 mb-4">Client Testimonial</h3>
                <p className="text-amber-700 italic leading-relaxed">"{story.story.testimonial}"</p>
                <p className="text-amber-800 mt-4 font-semibold">- {story.name}</p>
              </motion.div>
            </div>

            {/* Images */}
            <div className="space-y-6">
              {story.story.images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="overflow-hidden rounded-xl border border-amber-200 shadow-lg"
                >
                  <img
                    src={image}
                    alt={`${story.name} project ${index + 1}`}
                    className="w-full h-64 md:h-80 object-cover hover:scale-105 transition duration-500"
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-center mt-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl p-8 border border-amber-400 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Space?
            </h2>
            <p className="text-amber-100 mb-6">
              Let's create your success story together
            </p>
            <Link
              to="/contact"
              className="bg-white text-amber-700 px-8 py-3 rounded-lg hover:bg-amber-50 font-semibold transition-all duration-300 inline-block shadow-lg"
            >
              Start Your Project
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CustomerStory;