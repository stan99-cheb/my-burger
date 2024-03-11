import PropTypes from "prop-types";
import styles from "./details.module.css";

const Details = ({ ingredient }) => {
  return (
    <main className={styles.container}>
      <img
        className={styles.image}
        src={ingredient.image_large}
        alt="icon"
      />
      <p
        className={styles.name}
      >
        {ingredient.name}
      </p>
      <div className={styles.values}>
        <p className={styles.value}>Калории, ккал</p>
        <p className={styles.value}>Белки, г</p>
        <p className={styles.value}>Жиры, г</p>
        <p className={styles.value}>Углеводы, г</p>
        <p className={styles.value}>{ingredient.calories}</p>
        <p className={styles.value}>{ingredient.proteins}</p>
        <p className={styles.value}>{ingredient.fat}</p>
        <p className={styles.value}>{ingredient.carbohydrates}</p>
      </div>
    </main>
  );
};

Details.propTypes = {
  ingredient: PropTypes.object,
};

export default Details;