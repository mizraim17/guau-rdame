import React from 'react'
import { Card, Col} from "react-materialize";


const Patients = (props ) => {
  return(
   <>
{     (Object.keys(props.el).length !== 0)
     ?
  <Col m={3} >
  <Card className="center-align z-depth-2 card-contacts gray-text"   >
    <img id={props.i} src={props.el[props.i]['imgPath']} width="100" alt="Contact Person"
      onClick={props.detailPatient}
    />
    <div>
      <p className="nameUser ">{ `${props.el[props.i]['name']} - ${props.el[props.i]['breed']}`}</p>
      <p className="nameUser ">   {props.el[props.i]['cellphone']} </p>
      <br/>
    </div>
  </Card>
  </Col>
     :"Áun no tienes pacientitos"}
   
   </>
  )
}

export default Patients