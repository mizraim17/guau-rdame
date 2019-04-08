import React from 'react'
import {Col,Chip,Input} from 'react-materialize'

const ListVet = (props) => {
  return(
    <Col m={4}>
      <Chip className="white-text red accent-1">
        <img src={props.vet.photoPath} alt="Contact Person"/>
          {props.vet.name}
      </Chip>
      <Input type="checkbox" name="vet" value={props.vet._id} label=" " onChange={props.changeForm} />
    </Col>

  )
}

export default ListVet