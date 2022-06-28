import React, { useReducer } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

const reducer = (state, action) => {
  switch (action.type) {
    case "TYPE_EMAIL":
      if (
        action.value.includes("@") &&
        state.enteredPassword.trim().length > 6
      ) {
        return Object.assign({}, state, {
          enteredEmail: action.value,
          formIsValid: true,
        });
      } else {
        return Object.assign({}, state, {
          enteredEmail: action.value,
          formIsValid: false,
        });
      }
    case "TYPE_PASSWORD":
      if (state.enteredEmail.includes("@") && action.value.trim().length > 6) {
        return Object.assign({}, state, {
          enteredPassword: action.value,
          formIsValid: true,
        });
      } else {
        return Object.assign({}, state, {
          enteredPassword: action.value,
          formIsValid: false,
        });
      }
    case "BLUR_EMAIL":
      return Object.assign({}, state, { emailIsValid: action.value });
    case "BLUR_PASSWORD":
      return Object.assign({}, state, { passwordIsValid: action.value });

    default:
      break;
  }
  return initialState;
};

const initialState = {
  enteredEmail: "",
  emailIsValid: "",
  enteredPassword: "",
  passwordIsValid: "",
  formIsValid: false,
};

const Login = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const emailChangeHandler = (event) => {
    dispatch({ type: "TYPE_EMAIL", value: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatch({ type: "TYPE_PASSWORD", value: event.target.value });
  };

  const validateEmailHandler = () => {
    dispatch({ type: "BLUR_EMAIL", value: state.enteredEmail.includes("@") });
  };

  const validatePasswordHandler = () => {
    dispatch({
      type: "BLUR_PASSWORD",
      value: state.enteredPassword.trim().length > 6,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(state.enteredEmail, state.enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            state.emailIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={state.enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            state.passwordIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={state.enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button
            type="submit"
            className={classes.btn}
            disabled={!state.formIsValid}
          >
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
