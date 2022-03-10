import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { Global } from '@emotion/react';
import CustomRoutes, { routes } from './shared/routes';
import globalStyle from './styles/global';
import { css } from '@emotion/react';

const App = () => {
  return (
    <>
      <Global styles={globalStyle} />
      <BrowserRouter>
        {routes.map((route) => {
          return (
            <Link
              key={route.path}
              css={css`
                font-size: 3rem;
                padding: 3rem;
              `}
              to={route.path || '/'}
            >
              {route.path}
            </Link>
          );
        })}
        <CustomRoutes />
      </BrowserRouter>
    </>
  );
};

export default React.memo(App);
