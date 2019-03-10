import  React from 'react';
import {Navbar, NavItem,Icon} from 'react-materialize'

const Navbarz = () => {
  const logo = <Icon>attach_file</Icon>;
  const logo2 = "Guau-rdame";
  return(
   <div>
     <Navbar brand={logo2 } left className="cyan accent-4" >
       <NavItem href='/'>  Inicio</NavItem>
       <NavItem href='/calendar'>Servicios</NavItem>
       <NavItem href='/profile'> FAQ   </NavItem>
     </Navbar>
   </div>
  );
}

export  default Navbarz