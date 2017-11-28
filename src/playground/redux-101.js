import { createStore } from 'redux';

// Action generators - functions that return action objects

const incrementCount = ({ incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy: incrementBy
});

const decrementCount = ({ decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy: decrementBy
});

const setCount = ({ count = 1 } = {}) => ({
    type: 'SET',
    count: count 
});

const resetCount = () => ({
    type: 'RESET'
});

// Reducers
// 1. Reducers are pure functions, meaning the output is solely determined by the input 
 
const countReducer = (state = {count: 0}, action) => {
    switch(action.type) {
        case "INCREMENT":
            return {
                count: state.count + action.incrementBy
            };

        case "DECREMENT":
            return {
                count: state.count - action.decrementBy
            };
        case "SET":
            return {
                count: state.count = action.count
            };
        case "RESET":
            return {
                count: state.count = 0
            };
        default:
            return state;
    }
};

const store = createStore(countReducer);

// const unsubscribe = store.subscribe(() => {
//     console.log(store.getState());
// });

store.dispatch(incrementCount({incrementBy: 2}));
store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount({decrementBy: 2}));
store.dispatch(decrementCount());

store.dispatch(setCount({count: 101}));