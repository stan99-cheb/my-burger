import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import styles from "./categories.module.css";
import { selectors } from "../../../store/selectors";
import RenderList from "../../../components/RenderList/render-list";
import Category from "../Category/category";
import Card from "../Card/card";

const Categories = ({ extraStyle }) => {
  const tabs = useSelector(selectors.tabs.data);
  const selectedIngredientsByType = useSelector(selectors.ingredients.selectedIngredientsByType);
  const rootRef = React.useRef(null);

  const renderIngredient = React.useCallback(
    (ingredient) => (
      <li
        key={ingredient._id}
      >
        <Card
          ingredient={ingredient}
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
          type={tab.type}
          rootRef={rootRef}
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
      extraStyle={extraStyle}
      ref={rootRef}
    />
  );
};

Categories.propTypes = {
  extraStyle: PropTypes.string,
};

export default Categories;