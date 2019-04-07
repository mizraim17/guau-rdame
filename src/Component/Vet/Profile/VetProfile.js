import React, {Component} from 'react';
import {Button, Col, Row, Tab, Tabs} from "react-materialize";
import {Link} from "react-router-dom";
import Patients from "../Patients/Patients";
import CaniTipsVet from "../CaniTips/CaniTipsVet";

class VetProfile extends Component{
  render() {
    return(
      <>
        <Row>
          <Link to='/'>
            <Button floating large fabClickOnly className='red' waves='yellow' icon='directions_run' />
          </Link>
          <Button onClick={this.infoPet} > ver info pet </Button>
          <Col s={12} m={10} offset="m1">
            <Tabs className='tab-demo z-depth-1'>
              <Tab title="Perfil "  >
                <CaniTipsVet/>
              </Tab>
              <Tab title="Pacientes"  >
                <CaniTipsVet/>
              </Tab>
              <Tab title="Expediente" >
                <CaniTipsVet/>
              </Tab>
              <Tab title="Cani-Tips" active>
                <CaniTipsVet/>
              </Tab>
              <Tab title=" Citas">
                <CaniTipsVet/>
              </Tab>
              <Tab title="Faq " >
                <Patients/>
              </Tab>
            </Tabs>
    
          </Col>
        </Row>
      </>
    );
  }
  
}
export default VetProfile