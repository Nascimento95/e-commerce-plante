import Banner from "./Banner";
import Cart from './Cart';
import ShoppingList from "./ShoppingList";
import Footer from "./Footer";

import "../styles/index.css"
import { useState } from 'react';

const App = () => {
  
  const [cart, updateCart] = useState([])

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