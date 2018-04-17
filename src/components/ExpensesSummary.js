import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import getTotalExpenses from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral';

export const ExpensesSummary = (props) => (
    <div className="page-header">
        <div className="content-container">
            <h1 className="page-header__title">
                Viewing <span>{props.expensesCount}</span> expenses totalling <span>{numeral(props.expensesTotal / 100).format('$0,0.00')}</span>
            </h1>    
            <div className="page-header__actions">
                <Link className="btn" to="/create">Add Expense</Link>
            </div>    
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        expensesCount: selectExpenses(state.expenses, state.filters).length,
        expensesTotal: getTotalExpenses(selectExpenses(state.expenses, state.filters))
    };
};

export default connect(mapStateToProps)(ExpensesSummary);