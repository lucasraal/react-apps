import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
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
