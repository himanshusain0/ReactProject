import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { customerStories } from '../../data/customerStories';
import { motion } from 'framer-motion';

const CustomerStory = () => {
  const { id } = useParams();
  const story = customerStories.find(s => s.id === parseInt(id));

  if (!story) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Story Not Found</h1>
          <Link to="/" className="text-blue-400 hover:text-blue-300">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="border-b border-slate-800 py-4">
        <div className="container mx-auto px-4">
          <Link to="/" className="text-slate-400 hover:text-white transition">
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
                className="w-24 h-24 rounded-full border-4 border-slate-700"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-200 mb-4">
              {story.story.title}
            </h1>
            <p className="text-xl text-slate-400 mb-2">{story.name}</p>
            <p className="text-slate-500">{story.designation} • {story.location}</p>
          </motion.div>

          {/* Project Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-slate-900 rounded-lg p-6 text-center border border-slate-800">
              <h3 className="text-slate-400 text-sm mb-2">PROJECT TYPE</h3>
              <p className="text-slate-200 text-lg font-semibold">{story.projectType}</p>
            </div>
            <div className="bg-slate-900 rounded-lg p-6 text-center border border-slate-800">
              <h3 className="text-slate-400 text-sm mb-2">DURATION</h3>
              <p className="text-slate-200 text-lg font-semibold">{story.duration}</p>
            </div>
            <div className="bg-slate-900 rounded-lg p-6 text-center border border-slate-800">
              <h3 className="text-slate-400 text-sm mb-2">BUDGET</h3>
              <p className="text-slate-200 text-lg font-semibold">{story.budget}</p>
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
                <h2 className="text-2xl font-bold text-slate-200 mb-4">The Challenge</h2>
                <p className="text-slate-400 leading-relaxed">{story.story.challenge}</p>
              </motion.div>

              {/* Solution */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2 className="text-2xl font-bold text-slate-200 mb-4">Our Solution</h2>
                <p className="text-slate-400 leading-relaxed">{story.story.solution}</p>
              </motion.div>

              {/* Result */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h2 className="text-2xl font-bold text-slate-200 mb-4">The Result</h2>
                <p className="text-slate-400 leading-relaxed">{story.story.result}</p>
              </motion.div>

              {/* Testimonial */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="bg-slate-900 rounded-xl p-6 border border-slate-800"
              >
                <h3 className="text-xl font-bold text-slate-200 mb-4">Client Testimonial</h3>
                <p className="text-slate-400 italic leading-relaxed">"{story.story.testimonial}"</p>
                <p className="text-slate-300 mt-4 font-semibold">- {story.name}</p>
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
                  className="overflow-hidden rounded-xl border border-slate-800"
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
            className="text-center mt-16 bg-slate-900 rounded-xl p-8 border border-slate-800"
          >
            <h2 className="text-2xl font-bold text-slate-200 mb-4">
              Ready to Transform Your Space?
            </h2>
            <p className="text-slate-400 mb-6">
              Let's create your success story together
            </p>
            <Link
              to="/contact"
              className="bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-100 font-semibold transition-all duration-300 inline-block"
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