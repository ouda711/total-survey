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

const GeneralSafety = (props) => {
  return (
      <Container>
          <Row>
              <Wrapper>
                  <Question>6.1 Are electrical boxes in good condition, free of temporary connections and labeled with 'DANGER' symbol?</Question>
                  <div className="inline-check mb-3">
                      <Form.Check
                          inline
                          label="Yes"
                          name="group1"
                          type="radio"
                          value="YES"
                          id={`inline-checkbox-16`}
                          onChange={props.g1}
                      />
                      <Form.Check
                          inline
                          label="No"
                          name="group1"
                          type="radio"
                          value="NO"
                          id={`inline-checkbox-17`}
                          onChange={props.g1}
                      />
                      <Form.Check
                          inline
                          label="N/A"
                          name="group1"
                          type="radio"
                          value="N/A"
                          id={`inline-checkbox-18`}
                          onChange={props.g1}
                      />
                      <FloatingLabel controlId="floatingTextarea2" label="Comments">
                          <Form.Control
                              value={props.gc1}
                              onChange={props.gc1Change}
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
                  <Question>6.2 Is there a CO2 fire extinguisher located near the electrical switch boxes?</Question>
                  <div className="inline-check mb-3">
                      <Form.Check
                          inline
                          label="Yes"
                          name="group2"
                          type="radio"
                          value="YES"
                          id={`inline-checkbox-16`}
                          onChange={props.g2}
                      />
                      <Form.Check
                          inline
                          label="No"
                          name="group2"
                          type="radio"
                          value="NO"
                          id={`inline-checkbox-17`}
                          onChange={props.g2}
                      />
                      <Form.Check
                          inline
                          label="N/A"
                          name="group2"
                          type="radio"
                          value="N/A"
                          id={`inline-checkbox-18`}
                          onChange={props.g2}
                      />
                      <FloatingLabel controlId="floatingTextarea2" label="Comments">
                          <Form.Control
                              value={props.gc2}
                              onChange={props.gc2Change}
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
                  <Question>6.3 Is the station equipped with a fully stocked first aid kit with valid contents?</Question>
                  <div className="inline-check mb-3">
                      <Form.Check
                          inline
                          label="Yes"
                          name="group3"
                          type="radio"
                          value="YES"
                          id={`inline-checkbox-16`}
                          onChange={props.g3}
                      />
                      <Form.Check
                          inline
                          label="No"
                          name="group3"
                          type="radio"
                          value="NO"
                          id={`inline-checkbox-17`}
                          onChange={props.g3}
                      />
                      <Form.Check
                          inline
                          label="N/A"
                          name="group3"
                          type="radio"
                          value="N/A"
                          id={`inline-checkbox-18`}
                          onChange={props.g3}
                      />
                      <FloatingLabel controlId="floatingTextarea2" label="Comments">
                          <Form.Control
                              value={props.gc3}
                              onChange={props.gc3Change}
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
                  <Question>6.4 Is the station equipped with an emergency stop button and in working condition? (Not more than 1.8m from the ground)</Question>
                  <div className="inline-check mb-3">
                      <Form.Check
                          inline
                          label="Yes"
                          name="group4"
                          type="radio"
                          value="YES"
                          id={`inline-checkbox-16`}
                          onChange={props.g4}
                      />
                      <Form.Check
                          inline
                          label="No"
                          name="group4"
                          type="radio"
                          value="NO"
                          id={`inline-checkbox-17`}
                          onChange={props.g4}
                      />
                      <Form.Check
                          inline
                          label="N/A"
                          name="group4"
                          type="radio"
                          value="N/A"
                          id={`inline-checkbox-18`}
                          onChange={props.g4}
                      />
                      <FloatingLabel controlId="floatingTextarea2" label="Comments">
                          <Form.Control
                              value={props.gc4}
                              onChange={props.gc4Change}
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
                  <Question>6.5 Are emergency exits clearly labelled and their access clear?</Question>
                  <div className="inline-check mb-3">
                      <Form.Check
                          inline
                          label="Yes"
                          name="group5"
                          type="radio"
                          value="YES"
                          id={`inline-checkbox-16`}
                          onChange={props.g5}
                      />
                      <Form.Check
                          inline
                          label="No"
                          name="group5"
                          type="radio"
                          value="NO"
                          id={`inline-checkbox-17`}
                          onChange={props.g5}
                      />
                      <Form.Check
                          inline
                          label="N/A"
                          name="group5"
                          type="radio"
                          value="N/A"
                          id={`inline-checkbox-18`}
                          onChange={props.g5}
                      />
                      <FloatingLabel controlId="floatingTextarea2" label="Comments">
                          <Form.Control
                              value={props.gc5}
                              onChange={props.gc5Change}
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
                  <Question>6.6 Does the Dealer and Off-loading marshals have appropriate protective helmet with valid expiry date? (EN 397), for off-loading?</Question>
                  <div className="inline-check mb-3">
                      <Form.Check
                          inline
                          label="Yes"
                          name="group6"
                          type="radio"
                          value="YES"
                          id={`inline-checkbox-16`}
                          onChange={props.g6}
                      />
                      <Form.Check
                          inline
                          label="No"
                          name="group6"
                          type="radio"
                          value="NO"
                          id={`inline-checkbox-17`}
                          onChange={props.g6}
                      />
                      <Form.Check
                          inline
                          label="N/A"
                          name="group6"
                          type="radio"
                          value="N/A"
                          id={`inline-checkbox-18`}
                          onChange={props.g6}
                      />
                      <FloatingLabel controlId="floatingTextarea2" label="Comments">
                          <Form.Control
                              value={props.gc6}
                              onChange={props.gc6Change}
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
                  <Question>6.7 Does the Dealer and Off-loading marshals have appropriate product handling gloves (EN 374), for off-loading?	</Question>
                  <div className="inline-check mb-3">
                      <Form.Check
                          inline
                          label="Yes"
                          name="group7"
                          type="radio"
                          value="YES"
                          id={`inline-checkbox-16`}
                          onChange={props.g7}
                      />
                      <Form.Check
                          inline
                          label="No"
                          name="group7"
                          type="radio"
                          value="NO"
                          id={`inline-checkbox-17`}
                          onChange={props.g7}
                      />
                      <Form.Check
                          inline
                          label="N/A"
                          name="group7"
                          type="radio"
                          value="N/A"
                          id={`inline-checkbox-18`}
                          onChange={props.g7}
                      />
                      <FloatingLabel controlId="floatingTextarea2" label="Comments">
                          <Form.Control
                              value={props.gc7}
                              onChange={props.gc7Change}
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
                  <Question>6.8 Does the Dealer and Off-loading marshals have appropriate protective glasses (EN 166), for off-loading?	</Question>
                  <div className="inline-check mb-3">
                      <Form.Check
                          inline
                          label="Yes"
                          name="group8"
                          type="radio"
                          value="YES"
                          id={`inline-checkbox-16`}
                          onChange={props.g8}
                      />
                      <Form.Check
                          inline
                          label="No"
                          name="group8"
                          type="radio"
                          value="NO"
                          id={`inline-checkbox-17`}
                          onChange={props.g8}
                      />
                      <Form.Check
                          inline
                          label="N/A"
                          name="group8"
                          type="radio"
                          value="N/A"
                          id={`inline-checkbox-18`}
                          onChange={props.g8}
                      />
                      <FloatingLabel controlId="floatingTextarea2" label="Comments">
                          <Form.Control
                              value={props.gc8}
                              onChange={props.gc8Change}
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
                  <Question>6.9 Do the station personnel wear  appropriate safety shoes (EN ISO 20345)?</Question>
                  <div className="inline-check mb-3">
                      <Form.Check
                          inline
                          label="Yes"
                          name="group9"
                          type="radio"
                          value="YES"
                          id={`inline-checkbox-16`}
                          onChange={props.g9}
                      />
                      <Form.Check
                          inline
                          label="No"
                          name="group9"
                          type="radio"
                          value="NO"
                          id={`inline-checkbox-17`}
                          onChange={props.g9}
                      />
                      <Form.Check
                          inline
                          label="N/A"
                          name="group9"
                          type="radio"
                          value="N/A"
                          id={`inline-checkbox-18`}
                          onChange={props.g9}
                      />
                      <FloatingLabel controlId="floatingTextarea2" label="Comments">
                          <Form.Control
                              value={props.gc9}
                              onChange={props.gc9Change}
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
                  <Question>6.10 Are all station staff trained on Assault Prevention? (Review training records to confirm)</Question>
                  <div className="inline-check mb-3">
                      <Form.Check
                          inline
                          label="Yes"
                          name="group10"
                          type="radio"
                          value="YES"
                          id={`inline-checkbox-16`}
                          onChange={props.g10}
                      />
                      <Form.Check
                          inline
                          label="No"
                          name="group11"
                          type="radio"
                          value="NO"
                          id={`inline-checkbox-17`}
                          onChange={props.g11}
                      />
                      <Form.Check
                          inline
                          label="N/A"
                          name="group11"
                          type="radio"
                          value="N/A"
                          id={`inline-checkbox-18`}
                          onChange={props.g11}
                      />
                      <FloatingLabel controlId="floatingTextarea2" label="Comments">
                          <Form.Control
                              value={props.gc11}
                              onChange={props.gc11Change}
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
                  <Question>6.11 Is there a visible current list of emergency telephone numbers, both in and outside the office ?</Question>
                  <div className="inline-check mb-3">
                      <Form.Check
                          inline
                          label="Yes"
                          name="group11"
                          type="radio"
                          value="YES"
                          id={`inline-checkbox-16`}
                          onChange={props.g11}
                      />
                      <Form.Check
                          inline
                          label="No"
                          name="group11"
                          type="radio"
                          value="NO"
                          id={`inline-checkbox-17`}
                          onChange={props.g11}
                      />
                      <Form.Check
                          inline
                          label="N/A"
                          name="group11"
                          type="radio"
                          value="N/A"
                          id={`inline-checkbox-18`}
                          onChange={props.g11}
                      />
                      <FloatingLabel controlId="floatingTextarea2" label="Comments">
                          <Form.Control
                              value={props.gc11}
                              onChange={props.gc11Change}
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
                  <Question>6.12 Does the station have a copy Service Station Crisis Procedures, dated 29/06/2016 and are they communicated to the station personnel? Confirm by interviewing afew station staff.</Question>
                  <div className="inline-check mb-3">
                      <Form.Check
                          inline
                          label="Yes"
                          name="group12"
                          type="radio"
                          value="YES"
                          id={`inline-checkbox-16`}
                          onChange={props.g12}
                      />
                      <Form.Check
                          inline
                          label="No"
                          name="group12"
                          type="radio"
                          value="NO"
                          id={`inline-checkbox-17`}
                          onChange={props.g12}
                      />
                      <Form.Check
                          inline
                          label="N/A"
                          name="group12"
                          type="radio"
                          value="N/A"
                          id={`inline-checkbox-18`}
                          onChange={props.g12}
                      />
                      <FloatingLabel controlId="floatingTextarea2" label="Comments">
                          <Form.Control
                              value={props.gc12}
                              onChange={props.gc12Change}
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
                  <Question>6.13 Are there bollards in good condition infront of the shops buildings separating the customers carpark and front pavement?	</Question>
                  <div className="inline-check mb-3">
                      <Form.Check
                          inline
                          label="Yes"
                          name="group13"
                          type="radio"
                          value="YES"
                          id={`inline-checkbox-16`}
                          onChange={props.g13}
                      />
                      <Form.Check
                          inline
                          label="No"
                          name="group13"
                          type="radio"
                          value="NO"
                          id={`inline-checkbox-17`}
                          onChange={props.g13}
                      />
                      <Form.Check
                          inline
                          label="N/A"
                          name="group13"
                          type="radio"
                          value="N/A"
                          id={`inline-checkbox-18`}
                          onChange={props.g13}
                      />
                      <FloatingLabel controlId="floatingTextarea2" label="Comments">
                          <Form.Control
                              value={props.gc13}
                              onChange={props.gc13Change}
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
                  <Question>6.14 Is there a forex board for Total's Golden Rules, prominently displayed and accessible by all station staff.	</Question>
                  <div className="inline-check mb-3">
                      <Form.Check
                          inline
                          label="Yes"
                          name="group14"
                          type="radio"
                          value="YES"
                          id={`inline-checkbox-16`}
                          onChange={props.g14}
                      />
                      <Form.Check
                          inline
                          label="No"
                          name="group14"
                          type="radio"
                          value="NO"
                          id={`inline-checkbox-17`}
                          onChange={props.g14}
                      />
                      <Form.Check
                          inline
                          label="N/A"
                          name="group14"
                          type="radio"
                          value="N/A"
                          id={`inline-checkbox-18`}
                          onChange={props.g14}
                      />
                      <FloatingLabel controlId="floatingTextarea2" label="Comments">
                          <Form.Control
                              value={props.gc14}
                              onChange={props.gc14Change}
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
                  <Question>6.15 Are MPESA payment transactions done away from the pumps, atleast 5m?	</Question>
                  <div className="inline-check mb-3">
                      <Form.Check
                          inline
                          label="Yes"
                          name="group15"
                          type="radio"
                          value="YES"
                          id={`inline-checkbox-16`}
                          onChange={props.g15}
                      />
                      <Form.Check
                          inline
                          label="No"
                          name="group15"
                          type="radio"
                          value="NO"
                          id={`inline-checkbox-17`}
                          onChange={props.g15}
                      />
                      <Form.Check
                          inline
                          label="N/A"
                          name="group15"
                          type="radio"
                          value="N/A"
                          id={`inline-checkbox-18`}
                          onChange={props.g15}
                      />
                      <FloatingLabel controlId="floatingTextarea2" label="Comments">
                          <Form.Control
                              value={props.gc15}
                              onChange={props.gc15Change}
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
                  <Question>6.16 Is there a four stand ladder in the store to access goods in shelves that are higher than 1.5m from ground		</Question>
                  <div className="inline-check mb-3">
                      <Form.Check
                          inline
                          label="Yes"
                          name="group16"
                          type="radio"
                          value="YES"
                          id={`inline-checkbox-16`}
                          onChange={props.g16}
                      />
                      <Form.Check
                          inline
                          label="No"
                          name="group16"
                          type="radio"
                          value="NO"
                          id={`inline-checkbox-17`}
                          onChange={props.g16}
                      />
                      <Form.Check
                          inline
                          label="N/A"
                          name="group16"
                          type="radio"
                          value="N/A"
                          id={`inline-checkbox-18`}
                          onChange={props.g16}
                      />
                      <FloatingLabel controlId="floatingTextarea2" label="Comments">
                          <Form.Control
                              value={props.gc16}
                              onChange={props.gc16Change}
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

export default GeneralSafety