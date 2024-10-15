// App.js
import React, { useState } from 'react';
import Todoform from './components/Todoform';
import TodoList from './components/TodoList';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  const [todos, setTodos] = useState([]);
  const [currentTodo, setCurrentTodo] = useState(null);

  const addTodo = (todo) => {
    setTodos([...todos, { ...todo, id: Date.now() }]);
  };

  const editTodo = (updatedTodo) => {
    setTodos(todos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo)));
    setCurrentTodo(null);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodoStatus = (id, status) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, status } : todo));
};

const [statusFilter, setStatusFilter] = useState('');
  return (
    <Container>
      <Row>
        <Col>
          
          <Todoform addTodo={addTodo} editTodo={editTodo} currentTodo={currentTodo} statusFilter={statusFilter} setStatusFilter={setStatusFilter} />
        </Col>
      </Row>
    
          <TodoList todos={todos} deleteTodo={deleteTodo} setCurrentTodo={setCurrentTodo} updateTodoStatus={updateTodoStatus} statusFilter={statusFilter}/>
       
    </Container>
  );
};

export default App;
