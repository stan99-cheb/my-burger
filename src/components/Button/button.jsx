// import styles from './button.module.css'

const Button = ({ htmlType, extraClass, children }) => {
  return (
    <button
      type={htmlType}
      className={extraClass}
    >
      {children}
    </button>
  );
}

export default Button;