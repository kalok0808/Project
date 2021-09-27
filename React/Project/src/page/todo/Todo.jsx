import React, { useState } from "react";
import "./Todo.css";
import Header from "../../components/todo/Header";
import Form from "../../components/todo/Form";
import TodosList from "../../components/todo/TodosList";
import { useEffect } from "react";

const Todo = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);
  async function getData() {
    const res = await fetch("http://localhost:8080/todolist");
    const tasks = await res.json();
    console.log(tasks);
    const scvTask = tasks.map((task) => {
      return {
        title: task.name,
        id: task.id,
        completed: task.completed === "yes",
      };
    });
    setTodos(scvTask);
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="container">
      <div className="appWrapper">
        <div>
          <Header />
        </div>
        {<div></div>}
        <div>
          <Form
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
          />
        </div>
        <div>
          <TodosList
            todos={todos}
            setTodos={setTodos}
            setEditTodo={setEditTodo}
          />
        </div>
      </div>
    </div>
  );
};
export default Todo;
