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

const LicenceSafety = (props) => {
    return (
        <Container>
            <Row>
                <Wrapper>
                    <Question>7.1 Does the station have the following licence  and reports and are they valid?</Question>
                    <div className="inline-check mb-3">
                        <div>
                            <Question>Effluent discharge licence	</Question>
                            <Form.Check
                                inline
                                label="Yes"
                                name="group1"
                                type="radio"
                                value="YES"
                                id={`inline-checkbox-1`}
                                onChange={props.p1}
                            />
                            <Form.Check
                                inline
                                label="No"
                                name="group1"
                                type="radio"
                                value="NO"
                                id={`inline-checkbox-2`}
                                onChange={props.p1}
                            />
                            <Form.Check
                                inline
                                label="N/A"
                                name="group2"
                                type="radio"
                                value="N/A"
                                id={`inline-checkbox-3`}
                                onChange={props.p2}
                            />
                        </div>
                        <div>
                            <Question>Annual Fire Safety report</Question>
                            <Form.Check
                                inline
                                label="Yes"
                                name="group2"
                                type="radio"
                                value="YES"
                                id={`inline-checkbox-1`}
                                onChange={props.p2}
                            />
                            <Form.Check
                                inline
                                label="No"
                                name="group2"
                                type="radio"
                                value="NO"
                                id={`inline-checkbox-2`}
                                onChange={props.p2}
                            />
                            <Form.Check
                                inline
                                label="N/A"
                                name="group2"
                                type="radio"
                                value="N/A"
                                id={`inline-checkbox-3`}
                                onChange={props.p2}
                            />
                        </div>
                        <div>
                            <Question>Annual Medical examination report for staff</Question>
                            <Form.Check
                                inline
                                label="Yes"
                                name="group3"
                                type="radio"
                                value="YES"
                                id={`inline-checkbox-1`}
                                onChange={props.p3}
                            />
                            <Form.Check
                                inline
                                label="No"
                                name="group3"
                                type="radio"
                                value="NO"
                                id={`inline-checkbox-2`}
                                onChange={props.p3}
                            />
                            <Form.Check
                                inline
                                label="N/A"
                                name="group3"
                                type="radio"
                                value="N/A"
                                id={`inline-checkbox-3`}
                                onChange={props.p3}
                            />
                        </div>
                        <div>
                            <Question>Annual Nema audit report</Question>
                            <Form.Check
                                inline
                                label="Yes"
                                name="group4"
                                type="radio"
                                value="YES"
                                id={`inline-checkbox-1`}
                                onChange={props.p4}
                            />
                            <Form.Check
                                inline
                                label="No"
                                name="group4"
                                type="radio"
                                value="NO"
                                id={`inline-checkbox-2`}
                                onChange={props.p4}
                            />
                            <Form.Check
                                inline
                                label="N/A"
                                name="group4"
                                type="radio"
                                value="N/A"
                                id={`inline-checkbox-3`}
                                onChange={props.p4}
                            />
                        </div>
                        <div>
                            <Question>Annual OSHA audit report</Question>
                            <Form.Check
                                inline
                                label="Yes"
                                name="group5"
                                type="radio"
                                value="YES"
                                id={`inline-checkbox-1`}
                                onChange={props.p5}
                            />
                            <Form.Check
                                inline
                                label="No"
                                name="group5"
                                type="radio"
                                value="NO"
                                id={`inline-checkbox-2`}
                                onChange={props.p5}
                            />
                            <Form.Check
                                inline
                                label="N/A"
                                name="group5"
                                type="radio"
                                value="N/A"
                                id={`inline-checkbox-3`}
                                onChange={props.p5}
                            />
                        </div>
                        <FloatingLabel controlId="floatingTextarea2" label="Comments">
                            <Form.Control
                                value={props.pc1}
                                onChange={props.pc1Change}
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
export default LicenceSafety