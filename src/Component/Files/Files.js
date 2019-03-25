import React from 'react'
import {Card, CardTitle,Button, Icon,Col,  Row} from "react-materialize";

const Files = (props) =>{
  let info=props.infoFile
    return(
      <Row>
        <Card
          header={
            <CardTitle image='' className="z-depth-2 orange  accent-12 white-text left-align ">

             {props.infoFile.fecha}
            </CardTitle>

          }
        >
          <Card >
            <h5>Antecedentes</h5>
             <p className="txt-justify"> {props.infoFile.antecedentes} </p>
          </Card>
          <Card>
            <h5>Anamnesis</h5>
             <p className="txt-justify"> {props.infoFile.anamnesis} </p>
          </Card>

          <Card>
            <Row>
              <Col m={2}>
              MM:
              </Col>
              <Col m={2}>
              {info.MM}
              </Col>
              <Col m={2}>
                FC:
              </Col>
              <Col m={2}>
                {info.FC}
              </Col>
              <Col m={2}>
                TLLC:
              </Col>
              <Col m={2}>
               {info.TLLC}
              </Col>
              <Col m={2}>
                RD:
              </Col>
              <Col m={2}>
                {info.RD}
              </Col>
              <Col m={2}>
                RT:
              </Col>
              <Col m={2}>
                {info.RT}
              </Col>
              <Col m={2}>
                FR:
              </Col>
              <Col m={2}>
                {info.FR}
              </Col>
              <Col m={2}>
                Mucosas:
              </Col>
              <Col m={2}>
                  {info.Mucosas}
              </Col>
              <Col m={2}>
                Temp:
              </Col>
              <Col m={2}>
                  {info.Temp}
              </Col>
              <Col m={2}>
                PP:
              </Col>
              <Col m={2}>
                  {info.PP}
              </Col>
              <Col m={2}>
                Pulso:
              </Col>
              <Col m={2}>
                  {info.Pulso}
              </Col>
              <Col m={2}>
                PA:
              </Col>
              <Col m={2}>
                  {info.PA}
              </Col>
              <Col m={2}>
                EM:
              </Col>
              <Col m={2}>
                  {info.EM}
              </Col>
              <Col m={2}>
                CC:
              </Col>
              <Col m={2}>
                {info.CC}
              </Col>
              <Col m={2}>
                Linfonodos:
              </Col>
              <Col m={2}>
                {info.Linfonodos}
              </Col>
              </Row>
              <Row>
              <h5>Pruebas de laboratorio</h5>
              <Col m={2}>
                QS:
              </Col>
              <Col m={2}>
                {info.lab_QS}
              </Col>
              <Col m={2}>
                EM:
              </Col>
              <Col m={2}>
                {info.lab_HG}
              </Col>
              <Col m={2}>
                EM:
              </Col>
              <Col m={2}>
                {info.lab_U}
              </Col>
              <Col m={2}>
                {info.lab_Rx}
              </Col>

            </Row>
          </Card>
          <Button waves='light'>Tratamiento<Icon right>hotel</Icon></Button>
        </Card>
        <img className="materialboxed center-align"  alt="lose" width="650" src=" http://www.uco.es/organiza/departamentos/anatomia-y-anat-patologica/peques/imagenes1_archivos/image009.jpg"/>
      </Row>
    );

}

export default Files