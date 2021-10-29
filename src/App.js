import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Row} from "react-bootstrap";

import Signup from "./Components/Signup";

function App() {
  return (
      <Container id={"main-container"} >
          <Row>
              <Col>
                  <div id="description">
                      <h1>Learn to code by watching others</h1>
                      <p>See how experienced developers solve problems in real-time.
                          Watching scripted
                          tutorials is great, but understanding how developers think is invaluable. Try it free 7 days
                          then
                          $20/mo.
                          thereafter
                          First Name Last Name Email Address Password Claim your free trial By clicking the button, you
                          are
                          agreeing to our
                          Terms and Services</p>
                  </div>
              </Col>
              <Col>
                  <Signup/>
              </Col>
          </Row>
      </Container>
  );
}

export default App;