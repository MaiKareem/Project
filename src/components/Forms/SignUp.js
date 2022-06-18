import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "../JS/slices/userSlice";

export const SignUp = () => {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.user.users.length);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const confirm = form.elements.confirmE.value;
    const pwd = form.elements.password.value;

    dispatch(addUser({ name, email, confirm, pwd, id }));
  };
  const eventHandler = (e) => {
    const form = e.target;
    const email = form.elements.email.value;
    const confirm = form.elements.confirmE.value;
    const condition =
      email === confirm ? handleSubmit : alert(`emails dont match`);
  };

  //form
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form>
            <p className="h4 text-center mb-4">Sign up</p>
            <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
              Your name
            </label>
            <input type="text" name="name" placeholder="enter name" />
            <br />
            <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
              Your email
            </label>
            <input type="email" name="email" placeholder="enter email" />
            <br />
            <label htmlFor="defaultFormRegisterConfirmEx" className="grey-text">
              Confirm your email
            </label>
            <input type="email" name="confirmE" placeholder="confirm email " />
            <br />
            <label
              htmlFor="defaultFormRegisterPasswordEx"
              className="grey-text"
            >
              Your password
            </label>
            <input
              type="password"
              name="password"
              placeholder="enter password"
            />
            <div className="text-center mt-4">
              <MDBBtn onSubmit={eventHandler} color="unique" type="submit">
                Register
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};
