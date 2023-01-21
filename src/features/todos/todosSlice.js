import { createSlice } from "@reduxjs/toolkit";
import moment from "moment/moment";
import { generateId } from "../../utils/generateId";

export const todosSlice = createSlice({
    name: "todos",
    initialState: [],
    reducers: {
        addTodo(state, action) {
            const todo = {
                id: generateId(),
                text: action.payload,
                date: moment().calendar(),
            };
            return [...state, todo];
        },
        deleteTodo(state, action) {
            const newState = state.filter((item) => item.id != action.payload);
            return [...newState];
        },
    },
});

export const { addTodo, deleteTodo } = todosSlice.actions;

export default todosSlice.reducer;
