import React from 'react'
import styles from './burger-ingredients.module.css'
import tabs from '../../../data/tabs-data.json'
import Tabs from './Tabs/tabs'
import Categories from './Categories/categories'

const BurgerIngredients = () => {
  const [activeTab, setActiveTab] = React.useState('tab1');

  const { current: tabsRef } = React.useRef(
    tabs.reduce((acc, tab) => {
      acc[tab.name] = React.createRef();
      return acc;
    }, {})
  );

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>
        Соберите бургер
      </h1>
      <Tabs
        activeTab={activeTab}
        tabsRef={tabsRef}
      />
      <Categories
        setActiveTab={setActiveTab}
        tabsRef={tabsRef}
      />
    </section>
  );
}

export default BurgerIngredients;