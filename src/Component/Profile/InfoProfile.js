import React from 'react';
import {Card, CardTitle, Col, Row, Button} from "react-materialize";
import {Link} from "react-router-dom";

const InfoProfile = (props) => {
  return(

      <Card
        className="red accent-1 white-text"
        horizontal
        header={
        <CardTitle
          responsive="true"
          className="z-depth-2"
          
        >
        </CardTitle>}
        
        actions={[
          <div>
          <Link to='/editProfile'>
            <Button floating large fabClickOnly className='' waves='yellow' icon='edit' />
          </Link>
          <Link to='/addPets'>
            <Button floating large fabClickOnly className='green' waves='yellow' icon='pets' />
          </Link>
          </div>
        ]}>
       
          {/*{console.log('9999999999infopet',props.infoPet[0])}*/}
        
        {
          props.infoPet!==null
          ?
          <div>
             <Row >
               <Col m={12} s={12} >
                 <img src={props.infoPet['image']} width="400" alt="photo"/>
               </Col>
               <Col m={4} s={12} >
                 <h5 className="txt-bold" >Peso:<span className="txt-normal" >{props.infoPet['weight']}</span> </h5>
               </Col>
               <Col m={4} s={12} >
                 <h5 className="txt-bold" >Especie:<span  className="txt-normal" >{props.infoPet['species']}</span> </h5>
               </Col>
               <Col m={4} s={12}>
                 <h5 className="txt-bold" >Sexo:<span  className="txt-normal" >{props.infoPet['sex']}</span> </h5>
               </Col>
              
             </Row>
             <Row >
               <Col m={4}  >
               <h4 className="txt-bold" >Nombre: <span  className="txt-normal" >{`${props.infoPet['name']} ${props.infoPet['lastName']}`}</span> </h4>
               </Col>
               <Col m={4} >
               <h5 className="txt-bold" >Edad: <span  className="txt-normal" >{props.infoPet['age']}</span> </h5>
               </Col>
               <Col m={4} >
               <h5 className="txt-bold" >Castración: <span  className="txt-normal" >{props.infoPet['date_cut']}</span> </h5>
               </Col>
             </Row>
             <Row >
             <Col m={4}  >
             <h5 className="txt-bold" >Raza : <span  className="txt-normal" >{props.infoPet['breed']}</span> </h5>
             </Col>
             <Col m={4} >
             <h5 className="txt-bold" >Color: <span  className="txt-normal" >{props.infoPet['color']}</span> </h5>
             </Col>
             <Col m={4} >
             <h5 className="txt-bold" >Nacimiento: <span  className="txt-normal" >{props.infoPet['birth']}</span> </h5>
             </Col>
             </Row>
             <Row >
               <Col m={4} s={12} >
             <h5 className="txt-bold" >Señas particulares:<span  className="txt-normal" >{props.infoPet['sign_part']}</span> </h5>
             </Col>
             <Col m={4} s={12}>
             <h5 className="txt-bold" >Tatuaje:<span  className="txt-normal" >{props.infoPet['tatto']}</span> </h5>
             </Col>
             <Col m={4} s={12} >
             <h5 className="txt-bold" >Chip:<span  className="txt-normal" >{props.infoPet['chip']}</span> </h5>
             </Col>
             </Row>
          </div>
          :<Row> nad   </Row>
        }
        
        <div className="divider"> </div>
         <p className="titulo px">Información del dueño</p>
        <Row >
          <Col m={6}  >
            <h5 className="txt-bold" >Propietario: <span  className="txt-normal" >{`${props.owner['name']} ${props.owner['apaterno']} ${props.owner['amaterno']}`}</span> </h5>
          </Col>
          <Col m={6}  >
            <h5 className="txt-bold" >E-mail: <span  className="txt-normal" >{props.owner['email']}</span> </h5>
          </Col>
        </Row>
        <Row>
          <Col m={4} >
            <h5 className="txt-bold" >Celular: <span  className="txt-normal" >{props.owner['cellphone']}</span> </h5>
          </Col>
          <Col m={4}  >
            <h5 className="txt-bold" >Calle: <span  className="txt-normal" >{`${props.owner['no_street']} -${props.owner['street']}`}</span> </h5>
          </Col>
          <Col m={4}  >
            <h5 className="txt-bold" >Colonia: <span  className="txt-normal" >{props.owner['community']}</span> </h5>
          </Col>
        </Row>
        <Row>
          <Col m={4}  >
            <h5 className="txt-bold" >Estado: <span  className="txt-normal" >{props.owner['state']}</span> </h5>
          </Col>
          <Col m={4}  >
            <h5 className="txt-bold" >Ciudad: <span  className="txt-normal" >{props.owner['city']}</span> </h5>
          </Col>
          <Col m={4}  >
            <h5 className="txt-bold" >CP: <span  className="txt-normal" >{props.owner['zipcode']}</span> </h5>
          </Col>
        </Row>
      </Card>
  );
};
export default InfoProfile
