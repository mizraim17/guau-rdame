import React from 'react'
import {Card, CardTitle, Col, Tab} from "react-materialize";


const Dates = () => {

  return(
    <Col m={7} s={12}>
      <Card  header={<CardTitle image="https://sumedico.com/wp-content/uploads/2017/10/Perroschihuahua.jpg"></CardTitle>} actions={[<a href='#'>This is a link</a>]}>
        <p>I am a very simple card. I am good at containing small bits of information</p>
      </Card>
    </Col>
  );
}

export default Dates
