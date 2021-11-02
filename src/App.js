import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Col, Container, Row} from "react-bootstrap";

import Signup from "./Components/Signup";

function App() {
  return (
      <Container id={"main-container"} >
          <Row>
              <Col id='formcol'>
                  <div id="description">
                      <h1>Learn to code by watching others</h1>
                      <p>See how experienced developers solve problems in real-time.
                          Watching scripted
                          tutorials is great, but understanding how developers think is invaluable.</p>
                  </div>
              </Col>
              <Col>
                  <Card className='infocard'>
                      <Card.Body>
                          <Card.Text>
                              <span className='bold'>Try it free 7 days </span>
                              <span className='regular'>then $20/mo. thereafter</span>
                          </Card.Text>
                      </Card.Body>
                  </Card>
                  <Signup/>
              </Col>
          </Row>
      </Container>
  );
}

export default App;
