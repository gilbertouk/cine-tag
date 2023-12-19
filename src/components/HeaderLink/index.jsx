import styles from './HeaderLink.module.css';
import { Link } from 'react-router-dom';

const HeaderLink = ({ path, children }) => {
  return (
    <Link to={path} className={styles.link}>
      {children}
    </Link>
  );
};

export default HeaderLink;
