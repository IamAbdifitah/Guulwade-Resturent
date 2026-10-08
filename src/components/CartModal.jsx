import React, { useState } from 'react';

const CartModal = ({ cart, onClose, onRemove, onCheckout }) => {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Mock prices for items that don't have them yet, or calculate total
  const totalPrice = cart.reduce((total, item) => {
    // Assuming each item costs $12 if not specified
    const price = item.price || 12;
    return total + (price * item.quantity);
  }, 0);

  const handleCheckout = () => {
    setIsCheckingOut(true);
    // Simulate network request
    setTimeout(() => {
      setIsCheckingOut(false);
      setIsSuccess(true);
      // Wait a moment then close and clear cart
      setTimeout(() => {
        onCheckout();
        onClose();
      }, 3500);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col max-h-[90vh]">
        
        {isSuccess ? (
          <div className="p-12 text-center flex flex-col items-center justify-center min-h-[400px]">
             <div className="w-20 h-20 bg-brand-teal rounded-full flex items-center justify-center text-white text-4xl mb-6 shadow-lg shadow-brand-teal/30">
               ✓
             </div>
             <h2 className="text-3xl font-extrabold text-gray-900 mb-4 tracking-tight">Thank You!</h2>
             <p className="text-gray-600 font-medium text-lg leading-relaxed">
               Your order has been successfully placed.<br/>
               Please wait <strong className="text-brand-teal">5 minutes</strong> for your items to be ready.
             </p>
          </div>
        ) : (
          <>
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-brand-gray-light">
              <h2 className="text-2xl font-extrabold text-gray-900">Your Cart</h2>
              <button 
                onClick={onClose}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-200 text-gray-500 transition-colors font-bold"
              >
                ✕
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto flex-1 custom-scrollbar">
              {cart.length === 0 ? (
                <div className="text-center py-12 text-gray-500 font-medium">
                  Your cart is currently empty.<br/>Add some delicious items to get started!
                </div>
              ) : (
                <div className="flex flex-col gap-6">
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center gap-4 border-b border-gray-50 pb-4 last:border-0 last:pb-0">
                      <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded-xl shadow-sm border border-gray-100" />
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 text-sm mb-1 line-clamp-1">{item.title}</h4>
                        <div className="text-brand-teal font-bold text-sm mb-1">${item.price || 12}.00</div>
                        <div className="text-xs text-gray-500 font-medium">Qty: {item.quantity}</div>
                      </div>
                      <button 
                        onClick={() => onRemove(item.id)}
                        className="text-red-400 hover:text-red-600 font-medium text-sm px-2 transition-colors hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 border-t border-gray-100 bg-gray-50">
                <div className="flex justify-between items-center mb-6">
                  <span className="font-bold text-gray-600">Total Amount</span>
                  <span className="font-extrabold text-2xl text-gray-900">${totalPrice.toFixed(2)}</span>
                </div>
                <button 
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                  className="w-full bg-brand-teal hover:bg-brand-teal-dark text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
                >
                  {isCheckingOut ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                      Processing...
                    </>
                  ) : 'Proceed to Checkout'}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default CartModal;
