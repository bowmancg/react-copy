import React from "react";
import './ExpenseItem.css'
import Card from "../UI/Card";
import ExpenseDate from './ExpenseDate'

const ExpenseItem = (props) => {
    const onClickHandler = () => {
        console.log('deleting')
        props.onDelete(props.key)
    }
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div onClick={onClickHandler} className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </Card>
    )
}

export default ExpenseItem