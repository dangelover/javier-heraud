import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import homeRouter from "../modules/pagePrincipal/routers";
import auth from "../modules/auth/router/";
import administradorRouter from "../modules/administrador/routers";
import docenteRouter from "../modules/docentes/routers";
import alumnoRouter from "../modules/alumnos/routers";
import NoPageFound from "../modules/shared/pages/NoPageFound";
import isAuthenticatedGuard from "../modules/auth/router/auth-guard";
import isRoleGuard from "../modules/administrador/routers/admin-guard";
import isAuthVerified from "../modules/auth/router/authVerify-guard";
import isDocenteGuard from "../modules/docentes/routers/docenteGuard";
import isAlumnoGuard from "../modules/alumnos/routers/alumnoGuard";
const routes = [
  {
    path: "/",
    redirect: "/principal",
  },
  { path: "/auth", ...auth },
  {
    path: "/administrador",
    beforeEnter: [isAuthenticatedGuard, isRoleGuard],
    ...administradorRouter,
  },
  {
    path: "/docentes",
    beforeEnter: [isAuthenticatedGuard, isDocenteGuard],
    ...docenteRouter,
  },
  {
    path: "/alumnos",
    beforeEnter: [isAuthenticatedGuard, isAlumnoGuard],
    ...alumnoRouter,
  },
  {
    path: "/principal",
    ...homeRouter,
  },
  { path: "/:pathMatch(.*)*", name: "not-found", component: NoPageFound },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
