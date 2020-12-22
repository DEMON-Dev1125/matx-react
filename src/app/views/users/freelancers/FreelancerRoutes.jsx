import { MatxLoadable } from "matx";

const Freelancer = MatxLoadable({
  loader: () => import("./Freelancer"),
});

const setupRouts = [
  {
    path: "/freelancer",
    component: Freelancer,
  },
];

export default setupRouts;
