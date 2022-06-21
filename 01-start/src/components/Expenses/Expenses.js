import { useState } from "react";

import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const expenseitem = props.expenses.map((expenses) => {
    return (
      <ExpenseItem
        key={expenses.id}
        title={expenses.title}
        amount={expenses.amount}
        date={expenses.date}
      />
    );
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        initialSelection={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {expenseitem}
    </Card>
  );
}

export default Expenses;
