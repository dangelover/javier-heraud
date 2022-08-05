import store from "@/store";
const isAuthVerified = (to, from, next) => {
  const finishSesion = store.state.finishSesion;
  const rol = store.state.auth.rol;
  if (!finishSesion) {
    next();
  } else {
    next({ name: "auth" });
  }
};
export default isAuthVerified;
