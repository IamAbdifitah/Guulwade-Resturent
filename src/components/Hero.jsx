import React from 'react';
import heroImg from '../assets/hero_burgers_light_1791391210901.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative w-full">
      {/* Hero Background with Gradient Overlay */}
      <div 
        className="relative pt-24 pb-32 bg-cover bg-right md:bg-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        {/* Gradient overlay: strong white on left, transparent on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-transparent"></div>
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="max-w-2xl">
            <p className="text-brand-teal font-bold text-sm mb-4 tracking-[0.2em] uppercase">Crispy Tasty</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6 tracking-tight">
              SYUCUL <span className="text-brand-teal">CARENG</span><br />
              WITH FENWL <span className="text-brand-teal">OF</span><br />
              CHEINDE DASS WITH<br />
              CLE <span className="text-brand-teal">YOU S.TIME</span>
            </h1>
            <p className="text-gray-800 mb-8 leading-relaxed font-medium text-lg max-w-lg">
              Enjoy the most delicious and perfectly crafted meals. We serve only the freshest ingredients with top-notch quality and fastest delivery right to your door.
            </p>
            <button 
              onClick={() => document.getElementById('menu').scrollIntoView({ behavior: 'smooth' })}
              className="bg-brand-teal hover:bg-brand-teal-dark text-white font-bold py-3.5 px-10 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
              ORDER NOW &gt;
            </button>
          </div>
        </div>
      </div>

      {/* Info Cards - Completely separated from the background image */}
      <div className="bg-brand-gray-light py-16">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 shadow-sm rounded-2xl overflow-hidden relative z-20">
            
            <div className="bg-brand-teal p-10 text-white transition-transform hover:scale-[1.02] cursor-pointer shadow-lg z-10">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">📍</span>
              </div>
              <h3 className="font-bold text-xl mb-3">Easy to order</h3>
              <p className="text-sm opacity-90 leading-relaxed font-medium">
                Choose location and find the nearest restaurants to you.
              </p>
            </div>
            
            <div className="bg-brand-yellow p-10 text-white transition-transform hover:scale-[1.02] cursor-pointer shadow-xl z-20">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🚚</span>
              </div>
              <h3 className="font-bold text-xl mb-3">Fastest Delivery</h3>
              <p className="text-sm opacity-90 leading-relaxed font-medium">
                Delivery that is always on-time even faster.
              </p>
            </div>

            <div className="bg-brand-green-dark p-10 text-white transition-transform hover:scale-[1.02] cursor-pointer shadow-lg z-10">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="font-bold text-xl mb-3">Best Quality</h3>
              <p className="text-sm opacity-90 leading-relaxed font-medium">
                Not only fast, the quality is also number one for us.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
