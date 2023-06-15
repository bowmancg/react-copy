import React, { useState } from 'react';
import './App.css';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';



const App = () => {
  const DUMMY_DATA = [
    {
      id: 'e1',
      title: 'Apples',
      amount: 5.02,
      date: new Date(2021, 2, 28)
    },
    {
      id: 'e2',
      title: 'Mayo',
      amount: 7.04,
      date: new Date(2022, 6, 23)
    },
    {
      id: 'e3',
      title: 'Pasta',
      amount: 10.34,
      date: new Date(2023, 10, 8)
    }
  ]
  const [expenses, setExpenses] = useState(DUMMY_DATA)
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense]
    })
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
