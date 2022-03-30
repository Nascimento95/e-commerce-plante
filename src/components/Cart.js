import { useState } from "react"
import "../styles/Cart.css"

function Cart({cart, updateCart}) {

    // const [cart, updateCart] = useState(0)
    const [isOpen, setIsOpen] = useState(false)


    const total = cart.reduce((acc, planteType) => acc + planteType.price * planteType.quantity,0)

    return isOpen ? (
        <div className='lmj-cart'>
            <button onClick={()=> setIsOpen(!isOpen)} >Fermer</button>
            <h2>Panier</h2>
            {cart.map(({ name, price, quantity, index}) => 
                <div key={`${name}-${index}`}>
                    {name} {price}€ x {quantity}
                </div>
            )}
            {/* <div>
                monstera : {monsteraPrice}€
            </div> */}
            <p>
                Total : {total}€  
            </p>
            <button onClick={()=> updateCart([])}>Vider le panier</button>
        </div>
        )
        :
        (
            <div className="lmj-cart">
                <button  onClick={()=> setIsOpen(!isOpen)}>Ouvrir le panier</button>
            </div>
        )
}

export default Cart
