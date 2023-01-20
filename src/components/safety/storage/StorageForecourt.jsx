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

const StorageForecourt = (props) => {
  return (
      <Container>
        <Row>
          <Wrapper>
            <Question>2.1 Can the road tanker park without excessive manoeuvring and ready to drive away?</Question>
            <div className="inline-check mb-3">
              <Form.Check
                  inline
                  label="Yes"
                  name="group1"
                  type="radio"
                  value="YES"
                  id={`inline-checkbox-1`}
                  onChange={props.s1}
              />
              <Form.Check
                  inline
                  label="No"
                  name="group1"
                  type="radio"
                  value="NO"
                  id={`inline-checkbox-2`}
                  onChange={props.s1}
              />
              <Form.Check
                  inline
                  label="N/A"
                  name="group1"
                  type="radio"
                  value="N/A"
                  id={`inline-checkbox-3`}
                  onChange={props.s1}
              />
              <FloatingLabel controlId="floatingTextarea2" label="Comments">
                <Form.Control
                    value={props.sc1}
                    onChange={props.sc1Change}
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
            <Question>2.2 Are all delivery points located in one lockable place, protected from collision and product colour coded?	</Question>
            <div className="inline-check mb-3">
              <Form.Check
                  inline
                  label="Yes"
                  name="group2"
                  type="radio"
                  value="YES"
                  id={`inline-checkbox-4`}
                  onChange={props.s2}
              />
              <Form.Check
                  inline
                  label="No"
                  name="group2"
                  type="radio"
                  value="NO"
                  id={`inline-checkbox-5`}
                  onChange={props.s2}
              />
              <Form.Check
                  inline
                  label="N/A"
                  name="group2"
                  type="radio"
                  value="N/A"
                  id={`inline-checkbox-6`}
                  onChange={props.s2}
              />
              <FloatingLabel controlId="floatingTextarea2" label="Comments">
                <Form.Control
                    value={props.sc2}
                    onChange={props.sc2Change}
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
            <Question>2.3 Are the tank vents visible from the offloading area and > 10 metres away from public areas?</Question>
            <div className="inline-check mb-3">
              <Form.Check
                  inline
                  label="Yes"
                  name="group3"
                  type="radio"
                  value="YES"
                  id={`inline-checkbox-7`}
                  onChange={props.s3}
              />
              <Form.Check
                  inline
                  label="No"
                  name="group3"
                  type="radio"
                  value="NO"
                  id={`inline-checkbox-8`}
                  onChange={props.s3}
              />
              <Form.Check
                  inline
                  label="N/A"
                  name="group3"
                  type="radio"
                  value="N/A"
                  id={`inline-checkbox-9`}
                  onChange={props.s3}
              />
              <FloatingLabel controlId="floatingTextarea2" label="Comments">
                <Form.Control
                    value={props.sc3}
                    onChange={props.sc3Change}
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
            <Question>2.4 Are tank manhole covers product colour coded?</Question>
            <div className="inline-check mb-3">
              <Form.Check
                  inline
                  label="Yes"
                  name="group4"
                  type="radio"
                  value="YES"
                  id={`inline-checkbox-1`}
                  onChange={props.s4}
              />
              <Form.Check
                  inline
                  label="No"
                  name="group4"
                  type="radio"
                  value="NO"
                  id={`inline-checkbox-2`}
                  onChange={props.s4}
              />
              <Form.Check
                  inline
                  label="N/A"
                  name="group4"
                  type="radio"
                  value="N/A"
                  id={`inline-checkbox-3`}
                  onChange={props.s4}
              />
              <FloatingLabel controlId="floatingTextarea2" label="Comments">
                <Form.Control
                    value={props.sc4}
                    onChange={props.sc4Change}
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
            <Question>2.5 Are products in underground tanks free of water? (Check using water finding paste smeared at the bottom of the dipstick)</Question>
            <div className="inline-check mb-3">
              <Form.Check
                  inline
                  label="Yes"
                  name="group5"
                  type="radio"
                  value="YES"
                  id={`inline-checkbox-1`}
                  onChange={props.s5}
              />
              <Form.Check
                  inline
                  label="No"
                  name="group5"
                  type="radio"
                  value="NO"
                  id={`inline-checkbox-2`}
                  onChange={props.s5}
              />
              <Form.Check
                  inline
                  label="N/A"
                  name="group5"
                  type="radio"
                  value="N/A"
                  id={`inline-checkbox-3`}
                  onChange={props.s5}
              />
              <FloatingLabel controlId="floatingTextarea2" label="Comments">
                <Form.Control
                    value={props.sc5}
                    onChange={props.sc5Change}
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

export default StorageForecourt