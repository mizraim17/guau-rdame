import React, {Component} from 'react';
import axios from 'axios'
import FormRegisterVet from "./FormRegisterVet";

import IpDev from "../Ip";

class RegisterVet extends Component {
  state={
    form:{},
    data:{},
     urlG:IpDev.url
  
  }
  
  requestRegister = (e) => {
    e.preventDefault();
    const {form} = this.state;
    form['role']='vet';
   

    axios.post(`${this.state.urlG}/user`,form)
      
      .then((res)=>{
        window.Materialize.toast('Registro exitoso ', 2300)
        window.Materialize.toast('Ya puedes acceder en el Login', 3000)
        this.props.history.push('/')
      })
      .catch((err)=>{
        window.Materialize.toast('Error al registrarse contacte al administrador', 1500)
        console.log(err)
      })
  }
  
  changeFormFile = (e) => {
    let {file}=this.state
    file=e.target.files[0];
    
    this.setState({file})
  }
  
  onChangeForm = (e) => {

      let {form} = this.state;
   
      let name= e.target.name;
      form[name]=e.target.value;
     
    
    }

  
  render() {
    let {comboCp,form}= this.state
    return(
      <div>
        <h3>Registro de Veterinario</h3>
        <FormRegisterVet
          requestRegister={this.requestRegister}
          onChange={this.onChangeForm}
          changeFile={this.changeFormFile}
          comboCp={comboCp}
          form={form}
        />
      </div>
    );
  }
}

export default RegisterVet