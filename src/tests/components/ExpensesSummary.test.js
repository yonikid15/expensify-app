import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';
import getTotalExpenses from '../../selectors/expenses-total';
import selectExpenses from '../../selectors/expenses';

test('should render ExpensesSummary with expense count of 1', () => {
    const filters = {
        text: 'credit',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const count = selectExpenses(expenses, filters).length;
    const total = getTotalExpenses(selectExpenses(expenses, filters));
    const wrapper = shallow(<ExpensesSummary expensesCount={count} expensesTotal={total}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary with expense count of more than 1', () => {
    const filters = {
        text: 'e',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const count = selectExpenses(expenses, filters).length;
    const total = getTotalExpenses(selectExpenses(expenses, filters));
    const wrapper = shallow(<ExpensesSummary expensesCount={count} expensesTotal={total}/>);
    expect(wrapper).toMatchSnapshot();
});