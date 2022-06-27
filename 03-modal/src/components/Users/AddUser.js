import { useState, useRef } from "react";

import ErrorModal from "../UI/ErrorModal";
import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const enteredUsername = useRef();
  const enteredAge = useRef();
  const [error, setError] = useState({ status: false, title: "", message: "" });

  const changeErrorHandler = () => {
    setError({ status: false, title: "", message: "" });
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if (
      enteredUsername.current.value.trim().length === 0 ||
      enteredAge.current.value.trim().length === 0
    ) {
      setError({
        status: true,
        title: "Invalid Input",
        message: "Please, enter a valid name or age.",
      });
      return;
    }
    // enteredAge is a string; the "<" might work, but in order to ensure the conversion, insert + before
    if (+enteredAge.current.value < 1) {
      setError({
        status: true,
        title: "Invalid Input",
        message: "Please, enter a valid age.",
      });
      return;
    }
    props.onAddUser(enteredUsername.current.value, enteredAge.current.value);
    enteredUsername.current.value = "";
    enteredAge.current.value = "";
  };

  return (
    <>
      {error.status && (
        <ErrorModal
          onClick={changeErrorHandler}
          title={error.title}
          message={error.message}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={enteredUsername} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={enteredAge} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
