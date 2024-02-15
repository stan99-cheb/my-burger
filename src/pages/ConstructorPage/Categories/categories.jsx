import { useSelector } from "react-redux";
import styles from "./categories.module.css";
import { selectors } from "../../../store/selectors";
import RenderList from "../../../components/RenderList/render-list";
import Category from "../Category/category";

const Categories = () => {
  const tabs = useSelector(selectors.tabs.data);

  const renderCategory = (tab) =>
    <li
      key={tab.id}
    >
      <Category
        title={tab.name}
      >
        Карточки ингредиентов
      </Category>
    </li>;

  return (
    <RenderList
      list={tabs}
      callback={renderCategory}
      extraStyle={styles.categories}
    />
  );
}

export default Categories;