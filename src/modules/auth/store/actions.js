// export const myAction = async ({commit}) =>{

// }
export const authUser = async ({ commit }, dataUser) => {
  const url = "https://rest-server-node-n.herokuapp.com/api/auth/login";
  const { ...data } = dataUser;
  console.log(data);
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const body = await res.json();
  console.log(body);
  if (!body.conexion) {
    commit("loadUser", { usuario: [], token: "" });
    return body;
  }
  commit("loadUser", { usuario: body.usuario, token: body.token });
  return body;
};
export const checkAuthentication = async ({ commit }) => {
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("usuario");
  const usuario = JSON.parse(user);
  if (!usuario) {
    commit("logout");
    return { ok: false, msg: "no hay token" };
  }
  console.log(usuario);
  const url = `https://rest-server-node-n.herokuapp.com/api/usuarios/${usuario.uid}`;
  if (!token) {
    commit("logout");
    return { ok: false, msg: "no hay token" };
  }
  try {
    const resp = await fetch(url, {
      method: "GET",
      headers: {
        "x-token": token,
      },
    });
    const body = await resp.json();
    console.log(body);
    commit("loadUser", { usuario: body.usuario, token });
    return { ok: true };
  } catch (error) {
    commit("logout");
    return { ok: false, msg: "no hay token" };
  }
};
// export const checkRolAdmin=async ({commit})=>{
//   const token = localStorage.getItem("token");
//   const user = localStorage.getItem("usuario");
//   if (!token) {
//     commit("")
//   }
// }
export const logout = ({ commit }) => {
  commit("logout");
};
