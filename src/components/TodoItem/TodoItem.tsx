import React from "react";
import "./styles.scss";
import { removeTodo, toggleTodoComplete } from "../../redux/todoSlice";
import { useAppDispatch } from "../../redux/hooks";
import uniqid from "uniqid";

type Props = {
  id: string,
  text: string,
  completed: boolean
}
const TodoItem = ({ id, text, completed }: Props) => {
  const dispatch = useAppDispatch();
  const key = uniqid();

  return (
    <li className="todo-item">
      <input className="checkbox" id={key} type="checkbox" checked={completed} onChange={() => dispatch(toggleTodoComplete(id))} />
      <label htmlFor={key}></label>
      <span className={`text ${completed && 'completed'}`}>{text}</span>
      <span className="delete" onClick={() => dispatch(removeTodo(id))}>&times;</span>
    </li>
  );
};

export default TodoItem;
