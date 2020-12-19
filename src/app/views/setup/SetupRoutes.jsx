import { MatxLoadable } from "matx";

const Setup = MatxLoadable({
  loader: () => import("./Setup"),
});

const setupCom = MatxLoadable({
  loader: () => import("./setupCom"),
});

const tab = MatxLoadable({
  loader: () => import("./tab"),
});

const setupRouts = [
  {
    path: "/freelancer/setup",
    component: Setup,
  },
  {
    path: "/freelancer/setupCom",
    component: setupCom,
  },
  {
    path: "/freelancer/tab",
    component: tab,
  },
];

export default setupRouts;
