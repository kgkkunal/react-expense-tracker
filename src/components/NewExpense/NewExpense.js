import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [startEditing, setStartEditing] = useState(false);
  const SaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };
    props.onAddExpense(expenseData);
    setStartEditing(false);
  };
  const stopEditingHandler = () => {
    setStartEditing(false);
  };

  const startEditingHandler = () => {
    setStartEditing(true);
  };
  return (
    <div className="new-expense">
      {startEditing ? (
        <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} onCancel={stopEditingHandler}/>
      ) : (
        <button onClick={startEditingHandler}>Add Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
