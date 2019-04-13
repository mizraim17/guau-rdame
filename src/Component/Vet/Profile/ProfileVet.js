import React, {Component} from 'react';
import {Button,  Col, Row, Tab, Tabs} from "react-materialize";
import {Link} from "react-router-dom";
import Patients from "../Patients/Patients";
import CaniTipsVet from "../CaniTips/CaniTipsVet";
import axios from "axios";
import InfoProfileVet from "./InfoProfileVet";
import Moment from 'react-moment'
import Files from "../Files/Files";
import IpDev from "../../Ip";
import History from "../Files/History";



class ProfileVet extends Component{
  state={
    infoProVet:{},
    infoPatients:{},
    clickPatient:true,
    idPatient:"",
    urlG:IpDev.url,
    historyPat:{}
  }
  getInfoProfile = () =>{
    let  idVet=  localStorage.getItem('LSidUserVet')
    console.log('idUserVet',idVet)
    return(axios.get(`${this.state.urlG}/user/${idVet}`))
  }
  
  getPatient = () => {
    let  idVet=  localStorage.getItem('LSidUserVet')
    return(axios.get(`${this.state.urlG}/pet/patients/${idVet}`))
  }
  
  componentWillMount() {
    this.getInfoProfile()
    .then((response)=>{
      this.setState({infoProVet:response.data})
      console.log('infoProVet-->',this.state.infoProVet)
    })
    .catch((error)=>{
      console.log(error)
    })
    
    this.getPatient()
    .then((response)=>{
     
      this.setState({infoPatients:response.data})
      console.log('****************',this.state.infoPatients)
      
      console.log('infoPatiet-->',response.data)
    })
    .catch((error)=>{
      console.log(error)
    })
    
    
  }
  
  getHistoryPat = () =>{
    let idPatient =localStorage.getItem('idPatient')
    return(axios.get(`${this.state.urlG}/pet/history/${idPatient}`))
    
  }
  
  getInfoPatient = (e) => {
   
    let {clickPatient,idPatient,infoPatients} = this.state;
    idPatient=e.target.id
    console.log('e.target.id----e.target.id',infoPatients)
    localStorage.setItem('idPatient',infoPatients[idPatient]['_id'])
    clickPatient= !clickPatient
        this.setState({clickPatient,idPatient})
    
    if( infoPatients[idPatient].files) {
 
      this.getHistoryPat()
        .then((response) => {
          console.log('response history', response.data.files)
          this.setState({historyPat: response.data.files})
        })
        .catch((err) => {
          console.log(err)
        })
    }
    
  }
  

  
  render() {
    let {infoProVet,infoPatients,clickPatient,idPatient,historyPat} =this.state
    
    return(
      <>
        <Row>
          <Link to='/'>
            <Button floating large fabClickOnly className='red' waves='yellow' icon='directions_run' />
          </Link>
         {
           !clickPatient
           ?<Button onClick={this.getInfoPatient} icon='arrow_back' > Regresar</Button>
             :""
         }
          <Col s={12} m={10} offset="m1">
          {
            clickPatient?
            <Tabs className='tab-demo z-depth-1 '>
              <Tab title="Perfil ">
                <InfoProfileVet
                  infoVet={infoProVet}
                />
              </Tab>
              <Tab title="Pacientes" active >
                {
                  (Object.keys(infoPatients).length !== 0)
                  ?
                    infoPatients
                    .map((el, i) => {
                      return (
                        <Patients
                          i={i}
                          key={i}
                          el={infoPatients}
                          detailPatient={this.getInfoPatient}
                        />
                      )
                    })
                  : ""
                }
              </Tab>
              <Tab title="Expediente" >
                <CaniTipsVet/>
              </Tab>
              <Tab title="Cani-Tips" >
                <CaniTipsVet/>
              </Tab>
              <Tab title=" Citas">
                <CaniTipsVet/>
              </Tab>
              <Tab title="Faq ">
              </Tab>
            </Tabs>
            :
            <Tabs className='tab-demo z-depth-1 '>
              <Tab title="Perfil "  > {console.log('idPatient=',idPatient)}
                {
                  (Object.keys(infoPatients).length !== 0)?
                  <>
                    <Row>
                      <Col m={12} s={12} >
                        <img src={infoPatients[idPatient]['imgPath']} height="200" alt="photo_profile"/>
                      </Col>
                      <Col m={4}  >
                        <h4 className="txt-bold" >Nombre: <span  className="txt-normal" >{`${infoPatients[idPatient]['name']} ${infoPatients[idPatient]['lastName']}`}</span> </h4>
                      </Col>
                      <Col m={4} >
                        <h5 className="txt-bold" >Edad: <span  className="txt-normal" > {infoPatients[idPatient]['age']}</span> </h5>
                      </Col>
                      <Col m={4} >
                        <h5 className="txt-bold" >Castración:   <span  className="txt-normal" >
                        <Moment format="D MMMM YYYY">
                          {infoPatients[idPatient]['date_cut']}
                        </Moment>
                       </span> </h5>
                      </Col>
                    </Row>
                    <Row >
                      <Col m={4} s={12} >
                        <h5 className="txt-bold" >Peso: <span className="txt-normal" >{infoPatients[idPatient]['weight']}</span> </h5>
                      </Col>
                      <Col m={4} s={12} >
                        <h5 className="txt-bold" >Especie:  <span  className="txt-normal" >{infoPatients[idPatient]['species']}</span> </h5>
                      </Col>
                      <Col m={4} s={12}>
                        <h5 className="txt-bold" >Sexo: <span  className="txt-normal" >{infoPatients[idPatient]['sex']}</span> </h5>
                      </Col>
                    </Row>
                    <Row >
                      <Col m={4}  >
                        <h5 className="txt-bold" >Raza: <span  className="txt-normal" >{infoPatients[idPatient]['breed']}</span> </h5>
                      </Col>
                      <Col m={4} >
                        <h5 className="txt-bold" >Color: <span  className="txt-normal" > {infoPatients[idPatient]['color']}</span> </h5>
                      </Col>
                      <Col m={4} >
                        <h5 className="txt-bold" >Nacimiento: <span  className="txt-normal" >
               <Moment format="D MMMM YYYY">
                    {infoPatients[idPatient].birth}
                  </Moment>
             </span> </h5>
                      </Col>
                    </Row>
                    <Row >
                      <Col m={4} s={12} >
                        <h5 className="txt-bold" >Señas particulares: <span  className="txt-normal" >{infoPatients[idPatient]['sign_part']}</span> </h5>
                      </Col>
                      <Col m={4} s={12}>
                        <h5 className="txt-bold" >Tatuaje: <span  className="txt-normal" >{infoPatients[idPatient]['tatto']}</span> </h5>
                      </Col>
                      
                    </Row>
                  
                  </>
                    :""
                }
              </Tab>
              <Tab title="Expediente"  >
              <Files/>
              </Tab>
              <Tab title="Historial" active>
                <History
                  historyPat={historyPat}
                />
              </Tab>
              <Tab title="Faq ">
    
              </Tab>
            </Tabs>
           }
          </Col>
        </Row>
      </>
    );
  }
  
}
export default ProfileVet