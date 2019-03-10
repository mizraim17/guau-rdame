import React, {Component} from 'react';
import {Card, Col,  Row, Input, Icon, Tabs, Tab, Button} from 'react-materialize'
import {Link} from "react-router-dom";

class Login  extends  Component {
  state={

  }

  login = () => {

  }

  onChangeLogin = () =>{

  }

  render() {
    return(
  <Row className="margin-top">
    <Col s={12} m={6} offset="m2">
    <div className="section col s12 m6  offset-m4">
      <Tabs className='tab-demo z-depth-1'>
        <Tab title="Veterinario" > <Card  waves='light'>
          <Icon large>local_hospital</Icon>
          <form action="">
            <div className="input-field">
              <i className="material-icons prefix ">mail_outline</i>
              <input
                id="icon_user"
                type="text"

                name="nickname"

                required
                aria-required="true"
                className="validate "/>
              <label htmlFor="icon_user">correo </label>
            </div>
            <div className="input-field">
              <i className="material-icons prefix">lock_outline</i>
              <input
                suggested="current-password"
                name="secretword"
                id="icon_prefix"
                type="password"

                required
                aria-required="true"
                className="validate"  />
              <label htmlFor="icon_prefix">Contraseña </label>
            </div>

            <div className="form-field">
              {
                <button  className="btn waves-effect waves-light" > Acceder</button>
              }
            </div>
            <div>
              <br/>
              <li className="divider" tabIndex="-1"></li>
              <br/>
            </div >
          </form>
        </Card>
        </Tab>
      <Tab title="Usuario" active> <Card  waves='light'>
        <Icon large>face</Icon>
        <form action="">
          <div className="input-field">
            <i className="material-icons prefix ">mail_outline</i>
            <input
              id="icon_user"
              type="text"
              name="nickname"
              required
              aria-required="true"
              className="validate "/>
            <label htmlFor="icon_user">correo </label>
          </div>
          <div className="input-field">
            <i className="material-icons prefix">lock_outline</i>
            <input
              suggested="current-password"
              name="secretword"
              id="icon_prefix"
              type="password"

              required
              aria-required="true"
              className="validate"  />
            <label htmlFor="icon_prefix">Contraseña </label>
          </div>

          <div className="form-field">
            <Link to="/profile" className="otherFields">
              <Button waves='light'>Acceder</Button>
            </Link>
          </div>
          <div>
            <br/>
            <li className="divider" tabIndex="-1"></li>
            <br/>
          </div >
        </form>
      </Card>
        </Tab>
        </Tabs>
    </div>
    </Col>
  </Row>
    );
  }
}

export default Login