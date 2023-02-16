import { useState } from "react";
import shortid from "shortid";
import { Form, Button } from 'react-bootstrap';

function CreateTask({addNewTask}) {

  const [ task, setTask ] = useState({id: "", name:""});

  const handleOnChange = (e) =>{
    setTask({
      ...task,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    if (task.name.trim() == ""){
      alert("Please complete task name");
    } else {
      const createTask = {
        ...task,
        id: shortid()
      }
      setTask({id: "", name:""});
      addNewTask(createTask);
    }
  }

  return (
    <div className="create-task-container">
      <h5>Create a new task</h5>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Task Name:</Form.Label>
          <Form.Control type="text" autoComplete="off" placeholder="Vacuuming all rugs and carpets" name="name" value={task.name} onChange={handleOnChange} />
        </Form.Group>
        <Button variant="primary" type="submit">Create task</Button>
      </Form>
    </div>
  );
}

export default CreateTask;