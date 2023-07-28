import React from "react";
import "./styles.scss";
import { removeTodo, toggleTodoComplete } from "../../redux/todoSlice";
import { useAppDispatch } from "../../redux/hooks";

type Props = {
    id: string,
    text: string,
    completed: boolean
}
const TodoItem = ({ id, text, completed }: Props) => {
  const dispatch = useAppDispatch();

  return (
    <li>
        <input type="checkbox" checked={completed} onChange={() => dispatch(toggleTodoComplete({id}))} />
        <span>{text}</span>
        <span onClick={() => dispatch(removeTodo({id}))}>&times;</span>
    </li>
  ); 
};

export default TodoItem;
