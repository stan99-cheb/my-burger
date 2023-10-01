import Button from '../../Button/button'
import ProfileIcon from '../../Icons/profile-icon'
import styles from './account.module.css'

const Account = () => {
  return (
    <Button
      htmlType='button'
      extraClass={styles.button}
    >
      <ProfileIcon type='secondary' />
      Личный кабинет
    </Button>
  );
}

export default Account;