import React, {Component} from 'react'
import {Link} from "react-router-dom";
import {Tab, Tabs, Card, CardTitle, Col, Row, Table,Icon} from 'react-materialize';
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
import File from "../Files/File";


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
      image:"https://www.ecured.cu/images/thumb/a/a4/Perros1.jpg/260px-Perros1.jpg"
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
        console.log(imageUrl)
        this.setState({imageUrl:url})
      })
      .catch(err => {
        console.error(err)
      })
  }
  render() {
    let {infoUser,imageUrl,infoOwner} = this.state
    return(
      <Row>
        <Col s={12} m={10} offset="m1">
          <Tabs className='tab-demo z-depth-1'>
            <Tab title="Perfil " active>
              <InfoProfile
                owner={infoOwner}
                user={infoUser}
              />
            </Tab>
            <Tab title="Cartilla "  >
              <RecordVac/>
            </Tab>
            <Tab title="  Expediente" >
              <div>
               <File
                 copyTips={this.copytext}
               />
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
            <Tab title="Faq " >
              <Faq/>
            </Tab>
            <Tab title={<Icon>directions_run</Icon>}>
              <Faq/>
            </Tab>
          </Tabs>
        </Col>
      </Row>
    );
  }
}

export default Profile