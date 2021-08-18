import React from 'react';
import './ExpenseItem.css';
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
    const filterByYearHandler = year => {
        console.log(year);
    };

    return (
        <div className="App">
            <ExpensesFilter onChangeFilter={filterByYearHandler}/>
            <ExpenseItem
                title={props.items[0].title}
                amount={props.items[0].amount}
                date={props.items[0].date}
            />
            <ExpenseItem
                title={props.items[1].title}
                amount={props.items[1].amount}
                date={props.items[1].date}
            />
            <ExpenseItem
                title={props.items[2].title}
                amount={props.items[2].amount}
                date={props.items[2].date}
            />
        </div>
    );
}

export default Expenses;