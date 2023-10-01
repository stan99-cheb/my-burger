import Button from '../../Button/button';
import BurgerIcon from '../../Icons/burger-icon';
import ViewListIcon from '../../Icons/view-list-icon';
import styles from './navigation.module.css'

const Navigation = () => {
  return (
    <section className={styles.container}>
      <Button
        htmlType='button'
        extraClass={styles.button}
      >
        <BurgerIcon type='secondary' />
        Конструктор
      </Button>
      <Button
        htmlType='button'
        extraClass={styles.button}
      >
        <ViewListIcon type='secondary' />
        Лента заказов
      </Button>
    </section>
  );
}

export default Navigation;