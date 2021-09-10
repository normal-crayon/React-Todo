import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

//Components
import FormTodo from "../src/Components/FormTodo";
import Todo from "../src/Components/Todo";
export default function App() {
  const [todo, setTodo] = useState([
    {
      text: "sample todo",
      isDone: false
    }
  ]);

  //create todo
  const addTodo = (text) => {
    const newTodo = [...todo, { text }];
    setTodo(newTodo);
  };

  //update todo
  const markTodo = (index) => {
    const doneTodo = [...todo];
    doneTodo[index].isDone = true;
    setTodo(doneTodo);
  };

  //remove todo
  const removeTodo = (index) => {
    const theTodo = [...todo];
    theTodo.splice(index, 1);
    setTodo(theTodo);
  };
  return (
    <div className="App">
      <div className="container">
        <h1 className="text-center mb4">Todo App</h1>
        <FormTodo addTodo={addTodo} />
        <div>
          {todo.map((todo, index) => (
            <Card>
              <Card.Body>
                <Todo
                  key={index}
                  index={index}
                  todo={todo}
                  markTodo={markTodo}
                  removeTodo={removeTodo}
                />
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
