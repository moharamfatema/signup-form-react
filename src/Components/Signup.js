import {useState} from "react";
import {Card, Container, Form, Image, Stack, Button} from "react-bootstrap";
import errorImage from '../images/icon-error.svg'
import './Signup.scss'
import validator from "validator"

//tested - working
export default function Signup(){
    //set initial values
    const [user,setUser] = useState([{property:"firstName",value:"",error:false,errmsg:""},
        {property:"lastName",value:"",error:false,errmsg:""},
        {property: "email",value:"",error:false,errmsg:""},
        {property:"password",value:"",error:false,errmsg:""}
    ])

    //returns a user friendly text
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
            default:
                return 'undefined';
        }
    }

    //updates the user arrays with setUser
    const updateUser = (key,index,value) =>{
        const newArr = [...user];
        newArr[index][key]=value;
        //console.log(newArr)
        setUser(newArr);

    }

    //accepts changing the input and updates user
    const onChange = (e) =>{
        const i = user.findIndex(userInfo => userInfo.property == e.target.id);
        //console.log(i);

        updateUser('value',i,e.target.value);
        updateUser('error',i,false);
        updateUser('errmsg',i,'');
        //console.log(user[i].value)
    }

    //checks validity of input and displays the suitable errors
    const onSubmit = (e) =>{
        let goodtogo=true; //flag for errors
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
                console.log("Good to go");
            }
        })
    }
    return(
        <Card>
            <Card.Body>
                <Form onSubmit={onSubmit} data-testid='signupForm'>
                    <Stack gap={3}>
                        {/*mapping through all user attributes, returning input fields and an error if needed*/}
                        {user.map((userInfo,i) =>(
                                <Form.Group className={"formGroup"} id={`${userInfo.property}`} key={i}>
                                    <Container >
                                        <span>
                                            <Form.Control
                                                type={(i == 3) ? 'password' : (i == 2) ? 'email' : 'text'}
                                                placeholder={getString(i)}
                                                className={(user[i].error)?"formControl error":"formControl"}
                                                onChange={onChange}
                                                id={userInfo.property}
                                                data-testid={userInfo.property}
                                            />
                                            {(user[i].error) ?
                                                (<Image alt='ERROR' src={errorImage} className='errorImage' data-testid={`errorimage${userInfo.property}`}/>) :
                                                (<></>)
                                            }
                                            {(user[i].error) ?
                                                (<Form.Label data-testid={`errmsg${userInfo.property}`} className={"error errmsg"}>{user[i].errmsg}</Form.Label>) :
                                                (<></>)
                                            }

                                        </span>
                                    </Container>
                                </Form.Group>
                        ))
                        }
                        <Container><Button data-testid='submit' type="submit" onClick={onSubmit}>CLAIM YOUR FREE TRIAL</Button></Container>

                    </Stack>

                </Form>
                <Card.Text className='littleText' data-testid='termsAndServices'>
                    By clicking the button, you are agreeing to our
                    <span className='link'> Terms and Services</span>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}