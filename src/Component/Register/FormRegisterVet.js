import React from 'react'
import {Row,Input,Button,Col} from 'react-materialize'

const FormRegisterVet = (props) => {
  return(
    <div>
      <Row>
        {
          console.log('props',props)
        }
        <Col s={12} m={8} offset="m2" >
          <form onSubmit={props.requestRegister}>
            <Input s={4} label="Nombre" name="name" onChange={props.onChange} />
            <Input s={4} label="Paterno" name="apaterno" onChange={props.onChange} />
            <Input s={4} label="Materno" name="amaterno" onChange={props.onChange} />
            <Input s={4} placeholder="gua@gmail.com" onChange={props.onChange}  label="email" name="email"/>
            <Input s={4}  placeholder="****" onChange={props.onChange} type="password" label="password" name="password"/>
            <Row>
              <Input s={3} label="Teléfono  " onChange={props.onChangename} name="cellphone" />
              <Input s={3} label="C.P.  " onChange={props.onChange} name="zipcode"   />
              <Input s={3} label="Estado  " onChange={props.onChange} name="state"   />
            </Row>
            <Input s={3} label="Ciudad  " onChange={props.onChange} name="city"   />
            <Input s={3} label="Número  " onChange={props.onChange} name="no_street"   />
            <Input s={3} label="Calle  " onChange={props.onChange} name="street"   />
            <Button s={12} m={12}  waves='light'>Acceder</Button><br/><br/>
          </form>
        </Col>
      </Row>
    
    </div>
  )
};

export default FormRegisterVet