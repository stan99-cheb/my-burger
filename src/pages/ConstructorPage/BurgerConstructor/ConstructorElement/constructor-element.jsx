import React from 'react';
import LockIcon from '../../../../components/Icons/lock-icon'
import DeleteIcon from '../../../../components/Icons/delete-icon'
import styles from './constructor-element.module.css'
import CurrencyIcon from '../../../../components/Icons/currency-icon';

const ConstructorElement = React.memo(({ type, thumbnail, name, price, isLocked, onClick }) => {

  // React.useEffect(() => {
  //   console.log('Render ConstructorElement');
  // });

  return (
    <article
      className={type ? `${styles.element} ${styles[type]}` : styles.element}
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
      {console.log('Render ConstructorElement')}
    </article>
  );
})

export default ConstructorElement;