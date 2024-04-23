/** @format */

import { HomePage, Menu
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
    path: "/menu",
    exact: true,
    component: <Menu/>,
    main: () => <Menu />,
  }
];

export default routes;
