import React from 'react';
import menu1 from '../assets/menu_chicken_light_1791391224894.jpg';
import menu2 from '../assets/menu_burger2_light_1791391238425.jpg';
import menu3 from '../assets/menu_meat_light_1791391257627.jpg';

const imgRice = "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=500&auto=format&fit=crop&q=60";
const imgPasta = "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=500&auto=format&fit=crop&q=60";
const imgMix = "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500&auto=format&fit=crop&q=60";
const imgFishBurger = "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=500&auto=format&fit=crop&q=60";
const imgVanillaShake = "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&auto=format&fit=crop&q=60";
const imgChocoShake = "https://images.unsplash.com/photo-1541795795328-f073b763494e?w=500&auto=format&fit=crop&q=60";
const imgIcedTea = "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500&auto=format&fit=crop&q=60";

const foodItems = [
  {
    id: 1,
    title: 'Bariis (Rice)',
    price: 1.50,
    image: imgRice,
    borderColor: 'border-brand-teal',
    shadowColor: 'shadow-brand-teal/20',
  },
  {
    id: 2,
    title: 'Baasto (Pasta)',
    price: 1.50,
    image: imgPasta,
    borderColor: 'border-brand-yellow',
    shadowColor: 'shadow-brand-yellow/20',
  },
  {
    id: 3,
    title: 'Bariis & Baasto (Mix)',
    price: 1.50,
    image: imgMix,
    borderColor: 'border-brand-teal',
    shadowColor: 'shadow-brand-teal/20',
  },
  {
    id: 4,
    title: 'Fish Burger',
    price: 4.00,
    image: imgFishBurger,
    borderColor: 'border-brand-red',
    shadowColor: 'shadow-brand-red/20',
  },
  {
    id: 5,
    title: 'Chicken Burger',
    price: 3.50,
    image: menu1,
    borderColor: 'border-brand-yellow',
    shadowColor: 'shadow-brand-yellow/20',
  },
  {
    id: 6,
    title: 'Beef Cubes',
    price: 5.00,
    image: menu3,
    borderColor: 'border-brand-teal',
    shadowColor: 'shadow-brand-teal/20',
  }
];

const drinkItems = [
  {
    id: 7,
    title: 'Vanilla Milkshake',
    price: 2.50,
    image: imgVanillaShake,
    borderColor: 'border-brand-teal',
    shadowColor: 'shadow-brand-teal/20',
  },
  {
    id: 8,
    title: 'Chocolate Milkshake',
    price: 2.50,
    image: imgChocoShake,
    borderColor: 'border-brand-yellow',
    shadowColor: 'shadow-brand-yellow/20',
  },
  {
    id: 9,
    title: 'Peach Iced Tea',
    price: 1.50,
    image: imgIcedTea,
    borderColor: 'border-brand-red',
    shadowColor: 'shadow-brand-red/20',
  }
];

const Menu = ({ onAddToCart }) => {
  return (
    <section id="menu" className="w-full bg-white pt-20 pb-20">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Food Section Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Featured Menu</h2>
          <div className="flex gap-2">
            <span className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 cursor-pointer hover:bg-brand-teal hover:text-white transition-colors shadow-sm">←</span>
            <span className="w-10 h-10 rounded-full bg-brand-teal flex items-center justify-center text-white cursor-pointer hover:bg-brand-teal-dark transition-colors shadow-md shadow-brand-teal/30">→</span>
          </div>
        </div>

        {/* Food Grid (Vertical Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {foodItems.map(item => (
            <div key={item.id} className="flex flex-col group cursor-pointer h-full">
              {/* Image with colored border frame */}
              <div className={`p-1.5 border-2 ${item.borderColor} rounded-2xl mb-5 shadow-xl ${item.shadowColor} transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl`}>
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-64 object-cover rounded-xl"
                />
              </div>
              
              {/* Title & Action */}
              <h3 className="font-bold text-xl text-gray-900 leading-tight mb-2 pr-4 group-hover:text-brand-teal transition-colors">
                {item.title}
              </h3>
              
              <div className="text-brand-teal font-extrabold text-lg mb-4">${item.price.toFixed(2)}</div>
              
              <div className="mt-auto pt-4 border-t border-gray-100">
                <button 
                  onClick={() => onAddToCart && onAddToCart(item)}
                  className="text-sm font-bold text-brand-teal border-2 border-brand-teal rounded-full px-6 py-2 hover:bg-brand-teal hover:text-white transition-colors w-full uppercase tracking-wider">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Drinks Section Header */}
        <div className="mt-24 mb-10 border-t border-gray-100 pt-16">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight text-center">Refreshing Drinks</h2>
          <p className="text-gray-500 text-center mt-3 font-medium">Perfect pairings for your meal</p>
        </div>

        {/* Drinks Grid (Horizontal Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {drinkItems.map(item => (
            <div key={item.id} className={`flex items-center p-3 border-2 ${item.borderColor} rounded-2xl shadow-md ${item.shadowColor} transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group`}>
              {/* Image */}
              <div className="shrink-0 w-28 h-28 sm:w-32 sm:h-32 rounded-xl overflow-hidden shadow-sm">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Content */}
              <div className="flex-1 ml-5 flex flex-col justify-center">
                <h3 className="font-bold text-lg text-gray-900 leading-tight mb-1 group-hover:text-brand-teal transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <div className="text-brand-teal font-extrabold text-lg mb-3">${item.price.toFixed(2)}</div>
                
                <button 
                  onClick={() => onAddToCart && onAddToCart(item)}
                  className="text-xs font-bold text-white bg-brand-teal hover:bg-brand-teal-dark rounded-full px-4 py-2 transition-colors uppercase tracking-wider w-fit">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Menu;
