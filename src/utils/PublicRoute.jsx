/** @format */

import { HomePage
} from "../pages";


import { path } from "./Constant";

const routes = [
  {
    path: path.HOME,
    exact: true,
    component: <HomePage />,
    main: () => <HomePage />,
  }
];

export default routes;
