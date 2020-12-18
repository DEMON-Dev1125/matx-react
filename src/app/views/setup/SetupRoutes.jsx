import { MatxLoadable } from "matx";

const Setup = MatxLoadable({
  loader: () => import("./Setup"),
});

const setupRouts = [
  {
    path: "/freelancer/setup",
    component: Setup,
  },
];

export default setupRouts;
