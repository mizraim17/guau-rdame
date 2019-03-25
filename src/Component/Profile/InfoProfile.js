import React from 'react';
import {Card, CardTitle, Col, Row,Button} from "react-materialize";
import {Link} from "react-router-dom";

const InfoProfile = (props) => {
  return(

      <Card
        className="red accent-1 white-text"
        horizontal
        header={
        <CardTitle
          responsive
          className="z-depth-2"
         image={props.user['image']}
        >
        </CardTitle>}
        actions={[<Link to='/editProfile'><Button floating large fabClickOnly className='green' waves='yellow' icon='edit' /></Link>]}>

        <Row >
          <p className="titulo">Información de la Mascota</p> <br/>
          <Col m={4}  >
            <h5 className="txt-bold" >Nombre: <span  className="txt-normal" >{props.user['name']}</span> </h5>
          </Col>
          <Col m={4} >
            <h5 className="txt-bold" >Edad: <span  className="txt-normal" >{props.user['age']}</span> </h5>
          </Col>
          <Col m={4}  >
            <h5 className="txt-bold" >Sexo: <span  className="txt-normal" >{props.user['sex']}</span> </h5>
          </Col>
        </Row>
        <Row >
          <Col m={4} s={12} >
            <h5 className="txt-bold" >Peso:<span  className="txt-normal" >{props.user['weight']}</span> </h5>
          </Col>
          <Col m={4} s={12}>
            <h5 className="txt-bold" >Color:<span  className="txt-normal" >{props.user['color']}</span> </h5>
          </Col>
          <Col m={4} s={12} >
            <h5 className="txt-bold" >Especie:<span  className="txt-normal" >{props.user['species']}</span> </h5>
          </Col>
        </Row>
        <Row >
          <Col m={4}  >
            <h5 className="txt-bold" >Raza: <span  className="txt-normal" >{props.user['breed']}</span> </h5>
          </Col>
          <Col m={4} >
            <h5 className="txt-bold" >Nacimiento: <span  className="txt-normal" >{props.user['birth']}</span> </h5>
          </Col>
          <Col m={4} >
            <h5 className="txt-bold" >Castración: <span  className="txt-normal" >{props.user['date_cut']}</span> </h5>
          </Col>
        </Row>
        <Row >
          <Col m={4}  >
            <h5 className="txt-bold" >Señas particulares: <span  className="txt-normal" >{props.user['signs_part']}</span> </h5>
          </Col>
          <Col m={4} >
            <h5 className="txt-bold" >Tatuaje: <span  className="txt-normal" >{props.user['tatto']}</span> </h5>
          </Col>
          <Col m={4} >
            <h5 className="txt-bold" >Chip: <span  className="txt-normal" >{props.user['chip']}</span> </h5>
          </Col>
        </Row>
        <div className="divider"> </div>
         <p className="titulo px">Información del dueño</p>
        <Row >
          <Col m={6}  >
            <h5 className="txt-bold" >Propietario: <span  className="txt-normal" >{props.owner['name']}</span> </h5>
          </Col>
          <Col m={6}  >
            <h5 className="txt-bold" >E-mail: <span  className="txt-normal" >{props.owner['email']}</span> </h5>
          </Col>
        </Row>
        <Row>
          <Col m={4} >
            <h5 className="txt-bold" >Celular: <span  className="txt-normal" >{props.owner['celular']}</span> </h5>
          </Col>
          <Col m={4}  >
            <h5 className="txt-bold" >Calle: <span  className="txt-normal" >{props.owner['calle']}</span> </h5>
          </Col>
          <Col m={4}  >
            <h5 className="txt-bold" >Colonia: <span  className="txt-normal" >{props.owner['colonia']}</span> </h5>
          </Col>
        </Row>
        <Row>
          <Col m={4}  >
            <h5 className="txt-bold" >Estado: <span  className="txt-normal" >{props.owner['estado']}</span> </h5>
          </Col>
          <Col m={4}  >
            <h5 className="txt-bold" >CP: <span  className="txt-normal" >{props.owner['cp']}</span> </h5>
          </Col>

        </Row>
      </Card>
  );
}
export default InfoProfile
