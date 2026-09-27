import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { useTasks } from "../context/TaskContext";

import styles from "./TaskDetails.module.css";

function TaskDetails() {
  const { id } = useParams();

  const {
    tasks,
    loading,
    error,
    updateTask,
    toggleTask,
    deleteTask,
  } = useTasks();

  const task = tasks.find(
    (task) => task.id === Number(id)
  );

  const [todo, setTodo] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (task) {
      setTodo(task.todo);
    }
  }, [task]);

  if (loading) {
    return <p>Loading task...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!task) {
    return (
      <section className={styles.page}>
        <h1>Task Not Found</h1>

        <Link
          to="/tasks"
          className={styles.back}
        >
          ← Back to Tasks
        </Link>
      </section>
    );
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!todo.trim()) return;

    updateTask(task.id, todo.trim());

    setIsEditing(false);
  };

  const cancelHandler = () => {
    setTodo(task.todo);
    setIsEditing(false);
  };

  const toggleHandler = () => {
    toggleTask(task.id);
  };

  const deleteHandler = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this task?"
    );

    if (!confirmed) return;

    deleteTask(task.id);
  };

  return (
    <section className={styles.page}>
      <Link
        to="/tasks"
        className={styles.back}
      >
        ← Back to Tasks
      </Link>

      <div className={styles.card}>
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <span className={styles.label}>
              Task #{task.id}
            </span>

            {isEditing ? (
              <form onSubmit={submitHandler}>
                <input
                  className={styles.editInput}
                  value={todo}
                  onChange={(event) =>
                    setTodo(event.target.value)
                  }
                  autoFocus
                />

                <div className={styles.editActions}>
                  <button
                    type="submit"
                    className={styles.saveButton}
                  >
                    Save Changes
                  </button>

                  <button
                    type="button"
                    className={styles.cancelButton}
                    onClick={cancelHandler}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            ) : (
              <h1 className={styles.title}>
                {task.todo}
              </h1>
            )}
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

        <div className={styles.actions}>
          {!isEditing && (
            <button
              className={styles.editButton}
              onClick={() => setIsEditing(true)}
            >
              Edit Task
            </button>
          )}

          <button
            className={styles.toggleButton}
            onClick={toggleHandler}
          >
            {task.completed
              ? "Mark Pending"
              : "Mark Complete"}
          </button>

          <button
            className={styles.deleteButton}
            onClick={deleteHandler}
          >
            Delete Task
          </button>
        </div>

        <div className={styles.info}>
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>
              User
            </span>

            <span className={styles.infoValue}>
              User #{task.userId}
            </span>
          </div>

          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>
              Status
            </span>

            <span className={styles.infoValue}>
              {task.completed
                ? "Completed"
                : "Pending"}
            </span>
          </div>

          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>
              Task ID
            </span>

            <span className={styles.infoValue}>
              #{task.id}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TaskDetails;