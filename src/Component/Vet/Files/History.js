import React from 'react'
import {Button, Card, CardTitle, Col, Icon, Row} from "react-materialize";
import {Link} from "react-router-dom";
import Moment from 'react-moment'

const History =(props)=> {
 
    return(
      <>{console.log('props.historyPat',props.historyPat)}
        {
          props.historyPat?
            <Row>
              <Card
                header={
                  <CardTitle image='' className="z-depth-2 orange  accent-12 white-text left-align ">
                    <Moment format="D MMMM YYYY">
                      {props.historyPat.created_at}
                    </Moment>
                  </CardTitle>
              
                }
              >
                <Card >
                  <h5>Antecedentes</h5>
                  <p className="txt-justify"> {props.historyPat.antecedentes} </p>
                </Card>
                <Card>
                  <h5>Anamnesis</h5>
                  <p className="txt-justify"> {props.historyPat.anamnesis} </p>
                </Card>
            
                <Card>
                  <Row>
                    <Col m={2}>
                      MM:
                    </Col>
                    <Col m={2}>
                      {props.historyPat.MM}
                    </Col>
                    <Col m={2}>
                      FC:
                    </Col>
                    <Col m={2}>
                      {props.historyPat.FC}
                    </Col>
                    <Col m={2}>
                      TLLC:
                    </Col>
                    <Col m={2}>
                      {props.historyPat.TLLC}
                    </Col>
                    <Col m={2}>
                      RD:
                    </Col>
                    <Col m={2}>
                      {props.historyPat.RD}
                    </Col>
                    <Col m={2}>
                      RT:
                    </Col>
                    <Col m={2}>
                      {props.historyPat.RT}
                    </Col>
                    <Col m={2}>
                      FR:
                    </Col>
                    <Col m={2}>
                      {props.historyPat.FR}
                    </Col>
                    <Col m={2}>
                      Mucosas:
                    </Col>
                    <Col m={2}>
                      {props.historyPat.Mucosas}
                    </Col>
                    <Col m={2}>
                      Temp:
                    </Col>
                    <Col m={2}>
                      {props.historyPat.Temp}
                    </Col>
                    <Col m={2}>
                      PP:
                    </Col>
                    <Col m={2}>
                      {props.historyPat.PP}
                    </Col>
                    <Col m={2}>
                      Pulso:
                    </Col>
                    <Col m={2}>
                      {props.historyPat.Pulso}
                    </Col>
                    <Col m={2}>
                      PA:
                    </Col>
                    <Col m={2}>
                      {props.historyPat.PA}
                    </Col>
                    <Col m={2}>
                      EM:
                    </Col>
                    <Col m={2}>
                      {props.historyPat.EM}
                    </Col>
                    <Col m={2}>
                      CC:
                    </Col>
                    <Col m={2}>
                      {props.historyPat.CC}
                    </Col>
                    <Col m={2}>
                      Linfonodos:
                    </Col>
                    <Col m={2}>
                      {props.historyPat.Linfonodos}
                    </Col>
                  </Row>
                  <Row>
                    <h5>Pruebas de laboratorio</h5>
                    <Col m={2}>
                      QS:
                    </Col>
                    <Col m={2}>
                      {props.historyPat.lab_QS}
                    </Col>
                    <Col m={2}>
                      EM:
                    </Col>
                    <Col m={2}>
                      {props.historyPat.lab_HG}
                    </Col>
                    <Col m={2}>
                      EM:
                    </Col>
                    <Col m={2}>
                      {props.historyPat.lab_U}
                    </Col>
                    <Col m={2}>
                      {props.historyPat.lab_Rx}
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

export default History