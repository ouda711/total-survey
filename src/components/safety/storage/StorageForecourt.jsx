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

const StorageForecourt = () => {
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
            <Question>2.2 Are all delivery points located in one lockable place, protected from collision and product colour coded?	</Question>
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
            <Question>2.3 Are the tank vents visible from the offloading area and > 10 metres away from public areas?</Question>
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
            <Question>2.4 Are tank manhole covers product colour coded?</Question>
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
            <Question>2.5 Are products in underground tanks free of water? (Check using water finding paste smeared at the bottom of the dipstick)</Question>
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

export default StorageForecourt