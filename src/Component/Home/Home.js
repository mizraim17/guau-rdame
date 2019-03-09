import  React, {Component} from  'react'
import Navbarz from "../Navbar/Navbarz";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";

class Home extends Component{
  render() {
    return (
      <div>
        <Navbarz/>
        <Login/>
        <Profile/>
      </div>
    );
  }
}

export default Home