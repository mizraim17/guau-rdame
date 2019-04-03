import React, {Component} from 'react';
import {Card, Col,  Row, Input, Icon, Tabs, Tab, Button} from 'react-materialize'
import {Link, withRouter} from "react-router-dom";

class Login  extends  Component {
  state={
    form:[]
  };

  login = (e) => {
    e.preventDefault();
    let {form} = this.state;
    console.log('history',this.props)
    console.log('form[user]',form['user'])
    if(form['user']==='nada'&&form['password']==='nada'){
      console.log('entro a si')
       this.props.history.push('/profile')
    }
    else{
      alert('no es la contraseña')
    }
  };
 
  onChangeLogin = (e) =>{
    let {form} =this.state;
     let name =e.target.name;
     form[name]=e.target.value
    console.log('form',form)
  }

  render() {
    return(
  <Row className="margin-top">
    <Col s={12} m={12} >
    <div className="section col s12 m6  offset-m3">
      <Tabs className='tab-demo z-depth-1'>
        <Tab title="Veterinario" >
          <Card  waves='light'>
            <div className=" blue-text center-align">
              <Icon className="center-align large material-icons">local_hospital</Icon>
            </div>
            <form onSubmit={this.login} >
              <Input
                s={12}
                type="text"
                name="nickname"
                onChange={this.onChangeLogin}
                required
                aria-required="true"
                label="correo"
                className="validate" validate>
                <Icon>mail_outline</Icon>
              </Input>
              <Input
                s={12}
                suggested="current-password"
                name="secretword"
                id="icon_prefix"
                type="password"
                onChange={this.onChangeLogin}
                required
                aria-required="true"
                className="validate" >
                <Icon>lock_outline</Icon>
              </Input>
              {/*<Row>*/}
              <Button s={6}  waves='light'>Acceder</Button>
              <Link to="/register/vet" className="otherFields">
                <Button s={6} waves='light'>Registrarse</Button>
              </Link>
              {/*<Row>*/}
            </form>
          </Card>
        </Tab>
      <Tab title="Usuario" active>
        <Card  waves='light'>
          <div className=" blue-text center-align">
            <Icon className="center-align large material-icons">account_circle</Icon>
          </div>
          <form onSubmit={this.login} >
            <Input
              s={12}
              
              type="text"
              name="user"
              onChange={this.onChangeLogin}
              required
              aria-required="true"
              label="correo"
              className="validate" validate>
              <Icon>mail_outline</Icon>
            </Input>
            <Input
              s={12}
              suggested="current-password"
              name="password"
              
              type="password"
              onChange={this.onChangeLogin}
              required
              aria-required="true"
              className="validate" >
              <Icon>lock_outline</Icon>
            </Input>
            {/*<Row>*/}
            <Button s={6} waves='light'>Acceder</Button>
            <Link to="/register/user" className="otherFields">
              <Button s={6} waves='light'>Registrarse</Button>
            </Link>
              {/*<Row>*/}
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

export default withRouter(Login)