import { React, useContext } from 'react'
import { Link } from 'react-router-dom';
import Button from './Button';
import Navbar from './Navbar';
import { cartContext } from "./context"




function Watches() {

    const { cartValue, setCartValue, addCart,unloadCard } = useContext(cartContext)

    return (
        <div style={{ backgroundColor: "green", height: '100%', width: "100%", display: "flex", flexDirection: "column" }}>

            <div style={{ backgroundColor: "red", display: "flex", flex: 0.3 }}>
                <Navbar />
            </div>


            <div style={{ backgroundColor: "yellow", display: "flex", flex: 0.7 }}>
                <p> This is the watches's page</p>

                <Button
                    btnText="add to cart"
                    bgColor="red"
                    btnClicked={addCart}

                />


                <Button bgColor='red'
                    btnText="UnloadCart"
                    btnClicked={unloadCard}


                />

                <Link to="/">
                    <a >want some phones?</a>
                </Link>

            </div>


        </div>
    )
}

export default Watches;
