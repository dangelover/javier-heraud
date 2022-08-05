import store from "@/store";
const isDocenteGuard = (to, from, next) => {
  const rol = store.state.auth.rol;
  if (rol === "DOCENTE_ROLE") {
    next();
  } else if (rol !== "DOCENTE_ROLE") {
    next({ name: "not-found" });
  }
};
export default isDocenteGuard;
