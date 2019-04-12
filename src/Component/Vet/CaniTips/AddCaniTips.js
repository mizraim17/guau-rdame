import React from 'react'
import {Button,  Col, Input, Row } from "react-materialize";
import {Link} from "react-router-dom";

const AddCaniTips= (props) => {

  return(
 
       
          <Col m={8} lassName="z-depth-2 pt"  offset="m2">
            <form onSubmit={props.submitTip} >
            <Input  s={6} label="Título del tip" name="title" required onChange={props.changeForm}/>
              
                <Input s={6} type="select" name="topic" defaultValue="2"  onChange={props.changeForm}>
                  <option value="2">Categoría del tip</option>
                  <option value="Salud">Salud</option>
                  <option value="Belleza">Belleza</option>
                  <option value="Cuidado">Cuidado</option>
                  <option value="Alimentación">Alimentación</option>
                  <option value="General">General</option>
                </Input>
                {/*<Input type="checkbox" label=" uno "  name="uno"  checked={props.Checked} onChange={props.changeForm} />*/}
                {/*<Input type="checkbox" label=" dos  " name="dos"   onChange={props.changeForm} />*/}
                {/*<Input type="checkbox" label=" tres " name="tres"   onChange={props.changeForm} />*/}
          
            <Input s={12} label="Tip" name="tip"  type='textarea' required onChange={props.changeForm}/>
            
            <Row>
              <Col m={12}  >
                <br/>
                <Link to={'/profileVet'}>
                  <Button s={12} m={12} className="orange" waves='light'>Regresar</Button>
                </Link>
                <Button s={12} m={12}  waves='light'>GuaUrdar</Button>
              </Col>
            </Row>
          </form>
          </Col>
     
 
  )
}

export default  AddCaniTips