import { MatxLoadable } from "matx";

const Buyers = MatxLoadable({
  loader: () => import("./buyers")
});

const Freelancers = MatxLoadable({
  loader: () => import("./freelancers")
});

const usersRoutes = [
  {
    path: "/users/freelancers",
    component: Freelancers
  },
  {
    path: "/users/buyers",
    component: Buyers
  },
];

export default usersRoutes;
