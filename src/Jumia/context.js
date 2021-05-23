import { createContext, useState } from 'react'



const cartContext = createContext()
console.log(cartContext);


function CartProvider(props) {
  

    const [cartValue, setCartValue] = useState(0)

// a function to increase the number on cart
    function addCart(){
        let totalCart= cartValue
        totalCart++
        setCartValue(totalCart)
    
    }

    function unloadCard(){
        let totalCart= cartValue
        totalCart--
        
        setCartValue(totalCart>=0? totalCart: 0)
    }

    return (

        <cartContext.Provider value={{cartValue,setCartValue,addCart, unloadCard}}>

            {
                props.children
            }

        </cartContext.Provider>


    );
}

export { cartContext, CartProvider }