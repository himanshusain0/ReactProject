import React, { useState } from 'react';

const DreamRewards = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  const rewards = [
    {
      id: 1,
      title: "Premium Mattress",
      points: 2500,
      category: "bedroom",
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      title: "Designer Sofa",
      points: 1800,
      category: "living",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      title: "Dining Set",
      points: 2200,
      category: "dining",
      image: "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 4,
      title: "Bed Frame",
      points: 1200,
      category: "bedroom",
      image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 5,
      title: "Coffee Table",
      points: 800,
      category: "living",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 6,
      title: "Accent Chair",
      points: 600,
      category: "living",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  const filteredRewards = activeTab === 'all' 
    ? rewards 
    : rewards.filter(reward => reward.category === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-amber-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
            Furnish Your Dream Home
          </h1>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <button className="px-4 py-2 bg-amber-700 text-white rounded-lg hover:bg-amber-800 transition-colors">
              Bedroom
            </button>
            <button className="px-4 py-2 bg-amber-200 text-amber-900 rounded-lg hover:bg-amber-300 transition-colors">
              Living Room
            </button>
            <button className="px-4 py-2 bg-amber-200 text-amber-900 rounded-lg hover:bg-amber-300 transition-colors">
              Dining Room
            </button>
            <button className="px-4 py-2 bg-amber-200 text-amber-900 rounded-lg hover:bg-amber-300 transition-colors">
              Mattress
            </button>
          </div>
        </header>

        {/* Dream Rewards Section */}
        <section className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-amber-900 mb-2">Dream Rewards</h2>
              <p className="text-amber-700">Redeem your points for exclusive home furnishings</p>
            </div>
            <div className="mt-4 md:mt-0">
              <div className="flex items-center bg-amber-100 rounded-full px-4 py-2">
                <span className="text-amber-900 font-medium">Your Points:</span>
                <span className="ml-2 text-amber-700 font-bold">1,850</span>
              </div>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            <button 
              className={`px-4 py-2 rounded-full transition-colors ${activeTab === 'all' ? 'bg-amber-600 text-white' : 'bg-amber-100 text-amber-800 hover:bg-amber-200'}`}
              onClick={() => setActiveTab('all')}
            >
              All Items
            </button>
            <button 
              className={`px-4 py-2 rounded-full transition-colors ${activeTab === 'bedroom' ? 'bg-amber-600 text-white' : 'bg-amber-100 text-amber-800 hover:bg-amber-200'}`}
              onClick={() => setActiveTab('bedroom')}
            >
              Bedroom
            </button>
            <button 
              className={`px-4 py-2 rounded-full transition-colors ${activeTab === 'living' ? 'bg-amber-600 text-white' : 'bg-amber-100 text-amber-800 hover:bg-amber-200'}`}
              onClick={() => setActiveTab('living')}
            >
              Living Room
            </button>
            <button 
              className={`px-4 py-2 rounded-full transition-colors ${activeTab === 'dining' ? 'bg-amber-600 text-white' : 'bg-amber-100 text-amber-800 hover:bg-amber-200'}`}
              onClick={() => setActiveTab('dining')}
            >
              Dining Room
            </button>
          </div>

          {/* Rewards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRewards.map(reward => (
              <div key={reward.id} className="bg-amber-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={reward.image} 
                    alt={reward.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-amber-900 mb-2">{reward.title}</h3>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <span className="text-amber-700 font-medium">{reward.points} points</span>
                    </div>
                    <button 
                      className={`px-4 py-2 rounded-lg font-medium ${reward.points <= 1850 ? 'bg-amber-600 text-white hover:bg-amber-700' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
                      disabled={reward.points > 1850}
                    >
                      {reward.points <= 1850 ? 'Redeem' : 'Need More Points'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Help Section */}
        <section className="bg-amber-800 text-white rounded-2xl p-6 md:p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
          <p className="mb-6 max-w-2xl mx-auto">Our customer service team is here to help you with any questions about our rewards program or redeeming your points.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-6 py-3 bg-white text-amber-800 font-medium rounded-lg hover:bg-amber-100 transition-colors">
              Contact Support
            </button>
            <button className="px-6 py-3 bg-amber-600 text-white font-medium rounded-lg hover:bg-amber-700 transition-colors">
              FAQs
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DreamRewards;