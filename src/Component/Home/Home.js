import  React, {Component} from  'react'
import Navbarz from "../Navbar/Navbarz";
import Login from "../Login/Login";

import InfoHome from "./InfoHome";
 

class Home extends Component{
  state={
    clickLogin:false,
    clickRegister:false
  }

  getLogin = () => {
    let {clickLogin} =this.state
    clickLogin= !clickLogin;
    this.setState({clickLogin})
  }

  getRegister= () => {
    let {clickRegister} =this.state
    clickRegister= !clickRegister;
    this.setState({clickRegister})
  }
  render() {
    let  {clickLogin}= this.state;
    return (
      <div>
        <Navbarz
          Login={this.getLogin}
          Register={this.getRegister}
        />
        {clickLogin
        ?<div>
            <Login/>
            <InfoHome/>
        </div>
        :<InfoHome/>}
      </div>
    );
  }
}

export default Home