import styles from "./panel-ingredients.module.css";
import Categories from "../Categories/categories";
import Tabs from "../Tabs/tabs";

const PanelIngredients = () => {
  return (
    <>
      <Tabs
        extraStyle={styles.tabs}
      />
      <Categories
        extraStyle={styles.categories}
      />
    </>
  );
}

export default PanelIngredients;