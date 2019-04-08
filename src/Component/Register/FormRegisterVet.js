import React from 'react'
import {Row,Input,Button,Col} from 'react-materialize'

const  FormRegisterVet = (props) => {
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
            <Input s={4} placeholder="gua@gmail.com" onChange={props.onChange}  label="Email" name="email"/>
            <Input s={4}  placeholder="****" onChange={props.onChange} type="password" label="Password" name="password"/>
         
              <Input s={3} label="Teléfono  " onChange={props.onChange} name="cellphone" />
              <Input s={3} label="C.P.  " onChange={props.onChange} name="zipcode"   />
              <Input s={3} label="Estado  " onChange={props.onChange} name="state"   />
       
            <Input s={3} label="Ciudad  " onChange={props.onChange} name="city"   />
            <Input s={3} label="Número  " onChange={props.onChange} name="no_street"   />
            <Input s={3} label="Calle  " onChange={props.onChange} name="street"   />
         
            <Input s={3} label="Cédula  " onChange={props.onChange} name="cedula" />
            <Input s={3} label="Foto" onChange={props.onChange} name="photo"   />
            <Input s={3} label="Especialidad  " onChange={props.onChange} name="studies"   />
            
            
            <Button s={12} m={12}  waves='light'>Guaurdar</Button><br/><br/>
          </form>
        </Col>
      </Row>
    
    </div>
  )
};

export default FormRegisterVet