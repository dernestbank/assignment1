import React from 'react'


function Button(props) {
    return (
        <div>
            <button
            onClick={props.buttonclicked}
            style={{backgroundColor: props.buttoncolor}}> 
             {props.buttonname}  </button>
        </div>




    )
}

export default Button



// #set colour not working