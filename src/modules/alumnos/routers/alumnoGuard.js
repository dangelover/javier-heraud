import store from "@/store";
const isAlumnoGuard = (to, from, next) => {
  const rol = store.state.auth.rol;
  if (rol === "ALUMNO_ROLE") {
    next();
  } else if (rol !== "ALUMNO_ROLE") {
    next({ name: "not-found" });
  }
};
export default isAlumnoGuard;
