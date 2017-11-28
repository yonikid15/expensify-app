import filtersReducer from '../../reducers/filters';
import moment from 'moment';

const filtersReducerDefaultState = {
    text: '',
     sortBy: 'date', 
     startDate: moment().startOf('month'), 
     endDate: moment().endOf('month')
};

test('should setup default filter values', () => {
    const result = filtersReducer(undefined, {type: '@@INIT'});
    expect(result).toEqual(filtersReducerDefaultState);
});

test('should setup sort by date reducer', () => {
    const testState = {
        test: '',
        sortBy: 'amount',
        startDate: undefined, 
        endDate: undefined
    }
    const state = filtersReducer(testState, { type: 'SORT_BY_DATE'});
    expect(state.sortBy).toBe('date');
});

test('should setup sort by amount reducer', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});

test('should setup set text filter reducer', () => {
    const text = 'the test value filter';
    const action = { 
        type: 'SET_TEXT_FILTER',
        text
    };
    const state = filtersReducer(undefined, action);
    expect(state.text).toBe(text);
});

test('should setup set start date reducer', () => {
    const startDate = moment();
    const action = { 
        type: 'SET_START_DATE', 
        startDate
    }
    const state = filtersReducer( undefined, action);

    expect(state.startDate).toEqual(startDate);

});

test('should setup set end date reducer', () => {
    const endDate = moment();
    const action = { 
        type: 'SET_END_DATE', 
        endDate
    }
    const state = filtersReducer( undefined, action);

    expect(state.endDate).toEqual(endDate);
});