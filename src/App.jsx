import AddTask from "./components/addTask";
import TaskList from "./components/TaskList";
import TasksProvider from "./context/taskContext";

export default function App() {
  return (
    <TasksProvider>
      <h1>Prague itinerary</h1>
      <AddTask />
      <TaskList />
    </TasksProvider>
  );
}
