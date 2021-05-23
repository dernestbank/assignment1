import React from 'react'

function Button(props) {
    return (
        <div >

<button style={{
    outline: "none",
    border: "none",
    fontSize: 12,
    borderRadius:5,
    padding:5,
    backgroundColor: props.bgColor,
}}
    onClick={props.btnClicked}
>
        {props.btnText}

</button>


         </div>


)
}

export default Button
