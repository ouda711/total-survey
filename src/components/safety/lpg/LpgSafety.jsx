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

const LpgSafety = (props) => {
  return (
      <Container>
          <Row>
              <Wrapper>
                  <Question>5.1 Are all LPG cylinders stored in a well ventilated store( low and high openings, to allow circulation of air) or  in appropriate lockable cages outside of the building and > 5 metres away from tanks, pumps, product delivery points and entrance/exit of the shop?	</Question>
                  <div className="inline-check mb-3">
                      <Form.Check
                          inline
                          label="Yes"
                          name="group3"
                          type="radio"
                          value="YES"
                          id={`inline-checkbox-1`}
                          onChange={props.lp}
                      />
                      <Form.Check
                          inline
                          label="No"
                          name="group1"
                          type="radio"
                          value="No"
                          id={`inline-checkbox-1`}
                          onChange={props.lp}
                      />
                      <Form.Check
                          inline
                          label="N/A"
                          name="group1"
                          type="radio"
                          value="N/A"
                          id={`inline-checkbox-1`}
                          onChange={props.lp}
                      />
                      <FloatingLabel controlId="floatingTextarea2" label="Comments">
                          <Form.Control
                              value={props.lpc}
                              onChange={props.lpcChange}
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

export default LpgSafety