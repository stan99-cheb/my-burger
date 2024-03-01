import PropTypes from "prop-types";
// import styles from "./order.module.css";

const Order = ({ extraStyle }) => {
  return (
    <div
      className={extraStyle}
    >
      Order
    </div>
  );
};

Order.propTypes = {
  extraStyle: PropTypes.string,
};

export default Order;