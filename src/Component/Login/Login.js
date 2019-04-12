import React, {Component} from 'react';
import {Card, Col,  Row, Input, Icon, Tabs, Tab, Button} from 'react-materialize'
import {Link, withRouter} from "react-router-dom";
import axios from 'axios';

class Login  extends  Component {
  state={
    form:{}
  };

 
  onChangeLogin = (e) =>{
    let {form} =this.state;
     let name =e.target.name;
     form[name]=e.target.value
    console.log('form',form)
  }
  
  getLogin= (e) => {
    e.preventDefault()
    let {form} = this.state;
    console.log('form--getlogin',form)

    axios.post(`https://guaur-dame.herokuapp.com/api/user/login`,form)
      .then((response)=>{
        console.log('res66666666666' ,response.data._id)
        if (response.data.role==='user'){
          localStorage.setItem('LSidUser',response.data._id)
          this.props.history.push('/profile')
        }
        
      })
    .catch((err)=>{
      window.Materialize.toast('usuario o contraseña incorrecta', 1500)
      console.log('error de login',err)
    })
  }
  
  getLoginVet= (e) => {
    e.preventDefault()
    let {form} = this.state;
    console.log('form--getlogin',form)
    
    axios.post(`https://guaur-dame.herokuapp.com/api/user/login`,form)
      .then((response)=>{
        console.log('res66666666666' ,response.data._id)
        if (response.data.role==='vet') {
          localStorage.setItem('LSidUserVet', response.data._id)
          this.props.history.push('/profileVet')
        }
      })
      .catch((err)=>{
        window.Materialize.toast('usuario o contraseña incorrecta', 1500)
        console.log('error de login',err)
      })
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
            <form onSubmit={this.getLoginVet} >
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
                label="password"
                name="password"
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
                <Button s={6} waves='light' className="red accent-1" >Registrarse</Button>
              </Link>
              {/*<Row>*/}
            </form>
          </Card>
        </Tab>
      <Tab title="Usuario"  active>
        <Card  waves='light'>
          <div className=" blue-text center-align">
            <Icon className="center-align large material-icons">account_circle</Icon>
          </div>
          <form onSubmit={this.getLogin} >
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
              label="contraseña"
              suggested="current-password"
              name="password"
              type="password"
              onChange={this.onChangeLogin}
              required
              aria-required="true"
              className="validate" >
              <Icon>lock_outline</Icon>
            </Input>
            <Button s={6} waves='light'>Acceder</Button>
            <Link to="/register/user" className="otherFields">
              <Button s={6} waves='light' className="red accent-2" >Registrarse</Button>
            </Link>
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