import React from "react";
import { Col, Row } from "react-bootstrap";

const Header = () => {
  return (
    <Row>
      <Col sm="12" className="justify-content-center text-center">
        <p className="theTitle">قائمة الطعام</p>
        <span className="bordering"></span>
      </Col>
    </Row>
  );
};

export default Header;
