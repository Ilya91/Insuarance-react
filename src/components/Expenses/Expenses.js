import React, { useState } from 'react';
import './ExpenseItem.css';
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterByYearHandler = year => {
        console.log(year);
        setFilteredYear(year);
    };

    return (
        <div className="App">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterByYearHandler}/>
            {
                props.items.map(expense =>
                    <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                    />
                )
            }
        </div>
    );
}

export default Expenses;