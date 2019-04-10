import React from 'react';
import {Card, CardTitle, Col, Row, Button} from "react-materialize";
import {Link} from "react-router-dom";

const InfoProfileVet = (props) => {
  
  return(
    
    <Card
      className="blue accent-1 white-text"
      horizontal
      header={
        <CardTitle
          image=''
          responsive="true"
          className="z-depth-2"
        >
        </CardTitle>}
      
      actions={[
        <div>
          <Link to='/editProfile'>
            <Button floating large fabClickOnly className='' waves='yellow' icon='edit' />
          </Link>
        
        </div>
      ]}>
      
      <div className="divider"> </div>
      <p className="titulo px">Información del Veterinario</p>
      <Row >
        <Col m={6}  >
          <h5 className="txt-bold" >Name: <span  className="txt-normal" >{`${props.infoVet['name']} ${props.infoVet['apaterno']} ${props.infoVet['amaterno']}`}</span> </h5>
        </Col>
        <Col m={6}  >
          <h5 className="txt-bold" >E-mail: <span  className="txt-normal" >{props.infoVet['email']}</span> </h5>
        </Col>
      </Row>
      <Row>
        <Col m={4} >
          <h5 className="txt-bold" >Celular: <span  className="txt-normal" >{props.infoVet['cellphone']}</span> </h5>
        </Col>
        <Col m={4}  >
          <h5 className="txt-bold" >Calle: <span  className="txt-normal" >{`${props.infoVet['no_street']} -${props.infoVet['street']}`}</span> </h5>
        </Col>
        <Col m={4}  >
          <h5 className="txt-bold" >Colonia: <span  className="txt-normal" >{props.infoVet['community']}</span> </h5>
        </Col>
      </Row>
      <Row>
        <Col m={4}  >
          <h5 className="txt-bold" >Estado: <span  className="txt-normal" >{props.infoVet['state']}</span> </h5>
        </Col>
        <Col m={4}  >
          <h5 className="txt-bold" >Ciudad: <span  className="txt-normal" >{props.infoVet['city']}</span> </h5>
        </Col>
        <Col m={4}  >
          <h5 className="txt-bold" >CP: <span  className="txt-normal" >{props.infoVet['zipcode']}</span> </h5>
        </Col>
      </Row>
    </Card>
  );
};
export default InfoProfileVet
