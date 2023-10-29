import styles from './ingredient.module.css'
import CurrencyIcon from '../../../../../../components/Icons/currency-icon'

const Ingredient = ({ extraStyle, ingredient }) => {
  return (
    <div
      className={extraStyle}
    >
      <img
        className={styles.img}
        src={ingredient.image}
        alt="illustration"
      />
      <p
        className={styles.price}
      >
        {ingredient.price}
        <CurrencyIcon type='primary' />
      </p>
      <p
        className={styles.name}
      >
        {ingredient.name}
      </p>
    </div>
  );
}

export default Ingredient;