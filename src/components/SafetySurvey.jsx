import React, {useRef, useState} from "react";
import axios from 'axios'
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

    // Forecourt Answers
    const [f1, setF1] = useState(null);
    const [c1, setC1] = useState('')
    const [f2,setF2] = useState(null)
    const [c2, setC2] = useState('')
    const [f31,setF31] = useState(null)
    const [c3, setC3] = useState('')
    const [f32, setF32] = useState(null)
    const [f33, setF33] = useState(null)
    const [f4, setF4] = useState(null)
    const [c4, setC4] = useState('')
    const [f5, setF5] = useState(null)
    const [c5, setC5] = useState('')
    const [f6, setF6] = useState(null);
    const [c6, setC6] = useState('')

    const f1Change = (e) => {
        setF1(e.target.value)
    }
    const c1Change = (e) => {
        setC1(e.target.value)
    }
    const f2Change = (e) => {
        setF2(e.target.value)
    }
    const c2Change = (e) => {
        setC2(e.target.value)
    }
    const f31Change = (e) => {
        setF31(e.target.value)
    }
    const f32Change = (e) => {
        setF32(e.target.value)
    }
    const f33Change = (e) => {
        setF33(e.target.value)
    }
    const c3Change = (e) => {
        setC3(e.target.value)
    }
    const f4Change = (e) => {
        setF4(e.target.value)
    }
    const c4Change = (e) => {
        setC4(e.target.value)
    }
    const c5Change = (e) => {
        setC5(e.target.value)
    }
    const f5Change = (e) => {
        setF5(e.target.value)
    }
    const f6Change = (e) => {
        setF6(e.target.value)
    }
    const c6Change = (e) => {
        setC6(e.target.value)
    }

    // Storage Answers
    const [s1, setS1] = useState(null)
    const [sc1, setSc1] = useState(null)
    const [s2, setS2] = useState(null)
    const [sc2, setSc2] = useState(null)
    const [s3, setS3] = useState(null)
    const [sc3, setSc3] = useState(null)
    const [s4, setS4] = useState(null)
    const [sc4, setSc4] = useState(null)
    const [s5, setS5] = useState(null)
    const [sc5, setSc5] = useState(null)

    const s1Change = (e) => {
        setS1(e.target.value)
    }
    const sc1Change = (e) => {
        setSc1(e.target.value)
    }
    const s2Change = (e) => {
        setS2(e.target.value)
    }
    const sc2Change = (e) => {
        setSc2(e.target.value)
    }
    const s3Change = (e) => {
        setS3(e.target.value)
    }
    const sc3Change = (e) => {
        setSc3(e.target.value)
    }
    const s4Change = (e) => {
        setS4(e.target.value)
    }
    const sc4Change = (e) => {
        setSc4(e.target.value)
    }
    const s5Change = (e) => {
        setS5(e.target.value)
    }
    const sc5Change = (e) => {
        setSc5(e.target.value)
    }


    // Lube Service Answers
    const [l1, setL1] = useState(null)
    const [lc1, setLc1] = useState(null)
    const [l2, setL2] = useState(null)
    const [lc2, setLc2] = useState(null)
    const [l3, setL3] = useState(null)
    const [lc3, setLc3] = useState(null)
    const [l4, setL4] = useState(null)
    const [lc4, setLc4] = useState(null)
    const [l5, setL5] = useState(null)
    const [lc5, setLc5] = useState(null)
    const [l6, setL6] = useState(null)
    const [lc6, setLc6] = useState(null)
    const [l7, setL7] = useState(null)
    const [lc7, setLc7] = useState(null)
    const [l8, setL8] = useState(null)
    const [lc8, setLc8] = useState(null)

    const l1Change = (e) => {
        setL1(e.target.value)
    }
    const lc1Change = (e) => {
        setLc1(e.target.value)
    }
    const l2Change = (e) => {
        setL2(e.target.value)
    }
    const lc2Change = (e) => {
        setLc2(e.target.value)
    }
    const l3Change = (e) => {
        setL3(e.target.value)
    }
    const lc3Change = (e) => {
        setLc3(e.target.value)
    }
    const l4Change = (e) => {
        setL4(e.target.value)
    }
    const lc4Change = (e) => {
        setLc4(e.target.value)
    }
    const l5Change = (e) => {
        setL5(e.target.value)
    }
    const lc5Change = (e) => {
        setLc5(e.target.value)
    }
    const l6Change = (e) => {
        setL6(e.target.value)
    }
    const lc6Change = (e) => {
        setLc6(e.target.value)
    }
    const l7Change = (e) => {
        setL7(e.target.value)
    }
    const lc7Change = (e) => {
        setLc7(e.target.value)
    }
    const l8Change = (e) => {
        setL8(e.target.value)
    }
    const lc8Change = (e) => {
        setLc8(e.target.value)
    }


    // Bonjour Shop Answers
    const [b1, setB1] = useState(null)
    const [bc1, setBc1] = useState(null)
    const [b2, setB2] = useState(null)
    const [bc2, setBc2] = useState(null)
    const [b3, setB3] = useState(null)
    const [bc3, setBc3] = useState(null)

    const b1Change = (e) => {
        setB1(e.target.value)
    }
    const bc1Change = (e) => {
        setBc1(e.target.value)
    }
    const b2Change = (e) => {
        setB2(e.target.value)
    }
    const bc2Change = (e) => {
        setBc2(e.target.value)
    }
    const b3Change = (e) => {
        setB3(e.target.value)
    }
    const bc3Change = (e) => {
        setBc3(e.target.value)
    }

    // LPG Answers
    const [lp, setLp] = useState(null)
    const [lpc, setLpc] = useState('')

    const lpChange = (e)=> {
        setLp(e.target.value)
    }
    const lpcChange = (e) => {
        setLpc(e.target.value)
    }

    // General Answers
    const [g1, setG1] = useState(null)
    const [gc1, setGc1] = useState('')
    const [g2, setG2] = useState(null)
    const [gc2, setGc2] = useState('')
    const [g3, setG3] = useState(null)
    const [gc3, setGc3] = useState('')
    const [g4, setG4] = useState(null)
    const [gc4, setGc4] = useState('')
    const [g5, setG5] = useState(null)
    const [gc5, setGc5] = useState('')
    const [g6, setG6] = useState(null)
    const [gc6, setGc6] = useState('')
    const [g7, setG7] = useState(null)
    const [gc7, setGc7] = useState('')
    const [g8, setG8] = useState(null)
    const [gc8, setGc8] = useState('')
    const [g9, setG9] = useState(null)
    const [gc9, setGc9] = useState('')
    const [g10, setG10] = useState(null)
    const [gc10, setGc10] = useState('')
    const [g11, setG11] = useState(null)
    const [gc11, setGc11] = useState('')
    const [g12, setG12] = useState(null)
    const [gc12, setGc12] = useState('')
    const [g13, setG13] = useState(null)
    const [gc13, setGc13] = useState('')
    const [g14, setG14] = useState(null)
    const [gc14, setGc14] = useState('')
    const [g15, setG15] = useState(null)
    const [gc15, setGc15] = useState('')
    const [g16, setG16] = useState(null)
    const [gc16, setGc16] = useState('')

    const g1Change = (e) => {
        setG1(e.target.value)
    }
    const gc1Change = (e) => {
        setGc1(e.target.value)
    }
    const g2Change = (e) => {
        setG2(e.target.value)
    }
    const gc2Change = (e) => {
        setGc2(e.target.value)
    }
    const g3Change = (e) => {
        setG3(e.target.value)
    }
    const gc3Change = (e) => {
        setGc3(e.target.value)
    }
    const g4Change = (e) => {
        setG4(e.target.value)
    }
    const gc4Change = (e) => {
        setGc4(e.target.value)
    }
    const g5Change = (e) => {
        setG5(e.target.value)
    }
    const gc5Change = (e) => {
        setGc5(e.target.value)
    }
    const g6Change = (e) => {
        setG6(e.target.value)
    }
    const gc6Change = (e) => {
        setGc6(e.target.value)
    }
    const g7Change = (e) => {
        setG7(e.target.value)
    }
    const gc7Change = (e) => {
        setGc7(e.target.value)
    }
    const g8Change = (e) => {
        setG8(e.target.value)
    }
    const gc8Change = (e) => {
        setGc8(e.target.value)
    }
    const g9Change = (e) => {
        setG9(e.target.value)
    }
    const gc9Change = (e) => {
        setGc9(e.target.value)
    }
    const g10Change = (e) => {
        setG10(e.target.value)
    }
    const gc10Change = (e) => {
        setGc10(e.target.value)
    }
    const g11Change = (e) => {
        setG11(e.target.value)
    }
    const gc11Change = (e) => {
        setGc11(e.target.value)
    }
    const g12Change = (e) => {
        setG12(e.target.value)
    }
    const gc12Change = (e) => {
        setGc12(e.target.value)
    }
    const g13Change = (e) => {
        setG13(e.target.value)
    }
    const gc13Change = (e) => {
        setGc13(e.target.value)
    }
    const g14Change = (e) => {
        setG14(e.target.value)
    }
    const gc14Change = (e) => {
        setGc14(e.target.value)
    }
    const g15Change = (e) => {
        setG15(e.target.value)
    }
    const gc15Change = (e) => {
        setGc15(e.target.value)
    }
    const g16Change = (e) => {
        setG16(e.target.value)
    }
    const gc16Change = (e) => {
        setGc16(e.target.value)
    }

    // Permits Answers
    const [p1, setP1] = useState(null)
    const [p2, setP2] = useState(null)
    const [p3, setP3] = useState(null)
    const [p4, setP4] = useState(null)
    const [p5, setP5] = useState(null)
    const [pc1, setPc1] = useState(null)

    const p1Change = (e) => {
        setP1(e.target.value)
    }
    const p2Change = (e) => {
        setP2(e.target.value)
    }
    const p3Change = (e) => {
        setP3(e.target.value)
    }
    const p4Change = (e) => {
        setP4(e.target.value)
    }
    const p5Change = (e) => {
        setP5(e.target.value)
    }
    const pc1Change = (e) => {
        setPc1(e.target.value)
    }

    // Commendable
    const [cm, setCm] = useState('')
    const [gm, setGm] = useState('')
    const cmChange = (e) => {
        setCm(e.target.value)
    }
    const gmChange = (e) => {
        setGm(e.target.value)
    }

    const submit = () => {
        const data  = {
            survey_type: "Safety",
            results: {
                "Name of Service Station": station,
                "Dealer's Name": manager,
                "Territory Manager": territory,
                "Date": date,
                "FORECOURT": {
                    "Does the station have Speed Bumps at  Entrance and Exit?": {
                        "Response": f1,
                        "Comment": c1
                    },
                    "Are products clearly indicated on the pumps/ pump islands in line with Group/ M & S  standards?": {
                        "Response": f2,
                        "Comment":c2
                    },
                    "Are the following safety signage displayed on the pump islands?": {
                        "No smoking": f31,
                        "Cellphones must be turned OFF": f32,
                        "Turn off your engine": f33,
                        "Comment": c3
                    },
                    "Is each fuel service island provided with a covered sand box filled with clean dry sand and equipped with a shovel or bucket?": {
                        "Response": f4,
                        "Comment":c4
                    },
                    "Is each fuel service island equipped with ABC fire extinguishers with intact seals and valid service dates?": {
                        "Response": f5,
                        "Comment":c5
                    },
                    "Are the fuel dispensers protected against collision?  Either bollards or crash barriers.": {
                        "Response": f6,
                        "Comment":c6
                    }
                },
                "STORAGE / ROAD TANKER OFFLOADING AREA": {
                    "Can the road tanker park without excessive manoeuvring and ready to drive away?":{
                        "Response": s1,
                        "Comment": sc1
                    },
                    "Are all delivery points located in one lockable place, protected from collision and product colour coded?": {
                        "Response": s2,
                        "Comment": sc2
                    },
                    "Are the tank vents visible from the offloading area and > 10 metres away from public areas?": {
                        "Response": s3,
                        "Comment": sc3
                    },
                    "Are tank manhole covers product colour coded?":{
                        "Response": s4,
                        "Comment": sc4
                    },
                    "Are products in underground tanks free of water? (Check using water finding paste smeared at the bottom of the dipstick)":{
                        "Response": s5,
                        "Comment": sc5
                    }
                },
                "LUBE SERVICE BAY AND CAR WASH": {
                    "Is the lube service bay oil pit equipped with a safe wheel guard rail and in good condition?": {
                        "Response": l1,
                        "Comment": lc1
                    },
                    "Is Lube bay entrance fitted with a chain link to control entry of vehicles.": {
                        "Response": l2,
                        "Comment": lc2
                    },
                    "Is the lube service bay oil pit equipped with a safe access step ladder?": {
                        "Response": l3,
                        "Comment": lc3
                    },
                    "Is the lube Service bay equipped with a no smoking sign?": {
                        "Response": l4,
                        "Comment": lc4
                    },
                    "Are used oils and greases collected in appropriate containers?": {
                        "Response": l5,
                        "Comment": lc5
                    },
                    "Are the lights in the service pit of flameproof specification? (Should have ATEX rating details)": {
                        "Response": l6,
                        "Comment": lc6
                    },
                    "Is the bay equipped with ABC fire extinguishers with intact seals and valid service dates?": {
                        "Response": l7,
                        "Comment": lc7
                    },
                    "Is the Oil interceptor well maintained and clean?": {
                        "Response": l8,
                        "Comment": lc8
                    }
                },
                "BONJOUR SHOP":{
                    "Are food items stored separately from non food items?": {
                        "Response": b1,
                        "Comment": bc1
                    },
                    "Does the shop maintain a register for expired items?":{
                        "Response": b2,
                        "Comment": bc2
                    },
                    "Are expired items in the shop removed and segregated in a clearly marked area ready for disposal?": {
                        "Response": b3,
                        "Comment": bc3
                    }
                },
                "LPG STORAGE / CASE": {
                    "Are all LPG cylinders stored in a well ventilated store( low and high openings, to allow circulation of air) or  in appropriate lockable cages outside of the building and > 5 metres away from tanks, pumps, product delivery points and entrance/exit of the shop?": {
                        "Response": lp,
                        "Comment": lpc
                    }
                },
                "GENERAL": {
                    "Are electrical boxes in good condition, free of temporary connections and labeled with 'DANGER' symbol?":{
                        "Response": g1,
                        "Comment": gc1
                    },
                    "Is there a CO2 fire extinguisher located near the electrical switch boxes?": {
                        "Response": g2,
                        "Comment": gc2
                    },
                    "Is the station equipped with a fully stocked first aid kit with valid contents?	": {
                        "Response": g3,
                        "Comment": gc3
                    },
                    "Is the station equipped with an emergency stop button and in working condition? (Not more than 1.8m from the ground)": {
                        "Response": g4,
                        "Comment": gc4
                    },
                    "Are emergency exits clearly labelled and their access clear?": {
                        "Response": g5,
                        "Comment": gc5
                    },
                    "Does the Dealer and Off-loading marshals have appropriate protective helmet with valid expiry date? (EN 397), for off-loading?": {
                        "Response": g6,
                        "Comment": gc6
                    },
                    "Does the Dealer and Off-loading marshals have appropriate product handling gloves (EN 374), for off-loading?": {
                        "Response": g7,
                        "Comment": gc7
                    },
                    "Does the Dealer and Off-loading marshals have appropriate protective glasses (EN 166), for off-loading?": {
                        "Response": g8,
                        "Comment": gc8
                    },
                    "Do the station personnel wear  appropriate safety shoes (EN ISO 20345)?": {
                        "Response": g9,
                        "Comment": gc9
                    },
                    "Are all station staff trained on Assault Prevention? (Review training records to confirm)	": {
                        "Response": g10,
                        "Comment": gc10
                    },
                    "Is there a visible current list of emergency telephone numbers, both in and outside the office ?": {
                        "Response": g11,
                        "Comment": gc11
                    },
                    "Does the station have a copy Service Station Crisis Procedures, dated 29/06/2016 and are they communicated to the station personnel? Confirm by interviewing afew station staff.": {
                        "Response": g12,
                        "Comment": gc12
                    },
                    "Are there bollards in good condition infront of the shops buildings separating the customers carpark and front pavement?": {
                        "Response": g13,
                        "Comment": gc13
                    },
                    "Is there a forex board for Total's Golden Rules, prominently displayed and accessible by all station staff.": {
                        "Response": g14,
                        "Comment": gc14
                    },
                    "Are MPESA payment transactions done away from the pumps, at least 5m?": {
                        "Response": g15,
                        "Comment": gc15
                    },
                    "Is there a four stand ladder in the store to access goods in shelves that are higher than 1.5m from ground": {
                        "Response": g16,
                        "Comment": gc16
                    },
                },
                "OPERATING LICENCES, PERMITS AND REPORTS": {
                    "Does the station have the following licence  and reports and are they valid?": {
                        "Effluent discharge licence": p1,
                        "Annual Fire Safety report": p2,
                        "Annual Medical examination report for staff": p3,
                        "Annual Nema audit report": p4,
                        "Annual OSHA audit report": p5,
                    }
                },
                "COMMENDABLE AREA OF STRENGTH AND BEST PRACTICES BY STATION": cm,
                "GENERAL OBSERVATIONS AND COMMENTS OF THE STATION INSPECTION": gm
            }
        }

        axios.post('http://localhost:4000/reports', data).then(res => {
            console.log(res.data)
        }).catch(err => {
            console.log(err)
        })
        console.log(data)
    }

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
              <ForeCourtSafety f1={f1Change} c1={c1} c1Change={c1Change} f2={f2Change} c2={c2} c2Change={c2Change} f31={f31Change} f32={f32Change} f33={f33Change} c3={c3} c3Change={c3Change} f4={f4Change} c4={c4} c4Change={c4Change} f5={f5Change} c5Change={c5Change} f6={f6Change} c6Change={c6Change}/>
          </Row>
          <h3>2. STORAGE / ROAD TANKER OFFLOADING AREA</h3>
          <Row>
              <StorageForecourt s1={s1Change} sc1={sc1} sc1Change={sc1Change} s2={s2Change} sc2={sc2} sc2Change={sc2Change} s3={s3Change} sc3={sc3} sc3Change={sc3Change} s4={s4Change} sc4={sc4} sc4Change={sc4Change} s5={s5Change} sc5={sc5} sc5Change={sc5Change}/>
          </Row>
          <h3>3. LUBE SERVICE BAY AND CAR WASH</h3>
          <Row>
              <LubeSafety l1={l1Change} lc1={lc1} lc1Change={lc1Change} l2={l2Change} lc2={lc2} lc2Change={lc2Change} l3={l3Change} lc3={lc3} lc3Change={lc3Change} l4={l4Change} lc4={lc4} lc4Change={lc4Change} l5={l5Change} lc5={lc5} lc5Change={lc5Change} l6={l6Change} lc6={lc6} lc6Change={lc6Change} l7={l7Change} lc7={lc7} lc7Change={lc7Change} l8={l8Change} lc8={lc8} lc8Change={lc8Change}/>
          </Row>
          <h3>4. BONJOUR SHOP</h3>
          <Row>
              <ShopSafety b1={b1Change} bc1={bc1} bc1Change={bc1Change} b2={b2Change} bc2={bc2} bc2Change={bc2Change} b3={b3Change} bc3={bc3} bc3Change={bc3Change}/>
          </Row>
          <h3>5. LPG STORE/CAGE</h3>
          <Row>
              <LpgSafety lp={lpChange} lpc={lpc} lpcChange={lpcChange}/>
          </Row>
          <h3>GENERAL</h3>
          <Row>
              <GeneralSafety
                  g1={g1Change} gc1={gc1} gc1Change={gc1Change}
                  g2={g2Change} gc2={gc2} gc2Change={gc2Change}
                  g3={g3Change} gc3={gc3} gc3Change={gc3Change}
                  g4={g4Change} gc4={gc4} gc4Change={gc4Change}
                  g5={g5Change} gc5={gc5} gc5Change={gc5Change}
                  g6={g6Change} gc6={gc6} gc6Change={gc6Change}
                  g7={g7Change} gc7={gc7} gc7Change={gc7Change}
                  g8={g8Change} gc8={gc8} gc8Change={gc8Change}
                  g9={g9Change} gc9={gc9} gc9Change={gc9Change}
                  g10={g10Change} gc10={gc10} gc10Change={gc10Change}
                  g11={g11Change} gc11={gc11} gc11Change={gc11Change}
                  g12={g12Change} gc12={gc12} gc12Change={gc12Change}
                  g13={g13Change} gc13={gc13} gc13Change={gc13Change}
                  g14={g14Change} gc14={gc14} gc14Change={gc14Change}
                  g15={g15Change} gc15={gc15} gc15Change={gc15Change}
                  g16={g16Change} gc16={gc16} gc16Change={gc16Change}
              />
          </Row>
          <h3>7. OPERATING LICENCES, PERMITS AND REPORTS</h3>
          <Row>
            <LicenceSafety
                p1={p1Change}
                p2={p2Change}
                p3={p3Change}
                p4={p4Change}
                p5={p5Change}
                pc1={pc1}
                pc1Change={pc1Change}
            />
          </Row>
          <CommendableArea cm={cm} cmChange={cmChange}/>
          <GeneralComment gm={gm} gmChange={gmChange}/>

          <Button onClick={submit}>Submit Details</Button>
      </Container>
  )
}

export default SafetySurvey