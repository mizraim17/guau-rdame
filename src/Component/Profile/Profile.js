import React, {Component} from 'react'
import {Link} from "react-router-dom";
import {Tab, Tabs, Card, CardTitle, Col, Row} from 'react-materialize';

class Profile extends Component{
  render() {
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
               <Col m={4}  >
                <h5 className="txt-bold" >Nombre:<span  className="txt-normal" >Kaneki</span> </h5>
               </Col>
               <Col m={4} >
                 <h5 className="txt-bold" >Edad:<span  className="txt-normal" >7</span> </h5>
               </Col>
               <Col m={4}  >
                 <h5 className="txt-bold" >Raza:<span  className="txt-normal" >Akita</span> </h5>
               </Col>
             </Row>
             <Row >
                 <Col m={4}  >
                  <h5 className="txt-bold" >Nacimiento:<span  className="txt-normal" >12/18/2015</span> </h5>
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
            <img className=" responsive-img"  src="http://www.unitag.io/qreator/generate?crs=xnjFkEn%252FP85fCPDXJ%252FXXKg5g6yQi7H4qzUlRVUntU035Re8CX7iHj071HbqF%252BCfYW0fkByoDtlWAYEP%252FkF2dipjP8Ux69VtYkusoonlKTAkgSRnmfwEzhpz3ulb%252BfgcH8xxrpOTbfLtqZS7YE5Pf9g%253D%253D&crd=mXKe51B3LcpJnGj6pepi6fc6j%252Fp9%252BS2%252FCsADr2dTjKKG%252F4NZBtMUYVwOexuNIypnsMxT4Wpvo7OyD8LWb5LflaSZluqGQEs2LxOF4xg25is7fxqFf18de%252FYdSkfdtm9fZwbz0J4lGN7V0oMFe9U8meIHYqnzYPdPLv4oI3eXJ46FoYhB4uJB6kUbKW4qZyEY" alt=""/>
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