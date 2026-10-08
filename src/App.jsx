import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Feature from './components/Feature';
import DetailsList from './components/DetailsList';
import Footer from './components/Footer';
import CartModal from './components/CartModal';
import Toast from './components/Toast';

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
    
    // Show Toast
    setToastMessage(`Added ${item.title} to your cart!`);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Header cartCount={cart.reduce((total, item) => total + item.quantity, 0)} onOpenCart={() => setIsCartOpen(true)} />
      <main>
        <Hero />
        <Menu onAddToCart={addToCart} />
        <Feature />
        <DetailsList />
      </main>
      <Footer />
      
      {isCartOpen && (
        <CartModal 
          cart={cart} 
          onClose={() => setIsCartOpen(false)} 
          onRemove={removeFromCart}
          onCheckout={clearCart}
        />
      )}
      
      {toastMessage && <Toast message={toastMessage} />}
    </div>
  );
}

export default App;
