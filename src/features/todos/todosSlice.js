import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
    name: "todos",
    initialState: [],
    reducers: {
        addTodo(state, action) {
            const todo = {
                id: state.length + 1,
                text: action.payload,
            };
            return [...state, todo];
        },
    },
});

export const { addTodo } = todosSlice.actions;

export default todosSlice.reducer;
