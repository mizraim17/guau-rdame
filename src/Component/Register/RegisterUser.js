import React, {Component} from 'react';
import FormRegisterUser from "./FormRegisterUser";
import axios from 'axios'
import {withRouter} from 'react-router-dom';
class RegisterUser extends Component {
 state={
   form:{},
   formData:new FormData(),
 }
  
  submitImage = ()=> {
   let {file,formData}=this.state;
    formData.append('picture',file);
    let idUser=localStorage.getItem('LSidUser')
    console.log('id user = ',idUser)
    axios.put(`https://guaur-dame.herokuapp.com/api/user/${idUser}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      
    })
      .then((response)=>{
        console.log('guardo image',response)
      })
    
      .catch((err)=>{
        console.log('error de registerUser',err )
      })
    
  }
 
  requestRegister = (e) => {
   e.preventDefault();
   let {form} = this.state;
    form['role']='user';
    axios.post('https://guaur-dame.herokuapp.com/api/user',form)
      
      .then((res)=>{
        console.log('res',res.data)
        localStorage.setItem('LSidUser',res.data['_id'])
        if(res.data!==0){
          console.log('entroooooooooooooo')
          this.submitImage()
        }
        // this.props.history.push('/user')
      })
      .catch((err)=>{
        console.log(err)
        return;
      })
    this.props.history.push('/profile')
  }
  
  changeFormFile = (e) => {
    let {file}=this.state
    file=e.target.files[0];
    console.log('change',file)
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
        <h3>Registro de Usuarios</h3>
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