import React,{Component} from 'react';
import {Button, Col, Row, Tab, Tabs} from "react-materialize";
import {Link} from "react-router-dom";
import InfoProfile from "../../Profile/Profile";

class ProfileVet extends Component {
  render() {
    return(
      <>
        <Row>
          <Link to='/'>
            <Button floating large fabClickOnly className='red' waves='yellow' icon='directions_run' />
          </Link>
          <Button onClick={this.infoPet} > ver info pet </Button>
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
      </>
    );
  }
  
}
export default ProfileVet