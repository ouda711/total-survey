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

const ShopSafety = (props) => {
  return (
      <Container>
          <Row>
              <Wrapper>
                  <Question>4.1 Are food items stored separately from non food items ?	</Question>
                  <div className="inline-check mb-3">
                      <Form.Check
                          inline
                          label="Yes"
                          name="group1"
                          type="radio"
                          value="YES"
                          id={`inline-checkbox-1`}
                          onChange={props.b1}
                      />
                      <Form.Check
                          inline
                          label="No"
                          name="group1"
                          type="radio"
                          value="No"
                          id={`inline-checkbox-1`}
                          onChange={props.b1}
                      />
                      <Form.Check
                          inline
                          label="N/A"
                          name="group1"
                          type="radio"
                          value="N/A"
                          id={`inline-checkbox-1`}
                          onChange={props.b1}
                      />
                      <FloatingLabel controlId="floatingTextarea2" label="Comments">
                          <Form.Control
                              value={props.bc1}
                              onChange={props.bc1Change}
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
                  <Question>4.2 Does the shop maintain a register for expired items?</Question>
                  <div className="inline-check mb-3">
                      <Form.Check
                          inline
                          label="Yes"
                          name="group2"
                          type="radio"
                          value="YES"
                          id={`inline-checkbox-1`}
                          onChange={props.b2}
                      />
                      <Form.Check
                          inline
                          label="No"
                          name="group2"
                          type="radio"
                          value="No"
                          id={`inline-checkbox-1`}
                          onChange={props.b2}
                      />
                      <Form.Check
                          inline
                          label="N/A"
                          name="group2"
                          type="radio"
                          value="N/A"
                          id={`inline-checkbox-1`}
                          onChange={props.b2}
                      />
                      <FloatingLabel controlId="floatingTextarea2" label="Comments">
                          <Form.Control
                              value={props.bc2}
                              onChange={props.bc2Change}
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
                  <Question>4.3 Are expired items in the shop removed and segregated in a clearly marked area ready for disposal?</Question>
                  <div className="inline-check mb-3">
                      <Form.Check
                          inline
                          label="Yes"
                          name="group3"
                          type="radio"
                          value="YES"
                          id={`inline-checkbox-1`}
                          onChange={props.b3}
                      />
                      <Form.Check
                          inline
                          label="No"
                          name="group1"
                          type="radio"
                          value="No"
                          id={`inline-checkbox-1`}
                          onChange={props.b3}
                      />
                      <Form.Check
                          inline
                          label="N/A"
                          name="group1"
                          type="radio"
                          value="N/A"
                          id={`inline-checkbox-1`}
                          onChange={props.b3}
                      />
                      <FloatingLabel controlId="floatingTextarea2" label="Comments">
                          <Form.Control
                              value={props.bc3}
                              onChange={props.bc3Change}
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

export default ShopSafety