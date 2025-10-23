export const parentRoutes = [
  {
    path: "child-a",
    loadChildren: () => import('./components/child-a/child-a-routes')
      .then((m) => m.childARoutes)
  },
  {
    path: "child-b",
    loadChildren: () => import('./components/child-b/child-b-routes')
      .then((m) => m.childBRoutes)
  },
];
