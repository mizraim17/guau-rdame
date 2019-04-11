import React from 'react'

import {Input, Row, Col, Button} from 'react-materialize'
import {Link} from "react-router-dom";
 
  const EditProfile= (props)=>{
    return(
      <div>
        <Row>
          <Col offset="m1" className="white mx">
              <form onSubmit={props.requestRegister}>
              <Input s={4} label="Nombre" name="name" onChange={props.onChange} />
              <Input s={4} label="Paterno" name="apaterno" onChange={props.onChange} />
              <Input s={4} label="Materno" name="amaterno" onChange={props.onChange} />
            
              <Input s={4} placeholder="gua@gmail.com" onChange={props.onChange}  label="email" name="email"/>
              <Input s={4}  placeholder="******" onChange={props.onChange} type="password" label="password" name="password"/>
              <Input s={4} label="Teléfono  " onChange={props.onChange} name="cellphone" />
            
              <Input s={4} label="C.P.  " onChange={props.onChange} name="zipcode"   />
              <Input s={4} label="Estado  " onChange={props.onChange} name="state"   />
              <Input s={4} label="Ciudad  " onChange={props.onChange} name="city"   />
            
              <Input s={4} label="Calle  " onChange={props.onChange} name="street"   />
              <Input s={4} label="Número  " onChange={props.onChange} name="no_street"   />
              <Input s={4} label="Colonia" onChange={props.onChange} name="community"   />
              <Row>
                <Link to={'/profile'}>
                  <Button s={12} m={12} className="orange"  waves='light'>Regresar</Button>
                </Link>
                <Button s={12} m={12}  waves='light'>Guaurdar</Button>
              </Row>
            </form>
            
          </Col>
        </Row>
      </div>
    );
  }


export default EditProfile