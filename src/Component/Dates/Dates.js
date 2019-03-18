import React from 'react'
import {Card, CardTitle, Col, Row} from "react-materialize";


const Dates = () => {

  return(
    <Row>

      <iframe className="calendar" src="https://consultammee.youcanbook.me/?noframe=true&skipHeaderFooter=true" id="ycbmiframeconsultammee"
              >

      </iframe>


    </Row>
  );
}

export default Dates
