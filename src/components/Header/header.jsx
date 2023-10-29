import Account from './Account/account';
import Logo from './Logo/logo';
import Navigation from './Navigation/navigation';
import styles from './header.module.css'

const Header = ({ extraStyle }) => {
  return (
    <header
      className={`${extraStyle} ${styles.container}`}
    >
      <Navigation />
      <Logo extraStyle={styles.logo} />
      <Account />
    </header>
  );
}

export default Header;