import { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [usernameInput, setUsernameInput] = useState("");
  const [ageInput, setAgeInput] = useState("");
  const [error, setError] = useState();

  const usernameChangedHandler = ({ target }) => {
    setUsernameInput(target.value);
  };

  const ageChangedHandler = ({ target }) => {
    setAgeInput(target.value);
  };

  const userDetailsSubmitHandler = (e) => {
    e.preventDefault();

    if (usernameInput === "" || ageInput === "") {
      setError({
        title: "Invalid Input",
        message:
          "Please enter a valid age and name i.e. they shouldn't be null",
      });
      return;
    }

    if (ageInput < 0) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age i.e. age > 0",
      });
      return;
    }

    const userDetails = {
      username: usernameInput,
      age: +ageInput,
      id: Math.random().toString(),
    };
    props.onUserDetailsSubmit(userDetails);
    setUsernameInput("");
    setAgeInput("");
  };

  const errorResetHandler = () => {
    setError();
  };

  return (
    <div>
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
          <input
            type="text"
            onChange={usernameChangedHandler}
            value={usernameInput}
          />
          <label>Age (Years)</label>
          <input type="number" onChange={ageChangedHandler} value={ageInput} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
