import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import { useRef, useState } from "react";

const MealItemForm = (props) => {
  const amtInputRef = useRef();
  const [amtIsValid, setAmtIsValid] = useState(true);

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredAmt = +amtInputRef.current.value;
    if (enteredAmt < 1 || enteredAmt > 5) {
      setAmtIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmt);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amtInputRef}
        label="Amount"
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amtIsValid && <p>Please enter a valid amount!</p>}
    </form>
  );
};

export default MealItemForm;
