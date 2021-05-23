import{React, useContext} from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import Navbar from './Navbar'
import {cartContext} from "./context"

function Phones() {
const{cartValue, setCartValue, addCart,unloadCard }=useContext(cartContext)


    return (
        <div>
       
        < Navbar />

        This is for phones

        <Button bgColor= 'yellow'
                 btnText= "buy phone" 
                 btnClicked= {addCart} 
                 />
             

        <Button bgColor= 'red'
                btnText= "UnloadCart"
                btnClicked= {unloadCard}


        />

        <Link to ="/watches">
        <span>Go to watches</span>
        </Link>
        

        </div>
    )
}

export default Phones
