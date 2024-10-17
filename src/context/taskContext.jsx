/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import { initialTasks } from "../data";
import tasksReducer from "../reducers/TaskReducer";

export const TaskContext = createContext(null);
export const TaskDispatchContext = createContext(null);

export default function TasksProvider({ children }) {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  return (
    <TaskContext.Provider value={tasks}>
      <TaskDispatchContext.Provider value={dispatch}>
        {children}
      </TaskDispatchContext.Provider>
    </TaskContext.Provider>
  );
}
