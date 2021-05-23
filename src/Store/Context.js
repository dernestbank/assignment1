import {createContext, useState } from 'react'


const MyContext = createContext();




function MyProvider(props){

 const [username, setusername] = useState()

    return(
        
        <div>
            <MyContext.Provider value={{username, setusername}}>

            {props.children}

            </MyContext.Provider >
        </div>
        )

}


export { MyContext,MyProvider }