// import styles from './button.module.css'

const Button = ({ htmlType, extraClass, onClick, children }) => {
  return (
    <button
      type={htmlType}
      className={extraClass}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;