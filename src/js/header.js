import React from "react";
import AppBarButton  from './appbar';
import { Grid, Row, Col } from "react-flexbox-grid";
const Header = () => {
  return (
    <Row>
      <Col xs={12}>
        {/* <Row center="xs"> */}

          {/* <Col xs={6}>This is header</Col> */}
          <AppBarButton/>
        {/* </Row> */}
      </Col>
    </Row>
  );
};

export default Header;
