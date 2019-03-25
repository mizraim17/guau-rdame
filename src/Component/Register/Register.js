import React, {Component} from 'react';
import FormRegister from "./FormRegister";
import axios from 'axios'
class Register extends Component {
 state={
   form:{}
 }
  requestRegister = (e) => {
    e.preventDefault();
   const {form} = this.state;
   console.log('form',form)

    axios.post("http://localhost:3005/api/user",form)
      .then((res)=>{

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
        <h1>Registro</h1>
        <FormRegister
          requestRegister={this.requestRegister}
          onChange={this.onChangeForm}
        />
      </div>
    );
  }
}

export default Register;