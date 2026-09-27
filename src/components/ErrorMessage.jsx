import styles from "./ErrorMessage.module.css";

function ErrorMessage({ message = "Something went wrong." }) {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>!</div>

      <h3>Something went wrong</h3>

      <p>{message}</p>
    </div>
  );
}

export default ErrorMessage;