import Expenses from "./components/Expenses/Expenses.js";
import React from "react";
function App() {
  // let expenseDate = new Date(2023, 7, 11);
  // let expenseTitle = "School fee";
  // let expenseAmount = 300;

  let expense = [
    {
      id: "e1",
      title: "school fee",
      amount: "250",
      date: new Date(2023, 7, 11),
    },
    {
      id: "e2",
      title: "house rent",
      amount: "200",
      date: new Date(2023, 27, 11),
    },
    {
      id: "e3",
      title: "school fee",
      amount: "250",
      date: new Date(2023, 6, 11),
    },
    {
      id: "e4",
      title: "books",
      amount: "250",
      date: new Date(2023, 17, 11),
    },
  ];

  return (
    <div>
      <h2>Let's get Started</h2>,
      <Expenses item={expense} />
    </div>
  );
}

export default App;
