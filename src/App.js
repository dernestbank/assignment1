import Signin from "./pages/signin/signin"
import Signup from "./pages/signup/signup"
import Dashboard from "./pages/dashboard/dashboard.js"
import {Switch,Route} from "react-router-dom";

function App() {
  return (
      <switch>

        <Route exact path = "/" component={Signin} />

        <Route exact path = "/signup" component={Signup} />

        <Route exact path = "/Dashboard" component={Dashboard} />

      </switch>

      // <div className="App">
      
      // <Signin />

      // <Dashboard />

      //       <Signup />

      // </div>
  
  );
}

export default App;
