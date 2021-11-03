import Signup from "../Signup";
import React from "react";
import {render, fireEvent, getByTestId} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'

let GetByTestId;
let QueryByTestId;

beforeEach(()=>{
    const component = render(<Signup/>);
    GetByTestId = component.getByTestId;
    QueryByTestId = component.queryByTestId;
})

test('All input fields render with correct initial value (empty) and placeholders',()=>{
    const firstnameinput = GetByTestId('firstName');
    expect(firstnameinput.value).toBe('');
    expect(firstnameinput).toHaveAttribute('placeholder','First Name')

    const lastnameinput = GetByTestId('lastName');
    expect(lastnameinput.value).toBe('');
    expect(lastnameinput).toHaveAttribute('placeholder','Last Name')


    const emailinput = GetByTestId('email');
    expect(emailinput.value).toBe('');
    expect(emailinput).toHaveAttribute('placeholder','E-mail Address')


    const passwordinput = GetByTestId('password');
    expect(passwordinput.value).toBe('');
    expect(passwordinput).toHaveAttribute('placeholder','Password');

})

test('All input fields accept input change correctly and there are no errors on submit when all inputs are valid',()=>{
    const firstnameinput = GetByTestId('firstName');
    const lastnameinput = GetByTestId('lastName');
    const emailinput = GetByTestId('email');
    const passwordinput = GetByTestId('password');

    fireEvent.change(firstnameinput,{
        target:{
            value:'Winnie'
        }
    })
    fireEvent.change(lastnameinput,{
        target:{
            value:'The Pooh'
        }
    })
    fireEvent.change(emailinput,{
        target:{
            value:'winnie@thepooh.com'
        }
    })
    fireEvent.change(passwordinput,{
        target:{
            value:'disney'
        }
    })

    expect(firstnameinput.value).toBe('Winnie');
    expect(lastnameinput.value).toBe('The Pooh');
    expect(emailinput.value).toBe('winnie@thepooh.com');
    expect(passwordinput.value).toBe('disney');

    const button = GetByTestId('submit');
    fireEvent.click(button);

    const firstNameErrormsg =QueryByTestId('errmsgfirstName');
    const lastNameErrormsg =QueryByTestId('errmsglastName');
    const emailErrormsg =QueryByTestId('errmsgemail');
    const passwordErrormsg =QueryByTestId('errmsgpassword');

    const firstNameErrImg = QueryByTestId('errorimagefirstName');
    const lastNameErrImg = QueryByTestId('errorimagelastName');
    const emailErrImg = QueryByTestId('errorimageemail');
    const passwordErrImg = QueryByTestId('errorimagepassword');

    const errImgarr = [firstNameErrImg,lastNameErrImg,emailErrImg,passwordErrImg];
    const errmsgArr = [firstNameErrormsg,lastNameErrormsg,emailErrormsg,passwordErrormsg];

    for (let i = 0;i<4;i++){
        expect(errImgarr[i]).toBeNull();
        expect(errmsgArr[i]).toBeNull()
    }



})
test('error image and message render on submit when an input is empty',()=>{
    const button = GetByTestId('submit');
    fireEvent.click(button);

    const firstNameErrormsg =GetByTestId('errmsgfirstName');
    const lastNameErrormsg =GetByTestId('errmsglastName');
    const emailErrormsg =GetByTestId('errmsgemail');
    const passwordErrormsg =GetByTestId('errmsgpassword');

    expect(firstNameErrormsg.textContent).toBe('First Name cannot be empty');
    expect(lastNameErrormsg.textContent).toBe('Last Name cannot be empty');
    expect(emailErrormsg.textContent).toBe('E-mail Address cannot be empty');
    expect(passwordErrormsg.textContent).toBe('Password cannot be empty');

    const firstNameErrImg = GetByTestId('errorimagefirstName');
    const lastNameErrImg = GetByTestId('errorimagelastName');
    const emailErrImg = GetByTestId('errorimageemail');
    const passwordErrImg = GetByTestId('errorimagepassword');

    expect(firstNameErrImg).toHaveAttribute('src','icon-error.svg')
    expect(lastNameErrImg).toHaveAttribute('src','icon-error.svg')
    expect(emailErrImg).toHaveAttribute('src','icon-error.svg')
    expect(passwordErrImg).toHaveAttribute('src','icon-error.svg')

})

test('error messages disappear when input changes',()=>{
    const firstNameInput = GetByTestId('firstName');
    const button = GetByTestId('submit');

    fireEvent.click(button);
    //error appears - already tested
    fireEvent.change(firstNameInput,{
        target:{value:'something'}
    });
    const errImg = QueryByTestId('errorImagefirstName');
    const errmsg = QueryByTestId('errmsgfirstName');

    expect(errImg).toBeNull();
    expect(errmsg).toBeNull();
})
test('email error appears on invalid email input then submit then disappears on change',()=>{
    const button = GetByTestId('submit');
    const emailInput = GetByTestId('email');


    fireEvent.change(emailInput,{
        target:{value:'notAnEmail'}
    })
    fireEvent.click(button);

    const errImg = GetByTestId('errorimageemail');
    const errmsg = GetByTestId('errmsgemail');

    expect(errImg).toHaveAttribute('src','icon-error.svg');
    expect(errmsg.textContent).toBe('Looks like this is not an e-mail');



    fireEvent.change(emailInput,{target:{value:''}});

    const errImg2 = QueryByTestId('errorimageemail');
    const errmsg2 = QueryByTestId('errmsgemail');

    expect(errmsg2).toBeNull();
    expect(errImg2).toBeNull();
})
test('Terms and services text renders correctly',()=>{
    const littleText = GetByTestId('termsAndServices');
    expect(littleText.textContent).toBe('By clicking the button, you are agreeing to our Terms and Services');
})