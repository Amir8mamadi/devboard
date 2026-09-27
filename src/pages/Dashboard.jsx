import { useTasks } from "../context/TaskContext";

import styles from "./Dashboard.module.css";

function Dashboard() {
  const { tasks, loading, error } = useTasks();

  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const pendingTasks = tasks.filter(
    (task) => !task.completed
  ).length;

  const completionRate =
    totalTasks > 0
      ? Math.round((completedTasks / totalTasks) * 100)
      : 0;

  const recentTasks = tasks.slice(0, 5);

  if (loading) {
    return <p>Loading dashboard...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section className={styles.page}>
      {/* Header */}

      <div className={styles.header}>
        <h1>Dashboard</h1>

        <p>
          Overview of your team's tasks and progress.
        </p>
      </div>

      {/* Stats */}

      <div className={styles.stats}>
        <div className={styles.card}>
          <span className={styles.label}>
            Total Tasks
          </span>

          <strong className={styles.value}>
            {totalTasks}
          </strong>
        </div>

        <div className={styles.card}>
          <span className={styles.label}>
            Pending
          </span>

          <strong className={styles.value}>
            {pendingTasks}
          </strong>
        </div>

        <div className={styles.card}>
          <span className={styles.label}>
            Completed
          </span>

          <strong className={styles.value}>
            {completedTasks}
          </strong>
        </div>
      </div>

      {/* Progress */}

      <div className={styles.progressCard}>
        <div className={styles.progressHeader}>
          <div>
            <h2>Completion Rate</h2>

            <p>
              {completedTasks} of {totalTasks} tasks
              completed
            </p>
          </div>

          <strong>{completionRate}%</strong>
        </div>

        <div className={styles.progressBar}>
          <div
            className={styles.progress}
            style={{ width: `${completionRate}%` }}
          />
        </div>
      </div>

      {/* Recent Tasks */}

      <div className={styles.recent}>
        <div className={styles.recentHeader}>
          <h2>Recent Tasks</h2>
        </div>

        <div className={styles.taskList}>
          {recentTasks.map((task) => (
            <div
              key={task.id}
              className={styles.task}
            >
              <div>
                <h3>{task.todo}</h3>

                <span>
                  User #{task.userId}
                </span>
              </div>

              <span
                className={
                  task.completed
                    ? styles.completed
                    : styles.pending
                }
              >
                {task.completed
                  ? "Completed"
                  : "Pending"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Dashboard;