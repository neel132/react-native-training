import { createSlice } from "@reduxjs/toolkit";

/* Redux - 
    a. Redux is state management library on a global level
    b. Redux is a synchronous process

    1. Store/ Initial State
    2. Reducer
    3. Action
*/

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },
    reducers: {
        incrementCounter(state, action) {
            state.value = state.value + 1;
        },
        decrementCounter(state, action) {
            state.value = state.value - 1;
        },
        setCounter(state, action) {
            state.value = action.payload.value;
        }
    }
});

export const {incrementCounter, decrementCounter, setCounter} = counterSlice.actions;
export default counterSlice.reducer;
