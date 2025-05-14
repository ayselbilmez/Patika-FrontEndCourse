import React, { useState } from "react";
import "./TodoApp.css";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [filter, setFilter] = useState("all");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim() === "") return;
    setTodos([
      ...todos,
      { id: Date.now(), text: newTodo.trim(), completed: false },
    ]);
    setNewTodo("");
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  const itemsLeft = todos.filter((todo) => !todo.completed).length;

  return (
    <div className="todoapp-wrapper">
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <form onSubmit={handleSubmit}>
            <input
              className="new-todo"
              placeholder="What needs to be done?"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              autoFocus
            />
          </form>
        </header>

        {todos.length > 0 && (
          <section className="main">
            <input
              id="toggle-all"
              className="toggle-all"
              type="checkbox"
              checked={itemsLeft === 0}
              onChange={() =>
                setTodos(
                  todos.map((todo) => ({ ...todo, completed: itemsLeft !== 0 }))
                )
              }
            />
            <label htmlFor="toggle-all">Mark all as complete</label>

            <ul className="todo-list">
              {filteredTodos.map((todo) => (
                <li key={todo.id} className={todo.completed ? "completed" : ""}>
                  <div className="view">
                    <input
                      className="toggle"
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => toggleTodo(todo.id)}
                    />
                    <label>{todo.text}</label>
                    <button
                      className="destroy"
                      onClick={() => deleteTodo(todo.id)}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </section>
        )}

        {todos.length > 0 && (
          <footer className="footer">
            <span className="todo-count">
              <strong>{itemsLeft}</strong> {itemsLeft === 1 ? "item" : "items"}{" "}
              left
            </span>

            <ul className="filters">
              <li>
                <a
                  href="#/"
                  className={filter === "all" ? "selected" : ""}
                  onClick={() => setFilter("all")}
                >
                  All
                </a>
              </li>
              <li>
                <a
                  href="#/active"
                  className={filter === "active" ? "selected" : ""}
                  onClick={() => setFilter("active")}
                >
                  Active
                </a>
              </li>
              <li>
                <a
                  href="#/completed"
                  className={filter === "completed" ? "selected" : ""}
                  onClick={() => setFilter("completed")}
                >
                  Completed
                </a>
              </li>
            </ul>

            <button className="clear-completed" onClick={clearCompleted}>
              Clear completed
            </button>
          </footer>
        )}
      </section>
    </div>
  );
};

export default TodoApp;
