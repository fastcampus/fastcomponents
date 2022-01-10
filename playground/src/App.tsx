import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Global } from '@emotion/react';
import CustomRoutes from './shared/routes';
import globalStyle from './styles/global';

const App = () => {
  return (
    <>
      <Global styles={globalStyle} />
      <BrowserRouter>
        <CustomRoutes />
      </BrowserRouter>
    </>
  );
};

export default React.memo(App);
