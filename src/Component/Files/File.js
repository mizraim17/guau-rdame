import React,{Component} from 'react'
import {Card, CardTitle, Col, Icon, Row} from "react-materialize";

const File = (props) =>{

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
          <p className="txt-justify">
            hace 2 años tuvo problemas por obstruccion uretral, se llevo a otro veterinario y estuvo con sonda durante 5 dias,despues de eso el veterinario recomendo cambiar la alimentacion por "URINARY" desde entonces no habia presentado ningun problema

          </p>

        </Card>
        <img className="materialboxed" className="center-align" alt="lose" width="650" src=" http://www.uco.es/organiza/departamentos/anatomia-y-anat-patologica/peques/imagenes1_archivos/image009.jpg"/>
      </Row>
    );

}

export default File