import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
    <div>
        {
            (id && description && amount) ? (
                <div>
                    <Link to={`/edit/${id}`}>
                        <h3>{description}</h3>
                    </Link>
                    <p>{amount} - {createdAt}</p>
                </div>
            ) : (
                <p>Expense Error</p>
            )
        }
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses
    };
};

export default ExpenseListItem;