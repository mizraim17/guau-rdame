import React, {Component} from 'react';
import {Button, Col, Icon, Input, Row} from "react-materialize";
import {Link} from "react-router-dom";
import  axios from 'axios'
import ListVet from "./ListVet";

import IpDev from "../Ip";

class AddPets extends Component {
  state={
    form:{},
    formData:new FormData(),
    vets:{},
    word: "",
    file:null,
    urlG:IpDev.url
  }
  
  getVets = () => {
    
    return(axios.get(`${this.state.urlG}/user`))
    
  }
  
  showVets = (e) => {
    this.setState({word:e.target.value})
  }
  
  changeFormFile = (e) => {
    let {file}=this.state
    file=e.target.files[0];
   
    this.setState({file})
  }
  
  submitImage= () =>{
    let {file,formData} = this.state;
    formData.append('picture',file);
    formData.append('UserID',localStorage.getItem('LSidUser'));
    
    if(file!==null)
    {
 
      axios.post(`${this.state.urlG}/pet`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      })
      .then((res)=>{
        
        localStorage.setItem('LSinfoPet',JSON.stringify(res.data))
        
        if(res.data!==0){
           
           this.submitForm()
        }
      })
      
      .catch((err)=>{
        console.log('err',err)
      })
    }
    
  else {
    window.Materialize.toast('el campo foto es obligatorio', 1500)
  }
}
  
  submitForm = () => {
    let {form} = this.state;

     console.log('form---------------',form)
    
    let petId=JSON.parse(localStorage.getItem('LSinfoPet'))
    console.log('petId---------------',petId._id)
    axios.put(`${this.state.urlG}/pet/${petId._id}`, form)
      
      .then((res)=>{
        console.log(res)
        this.setState({loaded:true})
        this.props.history.push('/profile')
        
      })
    
    .catch((err)=>{
      console.log('err submitForm',err)
    })
   
  }
  
  changeForm = (e) => {
    let {form} = this.state;
    let name= e.target.name;
    
    form[name]=e.target.value;
    form[name]=e.target.value;
    console.log('formData---------------',form)
    this.setState({form})
    
  }
  
  componentWillMount()  {
    let {vets,loaded} = this.state;
    this.getVets()
      .then((response)=>{
      vets=response.data
        loaded=true;
       
      this.setState({vets,loaded})
      
 
    })
      .catch((err)=>{
        console.log(err)
      })
  }
  
  render() {
    let {vets,word} = this.state;
 
    return (
      
      <Row>
        <Col m={8} offset="m2" className="z-depth-2">
          
          <Input s={4} label="Peso" name="weight" onChange={this.changeForm}/>
          <Input s={4} label="Especies" name="species" onChange={this.changeForm}/>
          <Input s={4} type="select" name="sex" defaultValue="2" label="Sexo" onChange={this.changeForm}>
            <option value="2">Elige tu opcion</option>
            <option value="hembra">Hembra</option>
            <option value="macho">Macho</option>
          </Input>
          
          <Input s={4} required label="Nombre" name="name"  onChange={this.changeForm}/>
          <Input s={4} label="Apellido" name="lastName" onChange={this.changeForm}/>
          <Input s={4} label="Edad" name="age" onChange={this.changeForm}/>
          
          <Input s={4} label="Raza" name="breed" onChange={this.changeForm}/>
          <Input s={4} label="Color" name="color" onChange={this.changeForm}/>
          <Input s={4} label="Cumpleaños" name="birth" type="date" onChange={this.changeForm}/>
          
          <Input s={4} required label="Foto" name="image" type="file"  onChange={this.changeFormFile}/>
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
            <Button s={12} m={12} onClick={this.submitImage} waves='light'>Guaurdar</Button>
          </Col>
        </Row>
        <div  >
          {/*{console.log(Object.keys(vets).length,'dsss',vets)}*/}
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