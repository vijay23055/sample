import React, { useState, useEffect } from 'react';
import { Form, Button, Col, Row, DropdownButton, Dropdown } from 'react-bootstrap';
function Todoform({ todos, addTodo, editTodo, currentTodo, statusFilter, setStatusFilter }) {
  const [todo, setTodo] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    if (currentTodo) {
      setTodo(currentTodo);
    } else {
      setTodo([]);
    }
  }, [currentTodo]);
  const handleChange = (e) => {
    const { name, value } = e.target;

    setTodo({
      ...todo,
      [name]: value,
    });
  };
  const handleStatusChange = (status) => {
    setTodo({
      ...todo,
      status: status,
    });
  };

  const handleStatusFilterChange = (filter) => {
    setStatusFilter(filter);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo.name || !todo.description) {
      setError("feilds are req");
    } else {
      if (currentTodo) {
        editTodo(todo);
      } else {
        addTodo(todo);
      }
      setTodo([]);
    }


  };


  return (
    <>
      <h3>My ToDo</h3>
      <section className='first-section'>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Col sm={3}>
              <Form.Group>

                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={todo.name}
                  onChange={handleChange}

                />
              </Form.Group>
            </Col>
            <Col sm={4}>
              <Form.Group>

                <Form.Control
                  type="text"
                  name="description"
                  value={todo.description}
                  onChange={handleChange}
                  placeholder="Description"

                />
              </Form.Group>
            </Col>

            <Col sm={2} className="d-flex align-items-end">
              <Button variant="success" type="submit" className="w-100">
                Add To do
              </Button>
            </Col>



            <Col sm={3}>
              <Form.Group className="form-floating">
                <Form.Label id='form-label'>Status Filter</Form.Label>
                <DropdownButton id="dropdown-basic-button" title="All" onSelect={handleStatusFilterChange}>
                <Dropdown.Item eventKey="All">All</Dropdown.Item>
                  <Dropdown.Item eventKey="Completed">Completed</Dropdown.Item>
                  <Dropdown.Item eventKey="On Progress">Not Completed</Dropdown.Item>
                </DropdownButton>
              </Form.Group>
            </Col>



          </Row>
        </Form>
      </section>


    </>
  )
}

export default Todoform