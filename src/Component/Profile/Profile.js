import React, {Component} from 'react'
import {Link} from "react-router-dom";
import {Tab, Tabs, Card, CardTitle, Col, Row} from 'react-materialize';
import GenerateQR from "../QRcode/GenerateQR";
import QRCode from "qrcode";

class Profile extends Component{
  state={
    infoUser:{
      name:"Kaneki",
      lastName:"Martínez",
      age:"7",
      breed:"akita",
      color:"cafe",
      birth:"02/09/1983"
    },
    imageUrl:'',
    dataQR:''
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
    let {infoUser,imageUrl} = this.state
    return(
      <Row>
        <Col s={12} m={10} offset="m1">
      <Tabs className='tab-demo z-depth-1'>
        <Tab title="Perfil " active>
          <Card
            horizontal
            header={<CardTitle image="http://2.bp.blogspot.com/-Wo6IeWpOV2M/UWIUDpxExYI/AAAAAAAAAAc/V9Qu7GDEUew/s1600/Akita-Inu.jpg">

            </CardTitle>}
            actions={[<Link to='/editar'>Editar</Link>]}>
             <Row >
               <h5>Información de la Mascota</h5>
               <Col m={4}  >
                <h5 className="txt-bold" >Nombre: <span  className="txt-normal" >{infoUser['name']}</span> </h5>
               </Col>
               <Col m={4} >
                 <h5 className="txt-bold" >Edad: <span  className="txt-normal" >{infoUser['age']}</span> </h5>
               </Col>
               <Col m={4}  >
                 <h5 className="txt-bold" >Raza: <span  className="txt-normal" >{infoUser['breed']}</span> </h5>
               </Col>
             </Row>
             <Row >
                 <Col m={4}  >
                   <h5 className="txt-bold" >Nacimiento:<span  className="txt-normal" >{infoUser['birth']}</span> </h5>
                 </Col>
                 <Col m={4} >
                   <h5 className="txt-bold" >Color:<span  className="txt-normal" >Cafe</span> </h5>
                 </Col>
                 <Col m={4}  >
                   <h5 className="txt-bold" >Raza:<span  className="txt-normal" >Akita</span> </h5>
                 </Col>
             </Row>
            <div className="divider"></div>
            <h5>Información del dueño</h5>
            <Row >
              <Col m={4}  >
                <h5 className="txt-bold" >Nombre: <span  className="txt-normal" >{infoUser['name']}</span> </h5>
              </Col>
              <Col m={4} >
                <h5 className="txt-bold" >Edad: <span  className="txt-normal" >{infoUser['age']}</span> </h5>
              </Col>
              <Col m={4}  >
                <h5 className="txt-bold" >Raza: <span  className="txt-normal" >{infoUser['breed']}</span> </h5>
              </Col>
            </Row>
            <Row >
              <Col m={4}  >
                <h5 className="txt-bold" >Nacimiento:<span  className="txt-normal" >{infoUser['birth']}</span> </h5>
              </Col>
              <Col m={4} >
                <h5 className="txt-bold" >Color:<span  className="txt-normal" >Cafe</span> </h5>
              </Col>
              <Col m={4}  >
                <h5 className="txt-bold" >Raza:<span  className="txt-normal" >Akita</span> </h5>
              </Col>
            </Row>
          </Card>
        </Tab>
        <Tab title="Cartilla " active>
          <div className="card">
            <div className="row ">
              <div className="col m6 l6">
                <img className="circle responsive-img"  src="http://148.204.63.250/images/labs-titulos/T_ciberseguridad.png" alt=""/>
              </div>
              <div className="col m6 l6">
                <p className="headerProf">Editar Perfil</p>
              </div>
            </div>
            <img className="circle responsive-img"  src="https://static.intercomassets.com/avatars/1143992/square_128/Tiffany-1491608799.jpg?1491608799" alt="photoUser" />
            <button  className="btn-floating halfway-fab waves-effect waves-light ">
              <i className="material-icons">add</i>
            </button>
          </div>
        </Tab>
        <Tab title="  Expediente" >
          <div>
            <Row>

              <h4>Radiografias</h4>
              <img className="materialboxed" className="center-align" alt="lose" width="650" src=" http://www.uco.es/organiza/departamentos/anatomia-y-anat-patologica/peques/imagenes1_archivos/image009.jpg"/>
            </Row>
          </div>
        </Tab>
        <Tab title="  Citas">Citas
          <Col m={7} s={12}>
            <Card vertical header={<CardTitle image="https://sumedico.com/wp-content/uploads/2017/10/Perroschihuahua.jpg"></CardTitle>} actions={[<a href='#'>This is a link</a>]}>
              <p>I am a very simple card. I am good at containing small bits of information</p>
            </Card>
          </Col>
        </Tab>
        <Tab title="  CaniTips">CaniTips
          <Card>
            <img className="circle responsive-img"  src="https://static.intercomassets.com/avatars/1143992/square_128/Tiffany-1491608799.jpg?1491608799" alt=""/>
          </Card>
        </Tab>
        <Tab title="código QR " >
          <div className="card">
            <GenerateQR
              imageQr={imageUrl}
            />
          </div>
        </Tab>
        <Tab title="Faq " >
          <div className="card">
            <div className="row ">
              <div className="col m6 l6">
                <img className="circle responsive-img"  src="http://148.204.63.250/images/labs-titulos/T_ciberseguridad.png" alt=""/>
              </div>
              <div className="col m6 l6">
                <p className="headerProf">Editar Perfil</p>
              </div>
            </div>
            <img className="circle responsive-img"  src="https://static.intercomassets.com/avatars/1143992/square_128/Tiffany-1491608799.jpg?1491608799" alt="photoUser" />
            <button  className="btn-floating halfway-fab waves-effect waves-light ">
              <i className="material-icons">add</i>
            </button>
          </div>
        </Tab>
      </Tabs>
        </Col>
      </Row>
    );
  }
}

export default Profile