import React from 'react'
import { useDrop } from '../../../hooks/use-drop'
import styles from './burger-constructor.module.css'
import BurgerComponents from './BurgerComponents/burger-components'
import BurgerInfo from './BurgerInfo/burger-info'

const BurgerConstructor = () => {
  const dropRef = React.useRef(null);
  const { over, cards } = useDrop(dropRef);

  return (
    <section
      className={over ? `${styles.container} ${styles.over}` : styles.container}
      ref={dropRef}
    >
      <BurgerComponents cards={cards} />
      <BurgerInfo />
    </section>
  );
}

export default BurgerConstructor;