import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { selectors } from "../../../store/selectors";
import * as icons from "../../../components/Icons/index";
import styles from "./order.module.css";
import Button from "../../../components/Button/button";
import useModal from "../../../hooks/use-modal";
import Modal from "../../../components/Modal/modal";
import Info from "../Info/info";

const Order = ({ icon, extraStyle }) => {
  const bun = useSelector(selectors.ingredients.bun) || {};
  const components = useSelector(selectors.ingredients.components) || [];
  const price = bun.price * 2 + components.reduce((acc, ingredient) => acc + ingredient.price, 0) || 0;
  const Icon = icons[icon];
  const { isShowing, toggle } = useModal();

  return (
    <div
      className={extraStyle}
    >
      <span
        className={styles.price}
      >
        {price}
        {Icon && <Icon />}
      </span>
      <Button
        htmlType='button'
        type='primary'
        size='medium'
        state={price === 0 ? 'disabled' : 'default'}
        onClick={toggle}
      >
        Оформить заказ
      </Button>
      <Modal
        status={isShowing}
        toggle={toggle}
        title='Детали заказа'
      >
        <Info />
      </Modal>
    </div>
  );
};

Order.propTypes = {
  icon: PropTypes.string,
  extraStyle: PropTypes.string,
};

export default Order;