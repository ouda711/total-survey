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

const GeneralComment = () => {
    return (
        <Wrapper>
            <FloatingLabel controlId="floatingTextarea2" label="GENERAL OBSERVATIONS AND COMMENTS OF THE STATION INSPECTION						">
                <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: '200px', marginTop: '0.5rem'}}
                />
            </FloatingLabel>
        </Wrapper>
    )
}

export default GeneralComment