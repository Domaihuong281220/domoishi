/** @format */

import { HomePage, News } from "../pages";

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
];

export default routes;
