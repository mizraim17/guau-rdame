import React, {Component} from 'react'
import {Link} from "react-router-dom";
import {Tab, Tabs, Button,  Col, Row} from 'react-materialize';
import GenerateQR from "../QRcode/GenerateQR";
import QRCode from "qrcode";
import InfoProfile from "./InfoProfile";
import RecordVac from "../RecordVac/RecordVac";
import Dates from "../Dates/Dates";
import Tips from "../Tips/Tips";

import copy from 'copy-to-clipboard'
import Cycle from "../Cycle/Cycle";
import '../../profile.css';
import Faq from "../Faq/Faq";
import Files from "../Files/Files";
import axios from "axios";
import 'moment/locale/es'

class Profile extends Component{
  state={
    info:[],
    stateForm:false,
    infoPet:{},infoQR:{},
    infoUser:{
      weight:'13kg',
      species:'Canino',
      sex:'Hembra',
      name:"Cafecito",
      lastName:"Martínez",
      age:"7",
      breed:"akita",
      color:"cafe",
      birth:"02/09/1983",
      image:"https://www.ecured.cu/images/thumb/a/a4/Perros1.jpg/260px-Perros1.jpg",
      signs_part:"tiene mancha en el ojo",
      tatto:"sasa",
      chip:"23872387"
    },
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
  
  infoPet= () => {
    let {infoOwner}=this.state;
    //console.log('*******',Object.keys(infoOwner))
    //axios.get(`http://localhost:3005/api/pet/${petid}`)
    return(axios.get(`http://localhost:3005/api/pet/${infoOwner['pet']['_id']}`))
    
  }
  
  infoProfile=  () => {
    let  idUser=  localStorage.getItem('LSidUser')
     return(axios.get(`http://localhost:3005/api/user/${idUser}`))
  }
  
  getQR = () => {

    let { infoOwner,infoQR,infoQR2} =this.state;
    
    let Nombre_Propietario=infoOwner['name'],
        Telefono=infoOwner['cellphone']
        infoQR=`Nombre Propietario: ${Nombre_Propietario},Telefóno: ${Telefono}`
       
    console.log('infoQR=',infoQR)
    
    infoQR2=JSON.stringify(infoQR)
    console.log('infoQR2=',infoQR2)
    
    this.setState({infoQR2})
    
    QRCode.toDataURL(`${infoQR2}`)
    .then(url => {
      this.setState({imageUrl:url})
    })
    .catch(err => {
      console.error(err)
    })
    
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
  
  componentWillMount() {
    //const primeraxios = this.infoProfile()
    //console.log("primeraxios",primeraxios)
    //primeraxios.then(res =>{
    this.getTips().then((response)=>{
      this.setState({tips:response.data})
    })
    
    this.infoProfile().then(res =>{
      this.setState({infoOwner: res.data})
      console.log('lllllll',res.data['pet'])
      if(res.data['pet']!==undefined)
      {
        this.infoPet()
        .then(res=>{
          this.setState({infoPet: res.data})
        })
        .catch((error)=>{
          console.log(error)
        });
      }
    });
 
  }
  
  componentDidMount() {
    this.getQR()
  }
  
  
  getTips = () => {
    return( axios.get('http://localhost:3005/api/tips'))
  }
  
  render() {
    
    let {infoPet,imageUrl,infoOwner,infoFile,stateForm, tips } = this.state
    
    return(
      <Row>{console.log('infoOwner--------render',Object.keys(infoOwner), Object.values(infoOwner))}
        <Link to='/'>
          <Button floating large fabClickOnly className='red' waves='yellow' icon='directions_run' />
        </Link>
        <Button onClick={this.getTips} > ver info pet </Button>
        <Col s={12} m={10} offset="m1">
          <Tabs className='tab-demo z-depth-1'>
            <Tab title="Perfil "  >
              <InfoProfile
                subPet={this.submitPet}
                changePet={this.onChangeFormPet}
                changeForm={this.changeForm}
                stateForm={stateForm}
                owner={infoOwner}
                infoPet={infoPet}
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
            <Tab title="  CaniTips" active>
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
            <Tab title="Ciclo Hembras " >
              <Cycle/>
            </Tab>
            <Tab title="  Peluqueria " >
              <Dates/>
            </Tab>
            <Tab title="Faq " >
              <Faq/>
            </Tab>
          </Tabs>
        </Col>
      </Row>
    );
  }
}

export default Profile