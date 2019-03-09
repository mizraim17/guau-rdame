import  React from 'react';
import {Navbar, NavItem,Icon} from 'react-materialize'

const Navbarz = () => {
  const logo = <Icon>attach_file</Icon>;
  const logo2 = "Guau-rdame";
  return(
   <div>
     <Navbar brand={logo2 } left className="green accent-2" >
       <NavItem href='get-started.html' center="true">  Guau-rdame</NavItem>
       <NavItem href='get-started.html'>  Inicio</NavItem>
       <NavItem href='components.html'>Servicios</NavItem>
     </Navbar>
   </div>
  );
}

export  default Navbarz