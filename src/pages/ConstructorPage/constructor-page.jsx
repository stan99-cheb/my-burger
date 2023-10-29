// import BurgerConstructor from './BurgerConstructor/burger-constructor';
import BurgerIngredients from './BurgerIngredients/burger-ingredients';
import ingredients from '../../data/ingredients-data.json'
import styles from './constructor-page.module.css'

const ConstructorPage = () => {
  return (
    <main
      className={styles.main}
    >
      <BurgerIngredients ingredients={ingredients} />
      {/* <BurgerConstructor /> */}
    </main>
  );
}

export default ConstructorPage;