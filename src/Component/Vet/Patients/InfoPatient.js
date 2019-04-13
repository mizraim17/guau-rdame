import React, {Component} from 'react'
import {Button, Col, Row, Tab, Tabs} from "react-materialize";
import {Link} from "react-router-dom";
import InfoProfileVet from "../Profile/ProfileVet";

class InfoPatient extends Component {
  
 
  
  render() {
    return(
      <>
        <Row>
          <Link to='/'>
            <Button floating large fabClickOnly className='red' waves='yellow' icon='directions_run' />
          </Link>
          <Button onClick={this.infoPet} > ver info pet </Button>
          <Col s={12} m={10} offset="m1">
            <Tabs className='tab-demo z-depth-1 '>
              <Tab title="Perfil "  >
                <InfoProfileVet
                
                />
              </Tab>
           
              <Tab title="Expediente" >
              
              </Tab>
              <Tab title="Cani-Tips" >
              
              </Tab>
              <Tab title=" Citas">
              
              </Tab>
              <Tab title="Faq " >
          
              </Tab>
            </Tabs>
      
          </Col>
        </Row>
      </>
    );
  }
  
}

export default InfoProfileVet