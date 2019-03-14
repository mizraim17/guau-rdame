import  React, {Component} from  'react'
import Navbarz from "../Navbar/Navbarz";
import Login from "../Login/Login";
 
import {Parallax} from 'react-materialize'

class Home extends Component{
  render() {
    return (
      <div>
        <Navbarz/>
        <div>
          <Parallax imageSrc="http://www.prosemedic.com/wp-content/uploads/2018/07/destacada-vet-1024x768.jpg"/>
          <div className="section white">
            <div className="row container">
              <h2 className="header">Parallax</h2>
              <h5 className="grey-text text-darken-3 lighten-3"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto aspernatur blanditiis consequuntur cum enim ex explicabo ipsum quo repellendus suscipit! Assumenda excepturi illo natus quam quia sequi similique sit voluptates! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi exercitationem impedit ipsa ipsum nobis possimus! Ab consequuntur dolorum fuga laborum laudantium nulla perferendis perspiciatis quisquam recusandae voluptates! Atque ea, necessitatibus.  </h5>
            </div>
          </div>
          <Parallax imageSrc="https://cdn.tn.com.ar/sites/default/files/styles/1366x765/public/2018/07/25/perro.jpg"/>
        </div>
        <Login/>

      </div>
    );
  }
}

export default Home