import React from 'react';
import getExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
    const none = [];
    const result = getExpensesTotal(none);
    expect(result).toBe(0);
});

test('should correctly add up a single expense', () => {
    const single = [expenses[0]];
    const result = getExpensesTotal(single);
    expect(result).toBe(195);
});

test('should correctly add up multiple expenses', () => {
    const result = getExpensesTotal(expenses);
    expect(result).toBe(114195);
});