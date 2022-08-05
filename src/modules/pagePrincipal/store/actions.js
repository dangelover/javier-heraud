// export const myAction = async ({commit}) =>{

// }
export const loadDocentes = async ({ commit }, data) => {
  const { numero_grado, letra_seccion } = data;
  const grado = numero_grado;
  const seccion = letra_seccion;
  console.log(grado, seccion);
  const url = `https://rest-server-node-n.herokuapp.com/api/docentes/lista`;
  const res = await fetch(url, {
    method: "GET",
  });
  const { total, docentes } = await res.json();
  console.log(docentes);
  if (!docentes) {
    commit("setDocentes", []);
  }
  commit("setDocentes", docentes);
  return {
    total,
    docentes,
  };
};
export const loadActivities = async ({ commit }) => {
  const url =
    "https://rest-server-node-n.herokuapp.com/api/actividades/listaActividades";
  const res = await fetch(url, {
    method: "GET",
  });
  const { actividades } = await res.json();
  console.log(actividades);
  if (!actividades) {
    commit("setActividades", []);
    return;
  }
  commit("setActividades", actividades);
  return {
    actividades,
  };
};
