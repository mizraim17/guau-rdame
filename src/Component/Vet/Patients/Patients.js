import React from 'react'
import {Button, Card, CardTitle,  Row} from "react-materialize";
import {Link} from "react-router-dom";

const Patients = ( ) => {
  return(
   <>
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
       <Row  >
        <Link to='/editProfile'>
          <Button floating large fabClickOnly className='' waves='yellow' icon='edit' />
        </Link>
        <Link to='/addPets'>
          <Button floating large fabClickOnly className='green' waves='yellow' icon='pets' />
        </Link>
      </Row>
    ]}>
    
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium autem culpa, dolorem dolorum earum eligendi enim error est, fugiat id minus nam nesciunt non officia qui, rerum soluta sunt voluptas?</p>
    
  </Card>
   </>
  )
}

export default Patients