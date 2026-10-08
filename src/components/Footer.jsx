import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="w-full bg-brand-gray-light pt-12 pb-12 border-t border-gray-200">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Short Contact Section */}
        <div className="bg-brand-teal rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between mb-16 shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative z-10 text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-2">Want to reserve a table or order?</h2>
            <p className="opacity-90 font-medium">Call us now and our team will be happy to assist you.</p>
          </div>
          <div className="relative z-10 flex items-center gap-4 bg-white/10 p-4 rounded-2xl backdrop-blur-sm border border-white/20">
            <div className="w-12 h-12 bg-white text-brand-teal rounded-full flex items-center justify-center shadow-lg">
              <span className="text-2xl font-bold">📞</span>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest opacity-80 mb-1">24/7 Support</p>
              <div className="text-3xl font-extrabold tracking-tight">3355</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between mb-16 gap-12">
          
          {/* Brand/Logo Area */}
          <div className="w-full md:w-1/4">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-brand-teal rounded-full flex items-center justify-center text-white font-bold text-lg shadow-sm">
                G
              </div>
              <span className="font-bold text-2xl text-gray-900">Guulwade</span>
            </div>
            <p className="text-sm text-gray-500 mb-6 leading-relaxed font-medium">
              Delivering happiness and the best culinary experiences straight to your door. Fresh ingredients, masterful preparation.
            </p>
          </div>
          
          {/* Links Columns */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-extrabold text-gray-900 text-sm mb-6 uppercase tracking-wider">Service</h4>
              <ul className="flex flex-col gap-4 text-sm font-medium text-gray-500">
                <li><a href="#" className="hover:text-brand-teal transition-colors">Food Drive</a></li>
                <li><a href="#menu" className="hover:text-brand-teal transition-colors">Menu</a></li>
                <li><a href="#" className="hover:text-brand-teal transition-colors">Locations</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-extrabold text-gray-900 text-sm mb-6 uppercase tracking-wider">Policy</h4>
              <ul className="flex flex-col gap-4 text-sm font-medium text-gray-500">
                <li><a href="#about" className="hover:text-brand-teal transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-brand-teal transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-brand-teal transition-colors">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-extrabold text-gray-900 text-sm mb-6 uppercase tracking-wider">Company</h4>
              <ul className="flex flex-col gap-4 text-sm font-medium text-gray-500">
                <li><a href="#" className="hover:text-brand-teal transition-colors">Franchise</a></li>
                <li><a href="#" className="hover:text-brand-teal transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-brand-teal transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-extrabold text-gray-900 text-sm mb-6 uppercase tracking-wider">Contact</h4>
              <ul className="flex flex-col gap-4 text-sm font-medium text-gray-500">
                <li><a href="#" className="hover:text-brand-teal transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-brand-teal transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-brand-teal transition-colors">Support</a></li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Social */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
           <p className="text-gray-400 text-sm font-medium">&copy; 2026 Guulwade Restaurant. All rights reserved.</p>
           <div className="flex gap-4">
             <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-brand-teal hover:border-brand-teal hover:text-white transition-all shadow-sm">fb</a>
             <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-brand-teal hover:border-brand-teal hover:text-white transition-all shadow-sm">tw</a>
             <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-brand-teal hover:border-brand-teal hover:text-white transition-all shadow-sm">in</a>
             <a href="#" className="w-10 h-10 rounded-full bg-brand-teal border border-brand-teal flex items-center justify-center text-white hover:bg-brand-teal-dark hover:border-brand-teal-dark transition-all shadow-md shadow-brand-teal/20">ig</a>
           </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
