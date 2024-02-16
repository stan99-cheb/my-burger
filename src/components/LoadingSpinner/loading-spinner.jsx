import styles from "./loading-spinner.module.css";

const LoadingSpinner = () => (
  <div className={styles.main}>
    <div className={styles.ldsDualRing}></div>
  </div>
);

export default LoadingSpinner;