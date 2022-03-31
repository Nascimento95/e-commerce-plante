import Banner from "./Banner";
import Cart from './Cart';
import ShoppingList from "./ShoppingList";
import Footer from "./Footer";

import "../styles/index.css"
import { useState, useEffect } from 'react';

const App = () => {
  const savedCArt = localStorage.getItem('cart')
  const [cart, updateCart] = useState(savedCArt ? JSON.parse(savedCArt) : [])
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  console.log(cart)
  return (
    <div>
      <Banner/>
      <div className="plant-cart">
        <Cart cart={cart}  updateCart={updateCart}/>
        <ShoppingList cart={cart}  updateCart={updateCart}/>
      </div>
      <Footer/>
    </div>
  )
};

export default App;