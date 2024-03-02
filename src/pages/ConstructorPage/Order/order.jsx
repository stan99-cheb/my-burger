import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { selectors } from "../../../store/selectors";
import * as icons from "../../../components/Icons/index";
import styles from "./order.module.css";
import Button from "../../../components/Button/button";

const Order = ({ icon, extraStyle }) => {
  const bun = useSelector(selectors.ingredients.bun) || {};
  const components = useSelector(selectors.ingredients.components) || [];
  const price = bun.price * 2 + components.reduce((acc, ingredient) => acc + ingredient.price, 0) || 0;
  const Icon = icons[icon] || null;

  return (
    <div
      className={extraStyle}
    >
      <span
        className={styles.price}
      >
        {price}
        <Icon />
      </span>
      <Button
        htmlType='button'
        type='primary'
        size='medium'
        state={price === 0 ? 'disabled' : 'default'}
        disabled={true}
      >
        Оформить заказ
      </Button>
    </div>
  );
};

Order.propTypes = {
  icon: PropTypes.string,
  extraStyle: PropTypes.string,
};

export default Order;