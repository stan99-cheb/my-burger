import PropTypes from "prop-types";
import styles from "./count.module.css";
import useParamSelector from "../../../hooks/use-param-selector";
import { selectors } from "../../../store/selectors";

const Count = ({ ingredient }) => {
  const count = useParamSelector(selectors.ingredients.count, ingredient);

  if (count < 1) return null;

  return (
    <div
      className={styles.count}
    >
      {count}
    </div>
  );
};

Count.propTypes = {
  ingredient: PropTypes.object,
};

export default Count;