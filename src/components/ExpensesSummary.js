import React from 'react';
import { connect } from 'react-redux';
import getTotalExpenses from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral';

export const ExpensesSummary = (props) => (
    <div>
       <p>Viewing {props.expensesCount} expenses totalling {numeral(props.expensesTotal / 100).format('$0,0.00')}</p>
    </div>
);

const mapStateToProps = (state) => {
    return {
        expensesCount: selectExpenses(state.expenses, state.filters).length,
        expensesTotal: getTotalExpenses(selectExpenses(state.expenses, state.filters))
    };
};

export default connect(mapStateToProps)(ExpensesSummary);