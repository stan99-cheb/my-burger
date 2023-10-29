import React from 'react';
import LockIcon from '../Icons/lock-icon'
import DeleteIcon from '../Icons/delete-icon'
import CurrencyIcon from '../Icons/currency-icon'
import styles from './constructor-element.module.css'

const ConstructorElement = React.memo(({ type, thumbnail, name, price, isLocked, deleteElmentHandler, extraStyle }) => {

  const onClick = React.useCallback(() => {
    deleteElmentHandler(name);
  }, [deleteElmentHandler, name]);

  return (
    <article
      className={type ? `${extraStyle} ${styles[type]}` : extraStyle}
    >
      <img
        className={styles.image}
        src={thumbnail}
        alt='thumbnail'
      />
      <p
        className={styles.name}
      >
        {name}
      </p>
      <p
        className={styles.price}
      >
        {price}
        <CurrencyIcon type='primary' />
      </p>
      <span
        className={!isLocked ? `${styles.icon} ${styles.cursor}` : styles.icon}
      >
        {isLocked
          ? <LockIcon type='secondary' />
          : <DeleteIcon type='primary' onClick={onClick} />
        }
      </span>
    </article>
  );
})

export default ConstructorElement;