
import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Header from "./header";
import Footer from './footer'
const HomePage = () => {
    return(
<Row>
  <Col xs={12}>
    <Row center="xs">
      <Col xs={12} >

      This is homepage
      <Header/>
      <h2>ULTIMATE FITNESS</h2>
      <Footer/>
      </Col>
    </Row>
  </Col>
</Row>
        )
}

export default HomePage;