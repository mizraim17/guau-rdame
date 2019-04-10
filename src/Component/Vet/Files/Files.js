import React, {Component} from 'react'
import axios from 'axios'
import {Button, Card, CardTitle, Col, Icon, Row} from "react-materialize";

import {Link} from "react-router-dom";

class Files extends Component{
  state={
    idpet:"",
    infofile:{}
  }
  getFile = () => {
    axios.get()
  }
  
  render() {
    let {idPet,infoFile} = this.state
    return(
      <>
        {
          idPet?
            <Row>
              <Card
                header={
                  <CardTitle image='' className="z-depth-2 orange  accent-12 white-text left-align ">
                    {infoFile.fecha}
                  </CardTitle>
        
                }
              >
                <Card >
                  <h5>Antecedentes</h5>
                  <p className="txt-justify"> {infoFile.antecedentes} </p>
                </Card>
                <Card>
                  <h5>Anamnesis</h5>
                  <p className="txt-justify"> {infoFile.anamnesis} </p>
                </Card>
      
                <Card>
                  <Row>
                    <Col m={2}>
                      MM:
                    </Col>
                    <Col m={2}>
                      {infoFile.MM}
                    </Col>
                    <Col m={2}>
                      FC:
                    </Col>
                    <Col m={2}>
                      {infoFile.FC}
                    </Col>
                    <Col m={2}>
                      TLLC:
                    </Col>
                    <Col m={2}>
                      {infoFile.TLLC}
                    </Col>
                    <Col m={2}>
                      RD:
                    </Col>
                    <Col m={2}>
                      {infoFile.RD}
                    </Col>
                    <Col m={2}>
                      RT:
                    </Col>
                    <Col m={2}>
                      {infoFile.RT}
                    </Col>
                    <Col m={2}>
                      FR:
                    </Col>
                    <Col m={2}>
                      {infoFile.FR}
                    </Col>
                    <Col m={2}>
                      Mucosas:
                    </Col>
                    <Col m={2}>
                      {infoFile.Mucosas}
                    </Col>
                    <Col m={2}>
                      Temp:
                    </Col>
                    <Col m={2}>
                      {infoFile.Temp}
                    </Col>
                    <Col m={2}>
                      PP:
                    </Col>
                    <Col m={2}>
                      {infoFile.PP}
                    </Col>
                    <Col m={2}>
                      Pulso:
                    </Col>
                    <Col m={2}>
                      {infoFile.Pulso}
                    </Col>
                    <Col m={2}>
                      PA:
                    </Col>
                    <Col m={2}>
                      {infoFile.PA}
                    </Col>
                    <Col m={2}>
                      EM:
                    </Col>
                    <Col m={2}>
                      {infoFile.EM}
                    </Col>
                    <Col m={2}>
                      CC:
                    </Col>
                    <Col m={2}>
                      {infoFile.CC}
                    </Col>
                    <Col m={2}>
                      Linfonodos:
                    </Col>
                    <Col m={2}>
                      {infoFile.Linfonodos}
                    </Col>
                  </Row>
                  <Row>
                    <h5>Pruebas de laboratorio</h5>
                    <Col m={2}>
                      QS:
                    </Col>
                    <Col m={2}>
                      {infoFile.lab_QS}
                    </Col>
                    <Col m={2}>
                      EM:
                    </Col>
                    <Col m={2}>
                      {infoFile.lab_HG}
                    </Col>
                    <Col m={2}>
                      EM:
                    </Col>
                    <Col m={2}>
                      {infoFile.lab_U}
                    </Col>
                    <Col m={2}>
                      {infoFile.lab_Rx}
                    </Col>
        
                  </Row>
                </Card>
                <Button waves='light'>Tratamiento<Icon right>hotel</Icon></Button>
              </Card>
              <img className="materialboxed center-align"  alt="lose" width="650" src=" http://www.uco.es/organiza/departamentos/anatomia-y-anat-patologica/peques/imagenes1_archivos/image009.jpg"/>
            </Row>
          :<>
            <p>a</p>
              <Link to='/formFiles'>
                <Button floating large fabClickOnly className='green' waves='yellow' icon='pets' />
              </Link>
          </>
        }
      </>
    );
  }
}

export default Files