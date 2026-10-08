import React from 'react';
import listImg from '../assets/menu_meat_light_1791391257627.jpg';

const DetailsList = () => {
  const listItems = [
    { id: 1, color: 'bg-brand-yellow', title: 'Premium Beef Cuts', desc: 'Sourced locally for maximum tenderness and rich, natural flavor.' },
    { id: 2, color: 'bg-brand-yellow', title: 'Fresh Herbs & Spices', desc: 'Marinated in our signature blend of aromatic herbs and authentic spices.' },
    { id: 3, color: 'bg-brand-yellow', title: 'Slow Cooked Perfection', desc: 'Simmered slowly to ensure the meat melts in your mouth with every bite.' },
    { id: 4, color: 'bg-brand-teal', title: 'Signature Glaze', desc: 'Finished with a sweet and savory glaze that perfectly balances the dish.' }
  ];

  return (
    <section className="w-full bg-white py-24">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            SIGNATURE DISHES<br />CRAFTED WITH PASSION
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-16">
          
          {/* Left Image */}
          <div className="flex-1 w-full relative">
             <div className="p-1.5 border-2 border-brand-teal rounded-2xl shadow-2xl shadow-brand-teal/20 relative group">
                <img 
                  src={listImg} 
                  alt="Special Dish" 
                  className="w-full h-96 object-cover rounded-xl transition-transform duration-500 group-hover:scale-[1.03]"
                />
             </div>
             {/* Small floating info text below image in design */}
             <div className="mt-8 flex gap-4 text-xs text-gray-500">
               <span className="text-brand-teal text-xl font-bold">■</span>
               <p className="max-w-md font-medium leading-relaxed">Discover the art of fine dining with dishes carefully constructed to deliver a symphony of flavors and textures.</p>
             </div>
          </div>
          
          {/* Right List */}
          <div className="flex-1 w-full flex flex-col gap-8 bg-brand-gray-light p-10 rounded-3xl border border-gray-100 shadow-sm">
            
            {/* List Header */}
            <h3 className="font-extrabold text-xl text-gray-900 border-b-2 border-gray-200 pb-4">Our Braised Beef Recipe</h3>
            
            <div className="flex flex-col gap-8 mt-2">
              {listItems.map(item => (
                <div key={item.id} className="flex gap-5 group">
                  <div className={`w-5 h-5 rounded-full mt-1 shrink-0 ${item.color} shadow-sm group-hover:scale-125 transition-transform`}></div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-base mb-1.5">{item.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed max-w-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
          </div>

        </div>

      </div>
    </section>
  );
};

export default DetailsList;
