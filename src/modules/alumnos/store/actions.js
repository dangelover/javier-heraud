// export const myAction = async ({commit}) =>{

// }
export const myPerfilAlumno = async ({ commit }, dni) => {
  console.log(dni);
  const token = localStorage.getItem("token") || "";
  console.log(token);
  const url = `https://rest-server-node-n.herokuapp.com/api/alumnos/miPerfil/${dni}`;
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "x-token": token,
    },
  });
  const body = await res.json();
  console.log(body);
  if (!body.condicion) {
    commit("addAlumno", []);
    return body;
  }
  commit("addAlumno", body.alumno);
  return body;
};
export const loadCursos = async ({ commit }) => {
  const token = localStorage.getItem("token") || "";
  const url = "https://rest-server-node-n.herokuapp.com/api/cursos/";
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "x-token": token,
    },
  });
  const { cursos } = await res.json();
  console.log(cursos);
  if (!cursos) {
    commit("setCursos", []);
    return;
  }
  commit("setCursos", cursos);
  return {
    cursos,
  };
};
export const loadCurso = async ({ commit }, id) => {
  const token = localStorage.getItem("token") || "";
  const url = `https://rest-server-node-n.herokuapp.com/api/cursos/${id}`;
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "x-token": token,
    },
  });
  const body = await res.json();
  // console.log(body);
  if (body.condicion) {
    commit("setCurso", body.curso);
    return body;
  }
};
export const loadSemanas = async ({ commit }) => {
  const token = localStorage.getItem("token") || "";
  const grado = localStorage.getItem("grado");
  const seccion = localStorage.getItem("seccion");
  const url = `https://rest-server-node-n.herokuapp.com/api/semanas?numero_grado=${grado}&letra_seccion=${seccion}`;
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "x-token": token,
    },
  });
  const { semanas } = await res.json();
  console.log(semanas);
  if (!semanas) {
    commit("setSemanas", []);
    return;
  }
  commit("setSemanas", semanas);
  return { semanas };
};
export const loadTemas = async ({ commit }, semana) => {
  const token = localStorage.getItem("token") || "";
  const grado = localStorage.getItem("grado");
  const seccion = localStorage.getItem("seccion");
  const url = `https://rest-server-node-n.herokuapp.com/api/temas?numero_grado=${grado}&letra_seccion=${seccion}&numero_semana=${semana}`;
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "x-token": token,
    },
  });
  const { temas } = await res.json();
  if (!temas) {
    commit("setTemas", []);
    return;
  }
  commit("setTemas", temas);
  console.log(temas);
  return {
    temas,
  };
};
export const loadTareas = async ({ commit }, tema) => {
  const token = localStorage.getItem("token") || "";
  const grado = localStorage.getItem("grado");
  const seccion = localStorage.getItem("seccion");
  const url = `https://rest-server-node-n.herokuapp.com/api/tareas?numero_grado=${grado}&letra_seccion=${seccion}&tema=${tema}`;
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "x-token": token,
    },
  });
  const { tareas } = await res.json();
  if (!tareas) {
    commit("setTareas", []);
  }
  commit("setTareas", tareas);
  return {
    tareas,
  };
};
export const loadCompañeros = async ({ commit }, data) => {
  const { numero_grado, letra_seccion } = data;
  const token = localStorage.getItem("token") || "";
  const grado = numero_grado;
  const seccion = letra_seccion;
  const url = `https://rest-server-node-n.herokuapp.com/api/alumnos?numero_grado=${grado}&letra_seccion=${seccion}`;
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "x-token": token,
    },
  });
  const { alumnos } = await res.json();
  console.log(alumnos);
  if (!alumnos) {
    commit("setPartners", []);
    return;
  }
  commit("setPartners", alumnos);
  return { alumnos };
};
export const loadBooks = async ({ commit }, grado) => {
  const token = localStorage.getItem("token") || "";
  const url = `https://rest-server-node-n.herokuapp.com/api/libros?numero_grado=${grado}`;
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "x-token": token,
    },
  });
  const { total, libros } = await res.json();
  if (!libros) {
    commit("setBooks", []);
    return;
  }
  commit("setBooks", libros);
  return {
    total,
    libros,
  };
};
export const loadBooksSection = async ({ commit }, datos) => {
  const { numero_grado, letra_seccion } = datos;
  const token = localStorage.getItem("token") || "";
  const grado = numero_grado;
  const seccion = letra_seccion;
  const url = `https://rest-server-node-n.herokuapp.com/api/libros?numero_grado=${grado}&letra_seccion=${seccion}`;
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "x-token": token,
    },
  });
  const { total, libros } = await res.json();
  if (!libros) {
    commit("setBooks", []);
    return;
  }
  commit("setBooks", libros);
  return {
    total,
    libros,
  };
};
