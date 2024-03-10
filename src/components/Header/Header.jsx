import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import css from './Header.module.css';

const Header = () => {
  return (
    <nav className={css.nav}>
      <Link to="/" className={css.link}>
        Home
      </Link>
      <Link to="/movies" className={css.link}>
        Movies
      </Link>
    </nav>
  );
};

Header.propTypes = {
  to: PropTypes.string,
};

export default Header;
