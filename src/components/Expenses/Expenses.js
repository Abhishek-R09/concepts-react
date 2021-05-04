import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2019");

  const yearChangedHandler = (event) => {
    setSelectedYear(event.target.value);
    console.log(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter onYearChange={yearChangedHandler} year={selectedYear} />
      {props.expenses.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </Card>
  );
};

export default Expenses;
