import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const toggleFormVisibility = () => {
    setShowForm((prevState) => !prevState);
  };

  let newFormContent = (
    <button onClick={toggleFormVisibility}>ADD NEW EXPENSE</button>
  );
  if (showForm) {
    newFormContent = (
      <ExpenseForm
        onAddExpense={props.onAddExpense}
        onFormSubmitToggle={toggleFormVisibility}
      />
    );
  }

  return <div className="new-expense">{newFormContent}</div>;
};

export default NewExpense;
