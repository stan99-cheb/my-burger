import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import styles from "./constructor-page.module.css";
import PanelIngredients from "./PanelIngredients/panel-ingredients";
import RenderList from "../../components/RenderList/render-list";
import { setIngredients } from "../../features/ingredients/ingredients-slice";

const ConstructorPage = ({ data }) => {
  const dispatch = useDispatch();

  React.useEffect(
    () => {
      dispatch(setIngredients(data));
    },
    [dispatch, data]
  );

  const panels = [
    { name: "ingredients", component: PanelIngredients, }
  ];

  const getComponent = (Component) =>
    (<Component />);

  const callback = (panel) =>
    <li
      key={panel.name}
      className={styles.panel}
    >
      {getComponent(panel.component)}
    </li>;

  return (
    <main
      className={styles.main}
    >
      <RenderList
        list={panels}
        callback={callback}
        extraStyle={styles.panels}
      />
    </main>
  );
};

ConstructorPage.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

export default ConstructorPage;