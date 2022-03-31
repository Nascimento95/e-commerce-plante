import { useState, useEffect } from "react"
import "../styles/Cart.css"

function Cart({cart, updateCart}) {

    const [isOpen, setIsOpen] = useState(false)

    const total = cart.reduce((acc, planteType) => acc + planteType.price * planteType.quantity,0)

    useEffect(() => {
        document.title = `LMJ: ${total}€ d'achat`
    }, [total])
    
    return isOpen ? (
        <div className='lmj-cart'>
            <button onClick={()=> setIsOpen(!isOpen)} >Fermer</button>
            <h2>Panier</h2>
            {cart.map(({ name, price, quantity, index}) => 
                <div key={`${name}-${index}`}>
                    {name} {price}€ x {quantity}
                </div>
            )}
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
