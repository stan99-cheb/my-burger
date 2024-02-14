import PanelIngredients from "./PanelIngredients/panel-ingredients";
import RenderList from "../../components/RenderList/render-list";
import styles from "./constructor-page.module.css";

const ConstructorPage = () => {
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
}

export default ConstructorPage;