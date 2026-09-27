import { useState } from "react";
import { useTasks } from "../context/TaskContext";

import styles from "./CreateTask.module.css";

function CreateTask() {
  const { addTask } = useTasks();

  const [todo, setTodo] = useState("");
  const [userId, setUserId] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    if (!todo.trim() || !userId) return;

    addTask({
      todo: todo.trim(),
      userId,
    });

    setTodo("");
    setUserId("");
  };

  return (
    <form
      className={styles.form}
      onSubmit={submitHandler}
    >
      <div className={styles.field}>
        <label htmlFor="todo">Task</label>

        <input
          id="todo"
          type="text"
          placeholder="Enter task..."
          value={todo}
          onChange={(event) =>
            setTodo(event.target.value)
          }
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="userId">User ID</label>

        <input
          id="userId"
          type="number"
          placeholder="Enter user ID..."
          value={userId}
          onChange={(event) =>
            setUserId(event.target.value)
          }
        />
      </div>

      <button type="submit">
        + Add Task
      </button>
    </form>
  );
}

export default CreateTask;