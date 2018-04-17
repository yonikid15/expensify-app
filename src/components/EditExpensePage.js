import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense, startRemoveExpense, startEditExpense} from '../actions/expenses';

export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    };

    onClick = (expense) => {
        this.props.startRemoveExpense({ id: this.props.expense.id });
        this.props.history.push('/');
    };

    render() {
        console.log(this.props.state);
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Expense</h1>   
                    </div>
                    <div className="content-container">
                        <ExpenseForm 
                            expense={this.props.expense}
                            onSubmit={this.onSubmit}
                        />
                        <button className="btn btn--secondary" onClick={this.onClick}>
                            Remove Expence
                        </button>
                    </div>
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state, props) => {
    return {
        state: state,
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    };
};

const mapDispatchToProps = (dispatch) => ({ 
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
    startRemoveExpense: (id) => dispatch(startRemoveExpense(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);