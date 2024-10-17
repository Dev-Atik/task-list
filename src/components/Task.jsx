/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { TaskDispatchContext } from "../context/taskContext";

export default function Task({ task }) {
  const [isEditing, setIsEditing] = useState(false);

  const dispatch = useContext(TaskDispatchContext);

  let TaskContent;

  if (isEditing) {
    TaskContent = (
      <>
        <input
          value={task.text}
          onChange={(e) => {
            dispatch({
              type: "edited",
              task: {
                ...task,
                text: e.target.value,
              },
            });
          }}
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    TaskContent = (
      <>
        {task.text}
        <button onClick={() => setIsEditing(true)}>edit</button>
      </>
    );
  }

  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={task.done}
          onChange={(e) => {
            dispatch({
              type: "edited",
              task: {
                ...task,
                done: e.target.checked,
              },
            });
          }}
        />
        {TaskContent}
        <button
          onClick={() => {
            dispatch({
              type: "deleted",
              id: task.id,
            });
          }}
        >
          Delete
        </button>
      </label>
    </li>
  );
}
