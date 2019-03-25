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


class Profile extends Component{
  state={
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
      date_cut:"02/09/2003",
      signs_part:"tiene mancha en el ojo",
      tatto:"sasa",
      chip:"23872387"
    },
    infoOwner:{
      name:'Mizraim Martinez Sánchez',
      calle:'venus 5',
      colonia:'Nueva Industrial vallejo',
      estado:'México',
      cp:'7700',
      celular:5527207165,
      email:'mizraim.martinez@gmail.com'

    },
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
    dataQR:''
  }

    copytext = () =>{
      alert('entro')
      copy('This is some zim ')

    }

  componentWillMount() {
    let {imageUrl,infoUser,dataQR} =this.state;
    dataQR=JSON.stringify(infoUser)
    console.log(dataQR)
    QRCode.toDataURL(`${dataQR}`)
      .then(url => {
        this.setState({imageUrl:url})
      })
      .catch(err => {
        console.error(err)
      })
  }
  render() {
    let {infoUser,imageUrl,infoOwner,infoFile} = this.state
    return(
      <Row>
        <Link to='/'>
          <Button floating large fabClickOnly className='red' waves='yellow' icon='directions_run' />
        </Link>
        <Col s={12} m={10} offset="m1">
          <Tabs className='tab-demo z-depth-1'>
            <Tab title="Perfil " >
              <InfoProfile
                owner={infoOwner}
                user={infoUser}
              />
            </Tab>
            <Tab title="Cartilla "  >
              <RecordVac/>
            </Tab>
            <Tab title="  Expediente" active>
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
            <Tab title="  CaniTips">
              <Tips
                copyTips={this.copytext}
              />
              <Tips
                copyTips={this.copytext}
              />
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