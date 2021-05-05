import React, { useRef, useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const usernameRef = useRef();
  const [ageInput, setAgeInput] = useState("");
  const [error, setError] = useState();

  const ageChangedHandler = ({ target }) => {
    setAgeInput(target.value);
  };

  const userDetailsSubmitHandler = (e) => {
    e.preventDefault();
    const enteredUsername = usernameRef.current.value;

    if (enteredUsername.trim() === "" || ageInput.trim() === "") {
      setError({
        title: "Invalid Input",
        message:
          "Please enter a valid age and name i.e. they shouldn't be null",
      });
      return;
    }

    if (+ageInput < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age i.e. age >= 1",
      });
      return;
    }

    const userDetails = {
      username: enteredUsername,
      age: +ageInput,
      id: Math.random().toString(),
    };
    props.onUserDetailsSubmit(userDetails);
    usernameRef.current.value = ""; // Not a good practice
    setAgeInput("");
  };

  const errorResetHandler = () => {
    setError();
  };

  return (
    <React.Fragment>
      {error && (
        <ErrorModal
          header={error.title}
          content={error.message}
          onCloseErrorModal={errorResetHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={userDetailsSubmitHandler}>
          <label>Username</label>
          <input type="text" ref={usernameRef} />
          <label>Age (Years)</label>
          <input type="number" onChange={ageChangedHandler} value={ageInput} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default AddUser;
