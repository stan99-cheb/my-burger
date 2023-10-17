import React from 'react'
import RenderList from '../../../../../components/RenderList/render-list'
import styles from './category.module.css'
import Card from '../../../../../components/Card/card';

const _Category = React.forwardRef(({ name, cards }, ref) => {

  const callback = React.useCallback((card, i) => (
    <li
      key={i}
    >
      <Card
        extraStyle={styles.card}
        value={card}
      >
        {card}
      </Card>
    </li>
  ), [])

  return (
    <>
      <h2
        className={styles.categoryName}
        data-value={name}
        ref={ref}
      >
        {name}
      </h2>
      <RenderList
        list={cards}
        extraStyle={styles.cards}
        callback={callback}
      />
    </>
  );
})

const Category = React.memo(_Category);

export default Category;