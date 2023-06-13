import React from "react";
import './ExpensesList.css'
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback">Found no expenses.</h2>
    }

    const handleItemDelete = (id) => {
        props.onDelete(id)
        console.log('deleted.', id)
    }

    return (
        <ul className="expenses-list">
            {props.items.map((expense) => (
                <ExpenseItem
                id={expense.id}
                onDelete={props.onDelete}
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
                />
            ))}
        </ul>
    )
}

export default ExpensesList