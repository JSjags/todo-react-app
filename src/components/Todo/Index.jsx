import { useState, useEffect } from "react";
import { Wrapper, Content } from "./Todo.styles";
import TodoList from "./TodoList/Index";
import TodoForm from "./TodoForm/Index";

const initialState = JSON.parse(localStorage.getItem("todos")) || [];

const Todo = () => {
  const [todos, setTodos] = useState(initialState);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <Wrapper>
      <Content>
        <TodoForm todos={todos} setTodos={setTodos} text="Add Todo" />
        <TodoList todoList={todos} setTodos={setTodos} />
      </Content>
    </Wrapper>
  );
};

export default Todo;
