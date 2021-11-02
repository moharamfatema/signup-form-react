import {useState} from "react";
import {Card, Col, Container, Form, Image, Stack, Row, Button} from "react-bootstrap";
import errorImage from '../images/icon-error.svg'
import './Signup.scss'
import validator from "validator/es";

//working
export default function Signup(){
    const [user,setUser] = useState([{property:"firstName",value:"",error:false,errmsg:""},
        {property:"lastName",value:"",error:false,errmsg:""},
        {property: "email",value:"",error:false,errmsg:""},
        {property:"password",value:"",error:false,errmsg:""}
    ])
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


    const updateUser = (key,index,value) =>{
        const newArr = [...user];
        newArr[index][key]=value;
        console.log(newArr)
        setUser(newArr);

    }

    const onChange = (e) =>{
        const i = user.findIndex(userInfo => userInfo.property == e.target.id);
        console.log(i);

        updateUser('value',i,e.target.value);
        updateUser('error',i,false);
        updateUser('errmsg',i,'');
        console.log(user[i].value)
    }
    const onSubmit = (e) =>{
        let goodtogo=true;
        e.preventDefault();
        //check if empty and valid email
        user.map((userprop,j)=>{
            if (!userprop.value.trim()){ //if empty
                updateUser('error',j,true);
                updateUser('errmsg',j,`${getString(j)} cannot be empty`);
                updateUser('value',j,'');
                goodtogo = false;
            }
            if (j == 2 && !validator.isEmail(userprop.value)){//if an email is not empty and invalid
                if (userprop.value.trim()){
                    updateUser('error',j,true);
                    updateUser('errmsg',j,`Looks like this is not an e-mail`);
                    goodtogo = false;
                }
            }if(goodtogo){
                //send the data
                //go somewhere
            }
        })
    }
    return(
        <Card>
            <Card.Body>
                <Form onSubmit={onSubmit}>
                    <Stack gap={3}>
                        {user.map((userInfo,i) =>(
                                <Form.Group className={"formGroup"} id={`${userInfo.property}`}>
                                    <Container >
                                        <span>
                                            <Form.Control
                                                type={(i == 3) ? 'password' : (i == 2) ? 'email' : 'text'}
                                                placeholder={getString(i)}
                                                className={(user[i].error)?"formControl error":"formControl"}
                                                onChange={onChange}
                                                id={userInfo.property}
                                            />
                                            {(user[i].error) ?
                                                (<Image src={errorImage} className='errorImage'/>) :
                                                (<></>)
                                            }
                                            {(user[i].error) ?
                                                (<Form.Label className={"error"}>{user[i].errmsg}</Form.Label>) :
                                                (<></>)
                                            }

                                        </span>
                                    </Container>
                                </Form.Group>
                        ))
                        }
                        <Container><Button type="submit" onClick={onSubmit}>CLAIM YOUR FREE TRIAL</Button></Container>

                    </Stack>

                </Form>
                <Card.Text className='littleText'>
                    By clicking the button, you are agreeing to our
                    <span className='link'> Terms and Services</span>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}