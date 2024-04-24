/** @format */

import {
  HomePage,
  Menu,
  News,
  Franchising,
  Careers,
  NewsDetail,
} from "../pages";

import { path } from "./Constant";

const routes = [
  {
    path: path.HOME,
    exact: true,
    component: <HomePage />,
    main: () => <HomePage />,
  },
  {
    path: path.NEWS,
    exact: true,
    component: <News />,
    main: () => <News />,
  },
  {
    path: `${path.NEWS_DETAIL}/:code`,
    exact: true,
    component: <NewsDetail />,
    main: () => <NewsDetail />,
  },
  {
    path: "/menu",
    exact: true,
    component: <Menu />,
    main: () => <Menu />,
  },

  {
    path: path.FRANCHISING,
    exact: true,
    component: <Franchising />,
    main: () => <Franchising />,
  },
  {
    path: path.CAREERS,
    exact: true,
    component: <Careers />,
    main: () => <Careers />,
  },
];

export default routes;
