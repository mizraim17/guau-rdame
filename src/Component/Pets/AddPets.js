import React, {Component} from 'react';
import {Button, Col, Icon, Input, Row} from "react-materialize";
import {Link} from "react-router-dom";
import  axios from 'axios'
import ListVet from "./ListVet";
class AddPets extends Component {
  state={
    form:{},
    vets:{},
    word: ""
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
  
  getVets = () => {
    
    return(axios.get('http://localhost:3005/api/user'))
    
  }
  
  showVets = (e) => {
    let {word} =this.state;
    word = e.target.value;
    this.setState({word})
  }
  
  submitForm = () => {
    let {form} = this.state;
    
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
  
  componentWillMount()  {
    this.getVets().then((response)=>{
      let {vets} = this.state;
      vets=response.data
      this.setState({vets})
      console.log(vets)
 
    })
      .catch((err)=>{
        console.log(err)
      })
  }
  
  render() {
    let {vets,word} = this.state
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
          <Input s={4} label="Tatuaje" name="tatto" onChange={this.changeForm}/>
          
          <Input s={4} label="Chip" name="chip"   onChange={this.changeForm}/>
          <Input s={4} label="Castracción" name="date_cut" type="date"  onChange={this.changeForm}/>
         
          <Input m={4} label="Veterinario" name="date_cut"  onChange={this.showVets}>
            <Icon>search</Icon>
          </Input>
        </Col>
        <Row>
          <Col m={8} offset="m2">
            <br/>
            <Link to={'/profile'}>
              <Button s={12} m={12} className="orange" waves='light'>Regresar</Button>
            </Link>
            <Button s={12} m={12} onClick={this.submitForm} waves='light'>Guaurdar</Button>
          </Col>
        </Row>
        <div  >
         
          {
  
            (Object.keys(vets).length !== 0&&word!=="") ?
              vets
            .filter(el => el.name.toLowerCase().includes(word.toLowerCase()))
              .map((el,i)=>{
               return(
                 <ListVet
                   changeForm={this.changeForm}
                   key={i}
                   vet={el}
                 />
               )
              })
              : ""
          }
        </div>
      </Row>
    );
  }
}
export default AddPets