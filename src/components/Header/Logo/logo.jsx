import logo from '../../../assets/logo.svg'

const Logo = ({ extraStyle }) => {
  return (
    <img className={extraStyle} src={logo} alt='logo' />
  );
}

export default Logo;