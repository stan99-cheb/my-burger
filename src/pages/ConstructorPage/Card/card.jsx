import PropTypes from "prop-types";
import styles from "./card.module.css";
import useModal from "../../../hooks/use-modal";
import PureIngredient from "../Ingredient/ingredient";
import Count from "../Count/count";
import Modal from "../../../components/Modal/modal";
import useDragAndDrop from "../../../hooks/use-drag-and-drop";
import Details from "../Details/details";
import React from "react";

const Card = ({ ingredient }) => {
  const { isShowing, toggle } = useModal();
  const options = React.useMemo(
    () => ({
      sendData: ingredient,
      type: 'copy',
    }),
    [ingredient]
  );
  const {
    dragStartHandler,
    dragEndHandler,
  } = useDragAndDrop(options);

  return (
    <div
      className={styles.card}
      onClick={toggle}
    >
      <PureIngredient
        ingredient={ingredient}
        extraStyle={styles.ingredient}
        draggable
        onDragStart={dragStartHandler}
        onDragEnd={dragEndHandler}
      />
      <Count
        ingredient={ingredient}
      />
      <Modal
        status={isShowing}
        toggle={toggle}
        title='Детали ингредиента'
      >
        <Details ingredient={ingredient} />
      </Modal>
    </div>
  );
};

Card.propTypes = {
  ingredient: PropTypes.object,
}

export default Card;