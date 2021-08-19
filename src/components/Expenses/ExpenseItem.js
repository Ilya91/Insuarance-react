import React, { useState } from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'
import PropTypes from 'prop-types'

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title)

  const clickHandler = () => {
    setTitle('Updated')
    console.log(title)
  }

  return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
  )
}

ExpenseItem.propTypes = {
  title: PropTypes.string,
  date: PropTypes.object,
  amount: PropTypes.number
}

export default ExpenseItem
