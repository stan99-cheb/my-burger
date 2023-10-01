import Account from './Account/account';
import Logo from './Logo/logo';
import Navigation from './Navigation/navigation';
import styles from './header.module.css'

const Header = () => {
  return (
    <header className={styles.container}>
      <Navigation />
      <Logo extraStyle={styles.logo} />
      <Account />
    </header>
  );
}

export default Header;