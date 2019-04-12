import React, {Component} from 'react'

import {Tab, Tabs, Button, Col, Row} from 'react-materialize';
import GenerateQR from "../QRcode/GenerateQR";
import QRCode from "qrcode";
import InfoProfile from "./InfoProfile";
import RecordVac from "../RecordVac/RecordVac";
import Dates from "../Dates/Dates";
import Tips from "../Tips/Tips";

import copy from 'copy-to-clipboard'

import '../../profile.css';
import Faq from "../Faq/Faq";
import Files from "../Files/Files";
import axios from "axios";
import 'moment/locale/es'
import Loader from 'react-loader'

import IpDev from "../Ip";

class Profile extends Component{
  state={
    urlG:IpDev.url,
    info:[],loaded:false,
    stateForm:false,
    infoPet:{},infoQR:{},
    infoVet:{},
    infoOwner:{},infoQR2:{},
    infoFile: [
      {
        id:1, fecha:"15/04/2019",veterinario:"Tania Vazquez", cedula:"3247843287",dia_hosp:1,
      antecedentes: "hace 2 años tuvo problemas por obstrucción uretral, se llevo a otro veterinario y estuvo con sonda durante 5 dias,despues de eso el veterinario recomendo cambiar la alimentacion por URINAR, desde entonces no habia presentado ningun problema",
      anamnesis: "Hace 3 dias, notó que mi gato no puede orinar, se pocisiona en el arenero pero sólo le salen gotas,dejo de comer y ayer estuvo vomitando, se la pasa hechado sin moverse",
      MM:	'palidas',	FC:	"150 l/ min",	TLLC:	"4 seg",	RD:	"si",RT:	"-",	FR:	"20 r/min",Mucosas:	"palidas",	Temp:	39,
      PP:	"s/a",	Pulso:	"débil",	PA:	"dolor caudal",	EM:	"deprimido", CC:	"4/5",	Linfonodos:	"-",
      lab_QS:"",lab_HG:"",lab_U:"",lab_Rx: "abdomen", lab_dxp:"Obstrucción uretral"
      },
      {
        id:2, fecha:"19/04/2019",veterinario:"Tania Vazquez", cedula:"3247843287",dia_hosp:1,
        antecedentes: "hace 2 años tuvo problemas por obstrucción uretral, se llevo a otro veterinario y estuvo con sonda durante 5 dias,despues de eso el veterinario recomendo cambiar la alimentacion por URINAR, desde entonces no habia presentado ningun problema",
        anamnesis: "Hace 3 dias, notó que mi gato no puede orinar, se pocisiona en el arenero pero sólo le salen gotas,dejo de comer y ayer estuvo vomitando, se la pasa hechado sin moverse",
        MM:	'palidas',	FC:	"150 l/ min",	TLLC:	"4 seg",	RD:	"si",RT:	"-",	FR:	"20 r/min",Mucosas:	"palidas",	Temp:	41,
        PP:	"s/a",	Pulso:	"débil",	PA:	"dolor caudal",	EM:	"deprimido", CC:	"4/5",Linfonodos:"-",
        lab_QS:"7",lab_HG:"",lab_U:"",lab_Rx: "abdomen", lab_dxp:"Obstrucción uretral"
      }
    ],
    imageUrl:'',
    dataQR:'',
    tips:{}
  }
  
   copytext = () =>{
    alert('entro')
    copy('This is some zim ')
  }
  
  
  infoVet=  () => {
   let {infoPet}= this.state
    console.log('infopet -peticion',infoPet.vet)
    
     return(axios.get(`${this.state.urlG}/vet/${infoPet.vet}`))
  }
  
  getQR = () => {

    let { infoOwner,infoQR,infoQR2} =this.state;
    console.log('------',infoOwner)
    let Nombre_Propietario=`${infoOwner['name']} ${infoOwner['lastname']}`,
    Telefono=infoOwner['cellphone']
    infoQR=`Nombre Propietario: ${Nombre_Propietario},Telefóno: ${Telefono}`
   
    infoQR2=JSON.stringify(infoQR)
    this.setState({infoQR2})
    
    QRCode.toDataURL(`${infoQR2}`)
    .then(url => {
      this.setState({imageUrl:url})
    })
    .catch(err => {
      console.error(err)
    })
    
  }
  
  logOut= () => {
  localStorage.removeItem('LSidUser')
    this.props.history.push('/')
  }
  
  changeForm= () => {
    let {stateForm} = this.state;
    stateForm=!stateForm;
    console.log('stateForm',stateForm)
    this.setState({stateForm})
  }
  
  onChangeFormPet = (e) => {
    let {infoPet} =this.state;
    console.log("campos",infoPet)
    let field=e.target.name;
    infoPet[field]= e.target.value;
    console.log("campos",infoPet)
    this.setState({infoPet});
  
  }
  
  submitPet = (e) => {
    e.preventDefault();
  }
  
  infoProfile=  () => {
    let  idUser=  localStorage.getItem('LSidUser')
    console.log('idUser',idUser)
    return(axios.get(`${this.state.urlG}/user/${idUser}`))
  }
  
  infoPet= () => {
    let {infoOwner}=this.state;
    return(axios.get(`${this.state.urlG}/pet/${infoOwner['pet']['_id']}`))
    
  }
  
  componentWillMount() {
 
    this.getTips().then((response)=>{
      let tempTips=response.data;
      tempTips.sort((a, b) => a.created_at !== b.created_at ? a.created_at > b.created_at ? -1 : 1 : 0);
      this.setState({tips:tempTips})
    })
    
    this.infoProfile()
      .then(res =>{
      console.log('res.data',res.data)
      this.setState({infoOwner: res.data,loaded:true})
      console.log('res.DATA.pet',res.data.imgPath)
      
      
      if(res.data['pet'])
      {
        console.log('entro a la super condicion ')
        this.infoPet()
        .then(res=>{
          this.setState({infoPet: res.data})
          console.log('infopetttt',res.data)
          this.infoVet()
            .then((response)=>{
              console.log('INFOVET====',response.data)
              this.setState({infoVet:response.data})
            })
            .catch((error)=>{
              console.log(error)
            })
  
        })
        .catch((error)=>{
          console.log(error)
        });
      }
        this.getQR()
       
    });
 
  }
  
  
  getTips = () => {
    return( axios.get(`${this.state.urlG}/tips`))
  }
  
 
  render() {
    
    let {infoVet, infoPet,imageUrl,infoOwner,infoFile,stateForm, tips } = this.state
    
    return(
      <Loader loaded={this.state.loaded}>
        <Row>{console.log('infoOwner--------render',Object.keys(infoOwner), Object.values(infoOwner))}
        <Button onClick={this.logOut} placeholder="Salir" floating large fabClickOnly className='red' waves='yellow' icon='directions_run' />
        <Col s={12} m={10} offset="m1">
          <Tabs className='tab-demo z-depth-1'>
            <Tab title="Perfil "  active>
              <InfoProfile
                subPet={this.submitPet}
                changePet={this.onChangeFormPet}
                changeForm={this.changeForm}
                stateForm={stateForm}
                owner={infoOwner}
                infoPet={infoPet}
                infoVet={infoVet}
                
              />
            </Tab>
            <Tab title="Cartilla "  >
              <RecordVac/>
            </Tab>
            <Tab title="  Expediente" >
              <div>
               { infoFile.map((el,i)=>{
                 return(
                   <Files
                     key={i}
                     infoFile={el}
                   />
                 );
               })}
              </div>
            </Tab>
            <Tab title="  Citas">Citas
              <Dates/>
            </Tab>
            <Tab title="  CaniTips"  >
              {
                (Object.keys(tips).length !== 0)
                ?tips.map((el, i) => {
                  return (
                    <Tips
                      copyTips={this.copytext}
                      key={i}
                      tip={el}
                    />
                  )
                })
                  :""
              }
            </Tab>
            <Tab title="código QR " >
              <div className="card">
                <GenerateQR
                  imageQr={imageUrl}
                />
              </div>
            </Tab>
            <Tab title="Peluqueria" >
              <Dates/>
            </Tab>
            <Tab title="Faq" >
              <Faq/>
            </Tab>
          </Tabs>
        </Col>
      </Row>
      
      </Loader>
    );
  }
}

export default Profile