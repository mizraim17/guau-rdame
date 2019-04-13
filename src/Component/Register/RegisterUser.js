import React, {Component} from 'react';
import FormRegisterUser from "./FormRegisterUser";
import axios from 'axios'
import {withRouter} from 'react-router-dom';

import IpDev from "../Ip";

class RegisterUser extends Component {
 state={
   form:{},
   formData:new FormData(),
   urlG:IpDev.url
 }
  
  submitImage = ()=> {
   let {file,formData}=this.state;
    formData.append('picture',file);
    let idUser=localStorage.getItem('LSidUser')
    
    axios.put(`${this.state.urlG}/user/${idUser}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      
    })
      .then((response)=>{
      
      })
    
      .catch((err)=>{
        console.log('error de registerUser',err )
      })
    
  }
 
  requestRegister = (e) => {
   e.preventDefault();
   let {form} = this.state;
    form['role']='user';
   
    axios.post(`${this.state.urlG}/user`,form)
      
      .then((res)=>{
     
        localStorage.setItem('LSidUser',res.data['_id'])
        if(res.data!==0){
          
          this.submitImage()
        }
        this.props.history.push('/profile')
      })
      .catch((err)=>{
        console.log(err)
        return;
      })
   
  }
  
  changeFormFile = (e) => {
    let {file}=this.state
    file=e.target.files[0];
    
    this.setState({file})
  }
  
  
  onChangeFormUser = (e) => {
    
    let {form} =this.state;

    let field=e.target.name;
    form[field]= e.target.value;
    
   
    this.setState({  form});
  }

  render() {

    return(
      <div>
        <h3>Registro de Usuario</h3>
        <FormRegisterUser
          requestRegister={this.requestRegister}
          onChange={this.onChangeFormUser}
          changeFile={this.changeFormFile}
        />
      </div>
    );
  }
}

export default withRouter(RegisterUser);