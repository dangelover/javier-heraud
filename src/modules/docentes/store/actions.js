// export const myAction = async ({commit}) =>{

// }
export const myPerfilDocente = async ({ commit }, dni) => {
  const token = localStorage.getItem("token") || "";
  console.log(dni);
  const url = `https://rest-server-node-n.herokuapp.com/api/docentes/myPerfil/${dni}`;
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "x-token": token,
    },
  });
  const body = await res.json();
  if (!body.condicion) {
    commit("addDocente", []);
    return body;
  }
  commit("addDocente", body.docente);
  return body;
};
export const updateProfile = async ({ commit }, docente) => {
  console.log(docente);
  const token = localStorage.getItem("token") || "";
  const {
    nombre,
    apellido,
    correo,
    direccion,
    DNI,
    celular,
    img,
    grado,
    seccion,
  } = docente;
  const data = {
    nombre,
    apellido,
    correo,
    direccion,
    DNI,
    celular,
    img,
    grado,
    seccion,
  };
  const url = `https://rest-server-node-n.herokuapp.com/api/docentes/${docente.id}`;
  const res = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "x-token": token,
    },
    body: JSON.stringify(data),
  });
  const body = await res.json();
  console.log(body);
  commit("updateProfile", { ...docente });
  return body;
};
export const updateUser = async ({ commit }, datos) => {
  const token = localStorage.getItem("token") || "";
  const { DNI, nombre, dni_usuario, img } = datos;
  const data = {
    nombre,
    dni_usuario,
    img,
  };
  console.log(data);
  const url = `https://rest-server-node-n.herokuapp.com/api/usuarios/img/${DNI}`;
  const res = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "x-token": token,
    },
    body: JSON.stringify(data),
  });
  const body_usuario = await res.json();
  console.log(body_usuario);
  const { condicion, usuario } = body_usuario;
  commit("updateUser", { ...usuario });
  return {
    condicion,
    usuario,
  };
};
export const loadAlumnos = async ({ commit }, data) => {
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
    commit("setAlumnos", []);
    return;
  }
  commit("setAlumnos", alumnos);
  return { alumnos };
};
export const loadAlumno = async ({ commit }, id) => {
  const token = localStorage.getItem("token") || "";
  const url = `https://rest-server-node-n.herokuapp.com/api/alumnos/${id}`;
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "x-token": token,
    },
  });
  const body = await res.json();
  console.log(body);
  if (body.condicion) {
    commit("addAlumno", body.alumno);
    return body;
  }
};
export const createAlumno = async ({ commit }, dataAlumno) => {
  const { ...data } = dataAlumno;
  console.log(data);
  const token = localStorage.getItem("token") || "";
  const url = "https://rest-server-node-n.herokuapp.com/api/alumnos";
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-token": token,
    },
    body: JSON.stringify(data),
  });
  const body = await res.json();
  console.log(body);
  if (!body.condicion) {
    return body;
  }
  const { alumno } = body;
  commit("addNewAlumno", alumno);
  return body;
};
export const updateAlumno = async ({ commit }, alumno) => {
  console.log("funciona");
  const { id, ...data } = alumno;
  console.log(data);
  const token = localStorage.getItem("token") || "";
  const url = `https://rest-server-node-n.herokuapp.com/api/alumnos/${alumno.id}`;
  const res = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "x-token": token,
    },
    body: JSON.stringify(data),
  });
  const body = await res.json();
  commit("updateAlumno", { ...alumno });
  return body;
};
export const deleteStudent = async ({ commit }, id) => {
  const token = localStorage.getItem("token") || "";
  const url = `https://rest-server-node-n.herokuapp.com/api/alumnos/${id}`;
  const res = await fetch(url, {
    method: "DELETE",
    headers: {
      "x-token": token,
    },
  });
  const body = await res.json();
  console.log(body);
  commit("deleteAlumno", id);
  return body;
};
export const updateImageAdmin = async ({ commit }, datos) => {
  const { file, DNI } = datos;
  if (!file) {
    console.log("no existe img");
    return;
  }
  try {
    const token = localStorage.getItem("token") || "";
    console.log(token);
    const formData = new FormData();
    formData.append("archivo", file);
    console.log(DNI);
    const url = `https://rest-server-node-n.herokuapp.com/api/uploads/img/usuarios/${DNI}`;
    const res = await fetch(url, {
      method: "PUT",
      headers: {
        "x-token": token,
      },
      body: formData,
    });
    const body = await res.json();
    console.log(body);
    // commit("updateAdmin", { ...body.modelo });
    return body;
  } catch (error) {
    console.error("Error al cargar la imagen, revisar logs");
    console.log(error);
    return null;
  }
};
export const updateImageAlumno = async ({ commit }, datos) => {
  const { file, DNI } = datos;
  if (!file) {
    console.log("no existe img");
    return;
  }
  try {
    const token = localStorage.getItem("token") || "";
    // console.log(token);
    const formData = new FormData();
    formData.append("archivo", file);
    // console.log(DNI);
    const url = `https://rest-server-node-n.herokuapp.com/api/uploads/img/alumno/${DNI}`;
    const res = await fetch(url, {
      method: "PUT",
      headers: {
        "x-token": token,
      },
      body: formData,
    });
    const body = await res.json();
    console.log(body);
    // commit("updateAdmin", { ...body.modelo });
    return body;
  } catch (error) {
    console.error("Error al cargar la imagen, revisar logs");
    console.log(error);
    return null;
  }
};
export const updateImageDocente = async ({ commit }, datos) => {
  const { file, DNI } = datos;
  if (!file) {
    console.log("no existe img");
    return;
  }
  try {
    const token = localStorage.getItem("token") || "";
    // console.log(token);
    const formData = new FormData();
    formData.append("archivo", file);
    // console.log(DNI);
    const url = `https://rest-server-node-n.herokuapp.com/api/uploads/img/docente/${DNI}`;
    const res = await fetch(url, {
      method: "PUT",
      headers: {
        "x-token": token,
      },
      body: formData,
    });
    const body = await res.json();
    console.log(body);
    // commit("updateAdmin", { ...body.modelo });
    return body;
  } catch (error) {
    console.error("Error al cargar la imagen, revisar logs");
    console.log(error);
    return null;
  }
};
export const updateImageBook = async ({ commit }, datos) => {
  const { file, id } = datos;
  if (!file) {
    console.log("no existe img");
    return;
  }
  try {
    const token = localStorage.getItem("token") || "";
    // console.log(token);
    const formData = new FormData();
    formData.append("archivo", file);
    // console.log(DNI);
    const url = `https://rest-server-node-n.herokuapp.com/api/uploads/libros/${id}`;
    const res = await fetch(url, {
      method: "PUT",
      headers: {
        "x-token": token,
      },
      body: formData,
    });
    const body = await res.json();
    console.log(body);
    // commit("updateAdmin", { ...body.modelo });
    return body;
  } catch (error) {
    console.error("Error al cargar la imagen, revisar logs");
    console.log(error);
    return null;
  }
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
export const updateTheme = async ({ commit }, tema) => {
  const { id, ...data } = tema;
  const token = localStorage.getItem("token") || "";
  const url = `https://rest-server-node-n.herokuapp.com/api/temas/${id}`;
  const res = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "x-token": token,
    },
    body: JSON.stringify(data),
  });
  const body = await res.json();
  console.log(body);
  commit("updateTheme", { ...tema });
  return body;
};
export const createWeek = async ({ commit }, dataWeek) => {
  const { id, numeroSemana, numero_grado, letra_seccion } = dataWeek;
  const data = {
    numeroSemana,
    curso: id,
    numero_grado,
    letra_seccion,
  };
  console.log(data);
  const token = localStorage.getItem("token") || "";
  const url = "https://rest-server-node-n.herokuapp.com/api/semanas";
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-token": token,
    },
    body: JSON.stringify(data),
  });
  const respuesta = await res.json();
  console.log(respuesta);
  if (!respuesta.condicion) {
    return respuesta;
  }
  const { semana } = respuesta;
  commit("addNewWeek", semana);
  return respuesta;
};
export const createTheme = async ({ commit }, dataTheme) => {
  const { ...data } = dataTheme;
  const token = localStorage.getItem("token") || "";
  const url = "https://rest-server-node-n.herokuapp.com/api/temas";
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-token": token,
    },
    body: JSON.stringify(data),
  });
  const body = await res.json();
  console.log(body);
  if (!body.condicion) {
    return body;
  }
  const { tema } = body;
  commit("addNewTheme", tema);
  return body;
};
export const loadTheme = async ({ commit }, id) => {
  const token = localStorage.getItem("token") || "";
  const url = `https://rest-server-node-n.herokuapp.com/api/temas/${id}`;
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "x-token": token,
    },
  });
  const body = await res.json();
  console.log(body);
  if (body.condicion) {
    commit("setTheme", body.tema);
    return body;
  }
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
export const loadDocumentos = async ({ commit }, dni) => {
  const token = localStorage.getItem("token") || "";
  const url = `https://rest-server-node-n.herokuapp.com/api/documents/documentList/${dni}`;
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "x-token": token,
    },
  });
  const { documents } = await res.json();
  if (!documents) {
    commit("setDocuments", []);
  }
  commit("setDocuments", documents);
  return {
    documents,
  };
};
export const loadDocument = async ({ commit }, id) => {
  const token = localStorage.getItem("token") || "";
  const url = `https://rest-server-node-n.herokuapp.com/api/documents/${id}`;
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "x-token": token,
    },
  });
  const body = await res.json();
  console.log(body);
  if (body.condicion) {
    commit("addDocument", body.document);
    return body;
  }
};
export const createDocument = async ({ commit }, dataDocument) => {
  const { ...data } = dataDocument;
  const token = localStorage.getItem("token") || "";
  const url = "https://rest-server-node-n.herokuapp.com/api/documents/";
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-token": token,
    },
    body: JSON.stringify(data),
  });
  const body = await res.json();
  console.log(body);
  if (!body.condicion) {
    return body;
  }
  const { document } = body;
  commit("addNewDocument", document);
  return body;
};
export const updateDocument = async ({ commit }, document) => {
  const { id, ...data } = document;
  const token = localStorage.getItem("token") || "";
  const url = `https://rest-server-node-n.herokuapp.com/api/documents/${id}`;
  const res = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "x-token": token,
    },
    body: JSON.stringify(data),
  });
  const body = await res.json();
  console.log(body);
  commit("updateDocument", { ...document });
  return body;
};
export const deleteDocument = async ({ commit }, id) => {
  const token = localStorage.getItem("token") || "";
  const url = `https://rest-server-node-n.herokuapp.com/api/documents/${id}`;
  const res = await fetch(url, {
    method: "DELETE",
    headers: {
      "x-token": token,
    },
  });
  const body = await res.json();
  commit("deleteDocument", id);
  return body;
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
export const loadBook = async ({ commit }, id) => {
  const token = localStorage.getItem("token") || "";
  const url = `https://rest-server-node-n.herokuapp.com/api/libros/${id}`;
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "x-token": token,
    },
  });
  const body = await res.json();
  console.log(body);
  if (body.condicion) {
    commit("addBook", body.libro);
    return body;
  }
};
export const UpdateBook = async ({ commit }, dataBook) => {
  const { ...data } = dataBook;
  const token = localStorage.getItem("token") || "";
  const url = "https://rest-server-node-n.herokuapp.com/api/libros";
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-token": token,
    },
    body: JSON.stringify(data),
  });
  const body = await res.json();
  console.log(body);
  if (!body.condicion) {
    return body;
  }
  const { libro } = body;
  commit("addNewBook", libro);
  return body;
};
export const EditBook = async ({ commit }, libro) => {
  const { id, ...data } = libro;
  console.log(data);
  const token = localStorage.getItem("token") || "";
  const url = `https://rest-server-node-n.herokuapp.com/api/libros/${id}`;
  const res = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "x-token": token,
    },
    body: JSON.stringify(data),
  });
  const body = await res.json();
  console.log(body);
  commit("updateBook", { ...libro });
  return body;
};
export const deleteBook = async ({ commit }, id) => {
  const token = localStorage.getItem("token") || "";
  const url = `https://rest-server-node-n.herokuapp.com/api/libros/${id}`;
  const res = await fetch(url, {
    method: "DELETE",
    headers: {
      "x-token": token,
    },
  });
  const body = await res.json();
  commit("deleteBook", id);
  return body;
};
export const createWork = async ({ commit }, dataWork) => {
  const { ...data } = dataWork;
  const token = localStorage.getItem("token") || "";
  const url = "https://rest-server-node-n.herokuapp.com/api/tareas";
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-token": token,
    },
    body: JSON.stringify(data),
  });
  const body = await res.json();
  console.log(body);
  if (!body.condicion) {
    return body;
  }
  const { tarea } = body;
  commit("addNewTarea", tarea);
  return body;
};
export const loadWork = async ({ commit }, id) => {
  const token = localStorage.getItem("token") || "";
  const url = `https://rest-server-node-n.herokuapp.com/api/tareas/${id}`;
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "x-token": token,
    },
  });
  const body = await res.json();
  console.log(body);
  if (body.condicion) {
    commit("addWork", body.tarea);
    return body;
  }
};
export const updateWork = async ({ commit }, tarea) => {
  const { id, ...data } = tarea;
  const token = localStorage.getItem("token") || "";
  const url = `https://rest-server-node-n.herokuapp.com/api/tareas/${id}`;
  const res = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "x-token": token,
    },
    body: JSON.stringify(data),
  });
  const body = await res.json();
  console.log(body);
  commit("updateWork", { ...tarea });
  return body;
};
export const deleteWork = async ({ commit }, id) => {
  const token = localStorage.getItem("token") || "";
  const url = `https://rest-server-node-n.herokuapp.com/api/tareas/${id}`;
  const res = await fetch(url, {
    method: "DELETE",
    headers: {
      "x-token": token,
    },
  });
  const body = await res.json();
  commit("deleteWork", id);
  return body;
};
export const deleteTheme = async ({ commit }, id) => {
  const token = localStorage.getItem("token") || "";
  const url = `https://rest-server-node-n.herokuapp.com/api/temas/${id}`;
  const res = await fetch(url, {
    method: "DELETE",
    headers: {
      "x-token": token,
    },
  });
  const body = await res.json();
  commit("deleteTheme", id);
  return body;
};
