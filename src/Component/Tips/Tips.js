import React from 'react'
import {Row,Col,CardTitle,Card,Icon, Chip} from 'react-materialize';
import Moment from 'react-moment'

const Tips = (props) =>{
  return(
    <Row>
      <Card
        header={
          <CardTitle image='' className=" blue lighten-2 white-text left-align ">
            <Moment   fromNow className="txt-comment">
              {props.tip.created_at}
            </Moment>
            {
              // console.log('info props tip',props.tip)
            }
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
        <h4>
          {props.tip.title}
        </h4>
        <p className="ultra-small">
          {
            props.tip.tip
          }
        </p>
        <div>
          <Chip className={props.tip.color} >
          {props.tip.topic}
          </Chip>
        </div>
      </Card>
    </Row>
  )
}

export default Tips;