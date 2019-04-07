import React from 'react'
import {Button, Card, Col, Input, Row } from "react-materialize";
import {Link} from "react-router-dom";

const AddCaniTips= (props) => {
  debugger;
  return(
    <Row>
        <Card  waves='light' image='' className="z-depth-2 pt" >
        <Col m={10} offset="m1" >
        
          <Input s={6} label="Título" name="title" onChange={props.changeForm}/>
          <Input s={12} label="Tip" name="tip"  type='textarea' onChange={props.changeForm}/>
          <div className="center-align pb">
            <Input s={4} type="select" name="topic" defaultValue="2" label="Elige tu perfil" onChange={props.changeForm}>
              <option value="2">Elige tu opcion</option>
              <option value="Salud">Salud</option>
              <option value="Belleza">Belleza</option>
              <option value="Cuidado">Cuidado</option>
              <option value="Alimentación">Alimentación</option>
              <option value="General">General</option>
            </Input>
            {/*<Input type="checkbox" label=" uno "  name="uno"  checked={props.Checked} onChange={props.changeForm} />*/}
            {/*<Input type="checkbox" label=" dos  " name="dos"   onChange={props.changeForm} />*/}
            {/*<Input type="checkbox" label=" tres " name="tres"   onChange={props.changeForm} />*/}
          </div>59
        </Col>
        <Row>
          <Col m={8} offset="m2">
            <br/>
            <Link to={'/profile'}>
              <Button s={12} m={12} className="orange" waves='light'>Regresar</Button>
            </Link>
            <Button s={12} m={12} onClick={props.submitTip} waves='light'>Guardar</Button>
          </Col>
        </Row>
      </Card>
    </Row>
  )
}

export default  AddCaniTips