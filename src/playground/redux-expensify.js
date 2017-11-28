import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

// Action Generator functions

// ADD_EXPENSE
const addExpense = (
    {
        description = '', 
        note = '', 
        amount = 0, 
        createdAt = 0
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt

    }
});


// REMOVE_EXPENSE
const removeExpense = ({ id } = {})  => ({
    type: 'REMOVE_EXPENSE',
    expense: {
        id
    }
});

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
    type: "SET_TEXT_FILTER",
    text
});

// SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE',
    sortBy: 'date'
});

// SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
    sortBy: 'amount'
});

// SET_START_DATE
const setStartDate = (startDate = undefined) => ({
    type: 'SET_START_DATE',
    startDate
});

// SET_END_DATE
const setEndDate = (endDate = undefined) => ({
    type: 'SET_END_DATE',
    endDate
});

// Expenses Reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];

        case 'REMOVE_EXPENSE':
            return state.filter((expense) => expense.id !== action.expense.id)

        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if(expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    };
                } else {
                    return expense;
                };
            });

        default: 
            return state;
    }
};

// Filters Reducer 

const filtersReducerDefaultState = {
    text: '',
     sortBy: 'date', 
     startDate: undefined, 
     endDate: undefined
};

const filtersReducer = ( state = filtersReducerDefaultState, action ) => {
    switch(action.type) { 
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }; 
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: action.sortBy
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: action.sortBy
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            };
        case 'SET_END_DATE': 
            return {
                ...state,
                endDate: action.endDate
            };
        default:
            return state;
    }
};

// Get visible expenses 
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        

        return startDateMatch && endDateMatch && textMatch;
    }).sort(( a, b ) => {
        if(sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        }
        if(sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    });
};

// Store creation

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});


// Dispatching 

// addExpense
const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 1000, createdAt: 1000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 400, createdAt: -1000}));

// // removeExpense
// store.dispatch(removeExpense({ id: expenseOne.expense.id}));

// // editExpense
// store.dispatch(editExpense( expenseTwo.expense.id , { description : 'Tea', amount: 200}));

// // setTextFilter
// store.dispatch(setTextFilter(''));
// store.dispatch(setTextFilter());

// // sortByAmount
 store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());

// store.dispatch(setEndDate(1000));



/***********************************/


const demoState = {
    expenses: [{
        id: 'rgjknrkj',
        description: 'January Rent',
        note: 'This was the final payment for the address',
        amount: 54500,
        createdAt: 0
    }],

    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
}; 