import React from 'react'
import {Row,Col,CardTitle,Card,Icon} from 'react-materialize'
const Tips = (props) =>{
  return(
    <Row>
      <Card
        header={
          <CardTitle image='' className=" blue lighten-2 white-text left-align ">
            {/*<Moment  fromNow className="txt-comment">*/}
              {/*{post.dateCreated}*/}
            {/*</Moment>*/}
            12/06/18
          </CardTitle>

        }
        actions={
          [ <Row className="center-align">
            <Col s={4} m={4}>
              <i onClick={props.copyTips}
                className="material-icons" >thumb_up
              </i>
            </Col>
            <Col s={4} m={4}>
              <Icon>
                share
              </Icon >
            </Col>
            <Col s={4} m={4}>
              <Icon>
                insert_comment
              </Icon >
            </Col>
          </Row>]
        }
      >
        <p className="ultra-small">
          1. Mantener un peso saludable

          Este consejo aplica tanto para mascotas como para los dueños. Uno lleva una vida más ligera cuando no tiene que preocuparse por cargar kilos extra. Tú controlas lo que les estás dando de comer, asegúrate que no les estés dando aserrín. También controla sus porciones y asegúrate que están caminando o corriendo lo suficiente para quemar las calorías. Si hace falta, cómprale también un juguete que lo mantenga activo aún dentro de casa.
        </p>

      </Card>
    </Row>
  )
}

export default Tips;