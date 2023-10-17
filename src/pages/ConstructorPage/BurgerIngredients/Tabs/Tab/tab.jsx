import Button from "../../../../../components/Button/button"
import styles from './tab.module.css'
import React from "react"

const Tab = React.memo(({ name, buttonClickHandler }) => {

  const onClick = React.useCallback(() => (
    buttonClickHandler(name)
  ), [buttonClickHandler, name]);

  return (
    <Button
      htmlType='button'
      extraClass={styles.button}
      onClick={onClick}
    >
      {name}
    </Button>
  );
})

export default Tab;