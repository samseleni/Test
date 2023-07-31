import React, { useState } from 'react';
import "./styles.scss";
import TodoList from '../TodoList/TodoList';
import Input from '../Input/Input';
import { useAppDispatch } from '../../redux/hooks';
import { addTodo } from '../../redux/todoSlice';
import { titles } from "../../mock";

const Todo = () => {
    const [text, setText] = useState<string>("");

    const dispatch = useAppDispatch();

    const addTask = () => {
        dispatch(addTodo(text));
        setText('');
    }

    return (
        <div className='container'>
            <Input handleClick={addTask} handleChange={setText} value={text} />
            <TodoList title={titles.newTodo} />
            <TodoList title={titles.completedTodo} />
        </div>
    )
}

export default Todo;