import Task from "./Task";
import { Alert } from 'react-bootstrap';

function TasksList({activities, deleteNewTask}) {

  return (
    <>
      <div className="tasks-list-container">
        <p>All your tasks:</p>
        {activities.length === 0 && <Alert variant="danger">⚠ You don't have pending tasks</Alert>}
        {activities.map((item) => (
          <Task key={item.id} item={item} deleteNewTask={deleteNewTask} />
        ))}
      </div>
    </>
  );
}

export default TasksList;
