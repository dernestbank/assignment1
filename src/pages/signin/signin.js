import mysignin from "./signin.module.css"

import { useHistory, Link, Redirect } from 'react-router-dom'
import {useState} from "react"



function Signin() {

  let history = useHistory();


  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")




  function enter() {
    // this will take us to the dashboard page
    // history.push("/dashboard");
  }

  const updateUsername =(e) =>{
    console.log(e.target.value)
    setUsername(e.target.value)
  }

    const updatePassword = (e) =>{

      console.log(e.target.value)
      setPassword(e.target.value)

    }

// var usernamelist = ['Ernest',"Boakye", "Danquah"]
// // {Ernest:'Boakye', Nana:'Boakye'}
// var userpasswordlist = ["yes", "okay", 'move']

// a fictitioius database
const [users, setUsers]=useState([
  {name:"samuel", password:"1234"},
  {name:"ernest", password:"MSI"},
  {name: "Ewura", password:"sam"}

])


    function signin(e){
      //to prevent the whole page from reloading
      e.preventDefault();



      if ((username == 'Ernest') && (password == 'Oliver')){
        history.push('/dashboard')

      }else{
        alert("wrong username or password")
      }


      // for (username[i]=0; i<array.length; i++ ){

      // }

      // for (var count = 0; count< users.length; count++){
      //       console.log(users[count]);
      //       if ((username == users[count].username) && (password == users[count].password))
      //       break;
      //       history
      // }

    }




  return (
    <div>





      <div className={mysignin.body} >



        <form className={mysignin.Pane}  >

          <h1 id="Login">Login</h1>

          <input type="text" onChange={updateUsername} value={username} name="" placeholder="Username" />

          <input type="password" onChange={updatePassword} value={password} name="" placeholder="Password" />
          <br />
          <input type="submit" name="" value="Login" onClick={signin} />


          <br />
          <Link to="/Signup">
            Do you have an acount?
  <br />
  
            <a href="http://">
              <span>sign up</span>
            </a>

          </Link>



        </form>





      </div>




    </div>



  )
}



export default Signin;