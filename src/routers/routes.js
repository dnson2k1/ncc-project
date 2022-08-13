import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Service from "../pages/Service";
import Blog from "../pages/Blog";

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
    path: "/service",
    component: Service,
  },
  {
    path: "/blog",
    component: Blog,
  },
];
