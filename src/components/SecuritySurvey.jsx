import React from "react";
import {Container, Col, Row, Button} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import SafeStrongRoom from "./security/strong-room/SafeStrongRoom";
import CashHandling from "./security/cash-handling/CashHandling";
import SecurityArrangements from "./security/arrangements/SecurityArrangements";
import EmergencyProcedures from "./security/emergency/EmergencyProcedures";
import OperatingEnvironment from "./security/environment/OperatingEnvironment";

const SecuritySurvey = () => {
  return (
      <Container>
          <h3>Station Details</h3>
          <Row>
              <Col>
                  <Form.Group className="mb-3" controlId="formGroupStationName">
                      <Form.Label>Station Name</Form.Label>
                      <Form.Control type="text" placeholder="Station Name" />
                  </Form.Group>
              </Col>
              <Col>
                  <Form.Group className="mb-3" controlId="formGroupStationManager">
                      <Form.Label>Station Manager</Form.Label>
                      <Form.Control type="text" placeholder="Station Manager" />
                  </Form.Group>
              </Col>
          </Row>
          <Row>
              <Col>
                  <Form.Group className="mb-3" controlId="formGroupTerritoryManager">
                      <Form.Label>Territory Manager</Form.Label>
                      <Form.Control type="text" placeholder="Territory Manager" />
                  </Form.Group>
              </Col>
              <Col>
                  <Form.Group className="mb-3" controlId="formGroupDate">
                      <Form.Label>Date</Form.Label>
                      <Form.Control type="date" placeholder="Select Date" />
                  </Form.Group>
              </Col>
          </Row>
          <Row>
              <Col>
                  <Form.Group className="mb-3" controlId="formGroupEmail">
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control type="email" placeholder="Email Address" />
                  </Form.Group>
              </Col>
              <Col>
                  <Form.Group className="mb-3" controlId="formGroupLandline">
                      <Form.Label>Landline</Form.Label>
                      <Form.Control type="text" placeholder="Landline" />
                  </Form.Group>
              </Col>
          </Row>
          <Row>
              <Col>
                  <Form.Group className="mb-3" controlId="formGroupPhone">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control type="text" placeholder="Phone Number" />
                  </Form.Group>
              </Col>
          </Row>
          <h3>SAFES & STRONG ROOM</h3>
          <Row>
              <SafeStrongRoom />
          </Row>
          <h3>CASH HANDLING PROCEDURES</h3>
          <Row>
              <CashHandling />
          </Row>
          <h3>SECURITY ARRANGEMENTS</h3>
          <Row>
              <SecurityArrangements />
          </Row>
          <h3>EMERGENCY PROCEDURES</h3>
          <Row>
              <EmergencyProcedures/>
          </Row>
          <h3>OPERATING ENVIRONMENT</h3>
          <Row>
              <OperatingEnvironment />
          </Row>
          <Button>Submit Details</Button>
      </Container>
  )
}

export default SecuritySurvey