import  React from 'react';
import {Navbar, NavItem,Icon} from 'react-materialize'

const Navbarz = (props) => {
  const logo2 = "GuaU-rdame";
  return(
   <div>
     <Navbar brand={logo2 } left className="cyan accent-4" >
       <NavItem href='/'>  Inicio</NavItem>
       <NavItem href='/calendar'>Servicios</NavItem>
       <NavItem href='/profile'> FAQ   </NavItem>
       <NavItem href='/user'> lis-user</NavItem>
       <NavItem href='#' onClick={props.Login} >
          Login
       </NavItem>
     </Navbar>
   </div>
  );
}

export  default Navbarz