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

export const routes: RouteObject[] = [
  {
    path: '/home',
    element: <HomeLayout />,
    children: [
      {
        path: 'course',
        element: <div>코스정보 입니다.</div>,
      },
      {
        path: 'lecture',
        element: <div>강의정보 입니다.</div>,
      },
      {
        path: 'exam',
        element: <div>시험정보 입니다.</div>,
      },
    ],
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

const CustomRoutes = () => {
  return useRoutes(routes);
};

export default CustomRoutes;
