import React from "react";
import styled from "styled-components";
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import {Container, Row} from "react-bootstrap";

const Wrapper = styled.div`
    width: 100%;
    margin: 0.5rem 0;
  `
const Question = styled.h6`
    font-weight: bold;
  `


const OperatingEnvironment = () => {
  return (
      <Container>
          <Row>
              <Wrapper>
                  <Question>1.1 What is the development of the station location area?</Question>
                  <div className="inline-check mb-3">
                      <Form.Check
                          inline
                          label="Highway"
                          name="group1"
                          type="radio"
                          id={`inline-checkbox-1`}
                      />
                      <Form.Check
                          inline
                          label="Commercial"
                          name="group1"
                          type="radio"
                          id={`inline-checkbox-2`}
                      />
                      <Form.Check
                          inline
                          label="Residential"
                          name="group1"
                          type="radio"
                          id={`inline-checkbox-2`}
                      />
                      <FloatingLabel controlId="floatingTextarea2" label="Comments">
                          <Form.Control
                              as="textarea"
                              placeholder="Leave a comment here"
                              style={{ height: '100px', marginTop: '0.5rem'}}
                          />
                      </FloatingLabel>
                  </div>
              </Wrapper>
          </Row>

          <Row>
              <Wrapper>
                  <Question>1.2 What is the risk (crime) level of the station location area?</Question>
                  <div className="inline-check mb-3">
                      <Form.Check
                          inline
                          label="High"
                          name="group1"
                          type="radio"
                          id={`inline-checkbox-1`}
                      />
                      <Form.Check
                          inline
                          label="Medium"
                          name="group1"
                          type="radio"
                          id={`inline-checkbox-2`}
                      />
                      <Form.Check
                          inline
                          label="Low"
                          name="group1"
                          type="radio"
                          id={`inline-checkbox-2`}
                      />
                      <FloatingLabel controlId="floatingTextarea2" label="Comments">
                          <Form.Control
                              as="textarea"
                              placeholder="Leave a comment here"
                              style={{ height: '100px', marginTop: '0.5rem'}}
                          />
                      </FloatingLabel>
                  </div>
              </Wrapper>
          </Row>

          <Row>
              <Wrapper>
                  <Question>1.3 Has there been crime incidents in the area in the last 12 months?</Question>
                  <div className="inline-check mb-3">
                      <FloatingLabel controlId="floatingTextarea2" label="Comments">
                          <Form.Control
                              as="textarea"
                              placeholder="Leave a comment here"
                              style={{ height: '100px', marginTop: '0.5rem'}}
                          />
                      </FloatingLabel>
                  </div>
              </Wrapper>
          </Row>

          <Row>
              <Wrapper>
                  <Question>1.4 Is there a security enforcement institution within 20kms radius? </Question>
                  <div className="inline-check mb-3">
                      <FloatingLabel controlId="floatingTextarea2" label="Comments">
                          <Form.Control
                              as="textarea"
                              placeholder="Leave a comment here"
                              style={{ height: '100px', marginTop: '0.5rem'}}
                          />
                      </FloatingLabel>
                  </div>
              </Wrapper>
          </Row>

          <Row>
              <Wrapper>
                  <Question>1.5 Give the security rating of the station</Question>
                  <div className="inline-check mb-3">
                      <Form.Check
                          inline
                          label="Low Risk - L.R. (> 80%)"
                          name="group1"
                          type="radio"
                          id={`inline-checkbox-1`}
                      />
                      <Form.Check
                          inline
                          label="Medium Risk - M.R. (50 - 80%)"
                          name="group1"
                          type="radio"
                          id={`inline-checkbox-2`}
                      />
                      <Form.Check
                          inline
                          label="High Risk - M.R. (<50%)"
                          name="group1"
                          type="radio"
                          id={`inline-checkbox-2`}
                      />
                      <FloatingLabel controlId="floatingTextarea2" label="Comments">
                          <Form.Control
                              as="textarea"
                              placeholder="Leave a comment here"
                              style={{ height: '100px', marginTop: '0.5rem'}}
                          />
                      </FloatingLabel>
                  </div>
              </Wrapper>
          </Row>
      </Container>
  )
}

export default OperatingEnvironment