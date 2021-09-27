import React, { useEffect } from "react";
import { v4 as uuidV4 } from "uuid";

const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {
  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { title, id, completed } : todo
    );
    setTodos(newTodo);
    setEditTodo("");
  };
  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title);
    } else {
      setInput("");
    }
  }, [setInput, editTodo]);
  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  async function post(newItem) {
    const res = await fetch("http://localhost:8080/todolist", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newItem),
    });
    const data = await res.json();
    const id = data.id;
    return id;
  }
  async function edit(id) {
    const res = await fetch(`http://localhost:8080/todolist${id}`, {
      method: "PUT",
    });
  }

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!editTodo) {
      const id = post({
        name: input,
        date: "",
        completed: "no",
      });
      setTodos([...todos, { id: id, title: input, completed: false }]);
      setInput("");
    } else {
      edit(editTodo.id);
      updateTodo(input, editTodo.id, editTodo.completed);
    }
  };
  return (
    <form onSubmit={onFormSubmit}>
      <div className="addForm">
        <input
          type="text"
          placeholder="ToDo..."
          className="taskInput"
          value={input}
          required
          onChange={onInputChange}
        />
        <button className="buttonAdd" type="submit">
          {editTodo ? "ok" : "ADD"}
        </button>
      </div>
    </form>
  );
};

export default Form;
