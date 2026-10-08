import React from 'react';

const Header = ({ cartCount, onOpenCart }) => {
  return (
    <header className="w-full bg-white py-4 shadow-sm relative z-50">
      <div className="container mx-auto px-6 flex justify-between items-center max-w-7xl">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-teal rounded-full flex items-center justify-center text-white font-bold">
            G
          </div>
          <span className="font-bold text-xl text-gray-800">Guulwade</span>
        </div>
        
        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600 mr-8">
          <a href="#home" className="hover:text-brand-teal text-gray-900 border-b-2 border-brand-teal pb-1 transition-colors">Home</a>
          <a href="#menu" className="hover:text-brand-teal transition-colors">Menu</a>
          <a href="#about" className="hover:text-brand-teal transition-colors">About Us</a>
          <a href="#contact" className="hover:text-brand-teal transition-colors">Contact</a>
        </nav>

        {/* CTA & Cart */}
        <div className="flex items-center gap-6">
          {/* Cart Button */}
          <button 
            onClick={onOpenCart}
            className="relative p-2 text-gray-600 hover:text-brand-teal transition-colors flex items-center justify-center cursor-pointer group"
            aria-label="View Cart"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-brand-red rounded-full shadow-sm">
                {cartCount}
              </span>
            )}
          </button>

          <a href="#menu" className="inline-block bg-brand-red hover:bg-brand-red-dark text-white font-bold py-2.5 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 text-sm">
            Order Now
          </a>
        </div>

      </div>
    </header>
  );
};

export default Header;
