import React from 'react';
import {Row, Icon}  from 'react-materialize'
const Page404 = () => {
  return(
    <div>
      <Row>
        <h1>Estas perdido ?</h1>
        <h4>No deberías estar aquí</h4>
          <img className=" "   alt="lose" width="250" src="https://res.cloudinary.com/dultkt54v/image/upload/v1555033388/images_guaurdame/dog-lose.jpg"/>
          <Icon large>
            arrow_forward
          </Icon>
        <a href="/">
          <img className=" "   alt="lose" width="250" src="https://res.cloudinary.com/dultkt54v/image/upload/v1555033388/images_guaurdame/house-dog.jpg"/>
        </a>
        <h4>Vuelve a Casa</h4>
      </Row>
    </div>
  )
}

export default Page404