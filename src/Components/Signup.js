import {useState} from "react";
import {Card, Col, Container, Form, Image, Stack, Row, Button} from "react-bootstrap";
import {render} from "react-dom";
import errorImage from '../images/icon-error.svg'
import './Signup.scss'

export default function Signup(){
    const [user,setUser] = useState({firstName:{value:"",error:false,errmsg:""},
        LastName:{value:"",error:false,errmsg:""},
        email:{value:"",error:false,errmsg:""},
        password:{value:"",error:false,errmsg:""}
    })
    const getString = (key)=>{
        switch (key){
            case 0:
                return 'First Name';
            case 1:
                return 'Last Name';
            case 2:
                return 'E-mail Address';
            case 3:
                return 'Password';
        }
    }

    const onChange = (e) =>{
        setUser(prevUser=>({...prevUser,[e.target.id]:{...prevUser[e.target.id],prevUser[e.target.id].value:e.target.value};
    }
    const onSubmit = (e) =>{

    }
    return(
        <Card>
            <Card.Body>
                <Form onSubmit={onSubmit}>
                    <Stack gap={3}>
                        {Object.keys(user).map((userInfo,i) =>(
                                <Form.Group className={"formGroup"} id={`${userInfo}`}>
                                    <Container >
                                        <span>
                                            <Form.Control
                                                type={(i == 3) ? 'password' : (i == 2) ? 'email' : 'text'}
                                                placeholder={getString(i)}
                                                className={(user[userInfo].error)?"formControl error":"formControl"}
                                                onChange={onChange}
                                                id={userInfo}
                                            />
                                            {(user[userInfo].error) ?
                                                (<Image src={errorImage} className='errorImage'/>) :
                                                (<></>)
                                            }
                                            {(user[userInfo].error) ?
                                                (<Form.Label className={"error"}>{user[userInfo].errmsg}</Form.Label>) :
                                                (<></>)
                                            }

                                        </span>
                                    </Container>
                                </Form.Group>
                        ))
                        }
                    </Stack>
                    <Button type="submit" onClick={onSubmit}>CLAIM YOUR FREE TRIAL</Button>
                </Form>
            </Card.Body>
        </Card>
    )
}