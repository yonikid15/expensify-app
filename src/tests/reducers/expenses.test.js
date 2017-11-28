import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should setup default state', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
});

test('should setup add expense reducer', () => {
    const expense = {
        id: '123abc',
        description: 'Groceries',
        note: '',
        amount: 10000,
        createdAt: moment(0).add(3, 'days')
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expensesReducer( expenses, action );
    expect(state).toEqual([...expenses, expense ]);
});

test('should setup remove expense reducer', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[0].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[1], expenses[2]]);
});

test('should not remove expense reducer, no matching id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should setup edit expense reducer with provided values', () => {
    const amount = 10000;
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates: {
            amount
        }
    }
    const state = expensesReducer(expenses, action);
    expect(state[0].amount).toBe(amount);
});

test('should not edit expense reducer, incorrect id', () => {
    const testState = {
        description: 'Soccer',
        note: '',
        amount: 300,
        createdAt: 0
    };
    const action = {
        type: 'EDIT_EXPENSE',
        id: '4',
        updates: {
            ...testState
        }
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});