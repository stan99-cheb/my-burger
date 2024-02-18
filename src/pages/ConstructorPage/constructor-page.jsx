import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import styles from "./constructor-page.module.css";
import PanelIngredients from "./PanelIngredients/panel-ingredients";
import PanelConstructor from "./PanelConstructor/panel-constructor";
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
    { name: "ingredients", component: PanelIngredients, },
    { name: "constructor", component: PanelConstructor, }
  ];

  const getComponent = (Component) =>
    (<Component />);

  const callback = (panel) =>
    <li
      key={panel.name.toString()}
      className={styles.panel}
    >
      {getComponent(panel.component)}
    </li>;

  return (
    <RenderList
      list={panels}
      callback={callback}
      extraStyle={styles.panels}
    />
  );
};

ConstructorPage.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

export default ConstructorPage;