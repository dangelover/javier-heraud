export default {
  name: "administrador",
  component: () =>
    import(
      //siempre debemos importar el archivo el cual tiene el router-view y este siempre estara en los layouts
      /* webpackChunkName: "daybook" */ "@/modules/administrador/layouts/AdminLayout.vue"
    ),
  children: [
    //usuarios
    {
      path: "listUser",
      name: "list-user",
      component: () =>
        import(
          /* webpackChunkName: "list-user" */ "@/modules/administrador/pages/ListUser.vue"
        ),
    },
    {
      path: "createUser",
      name: "create-user",
      component: () =>
        import(
          /* webpackChunkName: "create-user" */ "@/modules/administrador/pages/CreatedUserPage.vue"
        ),
    },
    {
      path: "updateUser/:id",
      name: "updated-user",
      component: () =>
        import(
          /* webpackChunkName: "updated-user" */ "@/modules/administrador/pages/UpdatedUserPage.vue"
        ),
      props: (route) => {
        return {
          id: route.params.id,
        };
      },
    },
    {
      path: "listUserAdmin",
      name: "list-user-admin",
      component: () =>
        import(
          /* webpackChunkName: "list-user-admin" */ "@/modules/administrador/pages/AdminListPage.vue"
        ),
    },
    {
      path: "oneUser/:id",
      name: "user-page",
      component: () =>
        import(
          /* webpackChunkName: "user-page" */ "@/modules/administrador/pages/UserPages.vue"
        ),
      props: (route) => {
        return {
          id: route.params.id,
        };
      },
    },
    //docentes
    {
      path: "listDocentes",
      name: "list-docentes",
      component: () =>
        import(
          /*webpackChunkName:"list-docentes" */ "@/modules/administrador/pages/DocentesListPage.vue"
        ),
    },
    {
      path: "createdDocente",
      name: "created-docente",
      component: () =>
        import(
          /* webpackChunkName:"create-docente" */ "@/modules/administrador/pages/CreatedDocentePage.vue"
        ),
    },
    {
      path: "updateDocente/:id",
      name: "update-docente",
      component: () =>
        import(/* */ "@/modules/administrador/pages/UpdatedDocentePage.vue"),
      props: (route) => {
        return {
          id: route.params.id,
        };
      },
    },
    {
      path: "oneDocente/:id",
      name: "docente-page",
      component: () =>
        import(/* */ "@/modules/administrador/pages/OneDocentePage.vue"),
      props: (route) => {
        return {
          id: route.params.id,
        };
      },
    },
    {
      path: "listarAlumnos",
      name: "list-alumnos",
      component: () =>
        import(
          /* webpackChunkName:"list-alumnos" */ "@/modules/administrador/pages/AlumnosListPage.vue"
        ),
    },
    {
      path: "listarActividades",
      name: "list-actividades",
      component: () =>
        import(
          /* webpackChunkName:"list-alumnos" */ "@/modules/administrador/pages/ActivityListPage.vue"
        ),
    },
    {
      path: "subirDocumentos",
      name: "list-documentos",
      component: () =>
        import(
          /* webpackChunkName: "mis-documentos" */ "@/modules/administrador/pages/DocumentListPage.vue"
        ),
    },
    {
      path: "enviarComentarios/:id",
      name: "send-comments",
      component: () =>
        import(
          /* webpackChunkName: "send-comments"*/ "@/modules/administrador/pages/SendCommentsPage.vue"
        ),
      props: (route) => {
        return {
          id: route.params.id,
        };
      },
    },
    {
      path: "createActivity",
      name: "created-activity",
      component: () =>
        import(
          /* webpackChunkName:"create-alumno" */ "@/modules/administrador/pages/CreateActivityPage.vue"
        ),
    },
    {
      path: "updateActivity/:id",
      name: "update-activity",
      component: () =>
        import(
          /* webpackChunkName:"update-alumno" */ "@/modules/administrador/pages/UpdatedActivityPage.vue"
        ),
      props: (route) => {
        return {
          id: route.params.id,
        };
      },
    },
    {
      path: "createAlumno",
      name: "created-alumno",
      component: () =>
        import(
          /* webpackChunkName:"create-alumno" */ "@/modules/administrador/pages/CreateAlumnoPage.vue"
        ),
    },
    {
      path: "updateAlumno/:id",
      name: "update-alumno",
      component: () =>
        import(
          /* webpackChunkName:"update-alumno" */ "@/modules/administrador/pages/UpdatedAlumnoPage.vue"
        ),
      props: (route) => {
        return {
          id: route.params.id,
        };
      },
    },
    {
      path: "oneAlumno/:id",
      name: "alumno-page",
      component: () =>
        import(
          /* webpackChunkName:"alumno-page"*/ "@/modules/administrador/pages/OneAlumnoPage.vue"
        ),
      props: (route) => {
        return {
          id: route.params.id,
        };
      },
    },
    {
      path: "createAdmin",
      name: "created-admin",
      component: () =>
        import(
          /* webpackChunkName:"create-admin" */ "@/modules/administrador/pages/CreateAdminPage.vue"
        ),
    },
    {
      path: "updatedAdmin/:id",
      name: "update-admin",
      component: () =>
        import(
          /* webpackChunkName:"update-admin" */ "@/modules/administrador/pages/UpdateAdminPage.vue"
        ),
      props: (route) => {
        return {
          id: route.params.id,
        };
      },
    },
    {
      path: "oneAdministrador/:id",
      name: "admin-page",
      component: () =>
        import(
          /* webpackChunkName:"admin-page"  */ "@/modules/administrador/pages/OneAdminPage.vue"
        ),
      props: (route) => {
        return {
          id: route.params.id,
        };
      },
    },
    {
      path: "myPerfilAdmin",
      name: "my-perfil-admin",
      component: () =>
        import(
          /* webpackChunkName:"my-perfil-admin"  */ "@/modules/administrador/pages/MyPerfilPage.vue"
        ),
    },
  ],
};
