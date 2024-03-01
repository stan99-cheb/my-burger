import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import useDragAndDrop from "../../../hooks/use-drag-and-drop";
import Empty from "../Empty/empty";
import styles from "./components.module.css";
import { selectors } from "../../../store/selectors";
import PureElement from "../Element/element";
import { updateBun, updateComponents } from "../../../features/ingredients/ingredients-slice";
import DragElement from "../DragElement/drag-element";
import React from "react";
import RenderList from "../../../components/RenderList/render-list";

const Components = ({ extraStyle }) => {
  const dispatch = useDispatch();
  const bun = useSelector(selectors.ingredients.bun);
  const components = useSelector(selectors.ingredients.components);
  const cbDragCopy = (ingredient) => {
    if (ingredient.type === 'bun') {
      dispatch(updateBun(ingredient));
      return;
    }
    const swap = [...components, { ...ingredient, uuid: crypto.randomUUID() }];
    dispatch(updateComponents(swap));
  };
  const cbDragMove = React.useCallback(
    (components) => (dropIndex) => (dragIndex) => {
      if (dragIndex === dropIndex) return;
      const swap = [...components];
      [swap[dragIndex], swap[dropIndex]] = [swap[dropIndex], swap[dragIndex]];
      dispatch(updateComponents(swap));
    },
    [dispatch]
  );
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

  const renderComponents = React.useCallback(
    (ingredient, i, array) =>
      <li
        key={ingredient.uuid}
      >
        <DragElement
          icon='DragIcon'
          index={i}
          callback={cbDragMove(array)}
          extraStyle={styles.drag}
        >
          <PureElement
            thumbnail={ingredient.image}
            name={ingredient.name}
            price={ingredient.price}
            extraStyle={styles.element}
          />
        </DragElement>
      </li>,
    [cbDragMove]
  );

  if (!bun) return (<Empty extraStyle={styles.empty} />);

  return (
    <div
      className={rootStyle.join(' ')}
      onDragEnter={dragEnterHandler}
      onDragLeave={dragLeaveHandler}
      onDragOver={dragOverHandler}
      onDrop={dropHandler}
    >
      <div
        className={styles.bun}
      >
        <PureElement
          type='top'
          isLocked={true}
          thumbnail={bun.image}
          name={bun.name}
          price={bun.price}
          extraStyle={styles.element}
        />
      </div>
      {
        components.length !== 0 &&
        <RenderList
          list={components}
          callback={renderComponents}
          extraStyle={styles.components}
        />
      }
      <div
        className={styles.bun}
      >
        <PureElement
          type='bottom'
          isLocked={true}
          thumbnail={bun.image}
          name={bun.name}
          price={bun.price}
          extraStyle={styles.element}
        />
      </div>
    </div>
  );
};

Components.propTypes = {
  extraStyle: PropTypes.string,
};

export default Components;