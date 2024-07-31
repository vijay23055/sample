// TodoList.js
import React, { useState, useEffect } from 'react';
import { ListGroup, Button, Col, Row, Dropdown,DropdownButton} from 'react-bootstrap';

const TodoList = ({ todos, deleteTodo, setCurrentTodo, updateTodoStatus ,statusFilter }) => {
   
    const getStatusClass = (status) => {
        switch (status) {
            case 'Completed':
                return 'text-white bg-success';
            case 'Not Completed':
                return 'text-white bg-danger';
            default:
                return '';
        }
    }; 
    const filteredTodos = statusFilter ? todos.filter(todo => todo.status === statusFilter) : todos;

    return (
        <div className=''>
        
            <Row className="mb-3">
                {filteredTodos.map((todo) => (



                    <Col xs="auto" key={todo.id}>
                        <div className="card mb-5 mb-lg-0">
                            <div className="card-body">
                                <Row className="mb-3">
                                    <Col xs="auto">
                                        <h6 className="card-title text-muted text-uppercase">Name:</h6>
                                    </Col>
                                    <Col>
                                        <h6 className="card-title text-muted text-uppercase">{todo.name}</h6>
                                    </Col>
                                </Row>

                                <Row className="mb-3">
                                    <Col xs="auto">
                                        <h6 className="card-title text-muted text-uppercase">Description:</h6>
                                    </Col>
                                    <Col>
                                        <h6 className="card-title text-muted text-uppercase">{todo.description}</h6>
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col xs="auto">
                                        <h6 className="card-title text-muted text-uppercase">Status:</h6>
                                    </Col>


                                    <Col xs="auto">
                                        <Dropdown>
                                            <Dropdown.Toggle variant="secondary" id="dropdown-basic" className={getStatusClass(todo.status)}>
                                                {todo.status || "Not-Completed"}
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item onClick={() => updateTodoStatus(todo.id,'Completed')} className="completed-item">Completed</Dropdown.Item>
                                                <Dropdown.Item onClick={() => updateTodoStatus(todo.id,'Not Completed')} className="in-progress-item">Not Completed</Dropdown.Item>
                                                
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Col>
                                </Row>


                                <div class="row butt-ons">
                                    <div class="col-lg-4">
                                        <Button variant="warning" class="col-lg-4" onClick={() => setCurrentTodo(todo)}>Edit</Button>

                                    </div>
                                    <div class="col-lg-4">
                                        <Button variant="danger" class="col-lg-4" onClick={() => deleteTodo(todo.id)}>Delete</Button>
                                    </div>

                                </div>


                            </div>
                        </div>
                    </Col>



                ))}
            </Row>
        </div>
    );
};

export default TodoList;
