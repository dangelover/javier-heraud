// export const myAction = (state) =>{

// }
export const loadUser = (state, { usuario, token }) => {
  state.user = usuario;
  state.status = "authenticated";
  state.token = token;
  state.rol = usuario.rol;
  state.finishSesion = false;
};
export const logout = (state) => {
  state.user = null;
  state.token = null;
  state.rol = null;
  state.finishSesion = true;
  state.status = "not-authenticated";
  localStorage.removeItem("token");
  localStorage.removeItem("usuario");
  localStorage.removeItem("grado");
  localStorage.removeItem("seccion");
  localStorage.removeItem("numeros");
};
