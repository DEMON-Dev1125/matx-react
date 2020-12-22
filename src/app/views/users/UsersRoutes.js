import { MatxLoadable } from "matx";

const Buyers = MatxLoadable({
  loader: () => import("./buyers")
});

const Freelancers = MatxLoadable({
  loader: () => import("./freelancers")
});

const Detail = MatxLoadable({
  loader: () => import("./freelancers/Freelancer")
});

const usersRoutes = [
  {
    path: "/users/freelancers/:id",
    component: Detail
  },
  {
    path: "/users/freelancers",
    component: Freelancers,
  },
  {
    path: "/users/buyers",
    component: Buyers
  },
];

export default usersRoutes;
