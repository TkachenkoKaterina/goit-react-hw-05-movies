import React from 'react';
import BackLink from 'components/BackLink/BackLink';
import { useLocation } from 'react-router-dom';
import css from './Page404.module.css';

const Page404 = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  return (
    <>
      <main className={css.main}>
        <div className={css.div}>
          <p className={css.p}>404</p>
          <h1 className={css.h1}>Page not found</h1>
          <p>Sorry, we couldn’t find the page you’re looking for.</p>
          <BackLink to={backLinkHref}>Back to Main Page</BackLink>
        </div>
      </main>
    </>
  );
};

export default Page404;
