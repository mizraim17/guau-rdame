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
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aspernatur at doloribus eligendi iusto labore laborum maiores, minima molestiae nam officia quidem quo sapiente sit tempore tenetur voluptas. Iusto, similique?
        </p>

      </Card>
    </Row>
  )
}

export default Tips;