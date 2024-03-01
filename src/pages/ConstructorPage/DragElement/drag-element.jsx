import PropTypes from "prop-types";
import styles from "./drag-element.module.css";
import * as icons from "../../../components/Icons";
import useDragAndDrop from "../../../hooks/use-drag-and-drop";

const DragElement = ({ icon, index, callback, extraStyle, children }) => {
  const Icon = icons[icon];
  const {
    dragStartHandler,
    dragEndHandler,
    dragEnterHandler,
    dragLeaveHandler,
    dragOverHandler,
    dropHandler,
  } = useDragAndDrop({
    sendData: index,
    type: 'move',
    callback: callback(index),
  });

  return (
    <div
      className={extraStyle}
      draggable
      onDragStart={dragStartHandler}
      onDragEnd={dragEndHandler}
      onDragEnter={dragEnterHandler}
      onDragLeave={dragLeaveHandler}
      onDragOver={dragOverHandler}
      onDrop={dropHandler}
    >
      <span
        className={styles.icon}
      >
        {Icon && <Icon />}
      </span>
      {children}
    </div>
  );
};

DragElement.propTypes = {
  icon: PropTypes.string,
  index: PropTypes.number,
  callback: PropTypes.func,
  extraStyle: PropTypes.string,
  children: PropTypes.element,
};

export default DragElement;