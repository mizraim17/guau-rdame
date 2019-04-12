import React, {Component} from 'react';
import axios from 'axios'
import FormRegisterVet from "./FormRegisterVet";

import IpDev from "../Ip";

class RegisterVet extends Component {
  state={
    form:{},comboCp:{},
    data:{},
     urlG:IpDev.url
  
  }
  
  requestRegister = (e) => {
    e.preventDefault();
    const {form} = this.state;
    form['role']='vet';
    console.log('form',form)

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
    console.log('change',file)
    this.setState({file})
  }
  
  onChangeForm = (e) => {

      let {form,data,comboCp} = this.state;
      console.log('form---------->',form)
      let name= e.target.name;
      form[name]=e.target.value;
      if(name==='zipcode'&&form['zipcode'].length===5){
        console.log('cp',form['cp'])
        axios.get(`http://sepomex.icalialabs.com/api/v1/zip_codes?cp=${form['zipcode']}`)
          .then(res => {
            data=res.data.zip_codes;
            console.log(data);
            comboCp=data;
            form['state']=comboCp[0]['d_estado'];
            form['city']=comboCp[0]['d_mnpio'];
            console.log(comboCp)
          
            this.setState({comboCp,form})
          })
        
          .catch(err => {
          
            console.log(err);
          })
      
      }
      console.log('municipio=====>',comboCp)
    
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