import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  const expenseitem = props.expenses.map((expenses) => {
    return (
      <ExpenseItem
        title={expenses.title}
        amount={expenses.amount}
        date={expenses.date}
      />
    );
  });

  return <Card className="expenses">{expenseitem}</Card>;
}

export default Expenses;
