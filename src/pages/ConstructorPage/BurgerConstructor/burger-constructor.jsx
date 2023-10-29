import React from 'react'
import { useDrop } from '../../../hooks/use-drop'
import styles from './burger-constructor.module.css'
import BurgerComponents from './BurgerComponents/burger-components'
import BurgerInfo from './BurgerInfo/burger-info'

const getCards = (number) => {
  return [...Array(number).fill('card')].map((item, i) => ({ ingredient: item + (i + 1), uuid: crypto.randomUUID() })
  )
};

const BurgerConstructor = () => {
  const [components, updateComponents] = React.useState(getCards(10));
  const dropRef = React.useRef(null);
  const { over } = useDrop(dropRef);

  return (
    <section
      className={over ? `${styles.panel2} ${styles.over}` : styles.panel2}
      ref={dropRef}
    >
      <BurgerComponents components={components} updateComponents={updateComponents} />
      <BurgerInfo />
    </section>
  );
}

export default BurgerConstructor;