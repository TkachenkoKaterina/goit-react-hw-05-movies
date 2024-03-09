import { Link } from 'react-router-dom';
import css from './Header.module.css';

const Header = () => {
  return (
    <nav className={css.nav}>
      Rfvjy
      <Link to="/" className={css.link}>
        Home
      </Link>
      <Link to="/movies" className={css.link}>
        Movies
      </Link>
    </nav>
  );
};

export default Header;
