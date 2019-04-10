import React from 'react'
import {Button, Card, CardTitle, Col, Input, Row} from "react-materialize";

const FormFiles= () => {
return(
  <>
    <Row >
      <Col   className="z-depth-2">
        <Input m={12} label="antecedentes" name="history_med" />
        <Input m={12} label="Anamnesis" name="anamnesis" />
      </Col>
    </Row>
  </>
)
}
export default FormFiles
