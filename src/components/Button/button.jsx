import PropTypes from "prop-types";
import styles from "./button.module.css";

const Button = ({
  htmlType,
  type,
  size,
  state,
  onClick,
  children
}) => {
  const rootStyle = [
    styles.button,
    styles[`button_type_${type}`],
    styles[`button_size_${size}`],
    styles[`button_state_${state}`],
  ];

  return (
    <button
      className={rootStyle.join(' ')}
      type={htmlType}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  htmlType: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.string,
  state: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.string,
};

export default Button;