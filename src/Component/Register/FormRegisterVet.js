import React from 'react'
import {Row,Input,Button,Col} from 'react-materialize'
import {Link} from "react-router-dom";

const  FormRegisterVet = (props) => {
  return(
    <div>
      <Row>
        {
          console.log('props',props.comboCp)
        }
        <Col s={12} m={8} offset="m2" >
          <form onSubmit={props.requestRegister}>
            <Input s={4} required label="Nombre" name="name" onChange={props.onChange} />
            <Input s={4} required label="Paterno" name="apaterno" onChange={props.onChange} />
            <Input s={4} label="Materno" name="amaterno" onChange={props.onChange} />
            <Input s={4} required type="email"  placeholder="gua@gmail.com" onChange={props.onChange}  label="Email" name="email"/>
            <Input s={4} required  minLength="6"  placeholder="****" onChange={props.onChange} type="password" label="Password" name="password"/>
            <Input s={3} required label="Teléfono" onChange={props.onChange} name="cellphone" />
            <Input s={3} label="C.P.  " onChange={props.onChange} name="zipcode"   />
           <Input  s={3}  label="Estado" name="state"  onChange={props.onChange} />
           <Input  s={3} label="Ciudad" name="city" onChange={props.onChange} />
            <Input s={3} label="Número  " onChange={props.onChange} name="no_street"   />
            <Input s={3} label="Calle  " onChange={props.onChange} name="street"   />
         
            <Input s={3} label="Cédula  " onChange={props.onChange} name="cedula" />
            <Input s={3} label="Foto" name="image" type="file" onChange={props.changeFile}   />
            <Input s={3} label="Especialidad  " onChange={props.onChange} name="studies"   />
  
            <Link to={'/'}>
              <Button s={12} m={12} className="orange"  waves='light'>Regresar</Button>
            </Link>
            <Button s={12} m={12}  waves='light'>GuaUrdar</Button> <br/><br/>
          </form>
        </Col>
      </Row>
    
    </div>
  )
};

export default FormRegisterVet