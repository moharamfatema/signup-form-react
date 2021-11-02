import Signup from "../Signup";
import React from "react";
import {render, fireEvent, getByTestId} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'

//TODO:use queryBy instead of getBy, and toBeNull to test the non-existence of the error messages


let GetByTestId;

beforeEach(()=>{
    const component = render(<Signup/>);
    GetByTestId = component.getByTestId;
})

test('All input fields render with correct initial value (empty)',()=>{
    const firstnameinput = GetByTestId('firstName');
    expect(firstnameinput.value).toBe('');

    const lastnameinput = GetByTestId('lastName');
    expect(lastnameinput.value).toBe('');

    const emailinput = GetByTestId('email');
    expect(emailinput.value).toBe('');

    const passwordinput = GetByTestId('password');
    expect(passwordinput.value).toBe('');

})

test('All input fields accept input change correctly',()=>{
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

//TODO:test('error messages vanish when input changes',()=>{})
//TODO:test('email error appears on invalid email input then submit',()=>{})
//TODO:test("console logs 'Good to go' when a submit happens with all inputs valid",()=>{})