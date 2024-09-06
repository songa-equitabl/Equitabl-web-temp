import React from "react";
import { ListGroup,ListGroupItem, Container, Row, Col } from "reactstrap";

class BasicElements extends React.Component {
  render() {
    return (
      <>
        <section
          className="section section-components pb-0"
          id="section-components"
        >
          <Container>
            <Row className="justify-content-center">
                <Col lg="12">
                  <h2>
                    <span>An Intuitive Multi-source Analysis Platform for Enterprise</span>
                  </h2>
                  <p>We integrate with most of the HRIS platforms in the business</p>
               </Col>
                <Col md="6">
                  <ListGroup className="text-left">
                    <ListGroupItem className="d-flex align-items-start custom-list-group-item">
                    <i className="fa fa-compress mr-2" />
                      <div>
                        <h5 style={{fontSize:"15px"}}>We integrate all your data resources</h5>
                        <p style={{fontSize:"12px"}}>Say goodbye to manual data consolidation, data cleaning, governance, and security. With our advanced platform, this will be your one-stop solution for workforce and financial planning.</p>
                      </div>
                    </ListGroupItem>
                    <ListGroupItem className="d-flex align-items-start custom-list-group-item">
                    <i className="fa fa-magic mr-2" />
                      <div>
                      <h5 style={{fontSize:"15px"}}>We customise at scale</h5>
                      <p style={{fontSize:"12px"}}>A SaaS platform that is personalised for what matters most for your organisation, with insights customised specifically for your needs.</p>
                      </div>
                    </ListGroupItem>
                  </ListGroup>
                </Col>
                
                <Col md="6">
                  <ListGroup className="text-left">
                    <ListGroupItem className="d-flex align-items-start custom-list-group-item">
                    <i className="fa fa-cogs mr-2" />
                      <div>
                        <h5 style={{fontSize:"15px"}}>We are small and medium business friendly</h5>
                        <p style={{fontSize:"12px"}}>We partner, collaborate with and work for small and medium business in the APAC region. We are known for our SMB friendly pricing, network and customer service.</p>
                      </div>
                    </ListGroupItem>
                    <ListGroupItem className="d-flex align-items-start custom-list-group-item">
                    <i className="fa fa-table mr-2"  />
                      <div>
                        <h5 style={{fontSize:"15px"}}>Dedicated Success Manager</h5>
                        <p style={{fontSize:"12px"}}>Never have to raise tickets for anything, our Customer Success Manager will always be here for you.</p>
                      </div>
                    </ListGroupItem>
                  </ListGroup>
                </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}

export default BasicElements;
