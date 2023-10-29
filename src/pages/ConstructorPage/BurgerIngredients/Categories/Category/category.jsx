import React from 'react'
import RenderList from '../../../../../components/RenderList/render-list'
import styles from './category.module.css'
import DragElement from '../../../../../components/DragElement/drag-element';
import Ingredient from './Ingredient/ingredient';

const _Category = React.forwardRef(({ tab, ingredients }, ref) => {

  const callback = React.useCallback((ingredient, i) => (
    <li
      key={i}
    >
      <DragElement
        drag={true}
        extraStyle={styles.drag}
        value={ingredient._id}
      >
        <Ingredient
          extraStyle={styles.ingredient}
          ingredient={ingredient}
        />
      </DragElement>
    </li>
  ), [])

  return (
    <>
      <h2
        className={styles.name}
        data-type={tab.type}
        ref={ref}
      >
        {tab.value}
      </h2>
      <RenderList
        list={ingredients}
        extraStyle={styles.cards}
        callback={callback}
      />
    </>
  );
})

const Category = React.memo(_Category);

export default Category;