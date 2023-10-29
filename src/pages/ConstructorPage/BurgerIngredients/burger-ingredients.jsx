import React from 'react'
import styles from './burger-ingredients.module.css'
import tabs from '../../../data/tabs-data.json'
import Tabs from './Tabs/tabs'
import Categories from './Categories/categories'

const BurgerIngredients = ({ ingredients = [] }) => {
  const { current: categories } = React.useRef(tabs.reduce((acc, tab) =>
    [...acc, { tab, ingredients: ingredients.filter(ingredient => ingredient.type === tab.type) }], []
  ));
  const [activeTab, setActiveTab] = React.useState(tabs[0].type);

  const { current: tabsRef } = React.useRef(
    tabs.reduce((acc, tab) => {
      acc[tab.type] = React.createRef();
      return acc;
    }, {})
  );

  return (
    <section className={styles.panel1}>
      <h1 className={styles.title}>
        Соберите бургер
      </h1>
      <Tabs
        activeTab={activeTab}
        tabs={tabs}
        tabsRef={tabsRef}
      />
      <Categories
        setActiveTab={setActiveTab}
        categories={categories}
        tabsRef={tabsRef}
      />
    </section>
  );
}

export default BurgerIngredients;