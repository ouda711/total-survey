import React,{useState} from "react";
import {Button, Col, Container, Row} from "react-bootstrap";
import Form from 'react-bootstrap/Form'
import QuestionComponent from "./QuestionComponent";
import ForeCourtSafety from "./safety/forecourt/ForeCourtSafety";
import StorageForecourt from "./safety/storage/StorageForecourt";
import LubeSafety from "./safety/lube/LubeSafety";
import ShopSafety from "./safety/shop/ShopSafety";
import LpgSafety from "./safety/lpg/LpgSafety";
import GeneralSafety from "./safety/general/GeneralSafety";
import LicenceSafety from "./safety/license/LicenceSafety";
import CommendableArea from "./safety/extras/CommendableArea";
import GeneralComment from "./safety/extras/GeneralComment";

const SafetySurvey = () => {
    const [station, setStation] = useState('')
    const [manager, setManager] = useState('');
    const [territory, setTerritory] = useState('')
    const [date, setDate] = useState(null)

  return (
      <Container>
          <h3>Station Details</h3>
          <Row>
              <Col>
                  <Form.Group className="mb-3" controlId="formGroupStationName">
                      <Form.Label>Station Name</Form.Label>
                      <Form.Control type="text" placeholder="Station Name" value={station} onChange={(e) => setStation(e.target.value)}/>
                  </Form.Group>
              </Col>
              <Col>
                  <Form.Group className="mb-3" controlId="formGroupStationManager">
                      <Form.Label>Station Manager</Form.Label>
                      <Form.Control type="text" placeholder="Station Manager" value={manager} onChange={(e) => setManager(e.target.value)}/>
                  </Form.Group>
              </Col>
          </Row>
          <Row>
              <Col>
                  <Form.Group className="mb-3" controlId="formGroupTerritoryManager">
                      <Form.Label>Territory Manager</Form.Label>
                      <Form.Control type="text" placeholder="Territory Manager" value={territory} onChange={(e)=>setTerritory(e.target.value)}/>
                  </Form.Group>
              </Col>
              <Col>
                  <Form.Group className="mb-3" controlId="formGroupDate">
                      <Form.Label>Date</Form.Label>
                      <Form.Control type="date" placeholder="Select Date" value={date} onChange={(e) => setDate(e.target.value)}/>
                  </Form.Group>
              </Col>
          </Row>

          <h3>1. Forecourt</h3>
          <Row>
              <ForeCourtSafety />
          </Row>
          <h3>2. STORAGE / ROAD TANKER OFFLOADING AREA</h3>
          <Row>
              <StorageForecourt />
          </Row>
          <h3>3. LUBE SERVICE BAY AND CAR WASH</h3>
          <Row>
              <LubeSafety />
          </Row>
          <h3>4. BONJOUR SHOP</h3>
          <Row>
              <ShopSafety />
          </Row>
          <h3>5. LPG STORE/CAGE</h3>
          <Row>
              <LpgSafety/>
          </Row>
          <h3>GENERAL</h3>
          <Row>
              <GeneralSafety />
          </Row>
          <h3>7. OPERATING LICENCES, PERMITS AND REPORTS</h3>
          <Row>
            <LicenceSafety />
          </Row>
          <CommendableArea />
          <GeneralComment />

          <Button>Submit Details</Button>
      </Container>
  )
}

export default SafetySurvey