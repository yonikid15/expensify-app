import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItem from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';

test('should render ExpenseListItem with correct expense', () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[0]} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListItem with invalid expense', () => {
    const wrapper = shallow(<ExpenseListItem {...{}} />);
    expect(wrapper).toMatchSnapshot();
});