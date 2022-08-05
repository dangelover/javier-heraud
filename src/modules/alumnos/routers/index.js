export default {
  name: "alumnos",
  component: () =>
    import(
      //siempre debemos importar el archivo el cual tiene el router-view y este siempre estara en los layouts
      /* webpackChunkName: "daybook" */ "@/modules/alumnos/layouts/AlumnoLayout.vue"
    ),
  children: [
    {
      path: "/myPerfilAlumno",
      name: "my-perfil",
      component: () =>
        import(
          /* webpackChunkName: "my-perfil" */ "@/modules/alumnos/pages/MyPerfilPage.vue"
        ),
    },
    {
      path: "miSalon",
      name: "mi-salon",
      component: () => import(/* */ "@/modules/alumnos/pages/MiSalonPage.vue"),
    },
    {
      path: "misCursos",
      name: "mis-cursos",
      component: () =>
        import(/* */ "@/modules/alumnos/pages/MisCursosPage.vue"),
    },
    {
      path: "cursoPage/:id",
      name: "curso-page",
      component: () =>
        import(
          /* webpackChunkName: "curso-page" */ "@/modules/alumnos/pages/CursoPage.vue"
        ),
      props: (route) => {
        return {
          id: route.params.id,
        };
      },
    },
    {
      path: "subirLibros",
      name: "subir-libros",
      component: () =>
        import(
          /* webpackChunkName: "subir-libros" */ "@/modules/alumnos/pages/ListBooksPage.vue"
        ),
    },
  ],
};
