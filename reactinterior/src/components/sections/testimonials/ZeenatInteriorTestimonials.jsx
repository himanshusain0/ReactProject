import React from 'react';

const ZeenatInteriorTestimonials = () => {
    const cardsData = [
        {
            image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200',
            name: 'Briar Martin',
            handle: '@neilstellar',
            testimonial: 'Zeenat Interior transformed our living space completely. Their attention to detail and quality materials made all the difference!',
            rating: 5
        },
        {
            image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200',
            name: 'Avery Johnson',
            handle: '@averywrites',
            testimonial: 'Working with Zeenat Interior was a dream. They understood our vision and delivered beyond expectations. Highly recommended!',
            rating: 5
        },
        {
            image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60',
            name: 'Jordan Lee',
            handle: '@jordantalks',
            testimonial: 'The team at Zeenat Interior created a beautiful, functional space that perfectly reflects our style. Absolutely love it!',
            rating: 4
        },
        {
            image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60',
            name: 'Sophia Williams',
            handle: '@sophiadesigns',
            testimonial: 'From concept to completion, Zeenat Interior made the process seamless. Our home has never looked better!',
            rating: 5
        },
        {
            image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&auto=format&fit=crop&q=60',
            name: 'Emma Thompson',
            handle: '@emmainteriors',
            testimonial: 'Professional, creative, and punctual. Zeenat Interior delivered exactly what we wanted on time and within budget.',
            rating: 5
        },
        {
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=60',
            name: 'Michael Chen',
            handle: '@michaeldesign',
            testimonial: 'The quality of work and materials used by Zeenat Interior is exceptional. Worth every penny!',
            rating: 4
        },
    ];

    const CreateCard = ({ card }) => (
        <div className="p-6 rounded-2xl mx-4 shadow-lg hover:shadow-xl transition-all duration-300 w-80 shrink-0 bg-white border border-amber-100 hover:border-amber-200">
            <div className="flex gap-4 items-start mb-4">
                <img className="size-14 rounded-full object-cover border-2 border-amber-200" src={card.image} alt="User Image" />
                <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                        <p className="font-semibold text-gray-800">{card.name}</p>
                        <svg className="fill-amber-500" width="16" height="16" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M4.555.72a4 4 0 0 1-.297.24c-.179.12-.38.202-.59.244a4 4 0 0 1-.38.041c-.48.039-.721.058-.922.129a1.63 1.63 0 0 0-.992.992c-.071.2-.09.441-.129.922a4 4 0 0 1-.041.38 1.6 1.6 0 0 1-.245.59 3 3 0 0 1-.239.297c-.313.368-.47.551-.56.743-.213.444-.213.96 0 1.404.09.192.247.375.56.743.125.146.187.219.24.297.12.179.202.38.244.59.018.093.026.189.041.38.039.48.058.721.129.922.163.464.528.829.992.992.2.071.441.09.922.129.191.015.287.023.38.041.21.042.411.125.59.245.078.052.151.114.297.239.368.313.551.47.743.56.444.213.96.213 1.404 0 .192-.09.375-.247.743-.56.146-.125.219-.187.297-.24.179-.12.38-.202.59-.244a4 4 0 0 1 .38-.041c.48-.039.721-.058.922-.129.464-.163.829-.528.992-.992.071-.2.09-.441.129-.922a4 4 0 0 1 .041-.38c.042-.21.125-.411.245-.59.052-.078.114-.151.239-.297.313-.368.47-.551.56-.743.213-.444.213-.96 0-1.404-.09-.192-.247-.375-.56-.743a4 4 0 0 1-.24-.297 1.6 1.6 0 0 1-.244-.59 3 3 0 0 1-.041-.38c-.039-.48-.058-.721-.129-.922a1.63 1.63 0 0 0-.992-.992c-.2-.071-.441-.09-.922-.129a4 4 0 0 1-.38-.041 1.6 1.6 0 0 1-.59-.245A3 3 0 0 1 7.445.72C7.077.407 6.894.25 6.702.16a1.63 1.63 0 0 0-1.404 0c-.192.09-.375.247-.743.56m4.07 3.998a.488.488 0 0 0-.691-.69l-2.91 2.91-.958-.957a.488.488 0 0 0-.69.69l1.302 1.302c.19.191.5.191.69 0z" />
                        </svg>
                    </div>
                    <span className="text-sm text-gray-500">{card.handle}</span>
                </div>
            </div>
            
            {/* Star Rating */}
            <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                    <svg 
                        key={i} 
                        className={`w-5 h-5 ${i < card.rating ? 'text-amber-400' : 'text-gray-300'}`}
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                    >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                ))}
            </div>
            
            <p className="text-gray-700 leading-relaxed italic">"{card.testimonial}"</p>
        </div>
    );

    return (
        <section className="py-16 bg-gradient-to-br from-amber-50 to-white">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
                        What Our Clients Say
                    </h2>
                    <p className="text-lg text-amber-700 max-w-2xl mx-auto">
                        Discover why homeowners trust Zeenat Interior to transform their spaces into dream homes
                    </p>
                </div>

                {/* Marquee Testimonials */}
                <div className="relative">
                    <style>{`
                    @keyframes marqueeScroll {
                        0% { transform: translateX(0%); }
                        100% { transform: translateX(-50%); }
                    }

                    .marquee-inner {
                        animation: marqueeScroll 35s linear infinite;
                    }

                    .marquee-reverse {
                        animation-direction: reverse;
                    }

                    .marquee-inner:hover {
                        animation-play-state: paused;
                    }
                `}</style>

                    {/* First Marquee Row */}
                    <div className="marquee-row w-full mx-auto overflow-hidden relative mb-8">
                        <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-amber-50 to-transparent"></div>
                        <div className="marquee-inner flex transform-gpu min-w-[200%] py-6">
                            {[...cardsData, ...cardsData].map((card, index) => (
                                <CreateCard key={index} card={card} />
                            ))}
                        </div>
                        <div className="absolute right-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-l from-amber-50 to-transparent"></div>
                    </div>

                    {/* Second Marquee Row (Reverse) */}
                    <div className="marquee-row w-full mx-auto overflow-hidden relative">
                        <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-amber-50 to-transparent"></div>
                        <div className="marquee-inner marquee-reverse flex transform-gpu min-w-[200%] py-6">
                            {[...cardsData.slice().reverse(), ...cardsData.slice().reverse()].map((card, index) => (
                                <CreateCard key={index} card={card} />
                            ))}
                        </div>
                        <div className="absolute right-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-l from-amber-50 to-transparent"></div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center mt-12">
                    <div className="inline-flex flex-col sm:flex-row gap-4">
                        <button className="px-8 py-3 bg-amber-600 text-white font-medium rounded-lg hover:bg-amber-700 transition-colors shadow-lg">
                            View Our Portfolio
                        </button>
                        <button className="px-8 py-3 bg-white text-amber-700 font-medium rounded-lg hover:bg-amber-50 transition-colors border border-amber-200 shadow-lg">
                            Book a Consultation
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ZeenatInteriorTestimonials;