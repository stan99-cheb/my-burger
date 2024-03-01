import PropTypes from "prop-types";
import styles from "./ingredient.module.css";
import * as icons from "../../../components/Icons/index";
import useDragAndDrop from "../../../hooks/use-drag-and-drop";

const Ingredient = ({
  ingredient,
  icon,
  extraStyle
}) => {
  const Icon = icons[icon];
  const {
    dragStartHandler,
    dragEndHandler,
  } = useDragAndDrop({
    sendData: ingredient,
    type: 'copy'
  });

  return (
    <div
      className={extraStyle}
      onDragStart={dragStartHandler}
      onDragEnd={dragEndHandler}
      draggable
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
        <Icon />
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

export default Ingredient;