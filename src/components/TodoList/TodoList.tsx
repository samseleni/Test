import React from "react";
import "./styles.scss";
import { useAppSelector } from "../../redux/hooks";
import TodoItem from "../TodoItem/TodoItem";

type Props = {
  title: string;
};
const TodoList = ({ title }: Props) => {
  const todos = useAppSelector((state) => state.todos.todos);
  return (
    <div>
      <h3>{title}</h3>
      <ul>
        {todos.map((todo) => ( 
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
