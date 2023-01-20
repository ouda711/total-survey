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

const ForeCourtSafety = () => {
  return (
      <Container>
          <Row>
              <Wrapper>
                  <Question>1.1 Does the station have Speed Bumps at  Entrance and Exit?</Question>
                  <div className="inline-check mb-3">
                      <Form.Check
                          inline
                          label="Yes"
                          name="group1"
                          type="radio"
                          id={`inline-checkbox-1`}
                      />
                      <Form.Check
                          inline
                          label="No"
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
                  <Question>1.2 Are products clearly indicated on the pumps/ pump islands in line with Group/ M & S  standards?</Question>
                  <div className="inline-check mb-3">
                      <Form.Check
                          inline
                          label="Yes"
                          name="group1"
                          type="radio"
                          id={`inline-checkbox-1`}
                      />
                      <Form.Check
                          inline
                          label="No"
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
                  <Question>1.3 Are the following safety signage displayed on the pump islands?	</Question>
                  <div className="inline-check mb-3">
                      <div>
                          <Question>No smoking</Question>
                          <Form.Check
                              inline
                              label="Yes"
                              name="group1"
                              type="radio"
                              id={`inline-checkbox-1`}
                          />
                          <Form.Check
                              inline
                              label="No"
                              name="group1"
                              type="radio"
                              id={`inline-checkbox-2`}
                          />
                      </div>
                      <div>
                          <Question>Cellphones must be turned off</Question>
                          <Form.Check
                              inline
                              label="Yes"
                              name="group1"
                              type="radio"
                              id={`inline-checkbox-1`}
                          />
                          <Form.Check
                              inline
                              label="No"
                              name="group1"
                              type="radio"
                              id={`inline-checkbox-2`}
                          />
                      </div>
                      <div>
                          <Question>Turn off your engine</Question>
                          <Form.Check
                              inline
                              label="Yes"
                              name="group1"
                              type="radio"
                              id={`inline-checkbox-1`}
                          />
                          <Form.Check
                              inline
                              label="No"
                              name="group1"
                              type="radio"
                              id={`inline-checkbox-2`}
                          />
                      </div>
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
                  <Question>1.4 Is each fuel service island provided with a covered sand box filled with clean dry sand and equipped with a shovel or bucket?</Question>
                  <div className="inline-check mb-3">
                      <Form.Check
                          inline
                          label="Yes"
                          name="group1"
                          type="radio"
                          id={`inline-checkbox-1`}
                      />
                      <Form.Check
                          inline
                          label="No"
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
                  <Question>1.5 Is each fuel service island equipped with ABC fire extinguishers with intact seals and valid service dates?</Question>
                  <div className="inline-check mb-3">
                      <Form.Check
                          inline
                          label="Yes"
                          name="group1"
                          type="radio"
                          id={`inline-checkbox-1`}
                      />
                      <Form.Check
                          inline
                          label="No"
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
                  <Question>1.6 Are the fuel dispensers protected against collision?  Either bollards or crash barriers.</Question>
                  <div className="inline-check mb-3">
                      <Form.Check
                          inline
                          label="Yes"
                          name="group1"
                          type="radio"
                          id={`inline-checkbox-1`}
                      />
                      <Form.Check
                          inline
                          label="No"
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

export default ForeCourtSafety