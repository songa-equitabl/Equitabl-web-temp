import React from "react";
import { Row, Col } from "reactstrap";
class Typography extends React.Component {
  render() {
    return (
      <>
        <h2 className="mt-lg mb-2">
          <span>Our Partner Ecosystem</span>
        </h2>
        <Row>
          <Col className="my-5 mt-sm-0" sm="4" lg="4" xs="6">
              <img
                alt="..."
                className="img-fluid rounded-circle shadow-lg"
                src={require("assets/img/brand/peoplegig_logo.jpeg")}
                style={{ width: "150px" }}
              />
          </Col>
          <Col className="mt-5 mt-sm-0" sm="4" lg="4" xs="6">
            <img
              alt="..."
              className="img-fluid rounded-circle shadow-lg mt-4"
              src={require("assets/img/brand/LogofoundU.jpeg")}
              style={{ width: "200px" }}
            />
          </Col>
          
          <Col className="mt-5 mt-sm-0" sm="4" lg="4" xs="6">
            <img
              alt="..."
              className="img-fluid rounded-circle shadow-lg"
              src={require("assets/img/brand/innov8podlogo.jpeg")}
              style={{ width: "150px" }}
            />
          </Col>
        </Row>
      </>
    );
  }
}

export default Typography;
