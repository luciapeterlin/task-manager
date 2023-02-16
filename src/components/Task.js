import { Alert, Button } from 'react-bootstrap';

function Task({item, deleteNewTask}) {

  const deleteTask = (e) => {
    e.preventDefault();
    const { id } = e.target;
    deleteNewTask(id);
  }

  return (
    <>
      <Alert variant="info" className="d-flex align-items-baseline justify-content-between">
        <p>{item.name}</p>
        <Button variant="outline-secondary" id={item.id} onClick={deleteTask}>🗑</Button>
      </Alert>
    </>
  );
}

export default Task;