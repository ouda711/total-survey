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

const CommendableArea = (props) => {
    return (
        <Wrapper>
            <FloatingLabel controlId="floatingTextarea2" label="COMMENDABLE AREAS OF STRENGTH AND BEST PRACTISES BY STATION">
                <Form.Control
                    value={props.cm}
                    onChange={props.cmChange}
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: '100px', marginTop: '0.5rem'}}
                />
            </FloatingLabel>
        </Wrapper>
    )
}

export default CommendableArea