import  React from 'react';
import {Navbar, NavItem,Icon,Button,Modal,Row,Col} from 'react-materialize'
import Login from "../Login/Login";

const Navbarz = () => {
  const logo = <Icon>attach_file</Icon>;
  const logo2 = "Guau-rdame";
  return(
   <div>
     <Navbar brand={logo2 } left className="cyan accent-4" >
       <NavItem href='/'>  Inicio</NavItem>
       <NavItem href='/calendar'>Servicios</NavItem>
       <NavItem href='/profile'> FAQ   </NavItem>
       <NavItem href='/profile'  >
         <Modal
           // header='Modal Header'
           fixedFooter
           trigger={<Button>MODAL</Button>}>
           <Login/>
         </Modal>
       </NavItem>

     </Navbar>
   </div>
  );
}

export  default Navbarz