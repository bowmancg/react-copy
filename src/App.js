import React, { useState } from 'react';
import './App.css';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';
import Navbar from './components/UI/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

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

  const handleDelete = (id) => {
    console.log('delete handler', id)
    const items = expenses.filter(item => item.id !== id)
    setExpenses(items)
  }

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense]
    })
  }

  return (
    <div>
      <header>
        <Navbar/>
      </header>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses onDelete={handleDelete} items={expenses} />
    </div>
  );
}

export default App;
