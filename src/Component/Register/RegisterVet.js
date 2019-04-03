import React, {Component} from 'react';
import FormRegisterUser from "./FormRegisterUser";
import axios from 'axios'
class RegisterVet extends Component {
  state={
    url:"http://localhost:3005/api/user",
    form:{}
  }
  requestRegister = (e) => {
    e.preventDefault();
    const {form,url} = this.state;
    
    console.log('form',form)
    
    axios.post(url,form)
      .then((res)=>{
        this.props.history.push('/user')
      })
      .catch((err)=>{
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
        <FormRegisterUser
          requestRegister={this.requestRegister}
          onChange={this.onChangeForm}
        />
      </div>
    );
  }
}

export default RegisterVet