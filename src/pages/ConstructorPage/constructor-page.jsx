// import BurgerConstructor from './BurgerConstructor/burger-constructor';
import BurgerIngredients from './BurgerIngredients/burger-ingredients';
import styles from './constructor-page.module.css'

const ConstructorPage = () => {
  return (
    <main className={styles.main}>
      <BurgerIngredients />
      {/* <BurgerConstructor /> */}
    </main>
  );
}

export default ConstructorPage;