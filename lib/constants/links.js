export const MenuLinks = [
  {
    linkTo: "/",
    title: "home",
    activeHandler: (path) => path == "/",
  },
  {
    linkTo: "/projects",
    title: "projects",
    activeHandler: (path) => path.includes("/projects"),
  },
  {
    linkTo: "/contacts",
    title: "contacts",
    // activeHandler: (path) => path.includes("/projects"),
  },
];
