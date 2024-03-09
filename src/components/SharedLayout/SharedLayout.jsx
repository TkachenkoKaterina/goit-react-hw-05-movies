import Header from 'components/Header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';

export const SharedLayout = () => {
  return (
    <div>
      <Header />
      <div className={css.container}>
        <Suspense fallback={<div>Loading ...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};
export default SharedLayout;
