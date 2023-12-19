import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import logo from './logo.png';
import HeaderLink from '../HeaderLink';

const Header = () => {
  return (
    <header className={styles.header__container}>
      <Link to={'/'}>
        <img src={logo} alt="Cine Tag logo" />
      </Link>
      <nav>
        <HeaderLink path={'/'}>Home</HeaderLink>
        <HeaderLink path={'/favoritos'}>Favoritos</HeaderLink>
      </nav>
    </header>
  );
};

export default Header;
