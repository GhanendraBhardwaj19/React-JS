import "./Expenses.css";
import React from "react";
import ExpenseItem from "./ExpenseItem.js";
import Card from "../UI/Card.js";
function Expenses(props) {
  return (
    <Card className="expenses">
      <ExpenseItem
        date={props.item[0].date}
        title={props.item[0].title}
        amount={props.item[0].amount}
      ></ExpenseItem>
      <ExpenseItem
        date={props.item[1].date}
        title={props.item[1].title}
        amount={props.item[1].amount}
      ></ExpenseItem>
      <ExpenseItem
        date={props.item[2].date}
        title={props.item[2].title}
        amount={props.item[2].amount}
      ></ExpenseItem>
      <ExpenseItem
        date={props.item[3].date}
        title={props.item[3].title}
        amount={props.item[3].amount}
      ></ExpenseItem>
    </Card>
  );
}

export default Expenses;
