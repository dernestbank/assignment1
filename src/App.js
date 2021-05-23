// import Signin from "./pages/signin/signin"
// import Signup from "./pages/signup/signup"
// import Dashboard from "./pages/dashboard/dashboard.js"
import {Switch,Route} from "react-router-dom";

// import Componentall from "./components/componentall.js";



import Signup from "./Assignment3/Signup";
import Dashboard from "./Assignment3/Dashboard"

import Notification from './Assignment3/Notification'

import Phones from "./Jumia/Phones";
import Watches from "./Jumia/Watches";
import Signupx from "./Assignment3/Signup";


function App() {
  return (
  
      // <switch>

      //   <Route exact path = "/" component={Signin} />

      //   <Route exact path = "/signup" component={Signup} />

      //   <Route exact path = "/Dashboard" component={Dashboard} />

      //   <Route exact path = "/Componentall" component={Componentall} />


      //   <Route exact path= "/Notification" component={Notification}/>

      //   <Route exact path ="/Signupx" coomponet={Signupx} />


      // </switch>


<>

 <Signupx />
</>
// {/* < Notification/> */}
            // <>

              // <Phones />

              // {/* <Watches /> */}


              // {/* < Signup /> */}

              // {/* < Notification/> */}

              // </>
      // <div className="App">
      
      // <Signin />

      // <Dashboard />

            // <Signup />

      
          // <div className="assignment4">
          //   <switch>

          //   <Route exact path = "/" component={Phones} />

          //   <Route exact path = "/watches" component={Watches} />

          //   </switch>



          // </div>



      // </div>
  
  );
}

export default App;
