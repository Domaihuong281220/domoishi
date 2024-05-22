/** @format */
import {
  LoginPage,
  CategoriesEdit,
  CategoriesAdd,
  CategoriesManage,
  ProductAdd,
  ProductEdit,
  ProductView,
  ProductManage,

  // Contents
  ManageContents,
  CreateContent,
  EditContent,

  // Events
  ManageEvents,
  CreateEvent,
  EditEvent,

  // Jobs
  ManageJobs,
  CreateJob,
  EditJob,
  ImageUpload,

  //metatag
  MetaTag,
  ManageUser,
  UserAdd,
  UserEdit,
  UserView,
  LocationManage,
  CreateLocation,
  EditLocation,
  LocationFrame,
  EditLocationFrame,
} from "../pages";
import { path } from "./Constant";
export const allowedRoles = ["admin"];

const routes = [
  {
    path: path.LOGIN,
    exact: true,
    component: <LoginPage />,
    main: () => <LoginPage />,
    // role: ["user"],
  },
  // manage product
  {
    path: path.UPLOADIMAGE,
    exact: true,
    component: <ImageUpload />,
    main: () => <ImageUpload />,
    role: ["admin"],
  },
  {
    path: path.PRODUCTMANAGE,
    exact: true,
    component: <ProductManage />,
    main: () => <ProductManage />,
    role: ["admin"],
  },
  {
    path: path.PRODUCTADD,
    exact: true,
    component: <ProductAdd />,
    main: () => <ProductAdd />,
    role: ["admin"],
  },
  {
    path: `${path.PRODUCTEDIT}/:id`,
    exact: true,
    component: <ProductEdit />,
    main: () => <ProductEdit />,
    role: ["admin"],
  },
  {
    path: `${path.PRODUCTVIEW}/:id`,
    exact: true,
    component: <ProductView />,
    main: () => <ProductView />,
    role: ["admin"],
  },

  // Categories
  {
    path: path.CATEGORYMANAGE,
    exact: true,
    component: <CategoriesManage />,
    main: () => <CategoriesManage />,
    role: ["admin"],
  },
  {
    path: `${path.CATEGORYEDIT}/:id`,
    exact: true,
    component: <CategoriesEdit />,
    main: () => <CategoriesEdit />,
    role: ["admin"],
  },
  {
    path: path.CATEGORYADD,
    exact: true,
    component: <CategoriesAdd />,
    main: () => <CategoriesAdd />,
    role: ["admin"],
  },

  // Content
  {
    path: path.CONTENTMANAGE,
    exact: true,
    component: <ManageContents />,
    main: () => <ManageContents />,
    role: ["admin"],
  },
  {
    path: `${path.CONTENTEDIT}/:id`,
    exact: true,
    component: <EditContent />,
    main: () => <EditContent />,
    role: ["admin"],
  },
  {
    path: path.CONTENTCREATE,
    exact: true,
    component: <CreateContent />,
    main: () => <CreateContent />,
    role: ["admin"],
  },

  // Event
  {
    path: path.EVENTMANAGE,
    exact: true,
    component: <ManageEvents />,
    main: () => <ManageEvents />,
    role: ["admin"],
  },
  {
    path: `${path.EVENTEDIT}/:id`,
    exact: true,
    component: <EditEvent />,
    main: () => <EditEvent />,
    role: ["admin"],
  },
  {
    path: path.EVENTCREATE,
    exact: true,
    component: <CreateEvent />,
    main: () => <CreateEvent />,
    role: ["admin"],
  },

  // Content
  {
    path: path.JOBMANAGE,
    exact: true,
    component: <ManageJobs />,
    main: () => <ManageJobs />,
    role: ["admin"],
  },
  {
    path: `${path.JOBEDIT}/:id`,
    exact: true,
    component: <EditJob />,
    main: () => <EditJob />,
    role: ["admin"],
  },
  {
    path: path.JOBCREATE,
    exact: true,
    component: <CreateJob />,
    main: () => <CreateJob />,
    role: ["admin"],
  },
  {
    path: path.METATAG,
    exact: true,
    component: <MetaTag />,
    main: () => <MetaTag />,
    role: ["admin"],
  },

  {
    path: path.USERMANAGE,
    exact: true,
    component: <ManageUser />,
    main: () => <ManageUser />,
    role: ["admin"],
  },

  {
    path: path.CREATEUSER,
    exact: true,
    component: <UserAdd />,
    main: () => <UserAdd />,
    role: ["admin"],
  },
  {
    path: path.EDITUSER,
    exact: true,
    component: <UserEdit />,
    main: () => <UserEdit />,
    role: ["admin"],
  },

  {
    path: path.USERVIEW,
    exact: true,
    component: <UserView />,
    main: () => <UserView />,
    role: ["admin"],
  },
  {
    path: path.LOCATIONMANAGE,
    exact: true,
    component: <LocationManage />,
    main: () => <LocationManage />,
    role: ["admin"],
  },
  {
    path: path.CREATELOCATION,
    exact: true,
    component: <CreateLocation />,
    main: () => <CreateLocation />,
    role: ["admin"],
  },
  {
    path: path.EDITLOCATION,
    exact: true,
    component: <EditLocation />,
    main: () => <EditLocation />,
    role: ["admin"],
  },
  {
    path: path.LOCATIONFRAME,
    exact: true,
    component: <LocationFrame />,
    main: () => <LocationFrame />,
    role: ["admin"],
  },
  {
    path: path.EDITLOCATIONFRAME,
    exact: true,
    component: <EditLocationFrame />,
    main: () => <EditLocationFrame />,
    role: ["admin"],
  },
];

export default routes;
