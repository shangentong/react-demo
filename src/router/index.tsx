// router/index.ts
import { lazy } from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'
import lazyLoad from './lazyLoad'

const Home = lazy(() => import('@/pages/Home'))
const About = lazy(() => import('@/pages/About'))
const ErrorPage = lazy(() => import('@/pages/error'))

const routes: RouteObject[] = [
  {
    path: '/',
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" replace />,
      },
      {
        path: 'home',
        element: lazyLoad(Home),
      },
      {
        path: 'about',
        element: lazyLoad(About),
      },

      // errorElement
      // {
      //   path: '/404',
      //   element: lazyLoad(ErrorPage),
      // },
      // // 未匹配，，跳转404页面
      // {
      //   path: '*',
      //   element: <Navigate to="/404" />
      // }
    ],
  },
]

const router = createBrowserRouter(routes, {
  basename: '/',
})

export default router