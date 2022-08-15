import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Service from "../pages/Service";
import Blog from "../pages/Blog";
import New from "../pages/New";

export const publicRouter = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/contact",
    component: Contact,
  },
  {
    path: "/new",
    component: New,
  },
  {
    path: "/services",
    component: Service,
  },
  {
    path: "/blog",
    component: Blog,
  },
];
