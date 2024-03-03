import { tabActive, tabsData } from "../features/tabs/tabs-selectors";
import {
  selectedIngredientsByType,
  ingredientsData,
  ingredientsStatus,
  ingredientsBun,
  ingredientsComponents,
  ingredientsCount,
} from "../features/ingredients/ingredients-selectors"

export const selectors = {
  tabs: {
    data: tabsData,
    active: tabActive,
  },
  ingredients: {
    data: ingredientsData,
    status: ingredientsStatus,
    selectedIngredientsByType: selectedIngredientsByType,
    bun: ingredientsBun,
    components: ingredientsComponents,
    count: ingredientsCount,
  },
};