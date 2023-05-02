import React, { useState } from 'react';

import Expenses from './components/Expenses/Expenses';
import ExpenseAdd from './components/Expenses/ExpenseAdd';


const DUMMY_EXPENSES = [];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  }

  return (
    <div>
      <ExpenseAdd onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;