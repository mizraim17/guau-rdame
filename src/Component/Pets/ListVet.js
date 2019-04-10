import React from 'react'
import {Col,Chip,Input} from 'react-materialize'

const ListVet = (props) => {
  return(
    <Col m={4}>
      <Chip className="white-text red accent-1">
        <img src="https://media.licdn.com/dms/image/C4E03AQHotlr9cp7JPQ/profile-displayphoto-shrink_200_200/0?e=1556755200&v=beta&t=abT6mNWpjKQe8mwlU8thtUNn02urixRFj-WZnMptHlo" alt="Contact Person"/>
          {props.vet.name}
      </Chip>
      <Input type="checkbox" name="vet" value={props.vet._id} label=" " onChange={props.changeForm} />
    </Col>

  )
}

export default ListVet