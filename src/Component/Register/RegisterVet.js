import React, {Component} from 'react';
import FormRegisterUser from "./FormRegisterUser";
import axios from 'axios'
import FormRegisterVet from "./FormRegisterVet";
class RegisterVet extends Component {
  state={
    url:"http://localhost:3005/api/user",
    form:{}
  }
  
  requestRegister = (e) => {
    e.preventDefault();
    const {form,url} = this.state;
    form['role']='vet';
    console.log('form',form)
    
    axios.post(url,form)
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
  
  
  onChangeForm = (e) => {
    
    let {form} =this.state;
    let field=e.target.name;
    form[field]= e.target.value;
    console.log("campos",form)
    
    this.setState({  form});
  }
  
  render() {
    return(
      <div>
        <h3>Registro de Veterinario</h3>
        <FormRegisterVet
          requestRegister={this.requestRegister}
          onChange={this.onChangeForm}
        />
      </div>
    );
  }
}

export default RegisterVet