import { Link } from "react-router-dom";

import { useTasks } from "../context/TaskContext";

import styles from "./TaskCard.module.css";

function TaskCard({ task }) {
  const { toggleTask, deleteTask } = useTasks();

  const priority =
    task.id % 3 === 0
      ? "High"
      : task.id % 2 === 0
        ? "Medium"
        : "Low";

  const toggleHandler = (event) => {
    event.preventDefault();
    event.stopPropagation();

    toggleTask(task.id);
  };

  const deleteHandler = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const confirmed = window.confirm(
      "Are you sure you want to delete this task?"
    );

    if (!confirmed) return;

    deleteTask(task.id);
  };

  return (
    <Link
      to={`/tasks/${task.id}`}
      className={styles.link}
    >
      <article className={styles.card}>
        <div className={styles.content}>
          <div className={styles.titleRow}>
            <div className={styles.titleWrapper}>
              <h3 className={styles.title}>
                {task.todo}
              </h3>

              <div className={styles.actions}>
                <button
                  onClick={toggleHandler}
                  className={styles.toggleButton}
                >
                  {task.completed
                    ? "Mark Pending"
                    : "Mark Complete"}
                </button>

                <button
                  onClick={deleteHandler}
                  className={styles.deleteButton}
                >
                  Delete
                </button>
              </div>
            </div>

            <span
              className={`${styles.status} ${
                task.completed
                  ? styles.completed
                  : styles.pending
              }`}
            >
              {task.completed
                ? "Completed"
                : "Pending"}
            </span>
          </div>

          <div className={styles.meta}>
            <span
              className={`${styles.priority} ${
                styles[priority.toLowerCase()]
              }`}
            >
              {priority} Priority
            </span>

            <span className={styles.assignee}>
              User #{task.userId}
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default TaskCard;