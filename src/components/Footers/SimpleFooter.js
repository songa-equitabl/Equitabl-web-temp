import React from "react";
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
import logo from "../../assets/img/brand/Equitabl-black.png"
class SimpleFooter extends React.Component {
  render() {
    return (
      <>
        <footer className=" footer">
        <Container>
            <Row className="row-grid align-items-center my-md">
              <Col lg="6">
                <h2 className="text-primary font-weight-light mb-2">
                Ready to supercharge your business?
                </h2>              
                <h4 className="mb-0 font-weight-light">
                Plan starts from $99/month <br/> 
                Let's get in touch on any of these platforms.
                </h4>
              </Col>
              <Col className="text-lg-center btn-wrapper" lg="6">
                <Button
                  className="btn-icon-only rounded-circle"
                  color="twitter"
                  href="#"
                  id="tooltip475038074"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-linkedin-square" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip475038074">
                  Follow us
                </UncontrolledTooltip>
                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="facebook"
                  href="#"
                  id="tooltip837440414"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-facebook-square" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip837440414">
                  Like us
                </UncontrolledTooltip>
                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="dribbble"
                  href="#"
                  id="tooltip829810202"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-dribbble" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip829810202">
                  Follow us
                </UncontrolledTooltip>
                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="github"
                  href="https://github.com/creativetimofficial"
                  id="tooltip495507257"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-github" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip495507257">
                  Star on Github
                </UncontrolledTooltip>
              </Col>
            </Row>
            <hr />
            <Row className="align-items-center justify-content-md-between">
              <Col md="6">
                <div className="copyright">
                  <a
                    href="/privacy-policy"
                    target="_blank"
                  >
                    Our Privacy Policy
                  </a>
                  
                </div>
              </Col>
              <Col md="6" className="d-flex justify-content-end">
                <img
                  src={logo}
                  style={{ height: "20px" }}
                  alt="logo"
                  className="footer-logo mr-2"
                />
                <span className="footer-text">All rights reserved</span>
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default SimpleFooter;
