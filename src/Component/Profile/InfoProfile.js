import React from 'react';
import {Card, CardTitle, Col, Row, Button} from "react-materialize";
import {Link} from "react-router-dom";
import Moment from 'react-moment'


const InfoProfile = (props) => {

  return(

      <Card
        className="red accent-1 white-text"
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
      
       
        {
           (Object.keys(props.infoPet).length !== 0)
          ?
          <div>
            <Row >
              <Col m={12} s={12} >
                <img src={props.infoPet['imgPath']} className="circle" height="200" alt="photo_profile"/>
              </Col>
              <Col m={4}  >
                <h4 className="txt-bold" >Nombre: <span  className="txt-normal" >{`${props.infoPet['name']} ${props.infoPet['lastName']}`}</span> </h4>
              </Col>
              <Col m={4} >
                <h5 className="txt-bold" >Edad: <span  className="txt-normal" > {props.infoPet['age']}</span> </h5>
              </Col>
              <Col m={4} >
                <h5 className="txt-bold" >Castración:   <span  className="txt-normal" >
                  <Moment format="D MMMM YYYY">
                    {props.infoPet['date_cut']}
                  </Moment>
                 </span> </h5>
              </Col>
            </Row>
             <Row >
            
               <Col m={4} s={12} >
                 <h5 className="txt-bold" >Peso: <span className="txt-normal" >{props.infoPet['weight']}</span> </h5>
               </Col>
               <Col m={4} s={12} >
                 <h5 className="txt-bold" >Especie:  <span  className="txt-normal" >{props.infoPet['species']}</span> </h5>
               </Col>
               <Col m={4} s={12}>
                 <h5 className="txt-bold" >Sexo: <span  className="txt-normal" >{props.infoPet['sex']}</span> </h5>
               </Col>
             </Row>
             
             <Row >
             <Col m={4}  >
             <h5 className="txt-bold" >Raza: <span  className="txt-normal" >{props.infoPet['breed']}</span> </h5>
             </Col>
             <Col m={4} >
             <h5 className="txt-bold" >Color: <span  className="txt-normal" > {props.infoPet['color']}</span> </h5>
             </Col>
             <Col m={4} >
             <h5 className="txt-bold" >Nacimiento: <span  className="txt-normal" >
               <Moment format="D MMMM YYYY">
                    {props.infoPet.birth}
                  </Moment>
             </span> </h5>
             </Col>
             </Row>
             <Row >
               <Col m={4} s={12} >
               <h5 className="txt-bold" >Señas particulares: <span  className="txt-normal" >{props.infoPet['sign_part']}</span> </h5>
               </Col>
               <Col m={4} s={12}>
               <h5 className="txt-bold" >Tatuaje: <span  className="txt-normal" >{props.infoPet['tatto']}</span> </h5>
               </Col>
               <Col m={4} s={12} >
               <h5 className="txt-bold" >Chip: <span  className="txt-normal" >{props.infoPet['chip']}</span> </h5>
               </Col>
               <div className="divider">
                 <hr/>
               </div>
               <Col m={3}>{console.log(props.infoVet)}
                  {
                    (Object.keys(props.infoVet).length !== 0)?
                   
                     <Card className="center-align z-depth-2 card-contacts gray-text"   >
                          <img src={props.infoVet['imgPath']} className="circle align-center" width="50" alt=""/>
                        <div>
                         <p className="nameUser ">{`${props.infoVet['name']} ${props.infoVet['apaterno']}`}</p>
                         <p className="nameUser ">   {`${props.infoVet['cellphone']}`} </p>
                         <br/>
                       </div>
                     </Card>
                     :""
                  }
               </Col>
             </Row><div className="divider"> </div>
          </div>
          :<Row>
              <Col m={6}>
                <img    className="circle align-center"  alt="lose" width="200" src="https://res.cloudinary.com/dultkt54v/image/upload/v1555033388/images_guaurdame/no_pet.jpg"/>
  
              </Col>
                <Col m={6}>
                  <h3>  Aún no has agregado a tu mascota, no sientes un hueco en tu corazon?   </h3>
                </Col>
              <Link to='/addPets'>
                <Button floating large fabClickOnly className='green' waves='yellow' icon='pets' />
              </Link>
            
          </Row>
        }
        
        <div className="divider"> </div>
         <p className="titulo px">Información del dueño</p>
        <Row >
          <Col m={12}  >
            {
              props.owner['imgPath']
                ? <img src={props.owner['imgPath']} className="circle align-center" width="350" alt=""/>
                : <img src="https://res.cloudinary.com/dultkt54v/image/upload/v1555125149/images_guaurdame/cosme.gif" className="circle align-center" width="250" alt=""/>
    
            }
          </Col>
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
