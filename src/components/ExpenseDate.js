import './ExpenseDate.css';

function ExpenseDate(props) {
    return (
        <div>{props.date.toDateString()}</div>
    )
}

export default ExpenseDate;