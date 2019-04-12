import React, { Component } from 'react';

import './App.css';
import Router from "./Router";
import {Col, Footer} from "react-materialize";


class App extends Component {
 
  render() {
    return (
      <div className="App">
          <Router
          
          />
        <Footer
          copyrights="Mizraim Martínez @2019"
          className="gray-text"
        >
          <Col m={6}>
            <h4 className="white-text ">
              GuaUrdame
            </h4>
          </Col>
          <Col m={6} className="white-text ">
            <p className="grey-text text-lighten-4">
              <img
                src="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
                width="40"
                alt=""/>
              <a href="https://github.com/mizraim17" className="grey-text text-lighten-4"> @Mizraim17
              </a>
            </p>
          </Col>
        </Footer>
      </div>
    );
  }
}

export default App;
