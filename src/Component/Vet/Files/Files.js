import React, {Component} from 'react'
import axios from 'axios'
import {Button, Card, CardTitle, Col, Icon, Input, Row} from "react-materialize";
import {Link} from "react-router-dom";
import IpDev from "../../Ip";

class Files extends Component{
  state={
    form:{},
    formData:new FormData(),
    urlG:IpDev.url,
    idFile:""
  }
  onChange = (e) => {
    
    let {form} =this.state;    
    let field=e.target.name;
    form[field]= e.target.value; 
    console.log('form',form)
    this.setState({  form});
  }
  
  saveMaskot= () => {
   let {idFile}=this.state;
    let idPatient =localStorage.getItem('idPatient')
    let idNFile={}
    idNFile['files']= idFile
    
    
    return (axios.post(`${this.state.urlG}/pet/file/${idPatient}`,idNFile))
    
    }
  
  onSubmit = (e) => {
    e.preventDefault();
    let {form} = this.state
    axios.post(`${this.state.urlG}/file`,form)
      .then((response)=>{
        console.log('ggggggggggggggggggg',response.data._id)
        this.setState({idFile:response.data._id})
          this.saveMaskot()
            .then((response)=>{
              console.log(response.data)
            })
            .catch((error)=>{
              console.log('error',error)
            })
      })
      .catch((error)=>{
        console.log('error',error)
      })
  }
  

  
 
  
 
  render() {
    
    return(
    <>
      <Row>
         
 
          <form onSubmit={this.onSubmit}>
            <Input s={12} label="Antecedentes" name="history_med"  type='textarea'  onChange={this.onChange }/>
            <Input s={12} label="Anamnesis" name="anamnesis"  type='textarea'  onChange={this.onChange}/>
  
            <Input s={2}  label="MM" name="MM" onChange={this.onChange} />
            <Input s={2} label="TLLC" name="TLLC" onChange={this.onChange} />
            <Input s={2} label="FC" name="FC" onChange={this.onChange} />
            <Input s={2} label="RD" name="RD" onChange={this.onChange}  />
            <Input s={2} label="RT  " name="RT" onChange={this.onChange}   />
            <Input s={2}  label="FR" name="MM" onChange={this.onChange} />
            <Input s={2}  label="Mucosas" name="Mucosas" onChange={this.onChange} />
            <Input s={2} label="Temperatura" name="Temperature" onChange={this.onChange} />
            <Input s={2}  label="PP" name="PP" onChange={this.onChange} />
  
            <Input s={2} label="Pulso  " name="Pulso" onChange={this.onChange}   />
            <Input s={2}  label="PA" name="PA" onChange={this.onChange} />
            <Input s={2}  label="EM" name="EM" onChange={this.onChange} />
            <Input s={2} label="CC" name="CC" onChange={this.onChange} />
            <Input s={2}   label="Linfonodos" name="Linfonodos"onChange={this.onChange}  />
           <Col m={12}>
             <h4  >Pruebas de Laboratorio</h4>
           </Col>
           
            <Input s={2} label="QS  " name="lab_QS" onChange={this.onChange}   />
  
            <Input s={2}  label="HG" name="lab_HG" onChange={this.onChange} />
            <Input s={2}  label="U" name="lab_U" onChange={this.onChange} />
            <Input s={2} label="Rx" name="lab_Rx" onChange={this.onChange} />
            <Input s={2}   label="DxP" name="lab_dxp" onChange={this.onChange}  />
  
            <Col m={12}>
            <Link to={'/profileVet'}>
              <Button s={12} m={12} className="orange"  waves='light'>Regresar</Button>
            </Link>
            <Button s={12} m={12}  waves='light'>GuaUrdar</Button> <br/><br/>
            </Col>
          </form>
     
      </Row>
    </>
    );
  }
}

export default Files