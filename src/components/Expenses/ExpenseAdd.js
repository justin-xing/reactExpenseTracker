import React, { useState } from 'react';
import NewExpense from "../NewExpense/NewExpense";
import "./ExpenseAdd.css";

const ExpenseAdd = (props) => {
  const [clicked, toggleClick] = useState('no');

  const clickHandler = (props) => {
    if (clicked === 'no') {
      toggleClick('yes');
    } else {
      toggleClick('no');
    }
  };

  if (clicked === 'no') {
    return (
      <div className="expense-add__box">
        <button onClick={clickHandler} className="expense-add__button">Add New Expense</button>
      </div>
    );
  } else {
    return (
      <NewExpense onAddExpense={props.onAddExpense} onAdd={clickHandler}/>
    );
  }
};

export default ExpenseAdd;