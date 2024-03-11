import PropTypes from "prop-types";
import styles from "./ingredient.module.css";
import * as icons from "../../../components/Icons/index";
import React from "react";

const Ingredient = (
  {
    ingredient,
    extraStyle,
    ...rest
  }
) => {
  const Icon = icons['CurrencyIcon'];

  return (
    <div
      className={extraStyle}
      {...rest}
    >
      <img
        className={styles.image}
        src={ingredient.image}
        alt="ingredient"
      />
      <p
        className={styles.price}
      >
        {ingredient.price}
        {Icon && <Icon />}
      </p>
      <p
        className={styles.name}
      >
        {ingredient.name}
      </p>
    </div>
  );
};

Ingredient.propTypes = {
  ingredient: PropTypes.object,
  icon: PropTypes.string,
  extraStyle: PropTypes.string,
};

const PureIngredient = React.memo(Ingredient);

export default PureIngredient;