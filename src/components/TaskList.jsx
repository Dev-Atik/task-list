import { useContext } from "react";
import { TaskContext } from "../context/taskContext";
import Task from "./Task";

export default function TaskList() {
  const tasks = useContext(TaskContext);

  return (
    <ul>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </ul>
  );
}
