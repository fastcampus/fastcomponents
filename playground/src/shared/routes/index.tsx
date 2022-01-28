// export const routes = [
//   {
//     path: '/account',
//     name: 'account',
//     component: AuthLayout,
//     meta: { isPrivateRoute: false },
//   //   children: [
//   //     {
//   //       path: '/account/sign-in',
//   //       name: 'sign-in',
//   //       component: SignIn,
//   //     },
//   //     {
//   //       path: '/account/find-password',
//   //       name: 'find-password',
//   //       component: FindPassword,
//   //     },
//   //     {
//   //       path: '/account/reset-password',
//   //       name: 'reset-password',
//   //       component: ResetPassword,
//   //     },
//   //   ],
//   // },
// ];
import React from 'react';
import type { RouteObject } from 'react-router-dom';
import { useRoutes } from 'react-router-dom';
import HomeLayout from '../../views/home/layout';
import PaginationLayout from '../../views/pagination/layout';
import CodeEditorLayout from '../../views/code-editor/layout';

const CustomRoutes = () => {
  const routes: RouteObject[] = [
    {
      path: '/home',
      element: <HomeLayout />,
    },
    {
      path: '/pagination',
      element: <PaginationLayout />,
    },
    {
      path: '/code-editor',
      element: <CodeEditorLayout />,
    },
  ];
  return useRoutes(routes);
};

export default CustomRoutes;
