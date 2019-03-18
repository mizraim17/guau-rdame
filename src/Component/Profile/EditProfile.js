import React, {Component} from 'react'

import {Input,Row,Col} from 'react-materialize'
class EditProfile extends Component{

  render() {
    return(
      <div>
        <Row>
          <Col offset="m1" className="white mx">
            <form>
              <Input placeholder="Placeholder" s={6} label="First Name" />
              <Input s={6} label="Last Name" />
              <Input s={12} label="disabled" defaultValue="I am not editable" disabled />
              <Input type="password" label="password" s={12} />
              <Input type="email" label="Email" s={12} />
            </form>
          </Col>
        </Row>
      </div>
    );
  }
}

export default EditProfile