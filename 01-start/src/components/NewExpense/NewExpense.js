import { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpenseData(expenseData);
  };

  const [addNewExpense, setAddNewExpense] = useState(false);
  console.log(addNewExpense);

  const addNewExpenseHandler = () => {
    addNewExpense === true ? setAddNewExpense(false) : setAddNewExpense(true);
  };

  if (addNewExpense === false) {
    return (
      <div className="new-expense">
        <button onClick={addNewExpenseHandler}>Add New Expense</button>
      </div>
    );
  }

  return (
    <div className="new-expense">
      <ExpenseForm
        onAddNewExpense={addNewExpenseHandler}
        onSaveExpenseData={saveExpenseDataHandler}
      />
    </div>
  );
};

export default NewExpense;
