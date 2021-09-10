import React from "react";
import { Button } from "react-bootstrap";

const Todo = ({ index, todo, markTodo, removeTodo }) => {
  return (
    <div className="todo">
      <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>
        {todo.text}
      </span>
      <div>
        <Button variant="success" onClick={() => markTodo(index)}>
          Done
        </Button>{" "}
        <Button variant="outline-success" onClick={() => removeTodo(index)}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default Todo;
