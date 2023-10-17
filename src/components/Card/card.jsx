import React from 'react';
import styles from './card.module.css'
import { useDrag } from '../../hooks/use-drag'

const Card = React.memo(({ extraStyle, value, children }) => {
  const dragRef = React.useRef([]);
  const { dragging } = useDrag(dragRef, value);

  return (
    <article
      className={dragging ? `${extraStyle} ${styles.dragging}` : extraStyle}
      draggable
      ref={elem => dragRef.current.push(elem)}
    >
      {children}
    </article>
  );
})

export default Card;