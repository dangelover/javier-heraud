export default {
  name: "auth",
  component: () =>
    import(
      //siempre debemos importar el archivo el cual tiene el router-view y este siempre estara en los layouts
      /* webpackChunkName: "daybook" */ "@/modules/auth/Auth.vue"
    ),
  children: [],
};
