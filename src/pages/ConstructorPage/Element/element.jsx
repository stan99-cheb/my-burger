import React from "react";
import PropTypes from "prop-types";
import styles from "./element.module.css";
import { CurrencyIcon, DeleteIcon, LockIcon } from "../../../components/Icons/index";

const Element = ({
  type,
  isLocked,
  thumbnail,
  name,
  price,
  extraStyle,
}) => {
  const rootStyle = [styles[`element_${type}`]];
  extraStyle && rootStyle.push(extraStyle);

  const action = isLocked
    ? <LockIcon />
    : <DeleteIcon />

  return (
    <div
      className={rootStyle.join(' ')}
    >
      <img
        className={styles.thumbnail}
        src={thumbnail}
        alt="name"
      />
      <p
        className={styles.name}
      >
        {name}
      </p>
      <p
        className={styles.price}
      >
        {price}
        <CurrencyIcon />
      </p>
      <span
        className={styles.action}
      >
        {action}
      </span>
    </div>
  );
};

Element.propTypes = {
  type: PropTypes.string,
  isLocked: PropTypes.bool,
  thumbnail: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  extraStyle: PropTypes.string,
};

const PureElement = React.memo(Element);

export default PureElement;