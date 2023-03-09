export const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/team",
    name: "Team",
    component: () => import("../views/Team.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/Contact.vue"),
  },
  {
    path: "/settings",
    name: "Setting",
    component: () => import("../views/Setting.vue"),
  },
];
