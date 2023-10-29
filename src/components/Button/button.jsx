import React from 'react'
// import styles from './button.module.css'

const Button = React.memo(({ htmlType, extraClass, onClick, children, ...rest }) => {
  return (
    <button
      type={htmlType}
      className={extraClass}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
})

export default Button;