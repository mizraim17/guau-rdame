import React, {Component} from 'react';
import {Button, Col, Input, Row} from "react-materialize";
import {Link} from "react-router-dom";
import  axios from 'axios'
class AddPets extends Component {
  state={
    form:{},
    LSinfoPet:""
  }
  
  changeForm = (e) => {
    let {form} = this.state;
    let name= e.target.name;
    form['UserID']=localStorage.getItem('LSidUser')
    console.log('USERID=>',form['UserID'])
    form[name]=e.target.value;
    this.setState({form})
    console.log('form->',form)
  }
  
  submitForm = () => {
    let {form,LSinfoPet} = this.state;
    
    axios.post('http://localhost:3005/api/pet',form)
      .then((res)=>{
        console.log('respet',res.data)
        localStorage.setItem('LSinfoPet',JSON.stringify(res.data))
        this.props.history.push('/profile')
      })
    
    .catch((err)=>{
      console.log('err',err)
    })
   
  }
  
  render() {
    return (
      <Row>
        <Col m={8} offset="m2" className="z-depth-2">
          
          <Input s={4} label="Peso" name="weight" onChange={this.changeForm}/>
          <Input s={4} label="Especies" name="species" onChange={this.changeForm}/>
          <Input s={4} label="Sexo" name="sex" onChange={this.changeForm}/>
          
          <Input s={4} label="Nombre" name="name" onChange={this.changeForm}/>
          <Input s={4} label="Apellido" name="lastName" onChange={this.changeForm}/>
          <Input s={4} label="Edad" name="age" onChange={this.changeForm}/>
          
          <Input s={4} label="Raza" name="breed" onChange={this.changeForm}/>
          <Input s={4} label="Color" name="color" onChange={this.changeForm}/>
          <Input s={4} label="Cumpleaños" name="birth" type="date" onChange={this.changeForm}/>
          
          <Input s={4} label="Imagen" name="image" onChange={this.changeForm}/>
          <Input s={4} label="Señas particulares" name="sign_part" onChange={this.changeForm}/>
          <Input s={4} label="tatuaje" name="tatto" onChange={this.changeForm}/>
          
          <Input s={4} label="chip" name="chip"   onChange={this.changeForm}/>
          <Input s={4} label="castracción" name="date_cut" type="date"  onChange={this.changeForm}/>
        </Col>
        <Row>
          <Col m={8} offset="m2">
            <br/>
            <Link to={'/profile'}>
              <Button s={12} m={12} className="orange" waves='light'>Regresar</Button>
            </Link>
            <Button s={12} m={12} onClick={this.submitForm} waves='light'>Acceder</Button>
          </Col>
        </Row>
      
      </Row>
    );
  }
}
export default AddPets