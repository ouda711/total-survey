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

const ForeCourtSafety = (props) => {
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
                          value="YES"
                          id={`inline-checkbox-1`}
                          onChange={props.f1}
                      />
                      <Form.Check
                          inline
                          label="No"
                          name="group1"
                          type="radio"
                          value="NO"
                          id={`inline-checkbox-2`}
                          onChange={props.f1}
                      />
                      <Form.Check
                          inline
                          label="N/A"
                          name="group1"
                          type="radio"
                          value="N/A"
                          id={`inline-checkbox-3`}
                          onChange={props.f1}
                      />
                      <FloatingLabel controlId="floatingTextarea2" label="Comments">
                          <Form.Control
                              value={props.c1}
                              onChange={props.c1Change}
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
                          name="group2"
                          type="radio"
                          value="YES"
                          id={`inline-checkbox-4`}
                          onChange={props.f2}
                      />
                      <Form.Check
                          inline
                          label="No"
                          name="group2"
                          type="radio"
                          value="NO"
                          id={`inline-checkbox-5`}
                          onChange={props.f2}
                      />
                      <Form.Check
                          inline
                          label="N/A"
                          name="group2"
                          type="radio"
                          value="N/A"
                          id={`inline-checkbox-6`}
                          onChange={props.f2}
                      />
                      <FloatingLabel controlId="floatingTextarea2" label="Comments">
                          <Form.Control
                              value={props.c2}
                              onChange={props.c2Change}
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
                              name="group3"
                              type="radio"
                              value="YES"
                              id={`inline-checkbox-7`}
                              onChange={props.f31}
                          />
                          <Form.Check
                              inline
                              label="No"
                              name="group3"
                              type="radio"
                              value="NO"
                              id={`inline-checkbox-8`}
                              onChange={props.f31}
                          />
                          <Form.Check
                              inline
                              label="N/A"
                              name="group3"
                              type="radio"
                              value="N/A"
                              id={`inline-checkbox-9`}
                              onChange={props.f31}
                          />
                      </div>
                      <div>
                          <Question>Cellphones must be turned off</Question>
                          <Form.Check
                              inline
                              label="Yes"
                              name="group4"
                              type="radio"
                              value="YES"
                              id={`inline-checkbox-10`}
                              onChange={props.f32}
                          />
                          <Form.Check
                              inline
                              label="No"
                              name="group4"
                              type="radio"
                              value="NO"
                              id={`inline-checkbox-11`}
                              onChange={props.f32}
                          />
                          <Form.Check
                              inline
                              label="N/A"
                              name="group4"
                              type="radio"
                              value="N/A"
                              id={`inline-checkbox-12`}
                              onChange={props.f32}
                          />
                      </div>
                      <div>
                          <Question>Turn off your engine</Question>
                          <Form.Check
                              inline
                              label="Yes"
                              name="group5"
                              type="radio"
                              value="YES"
                              id={`inline-checkbox-13`}
                              onChange={props.f33}
                          />
                          <Form.Check
                              inline
                              label="No"
                              name="group5"
                              type="radio"
                              value="NO"
                              id={`inline-checkbox-14`}
                              onChange={props.f33}
                          />
                          <Form.Check
                              inline
                              label="N/A"
                              name="group5"
                              type="radio"
                              value="N/A"
                              id={`inline-checkbox-15`}
                              onChange={props.f33}
                          />
                      </div>
                      <FloatingLabel controlId="floatingTextarea2" label="Comments">
                          <Form.Control
                              value={props.c3}
                              onChange={props.c3Change}
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
                          name="group6"
                          type="radio"
                          value="YES"
                          id={`inline-checkbox-16`}
                          onChange={props.f4}
                      />
                      <Form.Check
                          inline
                          label="No"
                          name="group6"
                          type="radio"
                          value="NO"
                          id={`inline-checkbox-17`}
                          onChange={props.f4}
                      />
                      <Form.Check
                          inline
                          label="N/A"
                          name="group7"
                          type="radio"
                          value="N/A"
                          id={`inline-checkbox-18`}
                          onChange={props.f4}
                      />
                      <FloatingLabel controlId="floatingTextarea2" label="Comments">
                          <Form.Control
                              value={props.c4}
                              onChange={props.c4Change}
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
                          name="group8"
                          type="radio"
                          value="YES"
                          id={`inline-checkbox-19`}
                          onChange={props.f5}
                      />
                      <Form.Check
                          inline
                          label="No"
                          name="group8"
                          type="radio"
                          value="NO"
                          id={`inline-checkbox-20`}
                          onChange={props.f5}
                      />
                      <Form.Check
                          inline
                          label="N/A"
                          name="group8"
                          type="radio"
                          value="N/A"
                          id={`inline-checkbox-21`}
                          onChange={props.f5}
                      />
                      <FloatingLabel controlId="floatingTextarea2" label="Comments">
                          <Form.Control
                              value={props.c5}
                              onChange={props.c5Change}
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
                          name="group9"
                          type="radio"
                          value="YES"
                          id={`inline-checkbox-22`}
                          onChange={props.f6}
                      />
                      <Form.Check
                          inline
                          label="No"
                          name="group9"
                          type="radio"
                          value="NO"
                          id={`inline-checkbox-23`}
                          onChange={props.f6}
                      />
                      <Form.Check
                          inline
                          label="N/A"
                          name="group9"
                          type="radio"
                          value="N/A"
                          id={`inline-checkbox-24`}
                          onChange={props.f6}
                      />
                      <FloatingLabel controlId="floatingTextarea2" label="Comments">
                          <Form.Control
                              value={props.c6}
                              onChange={props.c6Change}
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