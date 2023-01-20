import React from "react";
import styled from "styled-components";
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

const QuestionComponent = () => {
  const Wrapper = styled.div`
    width: 100%;
    margin: 0.5rem 0;
  `
  const Question = styled.h6`
    font-weight: bold;
  `
  return (
      <Wrapper>
          <Question>1.1 Does the station have speed bumps at the entrance and exit?</Question>
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
  )
}


export default QuestionComponent