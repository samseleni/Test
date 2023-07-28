import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: []
    },
    reducers: {
        addTodo(state, action) {
            state.todos.push({
                id: newDate().toISOString(),
                text: action.payload.text,
                completed: false
            })
        },
        toggleTodoComplete(state, action) {
            const toggledTodo = state.todos.find(todo => todo.id === action.payload.id);
            toggledTodo.completed = !toggledTodo.completed;
        },
        removeTodo(state, action) {
            state.todos = state.todos.filter(todo =>  todo.id !== action.payload.id)
        }
    }
})

export const {addTodo, toggleTodoComplete, removeTodo} = todoSlice.actions;

export default todoSlice.reducer;