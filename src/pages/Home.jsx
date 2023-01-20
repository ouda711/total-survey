import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import SafetySurvey from "../components/SafetySurvey";
import SecuritySurvey from "../components/SecuritySurvey";

const Home = () => {
  return (
      <Container>
          <Row>
              <Col>
                  <Tabs
                      defaultActiveKey="safety"
                      id="fill-tab-example"
                      className="mb-3"
                      fill
                  >
                      <Tab eventKey="safety" title="Safety Survey">
                          <SafetySurvey />
                      </Tab>
                      <Tab eventKey="security" title="Security Survey">
                        <SecuritySurvey />
                      </Tab>
                      <Tab title="Reports" eventKey="reports">
                          <div>Reports</div>
                      </Tab>
                  </Tabs>
              </Col>
          </Row>
      </Container>
  )
}

export default Home