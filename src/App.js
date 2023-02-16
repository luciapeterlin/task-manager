import { useState } from "react";
import Header from "./components/Header";
import CreateTask from "./components/CreateTask";
import TasksList from "./components/TasksList";
import "./App.css";

function App() {
  
  const [ activities, setActivities ] = useState([]);

  const addNewTask = (newTask) => {
    setActivities([...activities, newTask]);
  }

  const deleteNewTask = (id) => {
    const newActivities = activities.filter((activity) => activity.id !== id);
    setActivities(newActivities);
  }

  return (
    <>
      <Header title={"📝 Task Manager"} />
      <CreateTask addNewTask={addNewTask} />
      <TasksList activities={activities} deleteNewTask={deleteNewTask} />
    </>
  );
}

export default App;
