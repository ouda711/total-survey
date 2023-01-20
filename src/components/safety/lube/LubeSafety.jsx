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

const LubeSafety = (props) => {
  return (
      <Container>
          <Row>
              <Wrapper>
                  <Question>3.1 Is the lube service bay oil pit equipped with a safe wheel guard rail and in good condition?</Question>
                  <div className="inline-check mb-3">
                      <Form.Check
                          inline
                          label="Yes"
                          name="group1"
                          type="radio"
                          value="YES"
                          id={`inline-checkbox-1`}
                          onChange={props.l1}
                      />
                      <Form.Check
                          inline
                          label="No"
                          name="group1"
                          type="radio"
                          value="No"
                          id={`inline-checkbox-1`}
                          onChange={props.l1}
                      />
                      <Form.Check
                          inline
                          label="N/A"
                          name="group1"
                          type="radio"
                          value="N/A"
                          id={`inline-checkbox-1`}
                          onChange={props.l1}
                      />
                      <FloatingLabel controlId="floatingTextarea2" label="Comments">
                          <Form.Control
                              value={props.lc1}
                              onChange={props.lc1Change}
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
                  <Question>3.2 Is Lube bay entrance fitted with a chain link to control entry of vehicles.</Question>
                  <div className="inline-check mb-3">
                      <Form.Check
                          inline
                          label="Yes"
                          name="group2"
                          type="radio"
                          value="YES"
                          id={`inline-checkbox-1`}
                          onChange={props.l2}
                      />
                      <Form.Check
                          inline
                          label="No"
                          name="group2"
                          type="radio"
                          value="No"
                          id={`inline-checkbox-1`}
                          onChange={props.l2}
                      />
                      <Form.Check
                          inline
                          label="N/A"
                          name="group2"
                          type="radio"
                          value="N/A"
                          id={`inline-checkbox-1`}
                          onChange={props.l2}
                      />
                      <FloatingLabel controlId="floatingTextarea2" label="Comments">
                          <Form.Control
                              value={props.lc2}
                              onChange={props.lc2Change}
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
                  <Question>3.3 Is the lube service bay oil pit equipped with a safe access step ladder?</Question>
                  <div className="inline-check mb-3">
                      <Form.Check
                          inline
                          label="Yes"
                          name="group3"
                          type="radio"
                          value="YES"
                          id={`inline-checkbox-1`}
                          onChange={props.l3}
                      />
                      <Form.Check
                          inline
                          label="No"
                          name="group3"
                          type="radio"
                          value="No"
                          id={`inline-checkbox-1`}
                          onChange={props.l3}
                      />
                      <Form.Check
                          inline
                          label="N/A"
                          name="group3"
                          type="radio"
                          value="N/A"
                          id={`inline-checkbox-1`}
                          onChange={props.l3}
                      />
                      <FloatingLabel controlId="floatingTextarea2" label="Comments">
                          <Form.Control
                              value={props.lc3}
                              onChange={props.lc3Change}
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
                  <Question>3.4 Is the lube Service bay equipped with a no smoking sign?</Question>
                  <div className="inline-check mb-3">
                      <Form.Check
                          inline
                          label="Yes"
                          name="group4"
                          type="radio"
                          value="YES"
                          id={`inline-checkbox-1`}
                          onChange={props.l4}
                      />
                      <Form.Check
                          inline
                          label="No"
                          name="group4"
                          type="radio"
                          value="No"
                          id={`inline-checkbox-1`}
                          onChange={props.l4}
                      />
                      <Form.Check
                          inline
                          label="N/A"
                          name="group1"
                          type="radio"
                          value="N/A"
                          id={`inline-checkbox-1`}
                          onChange={props.l4}
                      />
                      <FloatingLabel controlId="floatingTextarea2" label="Comments">
                          <Form.Control
                              value={props.lc4}
                              onChange={props.lc4Change}
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
                  <Question>3.5 Are used oils and greases collected in appropriate containers?</Question>
                  <div className="inline-check mb-3">
                      <Form.Check
                          inline
                          label="Yes"
                          name="group5"
                          type="radio"
                          value="YES"
                          id={`inline-checkbox-1`}
                          onChange={props.l5}
                      />
                      <Form.Check
                          inline
                          label="No"
                          name="group5"
                          type="radio"
                          value="No"
                          id={`inline-checkbox-1`}
                          onChange={props.l5}
                      />
                      <Form.Check
                          inline
                          label="N/A"
                          name="group5"
                          type="radio"
                          value="N/A"
                          id={`inline-checkbox-1`}
                          onChange={props.l5}
                      />
                      <FloatingLabel controlId="floatingTextarea2" label="Comments">
                          <Form.Control
                              value={props.lc5}
                              onChange={props.lc5Change}
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
                  <Question>3.6 Are the lights in the service pit of flameproof specification? (Should have ATEX rating details)</Question>
                  <div className="inline-check mb-3">
                      <Form.Check
                          inline
                          label="Yes"
                          name="group6"
                          type="radio"
                          value="YES"
                          id={`inline-checkbox-1`}
                          onChange={props.l6}
                      />
                      <Form.Check
                          inline
                          label="No"
                          name="group6"
                          type="radio"
                          value="No"
                          id={`inline-checkbox-1`}
                          onChange={props.l6}
                      />
                      <Form.Check
                          inline
                          label="N/A"
                          name="group6"
                          type="radio"
                          value="N/A"
                          id={`inline-checkbox-1`}
                          onChange={props.l6}
                      />
                      <FloatingLabel controlId="floatingTextarea2" label="Comments">
                          <Form.Control
                              value={props.lc6}
                              onChange={props.lc6Change}
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
                  <Question>3.7 Is the bay equipped with ABC fire extinguishers with intact seals and valid service dates?</Question>
                  <div className="inline-check mb-3">
                      <Form.Check
                          inline
                          label="Yes"
                          name="group7"
                          type="radio"
                          value="YES"
                          id={`inline-checkbox-1`}
                          onChange={props.l7}
                      />
                      <Form.Check
                          inline
                          label="No"
                          name="group7"
                          type="radio"
                          value="No"
                          id={`inline-checkbox-1`}
                          onChange={props.l7}
                      />
                      <Form.Check
                          inline
                          label="N/A"
                          name="group7"
                          type="radio"
                          value="N/A"
                          id={`inline-checkbox-1`}
                          onChange={props.l7}
                      />
                      <FloatingLabel controlId="floatingTextarea2" label="Comments">
                          <Form.Control
                              value={props.lc7}
                              onChange={props.lc7Change}
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
                  <Question>3.8 Is the Oil interceptor well maintained and clean ?</Question>
                  <div className="inline-check mb-3">
                      <Form.Check
                          inline
                          label="Yes"
                          name="group8"
                          type="radio"
                          value="YES"
                          id={`inline-checkbox-1`}
                          onChange={props.l8}
                      />
                      <Form.Check
                          inline
                          label="No"
                          name="group8"
                          type="radio"
                          value="No"
                          id={`inline-checkbox-1`}
                          onChange={props.l8}
                      />
                      <Form.Check
                          inline
                          label="N/A"
                          name="group8"
                          type="radio"
                          value="N/A"
                          id={`inline-checkbox-1`}
                          onChange={props.l8}
                      />
                      <FloatingLabel controlId="floatingTextarea2" label="Comments">
                          <Form.Control
                              value={props.lc8}
                              onChange={props.lc8Change}
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

export default LubeSafety