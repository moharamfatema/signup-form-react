import App from "../App";
import {getByTestId, queryByTestId, render} from "@testing-library/react";

let GetByTestId;
let QueryByTestId;

beforeEach(()=>{
    const app = render(<App/>);
   GetByTestId = app.getByTestId;
   QueryByTestId = app.queryByTestId;
});

test('description text renders correctly',()=>{
    const description = GetByTestId('description');
    expect(description.textContent).toBe('Learn to code by watching others'+'See how experienced developers solve problems in real-time.' +
        ' Watching scripted' +
        ' tutorials is great, but understanding how developers think is invaluable.')
})

test('signup form renders without crashing',()=>{
    const signupform = GetByTestId('signupForm');
    expect(signupform).not.toBeNull();
})

test('pricing renders correctly',()=>{
    const pricing = GetByTestId('pricing');
    expect(pricing.textContent).toBe('Try it free 7 days then $20/mo. thereafter');
})