import React from 'react'
import {Row,Input,Button,Col} from 'react-materialize'

const FormRegister = (props) => {
  return(
    <div>
      <Row>
        {
          console.log('props',props)
        }
        <Col s={12} m={8} offset="m2" >
        <form onSubmit={props.requestRegister}>
          <Input   s={3} label="Nombre" name="name" onChange={props.onChange} />
          <Input placeholder="gua@gmail.com" onChange={props.onChange} s={3} label="email" name="email"/>
          <Input placeholder="****" onChange={props.onChange} s={3} type="password" label="password" name="password"/>
          <Input s={3} label="Teléfono  " onChange={props.onChangename} name="cellphone" />
          <Input s={3} label="Calle  " onChange={props.onChange} name="street"   />
          <Input s={3} label="Número  " onChange={props.onChange} name="no_street"   />
          <Input s={3} label="C.P.  " onChange={props.onChange} name="zipcode"   />
          <Input s={3} label="Estado  " onChange={props.onChange} name="state"   />
          <Input s={3} label="Ciudad  " onChange={props.onChange} name="city"   />
          <Button s={12} m={12}  waves='light'>Acceder</Button><br/><br/>
        </form>
        </Col>
      </Row>



    </div>
  )
};

export default FormRegister