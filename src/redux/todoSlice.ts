import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Todo = {
    id: string;
    text: string;
    completed: boolean;
}

type TodosState = {
    todos: Todo[];
}

const initialState: TodosState = {
    todos: []
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo(state, action: PayloadAction<string>) {
            state.todos.push({
                id: new Date().toISOString(),
                text: action.payload,
                completed: false
            })
        },
        toggleTodoComplete(state, action: PayloadAction<string>) {
            const toggledTodo = state.todos.find(todo => todo.id === action.payload);
            if (toggledTodo) {
                toggledTodo.completed = !toggledTodo.completed;
                // для добавления в Completed/Todo в порядке изменения состояния 
                state.todos = state.todos.filter(todo => todo.id !== action.payload);
                state.todos.push(toggledTodo);
            }
        },
        removeTodo(state, action: PayloadAction<string>) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        }
    }
})

export const { addTodo, toggleTodoComplete, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;