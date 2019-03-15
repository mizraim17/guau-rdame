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
              <h2 className="header">Expediente</h2>
              <h5 className="grey-text text-darken-3 lighten-3"> Nunca había sido tan fácil llevar el control de la Salud de tu Mascota, revisa el historial de tratamientos de tu mascota  </h5>
            </div>
          </div>
          <Parallax imageSrc="https://cdn.tn.com.ar/sites/default/files/styles/1366x765/public/2018/07/25/perro.jpg"/>
          <div className="section white">
            <div className="row container">
              <h2 className="header">Recordatorios</h2>
              <h5 className="grey-text text-darken-3 lighten-3"> No olvides las vacunas y  citas  de tu mascota, recibe recordatorios de sus citas con previa anticipáción para planear adecuadamente tu día a día  </h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home