import React, { useEffect, useState } from 'react';

const Toast = ({ message }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Small delay to allow CSS transition to happen on mount
    const timer = setTimeout(() => setIsVisible(true), 10);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className={`fixed top-24 right-6 z-50 transition-all duration-500 ease-out transform
        ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}
    >
      <div className="bg-brand-teal text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-4 min-w-[300px]">
        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center shrink-0">
          <span className="text-xl">✓</span>
        </div>
        <div>
          <h4 className="font-bold text-sm">Success</h4>
          <p className="text-xs opacity-90">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default Toast;
