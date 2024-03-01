import styles from "./panel-constructor.module.css";
import Components from "../Components/components";
import Order from "../Order/order";

const PanelConstructor = () => {
  return (
    <>
      <Components
        extraStyle={styles.components}
      />
      <Order
        extraStyle={styles.order}
      />
    </>
  );
}

export default PanelConstructor;