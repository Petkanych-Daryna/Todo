import React, { Component } from "react";

export const TodoList = ({ items, onDelete, onToggle })=>{
    return (
      <ul>
        {items.map(({ id, text, completed }) => (
          <li key={id}>
            <input
              type="checkbox"
              checked={completed}
              onChange={() => onToggle(id)}
              name=""
              id=""
            />
            <span>{text}</span>
            <button onClick={() => onDelete(id)}>Delete</button>
          </li>
        ))}
      </ul>
    );
  }
