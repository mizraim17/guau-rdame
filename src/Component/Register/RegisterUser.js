import React, {Component} from 'react';
import FormRegisterUser from "./FormRegisterUser";
import axios from 'axios'
import {withRouter} from 'react-router-dom';
class RegisterUser extends Component {
 state={
   form:{}
   
 }
  requestRegister = (e) => {
   e.preventDefault();
   let {form} = this.state;

    axios.post('http://localhost:3005/api/user',form)
      
      .then((res)=>{
        console.log('res',res.data['_id'])
        localStorage.setItem('LSidUser',res.data['_id'])
        // this.props.history.push('/user')
      })
      .catch((err)=>{
        console.log(err)
        return;
      })
    this.props.history.push('/user')
  }



  onChangeFormUser = (e) => {
    
    let {form} =this.state;
    form['role']='user';
    let field=e.target.name;
    form[field]= e.target.value;
    // console.log("campos",form)
   
    this.setState({  form});
  }

  render() {

    return(
      <div>
        <h3>Registro de Usuarios</h3>
        <FormRegisterUser
          requestRegister={this.requestRegister}
          onChange={this.onChangeFormUser}
        />
      </div>
    );
  }
}

export default withRouter(RegisterUser);