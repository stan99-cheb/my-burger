import styles from './root-layout.module.css'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Header/header'

const RootLayout = () => {
  return (
    <>
      <Header extraStyle={styles.header} />
      <Outlet />
    </>
  );
}

export default RootLayout;