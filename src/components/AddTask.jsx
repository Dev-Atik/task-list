import { useContext, useState } from "react";
import { TaskContext, TaskDispatchContext } from "../context/taskContext";
import { getNextId } from "../utils/getNextId";

export default function AddTask() {
  const [text, setText] = useState("");

  const tasks = useContext(TaskContext);
  const dispatch = useContext(TaskDispatchContext);

  const handleChangeTask = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <input placeholder="add task" value={text} onChange={handleChangeTask} />
      <button
        onClick={() => {
          setText("");
          dispatch({
            type: "added",
            id: getNextId(tasks),
            text,
          });
        }}
      >
        add
      </button>
    </>
  );
}
