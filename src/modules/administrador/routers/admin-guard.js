import store from "@/store";
const isRoleGuard = (to, from, next) => {
  const rol = store.state.auth.rol;
  if (rol === "ADMIN_ROLE") {
    next();
  } else if (rol !== "ADMIN_ROLE") {
    next({ name: "not-found" });
  }
};
export default isRoleGuard;
