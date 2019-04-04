import React from 'react'
import {Row} from "react-materialize";


const Dates = () => {

  return(
    <Row>

      <iframe className="calendar" src="https://consultammee.youcanbook.me/?noframe=true&skipHeaderFooter=true" id="ycbmiframeconsultamme"             >

      </iframe>


    </Row>
  );
}

export default Dates
