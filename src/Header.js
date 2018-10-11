import React from "react";
import { Row, Col } from "reactstrap";
import "./Header.css";

const Header = () => {
  return (
    <Row className="background">
      <Col>
        <Row className="d-flex align-self-center">
          <Col xs={{ size: 6, offset: 6 }}>
            <h1 className="display-3">Site Actus Pop-Culture</h1>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Header;
