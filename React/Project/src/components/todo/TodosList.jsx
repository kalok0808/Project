import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faCheckCircle, faTrashAlt, faEdit);

const TodosList = ({ todos, setTodos, setEditTodo }) => {
  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };
  const handleEdit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };
  async function taskDelete(id) {
    const res = await fetch(`http://localhost:8080/todolist/${id}`, {
      method: "DELETE",
    });
  }

  const handleDelete = ({ id }) => {
    taskDelete(id);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      {todos.map((todo) => (
        <li className="listItem" key={todo.id}>
          <input
            type="text"
            value={todo.title}
            className={`todoList ${todo.completed ? "complete" : ""}`}
            onChange={(event) => event.preventDefault()}
          />
          <div className="iconButton">
            <FontAwesomeIcon
              icon="check-circle"
              className="buttonComplete taskButton"
              onClick={() => handleComplete(todo)}
            />
          </div>
          <div className="iconButton">
            <FontAwesomeIcon
              icon="edit"
              className="buttonEdit taskButton"
              onClick={() => handleEdit(todo)}
            />
          </div>
          <div className="iconButton">
            <FontAwesomeIcon
              icon="trash-alt"
              className="buttonDelete taskButton"
              onClick={() => handleDelete(todo)}
            />
          </div>
        </li>
      ))}
    </div>
  );
};

export default TodosList;
