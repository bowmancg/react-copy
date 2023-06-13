import React, { useState } from 'react';
import ExpensesChart from './ExpensesChart';
import ExpensesList from './ExpensesList';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const [listData, setListData] = useState({
    isShowList: true
  })

  function handleDelete(id) {
    const newList = listData.list.filter((item) => item.id !== id)
    setListData({...listData, list: newList})
  }

  if (!listData.isShowList) {
    return null
  }

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear
  })
  let expensesContent = <p>No expenses found.</p>
  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={`${expense.id}`}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))
  }
  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {expensesContent}
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList onDelete={handleDelete} items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;