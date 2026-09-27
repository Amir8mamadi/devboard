import { useState } from "react";

import { useTasks } from "../context/TaskContext";

import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import TaskCard from "../components/TaskCard";
import CreateTask from "../components/CreateTask";

import styles from "./Tasks.module.css";

function Tasks() {
  const { tasks, loading, error } = useTasks();

  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState("");

  // Search + Filter
  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.todo.toLowerCase().includes(query.toLowerCase());

    const matchesFilter =
      filter === "all" ||
      (filter === "completed" && task.completed) ||
      (filter === "pending" && !task.completed);

    return matchesSearch && matchesFilter;
  });

  // Statistics
  const totalTasks = tasks.length;

  const completedTasks = tasks.filter((task) => task.completed).length;

  const pendingTasks = tasks.filter((task) => !task.completed).length;

  if (loading) {
    return <Loading text="Loading tasks..." />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <section className={styles.page}>
      {/* Header */}
      <div className={styles.header}>
        <h1 className={styles.title}>Tasks</h1>

        <p className={styles.description}>
          Manage and track your team's tasks.
        </p>
      </div>

      <CreateTask />

      {/* Statistics */}
      <div className={styles.stats}>
        <div className={styles.statCard}>
          <span className={styles.statLabel}>Total Tasks</span>

          <strong className={styles.statValue}>{totalTasks}</strong>
        </div>

        <div className={styles.statCard}>
          <span className={styles.statLabel}>Pending</span>

          <strong className={styles.statValue}>{pendingTasks}</strong>
        </div>

        <div className={styles.statCard}>
          <span className={styles.statLabel}>Completed</span>

          <strong className={styles.statValue}>{completedTasks}</strong>
        </div>
      </div>

      {/* Search */}
      <div className={styles.search}>
        <input
          type="text"
          placeholder="Search tasks..."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>

      {/* Filters */}
      <div className={styles.filters}>
        <button
          onClick={() => setFilter("all")}
          className={filter === "all" ? styles.active : ""}
        >
          All
        </button>

        <button
          onClick={() => setFilter("pending")}
          className={filter === "pending" ? styles.active : ""}
        >
          Pending
        </button>

        <button
          onClick={() => setFilter("completed")}
          className={filter === "completed" ? styles.active : ""}
        >
          Completed
        </button>
      </div>

      {/* Result Count */}
      <div className={styles.resultInfo}>
        <span>
          Showing {filteredTasks.length} of {totalTasks} tasks
        </span>
      </div>

      {/* Task List */}
      <div className={styles.list}>
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => <TaskCard key={task.id} task={task} />)
        ) : (
          <div className={styles.empty}>
            <h3>No tasks found</h3>

            <p>Try changing your search or filter.</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Tasks;
