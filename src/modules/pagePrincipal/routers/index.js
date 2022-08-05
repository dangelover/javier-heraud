export default {
  name: "principal",
  component: () =>
    import(
      //siempre debemos importar el archivo el cual tiene el router-view y este siempre estara en los layouts
      /* webpackChunkName: "daybook" */ "@/modules/pagePrincipal/layouts/HomeLayouts.vue"
    ),
  children: [
    {
      path: "/principalPage",
      name: "principal-page",
      component: () =>
        import(
          /* webpackChunkName: "principal-page" */ "@/modules/pagePrincipal/pages/PrincipalPage.vue"
        ),
    },
    {
      path: "/listaDocente",
      name: "docentes-page",
      component: () =>
        import(
          /* webpackChunkName: "docentes-page" */ "@/modules/pagePrincipal/pages/ListaDocentesPage.vue"
        ),
    },
    {
      path: "/Nosotros",
      name: "nosotros-page",
      component: () =>
        import(
          /* webpackChunkName: "nosotros-page" */ "@/modules/pagePrincipal/pages/NosotrosPage.vue"
        ),
    },
    {
      path: "/Alumnos",
      name: "students-page",
      component: () =>
        import(
          /* webpackChunkName: "alumnos-page" */ "@/modules/pagePrincipal/pages/AlumnosPage.vue"
        ),
    },
    {
      path: "/Activitys",
      name: "activity-page",
      component: () =>
        import(
          /* webpackChunkName: "alumnos-page" */ "@/modules/pagePrincipal/pages/ActivityListPage.vue"
        ),
    },
    {
      path: "",
      redirect: {
        name: "principal-page",
      },
    },
  ],
};
