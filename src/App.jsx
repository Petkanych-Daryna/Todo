import React, { useEffect, useState } from "react";

import "./App.css";
import { Filter } from "./TodoComponent/Todo/Filter";
import { Info } from "./TodoComponent/Todo/Info";
import { TodoEditor } from "./TodoComponent/Todo/TodoEditor";
import { TodoList } from "./TodoComponent/Todo/TodoList";

import initialTodos from "./todo.json";
import { Modal } from "./TodoComponent/Todo/Modal";

const App = () => {
  // state = {
  //   todos: [],
  //   filter: "",
  //   showModal: false,
  // };

  const [todos, setTodos] = useState(initialTodos);
  const [filter, setFilter] = useState("");
  const [showModal, setShowModal] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now().toString(),
      text,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleCompleted = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };
  const changeFilter = (e) => {
    setFilter(e.target.value);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  // const { todos, filter } = this.state;
  const totalTodos = todos.length;
  const completedTodos = todos.filter((t) => t.completed).length;

  const visibleTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(filter.toLowerCase()),
  );
  return (
    <div>
      <button onClick={toggleModal} type="button">
        Open modal
      </button>

      {showModal && (
        <Modal onClose={toggleModal}>
          <Info  total={totalTodos} completed={completedTodos} />
          <TodoEditor onSubmit={addTodo} />
          <Filter value={filter} onChange={changeFilter} />
          <TodoList
            items={visibleTodos}
            onDelete={deleteTodo}
            onToggle={toggleCompleted}
          />
          <button onClick={toggleModal} type="button">
            Close
          </button>
        </Modal>
      )}
    </div>
  );
};

export default App;
