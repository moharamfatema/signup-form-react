import React from "react";
import {Button, Card, Container, Form, FormGroup, Row,Stack} from "react-bootstrap";
import './Signup.css'


export default function Signup(){


        return(
            <Card>
                <Card.Body>

                        <Form >
                            <Stack gap={3}>
                            <Form.Group as={Row} >
                                <Form.Control className="formControl" type="input" placeholder="First Name"></Form.Control>
                            </Form.Group >
                            <Form.Group as={Row}>
                                <Form.Control className="formControl" type="input" placeholder="Last Name"></Form.Control>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Control className="formControl" type="email" placeholder="Email Address"></Form.Control>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Control className="formControl" type="password" placeholder="Password"></Form.Control>
                            </Form.Group>
                            <Button  as={Row} className="formControl button" type="submit" id={"submit-button"}>CLAIM YOUR FREE TRIAL</Button>
                            </Stack>
                        </Form>

                </Card.Body>
            </Card>
        )


}