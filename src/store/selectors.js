import { tabActive, tabsData } from "../features/tabs/tabs-selectors";
import { selectedIngredientsByType, ingredientsData, ingredientsStatus } from "../features/ingredients/ingredients-selectors"

export const selectors = {
  tabs: {
    data: tabsData,
    active: tabActive,
  },
  ingredients: {
    data: ingredientsData,
    status: ingredientsStatus,
    selectedIngredientsByType: selectedIngredientsByType,
  },
};