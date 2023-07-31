import React from "react";
import "./styles.scss";
import { useAppSelector } from "../../redux/hooks";
import TodoItem from "../TodoItem/TodoItem";
import { titles } from "../../mock";

type Props = {
  title: string;
};
const TodoList = ({ title }: Props) => {
  const todos = useAppSelector((state) => state.todos.todos);

  const newTodos = todos.filter(todo => todo.completed === false);
  const completedTodos = todos.filter(todo => todo.completed === true);

  return (
    <div className="todos">
      <h3 className="subtitle">{title}</h3>
      <ul className="list">
        {title === `${titles.newTodo}` ? 
          newTodos.map(todo => <TodoItem key={todo.id} {...todo} />) :
          completedTodos.map(todo => <TodoItem key={todo.id} {...todo} />)
        }
      </ul>
    </div>
  );
};

export default TodoList;
