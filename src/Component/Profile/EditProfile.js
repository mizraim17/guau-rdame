import React, {Component} from 'react'

import {Input, Row, Col, Button} from 'react-materialize'
import {Link} from "react-router-dom";
import axios from "axios";
import IpDev from "../Ip";


class EditProfile extends Component{
    
    state={
      urlG:IpDev.url,
      infoOwner:{}
    }
  
    infoProfile=  () => {
      let  idUser=  localStorage.getItem('LSidUser')
      console.log('idUser',idUser)
      return(axios.get(`${this.state.urlG}/user/${idUser}`))
    }
    
    componentWillMount() {
      this.infoProfile()
      .then((res) =>{
      
        this.setState({infoOwner: res.data})
        
      })
    }
  
  onChange= (e) => {
    
    let {infoOwner} =this.state;
    let field=e.target.name;
    infoOwner[field]= e.target.value;
    
    this.setState({  infoOwner});
  }
  
  updateDataUser = () => {
    let {infoOwner} = this.state;
    let  idUser=  localStorage.getItem('LSidUser')
    return ( axios.put(`${this.state.urlG}/editUser/${idUser}`, infoOwner)
  )
  }
  
  submitForm = (e) => {
   e.preventDefault();
   
      
      this.updateDataUser()
       .then((res)=>{
       
         this.props.history.push('/profile')
        
      })
      
      .catch((err)=>{
        console.log('err submitForm',err)
       
      })
    
  }
  
  
    render() {
      let {infoOwner} = this.state
      return(
        <div>{console.log(infoOwner)}
          <Row>
            <Col offset="m1" className="white mx">
              <form onSubmit={this.submitForm}>
                <Input s={4} label="Nombre" placeholder="name" name="name" value={infoOwner.name} onChange={this.onChange} />
                <Input s={4} label="Paterno" placeholder="Paterno" name="apaterno" value={infoOwner.apaterno}  onChange={this.onChange} />
                <Input s={4} label="Materno" placeholder="Materno" name="amaterno" value={infoOwner.amaterno} onChange={this.onChange} />
            
                <Input s={4} placeholder="gua@gmail.com" value={infoOwner.email} onChange={this.onChange}  label="email" name="email"/>
                <Input s={4}  placeholder="******" value={infoOwner.password} onChange={this.onChange} type="password" label="password" name="password"/>
                <Input s={4} placeholder="Teléfono" label="Teléfono  " onChange={this.onChange} name="cellphone" value={infoOwner.cellphone}/>
            
                <Input s={4} label="C.P. " onChange={this.onChange} name="zipcode" placeholder="C.P."  value={infoOwner.zipcode}/>
                <Input s={4} label="Estado " onChange={this.onChange} name="state" placeholder="Estado" value={infoOwner.state} />
                <Input s={4} label="Ciudad  " onChange={this.onChange} name="city"  placeholder="Ciudad" value={infoOwner.city}/>
            
                <Input s={4} label="Calle" onChange={this.onChange} name="street"  placeholder="Calle" value={infoOwner.street}/>
                <Input s={4} label="Número" onChange={this.onChange} name="no_street"  placeholder="Número" value={infoOwner.no_street}/>
                <Input s={4} label="Colonia" onChange={this.onChange} name="community" placeholder="Colonia" value={infoOwner.community} />
                <Row>
                  <Link to={'/profile'}>
                    <Button s={12} m={12} className="orange"  waves='light'>Regresar</Button>
                  </Link>
                  <Button s={12} m={12}  waves='light'>Guaurdar</Button>
                </Row>
              </form>
        
            </Col>
          </Row>
        </div>
      );
    }
   
  }


export default EditProfile