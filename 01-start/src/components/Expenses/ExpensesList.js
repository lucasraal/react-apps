import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.filteredExpenses.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.filteredExpenses.map((filteredExpenses) => {
        return (
          <ExpenseItem
            key={filteredExpenses.id}
            title={filteredExpenses.title}
            amount={filteredExpenses.amount}
            date={filteredExpenses.date}
          />
        );
      })}
    </ul>
  );
};

export default ExpensesList;
