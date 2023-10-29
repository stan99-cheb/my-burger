import React from 'react'
import styles from './burger-info.module.css'
import CurrencyIcon from '../../../../components/Icons/currency-icon'
import Button from '../../../../components/Button/button'

const BurgerInfo = () => {
  const price = '1000';

  const onClick = React.useCallback(f => f, []);

  return (
    <section className={styles.info}>
      <p
        className={styles.price}
      >
        {price}
        <CurrencyIcon type='primary' />
      </p>
      <Button
        htmlType='button'
        extraClass={styles.button}
        onClick={onClick}
      >
        Оформить заказ
      </Button>
    </section>
  );
}

export default BurgerInfo;