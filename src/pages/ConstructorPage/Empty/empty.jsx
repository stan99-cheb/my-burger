import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import useDragAndDrop from "../../../hooks/use-drag-and-drop";
import styles from "./empty.module.css";
import { updateBun } from "../../../features/ingredients/ingredients-slice";

const Empty = ({ extraStyle }) => {
  const dispatch = useDispatch();
  const cbDragCopy = (ingredient) => {
    if (ingredient.type !== 'bun') {
      alert('Сначала булочку');
      return;
    }
    dispatch(
      updateBun(ingredient)
    );
  };
  const {
    activeZone,
    dragEnterHandler,
    dragLeaveHandler,
    dragOverHandler,
    dropHandler,
  } = useDragAndDrop({
    type: 'copy',
    callback: cbDragCopy,
  });

  const rootStyle = [extraStyle];
  activeZone && rootStyle.push(styles.active);

  return (
    <div
      className={rootStyle.join(' ')}
      onDragEnter={dragEnterHandler}
      onDragLeave={dragLeaveHandler}
      onDragOver={dragOverHandler}
      onDrop={dropHandler}
    >
      Перенесите сюда ингредиенты
    </div>
  );
};

Empty.propTypes = {
  extraStyle: PropTypes.string,
};

export default Empty;