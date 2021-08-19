import React from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
import PropTypes from 'prop-types'

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData)
  }

  return <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
}

NewExpense.propTypes = {
  onAddExpense: PropTypes.any
}

export default NewExpense
