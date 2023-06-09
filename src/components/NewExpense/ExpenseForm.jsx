import React, { useState } from "react";
import './ExpenseForm.css'
import Button from "../UI/Button";

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')
    const [isValid, setIsValid] = useState(true)

    const titleChangeHandler = (event) => {
        if (event.target.value.trim().length > 0) {
            setIsValid(true)
        }
        setEnteredTitle(event.target.value)
    }
    const amountChangeHandler = (event) => {
        if (event.target.value.trim().length > 0) {
            setIsValid(true)
        }
        setEnteredAmount(event.target.value)
    }
    const dateChangeHandler = (event) => {
        if (event.target.value.trim().length > 0) {
            setIsValid(true)
        }
        setEnteredDate(event.target.value)
    }
    const submitHandler = (event) => {
        event.preventDefault()
        if (enteredTitle.trim().length === 0) {
            setIsValid(false)
        }
        if (enteredAmount.trim().length === 0) {
            setIsValid(false)
        }
        if (enteredDate.trim().length === 0) {
            setIsValid(false)
        }
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData)
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
    }
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className={`new-expense__control ${!isValid ? 'invalid' : ''}`}>
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min='2019-01-01' max='2023-12-31' value={enteredDate} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <Button type="submit">Add</Button>
            </div>
        </form>
    )
}

export default ExpenseForm