import React, { useContext, useState } from "react";
import { TodoContext } from "./TodoContext";
import { Form, Button } from "react-bootstrap";

function TodoForm() {
  const { addTodo } = useContext(TodoContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert("Both title and description are required");
      return;
    }
    addTodo(title, description);
    setTitle("");
    setDescription("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="todoTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="todoDescription" className="mt-2">
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit" className="mt-3">
        Add Todo
      </Button>
    </Form>
  );
}

export default TodoForm;
