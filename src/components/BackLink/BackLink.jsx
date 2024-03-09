import { HiArrowLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import css from './BackLink.module.css';

export const BackLink = ({ to, children }) => {
  console.log('to', to);
  return (
    <Link to={to} className={css.link}>
      <HiArrowLeft size="24" />
      {children}
    </Link>
  );
};
