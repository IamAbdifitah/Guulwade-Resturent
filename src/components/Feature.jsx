import React from 'react';
import featureImg from '../assets/menu_burger2_light_1791391238425.jpg';

const Feature = () => {
  return (
    <section id="about" className="w-full bg-brand-gray-light py-20">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Left Image */}
          <div className="flex-1 w-full">
            <div className="p-1 border-2 border-brand-teal rounded-2xl shadow-xl shadow-brand-teal/10 relative overflow-hidden group">
              <img 
                src={featureImg} 
                alt="Featured Burger" 
                className="w-full h-80 object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                <span className="w-8 h-2 bg-brand-yellow rounded-full"></span>
                <span className="w-8 h-2 bg-brand-teal rounded-full"></span>
              </div>
            </div>
          </div>
          
          {/* Right Content */}
          <div className="flex-1 w-full">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
              Fresh Ingredients,<br />
              Masterful Preparation &gt;
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed text-base">
              We take pride in sourcing the highest quality, locally grown ingredients to craft meals that not only look spectacular but taste unforgettable. Our culinary team is dedicated to perfection in every single bite.
            </p>
            
            <div className="flex items-center gap-4">
              <button 
                onClick={() => document.getElementById('menu').scrollIntoView({ behavior: 'smooth' })}
                className="bg-brand-red hover:bg-brand-red-dark text-white font-bold py-3 px-8 rounded-full transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 text-sm">
                Explore Menu
              </button>
              <button 
                onClick={() => alert("Learn more about our fresh ingredients!")}
                className="bg-white border-2 border-gray-200 text-gray-700 font-bold py-3 px-8 rounded-full transition-all hover:border-gray-300 hover:bg-gray-50 hover:-translate-y-0.5 text-sm flex items-center gap-2 shadow-sm">
                Learn More
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Feature;
