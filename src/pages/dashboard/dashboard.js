import mydash from "./dashboard.module.css";

import Button from "../../components/button/button"

import {useHistory} from 'react-router-dom'

import {useState, useContext, useEffect} from 'react'
import {MyContext} from '../../Store/Context'

function Dashboard() {


    let { username, setUsename} = useContext(MyContext)
    



    let history = useHistory();

    const enter =(e)=>{
    e.preventDefault();
    console.log("you've clicked to enter")

    
    history.push('/')
}
const [name, setName] = useState("Kwame")


//useEffect without dependency[]
// it takes effect when the component reders for the first time and when a state is changed
useEffect(()=>{
console.log("message 1")
})

// useEffect with dependency[]

// it takes effect only when the component renders for the first time
useEffect(()=>{
    console.log('message 2')
},[])

// with a specific dependency
// only when the state variable(dependent) changes
// note that when ever a page refreshes it a state variable is change to it's initial state.
useEffect(()=>{
    console.log("message 3")
},[name])

// it is triggered when any of the dependencies is changed
useEffect(()=>{
    console.log("message 4")
},[name, number])

// this is triggered when the component is being unmounted
useEffect(()=>{

    return () =>{
        console.log('message 5')
    }
})



    return (

        <div className={mydash.full} >

            <p>This is the Dashboard</p>

            <Button buttonname="Dashboard" 
                    buttoncolor = "red"
                    buttonclicked= {enter}
                    
                    
                    />

        

        </div>


    )

}

export default Dashboard;