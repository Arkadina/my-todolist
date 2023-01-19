import { createSlice } from "@reduxjs/toolkit";
import moment from "moment/moment";

export const todosSlice = createSlice({
    name: "todos",
    initialState: [],
    reducers: {
        addTodo(state, action) {
            const todo = {
                id: state.length + 1,
                text: action.payload,
                date: moment().calendar(),
            };
            return [...state, todo];
        },
    },
});

export const { addTodo } = todosSlice.actions;

export default todosSlice.reducer;
