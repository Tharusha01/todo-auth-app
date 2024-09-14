import React, { useContext, useState } from "react";
import { TodoContext } from "./TodoContext";
import { Button, Form, ListGroup } from "react-bootstrap";

function TodoList() {
  const { todos, toggleCompletion, deleteTodo, editTodo } =
    useContext(TodoContext);
  const [editingId, setEditingId] = useState(null);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedDescription, setEditedDescription] = useState("");

  // Handle edit mode
  const handleEdit = (todo) => {
    setEditingId(todo.id);
    setEditedTitle(todo.title);
    setEditedDescription(todo.description);
  };

  // Save updated todo
  const saveEdit = (id) => {
    editTodo(id, editedTitle, editedDescription);
    setEditingId(null);
  };

  return (
    <ListGroup>
      {todos.map((todo) => (
        <ListGroup.Item
          key={todo.id}
          className={todo.completed ? "completed" : ""}
        >
          {editingId === todo.id ? (
            <div>
              <Form.Control
                type="text"
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
                className="mb-2"
              />
              <Form.Control
                type="text"
                value={editedDescription}
                onChange={(e) => setEditedDescription(e.target.value)}
                className="mb-2"
              />
              <Button variant="success" onClick={() => saveEdit(todo.id)}>
                Save
              </Button>
              <Button
                variant="secondary"
                onClick={() => setEditingId(null)}
                className="ms-2"
              >
                Cancel
              </Button>
            </div>
          ) : (
            <div>
              <h5>{todo.title}</h5>
              <p>{todo.description}</p>
              <Button
                variant="warning"
                onClick={() => toggleCompletion(todo.id)}
              >
                {todo.completed ? "Mark as Incomplete" : "Mark as Completed"}
              </Button>
              <Button
                variant="danger"
                onClick={() => deleteTodo(todo.id)}
                className="ms-2"
              >
                Delete
              </Button>
              <Button
                variant="info"
                onClick={() => handleEdit(todo)}
                className="ms-2"
              >
                Edit
              </Button>
            </div>
          )}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default TodoList;
