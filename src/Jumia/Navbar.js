import {React, useContext} from 'react'
import {cartContext} from "./context"


function Navbar() {

    const{cartValue,setCartvalue}= useContext(cartContext)


    return (
        <div style={{
            padding:0,
            margin:0,

            display:"flex",
            width: "100%",
            height:"30%",
            
            boxShadow:"0px 0px 5px 1px gray",
            justifyContent: "flex-end",
            alignContent:"center",
            paddingRight:30,
            backgroundColor: "blue",
        
        }}>
            
        <p>Cart: {cartValue}</p>

        </div>
    )
}

export default Navbar
