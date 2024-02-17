import PropTypes from "prop-types";
import styles from "./ingredient.module.css";
import * as icons from "../../../components/Icons/index";

const Ingredient = ({ image, price, icon, name }) => {
  const Icon = icons[icon];

  return (
    <>
      <img
        className={styles.image}
        src={image}
        alt="ingredient"
      />
      <p
        className={styles.price}
      >
        {price}
        <Icon />
      </p>
      <p
        className={styles.name}
      >
        {name}
      </p>
    </>
  );
};

Ingredient.propTypes = {
  image: PropTypes.string,
  price: PropTypes.number,
  icon: PropTypes.string,
  name: PropTypes.string,
};

export default Ingredient;