import React, { useState } from 'react';
import "./styles.scss";
import TaskList from '../TodoList/TodoList';
import Input from '../Input/Input';
import { useAppDispatch } from '../../redux/hooks';
import { addTodo } from '../../redux/todoSlice';

const Todo = () => {
    const [text, setText] = useState();

    const dispatch = useAppDispatch();

    const addTask = () => {
        dispatch(addTodo({text}));
        setText('');
    }

    return(
        <div>
            <Input handleClick={addTask} handleChange={setText} value={text} />
            <TaskList title="ToDo"/>
        </div>
    )
}

export default Todo;