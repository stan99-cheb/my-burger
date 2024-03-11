import styles from "./info.module.css";
import doneImage from "../../../assets/done.svg";

const Info = () => {
  return (
    <main
      className={styles.main}
    >
      <p
        className={styles.number}
      >
        034536
      </p>
      <p
        className={styles.id}
      >
        Идентификатор заказа
      </p>
      <img
        className={styles.img}
        src={doneImage}
        alt="icon"
      />
      <div
        className={styles.text}
      >
        <p>
          Ваш заказ начали готовить
        </p>
        <p>
          Дождитесь готовности на орбитальной станции
        </p>
      </div>
    </main>
  );
}

export default Info;