import React, { useState } from 'react'
import './ExpenseItem.css'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'

function Expenses (props) {
  const [filteredYear, setFilteredYear] = useState('2020')

  const filterByYearHandler = year => {
    setFilteredYear(year)
  }

  // eslint-disable-next-line react/prop-types
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear
  })

  return (
        <div className="App">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterByYearHandler}/>
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList items={filteredExpenses}/>
        </div>
  )
}

export default Expenses
