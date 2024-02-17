import React from "react";
import { useSelector } from "react-redux";
import styles from "./categories.module.css";
import { selectors } from "../../../store/selectors";
import RenderList from "../../../components/RenderList/render-list";
import Category from "../Category/category";
import Ingredient from "../Ingredient/ingredient";

const Categories = () => {
  const tabs = useSelector(selectors.tabs.data);
  const selectedIngredientsByType = useSelector(selectors.ingredients.selectedIngredientsByType);

  const renderIngredient = React.useCallback(
    (ingredient) => (
      <li
        key={ingredient._id}
        className={styles.ingredient}
      >
        <Ingredient
          image={ingredient.image}
          price={ingredient.price}
          icon='CurrencyIcon'
          name={ingredient.name}
        />
      </li>
    ),
    []
  );

  const renderCategory = React.useCallback(
    (tab) => (
      <li
        key={tab.id}
      >
        <Category
          title={tab.name}
        >
          <RenderList
            list={selectedIngredientsByType[tab.type]}
            callback={renderIngredient}
            extraStyle={styles.cards}
          />
        </Category>
      </li>
    ),
    [selectedIngredientsByType, renderIngredient]
  );

  if (!selectedIngredientsByType) return null;

  return (
    <RenderList
      list={tabs}
      callback={renderCategory}
      extraStyle={styles.categories}
    />
  );
}

export default Categories;