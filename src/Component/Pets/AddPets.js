import React, {Component} from 'react';
import {Button, Col, Icon, Input, Row} from "react-materialize";
import {Link} from "react-router-dom";
import  axios from 'axios'
import ListVet from "./ListVet";
class AddPets extends Component {
  state={
    form:{},
    formData:new FormData(),
    vets:{},
    word: "",
    file:null
  }
  

  
 
  
  
  getVets = () => {
    
    return(axios.get('http://localhost:3005/api/user'))
    
  }
  
  showVets = (e) => {
    // let {word} =this.state;
    // word = e.target.value;
    this.setState({word:e.target.value})
  }
  
  changeFormFile = (e) => {
    let {file}=this.state
    file=e.target.files[0];
   
    this.setState({file})
  }
  
  submitImage= () =>{
    let {form,file,formData} = this.state;
    formData.append('picture',file);
    formData.append('UserID',localStorage.getItem('LSidUser'));
    axios.post('http://localhost:3005/api/pet', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then((res)=>{
        console.log('respet',res.data)
        localStorage.setItem('LSinfoPet',JSON.stringify(res.data))
        
        if(res.data!==0){
          console.log('entroooooooooooooo')
           this.submitForm()
        }
       
      })
    
      .catch((err)=>{
        console.log('err',err)
      })
  }
  
  submitForm = () => {
    let {form} = this.state;

     console.log('form---------------',form)
    
    let petId=JSON.parse(localStorage.getItem('LSinfoPet'))
    console.log('petId---------------',petId._id)
    axios.put(`http://localhost:3005/api/pet/${petId._id}`, form)
      
      .then((res)=>{
        console.log(res)
        this.props.history.push('/profile')
      })
    
    .catch((err)=>{
      console.log('err submitForm',err)
    })
   
  }
  
  changeForm = (e) => {
    let {form,formData,file} = this.state;
    let name= e.target.name;
    let userId=localStorage.getItem('LSidUser')
    // formData.append('picture',file);
    // formData.append(`${name}`,e.target.value)
    // formData.append('UserID',userId)
    
    form['UserID']=localStorage.getItem('LSidUser')
    console.log('USERID=>',form['UserID'])
    form[name]=e.target.value;
    form[name]=e.target.value;
    console.log('formData---------------',form)
    this.setState({form})
    
  }
  
  componentWillMount()  {
    let {vets} = this.state;
    this.getVets()
      .then((response)=>{
      vets=response.data
      this.setState({vets})
      console.log('vets',response.data)
 
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
          <Input s={4} label="Sexo" name="sex" onChange={this.changeForm}/>
          
          <Input s={4} label="Nombre" name="name" onChange={this.changeForm}/>
          <Input s={4} label="Apellido" name="lastName" onChange={this.changeForm}/>
          <Input s={4} label="Edad" name="age" onChange={this.changeForm}/>
          
          <Input s={4} label="Raza" name="breed" onChange={this.changeForm}/>
          <Input s={4} label="Color" name="color" onChange={this.changeForm}/>
          <Input s={4} label="Cumpleaños" name="birth" type="date" onChange={this.changeForm}/>
          
          <Input s={4} label="Imagen" name="image" type="file" onChange={this.changeFormFile}/>
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