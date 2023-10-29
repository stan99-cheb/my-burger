import React from 'react'
import styles from './burger-components.module.css'
import DragElement from '../../../../components/DragElement/drag-element'
import RenderList from '../../../../components/RenderList/render-list'
import ConstructorElement from '../../../../components/ConstructorElement/constructor-element'
import bunImage from '../../../../assets/bun-02.svg'
import DragIcon from '../../../../components/Icons/drag-icon'

const BurgerComponents = ({ components, updateComponents }) => {
  const bun = components.find(item => (item.ingredient === 'card1') || (item.ingredient === 'card2'));
  const array = components.filter(item => (item.ingredient !== 'card1') && (item.ingredient !== 'card2'));

  const deleteElmentHandler = React.useCallback((card) => {
    updateComponents(prev => prev.filter(item => item.ingredient !== card));
  }, [updateComponents]);

  const callback = React.useCallback((item) => (
    <li
      key={item.uuid}
    >
      <DragElement
        drag={true}
        extraStyle={styles.drag}
      >
        <span
          className={styles.icon}
        >
          <DragIcon type='primary' />
        </span>
        <ConstructorElement
          name={item.ingredient}
          price='1000'
          deleteElmentHandler={deleteElmentHandler}
          extraStyle={styles.element}
        />
      </DragElement>
    </li>
  ), [deleteElmentHandler]);

  if (!bun) return;

  return (
    <section className={styles.components}>
      <ConstructorElement
        type='top'
        thumbnail={bunImage}
        name={bun.ingredient}
        price='100'
        isLocked='true'
        extraStyle={`${styles.element} ${styles.bunTop}`}
      />
      <RenderList
        list={array}
        extraStyle={styles.dragComponents}
        callback={callback}
      />
      <ConstructorElement
        type='bottom'
        thumbnail={bunImage}
        name={bun.ingredient}
        price='100'
        isLocked='true'
        extraStyle={`${styles.element} ${styles.bunBottom}`}
      />
    </section>
  );
}

export default BurgerComponents;