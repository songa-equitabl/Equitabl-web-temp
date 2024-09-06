import React from "react";
import classnames from "classnames";
import {
  Card,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Row,
  Col,
} from "reactstrap";

import image1 from "../../assets/img/theme/image2.png";
import image2 from "../../assets/img/theme/SkillsMap.png";
import image3 from "../../assets/img/theme/WorkforcePlaning.png";
import image4 from "../../assets/img/theme/GenderPaygapanalysis.png";
import image5 from "../../assets/img/theme/WGEAReporting.png";

class TabsSection extends React.Component {
  state = {
    iconTabs: 1,
    plainTabs: 1,
  };
  toggleNavs = (e, state, index) => {
    e.preventDefault();
    this.setState({
      [state]: index,
    });
  };
  render() {
    return (
      <>
        <Row className="justify-content-center">
          <Col lg="12">
          <h2>Everything you need to make data-driven solutions about your business</h2>
          <p >Our APIs are designed for every HR and financial analytics use case for your business. If you don't find one below, we will create custome dashboard & report per your requirements. </p>
            <div className="nav-wrapper">
              <Nav
                className="nav-fill flex-column flex-md-row"
                id="tabs-icons-text"
                pills
                role="tablist"
              >
                <NavItem>
                  <NavLink
                    aria-selected={this.state.iconTabs === 1}
                    className={classnames("mb-sm-3 mb-md-0", {
                      active: this.state.iconTabs === 1,
                    })}
                    onClick={(e) => this.toggleNavs(e, "iconTabs", 1)}
                    href="#pablo"
                    role="tab"
                  >
                    <i className="fa fa-folder-open mr-2" />
                    Payroll Dashboard
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    aria-selected={this.state.iconTabs === 2}
                    className={classnames("mb-sm-3 mb-md-0", {
                      active: this.state.iconTabs === 2,
                    })}
                    onClick={(e) => this.toggleNavs(e, "iconTabs", 2)}
                    href="#pablo"
                    role="tab"
                  >
                    <i className="fa fa-map mr-2" />
                    Skills Map
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    aria-selected={this.state.iconTabs === 3}
                    className={classnames("mb-sm-3 mb-md-0", {
                      active: this.state.iconTabs === 3,
                    })}
                    onClick={(e) => this.toggleNavs(e, "iconTabs", 3)}
                    href="#pablo"
                    role="tab"
                  >
                    <i className="fa fa-leanpub mr-2" />
                    Skills Planning
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    aria-selected={this.state.iconTabs === 4}
                    className={classnames("mb-sm-3 mb-md-0", {
                      active: this.state.iconTabs === 4,
                    })}
                    onClick={(e) => this.toggleNavs(e, "iconTabs", 4)}
                    href="#pablo"
                    role="tab"
                  >
                    <i className="fa fa-line-chart mr-2" />
                    Pay Gap Analysis
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    aria-selected={this.state.iconTabs === 5}
                    className={classnames("mb-sm-3 mb-md-0", {
                      active: this.state.iconTabs === 5,
                    })}
                    onClick={(e) => this.toggleNavs(e, "iconTabs", 5)}
                    href="#pablo"
                    role="tab"
                  >
                    <i className="fa fa-table mr-2" />
                    WGEA Reporting
                  </NavLink>
                </NavItem>
                {/* <NavItem>
                  <NavLink
                    aria-selected={this.state.iconTabs === 2}
                    className={classnames("mb-sm-3 mb-md-0", {
                      active: this.state.iconTabs === 2,
                    })}
                    onClick={(e) => this.toggleNavs(e, "iconTabs", 2)}
                    href="#pablo"
                    role="tab"
                  >
                    <i className="ni ni-bell-55 mr-2" />
                    Profile
                  </NavLink>
                </NavItem> */}
               
              </Nav>
            </div>
            <Card className="shadow">
              <CardBody>
                <TabContent activeTab={"iconTabs" + this.state.iconTabs}>
                  <TabPane tabId="iconTabs1">
                    <img src={image1} alt="Dashboard" className="img-fluid"/>
                  </TabPane>
                  <TabPane tabId="iconTabs2">
                  <img src={image2} alt="Dashboard" className="img-fluid"/>
                  </TabPane>
                  <TabPane tabId="iconTabs3">
                  <img src={image3} alt="Dashboard" className="img-fluid"/>
                  </TabPane>
                  <TabPane tabId="iconTabs4">
                  <img src={image4} alt="Dashboard" className="img-fluid"/>
                  </TabPane>
                  <TabPane tabId="iconTabs5">
                  <img src={image5} alt="Dashboard" className="img-fluid"/>
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Col>
          
        </Row>
      </>
    );
  }
}

export default TabsSection;
