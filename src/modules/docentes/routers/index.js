export default {
  name: "docentes",
  component: () =>
    import(
      //siempre debemos importar el archivo el cual tiene el router-view y este siempre estara en los layouts
      /* webpackChunkName: "daybook" */ "@/modules/docentes/layouts/DocenteLayout.vue"
    ),
  children: [
    {
      path: "/myPerfilDocente",
      name: "my-perfil-docente",
      component: () =>
        import(
          /* webpackChunkName: "my-perfil" */ "@/modules/docentes/pages/MyPerfilPage.vue"
        ),
    },
    {
      path: "misAlumnos",
      name: "mis-alumnos",
      component: () =>
        import(
          /* webpackChunkName: "mis-alumnos" */ "@/modules/docentes/pages/AlumnosPage.vue"
        ),
    },
    {
      path: "misCursos",
      name: "mis-cursos-docente",
      component: () =>
        import(
          /* webpackChunkName: "mis-cursos-docente" */ "@/modules/docentes/pages/MisCursosPage.vue"
        ),
    },
    {
      path: "actualizarMiPerfil",
      name: "actualizar-perfil-docente",
      component: () =>
        import(
          /* webpackChunkName: "actualizar-perfil-docente" */ "@/modules/docentes/pages/UpdateDocente.vue"
        ),
    },

    {
      path: "subirLibros",
      name: "libros-docentes",
      component: () =>
        import(
          /* webpackChunkName: "subir-libros" */ "@/modules/docentes/pages/ListBooksPage.vue"
        ),
    },
    {
      path: "subirDocumentos",
      name: "mis-documentos",
      component: () =>
        import(
          /* webpackChunkName: "mis-documentos" */ "@/modules/docentes/pages/ListDocumentsPage.vue"
        ),
    },
    {
      path: "crearDocumentos",
      name: "created-document",
      component: () =>
        import(
          /* webpackChunkName: "create-document" */ "@/modules/docentes/pages/CreateDocumentsPage.vue"
        ),
    },
    {
      path: "editDocument/:id",
      name: "edit-document",
      component: () =>
        import(
          /* webpackChunkName: "edit-document" */ "@/modules/docentes/pages/EditDocumentPage.vue"
        ),
      props: (route) => {
        return {
          id: route.params.id,
        };
      },
    },
    {
      path: "crearAlumno",
      name: "create-alumno",
      component: () =>
        import(
          /* webpackChunkName: "create-alumno" */ "@/modules/docentes/pages/CreateAlumnoPage.vue"
        ),
    },
    {
      path: "verAlumno/:id",
      name: "ver-alumno",
      component: () =>
        import(
          /* webpackChunkName: "ver-alumno" */ "@/modules/docentes/pages/OneAlumnoPage.vue"
        ),
      props: (route) => {
        return {
          id: route.params.id,
        };
      },
    },
    {
      path: "editarAlumno/:id",
      name: "editar-alumno",
      component: () =>
        import(
          /* webpackChunkName: "editar-alumno" */ "@/modules/docentes/pages/EditAlumnoPage.vue"
        ),
      props: (route) => {
        return {
          id: route.params.id,
        };
      },
    },
    {
      path: "cursoPage/:id",
      name: "curso-page-docente",
      component: () =>
        import(
          /* webpackChunkName: "curso-page" */ "@/modules/docentes/pages/CursoPage.vue"
        ),
      props: (route) => {
        return {
          id: route.params.id,
        };
      },
    },
    {
      path: "createWeek/:id",
      name: "create-week",
      component: () =>
        import(
          /* webpackChunkName: "create-week" */ "@/modules/docentes/pages/CreateWeek.vue"
        ),
      props: (route) => {
        return {
          id: route.params.id,
        };
      },
    },
    {
      path: "createTheme",
      name: "create-theme",
      component: () =>
        import(
          /* webpackChunkName: "create-theme" */ "@/modules/docentes/pages/CreateTheme.vue"
        ),
    },
    {
      path: "editTheme/:id",
      name: "edit-theme",
      component: () =>
        import(
          /* webpackChunkName: "create-book" */ "@/modules/docentes/pages/EditThemePage.vue"
        ),
      props: (route) => {
        return {
          id: route.params.id,
        };
      },
    },
    {
      path: "createBook",
      name: "create-book",
      component: () =>
        import(
          /* webpackChunkName: "create-book" */ "@/modules/docentes/pages/CreateBook.vue"
        ),
    },
    {
      path: "editBook/:id",
      name: "edit-book",
      component: () =>
        import(
          /* webpackChunkName: "create-book" */ "@/modules/docentes/pages/EditBookPage.vue"
        ),
      props: (route) => {
        return {
          id: route.params.id,
        };
      },
    },
    {
      path: "createWork",
      name: "create-work",
      component: () =>
        import(
          /* webpackChunkName: "create-work" */ "@/modules/docentes/pages/CreateWork.vue"
        ),
    },
    {
      path: "editWork/:id",
      name: "edit-work",
      component: () =>
        import(/* */ "@/modules/docentes/pages/EditWorkPage.vue"),
      props: (route) => {
        return {
          id: route.params.id,
        };
      },
    },
  ],
};
