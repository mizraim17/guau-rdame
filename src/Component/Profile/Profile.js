import React, {Component} from 'react'

import {Tab,Tabs} from 'react-materialize';

class Profile extends Component{
  render() {
    return(
      <Tabs className='tab-demo z-depth-1'>
        <Tab title="Test 1">Perfil</Tab>
        <Tab title="Test 2" active>Expediente</Tab>
        <Tab title="Test 3">Citas</Tab>
        <Tab title="Test 4">CaniTips </Tab>
        <Tab title="Test 4">Faq </Tab>
      </Tabs>
    );
  }
}

export default Profile