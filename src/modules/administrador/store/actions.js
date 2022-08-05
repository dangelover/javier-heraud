// export const myAction = async ({commit}) =>{

// }
export const loadUsers = async ({ commit }) => {
  const token = localStorage.getItem("token") || "";
  const url = "https://rest-server-node-n.herokuapp.com/api/usuarios";
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "x-token": token,
    },
  });
  const { total, usuarios } = await res.json();
  if (!usuarios) {
    commit("setUsers", []);
  }
  commit("setUsers", usuarios);
  return {
    total,
    usuarios,
  };
};
export const createUser = async ({ commit }, dataUser) => {
  const { ...data } = dataUser;
  console.log(data);
  const token = localStorage.getItem("token") || "";
  const url = "https://rest-server-node-n.herokuapp.com/api/usuarios";
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
  const { usuario } = body;
  commit("addUser", usuario);
  return body;
};
export const loadUser = async ({ commit }, id) => {
  const token = localStorage.getItem("token") || "";
  const url = `https://rest-server-node-n.herokuapp.com/api/usuarios/${id}`;
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "x-token": token,
    },
  });
  const body = await res.json();
  console.log(body);
  if (!body.condicion) {
    return body;
  }
  return body;
};
export const searchUsers = async ({ commit }, termino) => {
  console.log(termino);
  const url = `https://rest-server-node-n.herokuapp.com/api/search/usuarios/${termino}`;
  const res = await fetch(url, {
    method: "GET",
  });
  const { usuarios } = await res.json();
  if (!usuarios) {
    commit("setUsers", []);
    return;
  }
  commit("setUsers", usuarios);
  return { usuarios };
};
export const updateUser = async ({ commit }, user) => {
  const token = localStorage.getItem("token") || "";
  const { id, ...data } = user;
  const url = `https://rest-server-node-n.herokuapp.com/api/usuarios/${user.id}`;
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
  commit("updateUser", { ...user });
  return body;
};
export const updateUserDNI = async ({ commit }, datos) => {
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
export const deleteUser = async ({ commit }, id) => {
  console.log(id);
  const token = localStorage.getItem("token") || "";
  const url = `https://rest-server-node-n.herokuapp.com/api/usuarios/${id}`;
  const res = await fetch(url, {
    method: "DELETE",
    headers: {
      "x-token": token,
    },
  });
  const body = await res.json();
  console.log(body);
  commit("deleteUser", id);
  return body;
};
export const loadDocentes = async ({ commit }, data) => {
  const { numero_grado, letra_seccion } = data;
  const token = localStorage.getItem("token") || "";
  const grado = numero_grado;
  const seccion = letra_seccion;
  console.log(grado, seccion);
  const url = `https://rest-server-node-n.herokuapp.com/api/docentes?numero_grado=${grado}&letra_seccion=${seccion}`;
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "x-token": token,
    },
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
export const createDocente = async ({ commit }, dataDocente) => {
  const { ...data } = dataDocente;
  const token = localStorage.getItem("token") || "";
  const url = "https://rest-server-node-n.herokuapp.com/api/docentes";
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
  const { docente } = body;
  commit("addDocente", docente);
  return body;
};
export const updateDocente = async ({ commit }, docente) => {
  const token = localStorage.getItem("token") || "";
  const {
    nombre,
    apellido,
    correo,
    direccion,
    DNI,
    img,
    celular,
    grado,
    seccion,
  } = docente;
  const data = {
    nombre,
    apellido,
    correo,
    direccion,
    DNI,
    img,
    celular,
    grado,
    seccion,
  };
  console.log(data);
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
  commit("updateDocente", { ...docente });
  return body;
};
export const deleteDocente = async ({ commit }, id) => {
  const token = localStorage.getItem("token") || "";
  const url = `https://rest-server-node-n.herokuapp.com/api/docentes/${id}`;
  const res = await fetch(url, {
    method: "DELETE",
    headers: {
      "x-token": token,
    },
  });
  const body = await res.json();
  console.log(body);
  commit("deleteDocente", id);
  return body;
};
export const loadAlumnos = async ({ commit }, data) => {
  const { numero_grado, letra_seccion } = data;
  const token = localStorage.getItem("token") || "";
  const grado = numero_grado;
  const seccion = letra_seccion;
  console.log(seccion);
  console.log(grado);
  const url = `https://rest-server-node-n.herokuapp.com/api/alumnos?numero_grado=${grado}&letra_seccion=${seccion}`;
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "x-token": token,
    },
  });
  const { total, alumnos } = await res.json();
  console.log(alumnos);
  if (!alumnos) {
    commit("setAlumnos", []);
    return;
  }
  commit("setAlumnos", alumnos);
  return {
    total,
    alumnos,
  };
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
export const loadAdministradores = async ({ commit }) => {
  const token = localStorage.getItem("token") || "";
  const url = `https://rest-server-node-n.herokuapp.com/api/administradores`;
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "x-token": token,
    },
  });
  const { total, administradores } = await res.json();
  if (!administradores) {
    commit("setAdministradores", []);
    return;
  }
  commit("setAdministradores", administradores);
  return {
    total,
    administradores,
  };
};
export const createAdmin = async ({ commit }, dataAdmin) => {
  const { ...data } = dataAdmin;
  console.log(data);
  const token = localStorage.getItem("token") || "";
  const url = "https://rest-server-node-n.herokuapp.com/api/administradores";
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
  const { administrador } = body;
  commit("addAdministrador", administrador);
  return body;
};
export const loadAdministrador = async ({ commit }, id) => {
  console.log(id);
  const token = localStorage.getItem("token") || "";
  const url = `https://rest-server-node-n.herokuapp.com/api/administradores/${id}`;
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "x-token": token,
    },
  });
  const body = await res.json();
  // console.log(body);
  if (body.condicion) {
    commit("setAdministrador", body.admin);
    return body;
  }
};
export const updateAdministrador = async ({ commit }, admin) => {
  const token = localStorage.getItem("token") || "";
  const {
    nombre,
    apellido,
    correo,
    direccion,
    DNI,
    celular,
    facebook,
    descripcion,
    cargo,
  } = admin;
  const data = {
    nombre,
    apellido,
    correo,
    direccion,
    DNI,
    celular,
    facebook,
    descripcion,
    cargo,
  };
  const url = `https://rest-server-node-n.herokuapp.com/api/administradores/${admin.id}`;
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
  commit("updateAdmin", { ...admin });
  return body;
};
export const deleteAdmin = async ({ commit }, id) => {
  const token = localStorage.getItem("token") || "";
  const url = `https://rest-server-node-n.herokuapp.com/api/administradores/${id}`;
  const res = await fetch(url, {
    method: "DELETE",
    headers: {
      "x-token": token,
    },
  });
  const body = await res.json();
  commit("deleteAdmin", id);
  return body;
};
export const perfilAdministrador = async ({ commit }, dni) => {
  const token = localStorage.getItem("token") || "";
  const url = `https://rest-server-node-n.herokuapp.com/api/administradores/myPerfil/${dni}`;
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "x-token": token,
    },
  });
  const body = await res.json();
  if (!body.condicion) {
    commit("addAdmin", []);
    return body;
  }
  commit("addAdmin", body.admin);
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
export const updateImageAdministrador = async ({ commit }, datos) => {
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
    const url = `https://rest-server-node-n.herokuapp.com/api/uploads/img/administrador/${DNI}`;
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
export const updateImageActivity = async ({ commit }, datos) => {
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
    const url = `https://rest-server-node-n.herokuapp.com/api/uploads/actividades/${id}`;
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
export const loadActivities = async ({ commit }) => {
  const token = localStorage.getItem("token") || "";
  const url = "https://rest-server-node-n.herokuapp.com/api/actividades";
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "x-token": token,
    },
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
export const loadDocumentos = async ({ commit }) => {
  const token = localStorage.getItem("token") || "";
  const url = "https://rest-server-node-n.herokuapp.com/api/documents";
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "x-token": token,
    },
  });
  const { documents } = await res.json();
  console.log(documents);
  if (!documents) {
    commit("setDocuments", []);
    return;
  }
  commit("setDocuments", documents);
  return {
    documents,
  };
};
export const postComment = async ({ commit }, coments) => {
  const token = localStorage.getItem("token") || "";
  const { uid, comentarios, verificacion } = coments;
  const data = {
    comentarios,
    verificacion,
  };
  console.log(uid, data);
  const url = `https://rest-server-node-n.herokuapp.com/api/documents/comentarios/${uid}`;
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
  if (!body.condicion) {
    return body;
  }
  const { commments } = body;
  commit("sendComment", { ...coments });
  return body;
};
export const createActivity = async ({ commit }, dataActivity) => {
  const { ...data } = dataActivity;
  const token = localStorage.getItem("token") || "";
  const url = "https://rest-server-node-n.herokuapp.com/api/actividades";
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
  const { actividad } = body;
  commit("addNewActivity", actividad);
  return body;
};
export const updateActivity = async ({ commit }, actividad) => {
  const { id, ...data } = actividad;
  console.log(data);
  const token = localStorage.getItem("token") || "";
  const url = `https://rest-server-node-n.herokuapp.com/api/actividades/${id}`;
  const res = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "x-token": token,
    },
    body: JSON.stringify(data),
  });
  const body = await res.json();
  commit("updateActivity", { ...actividad });
  return body;
};
export const deleteActivity = async ({ commit }, id) => {
  const token = localStorage.getItem("token") || "";
  const url = `https://rest-server-node-n.herokuapp.com/api/actividades/${id}`;
  const res = await fetch(url, {
    method: "DELETE",
    headers: {
      "x-token": token,
    },
  });
  const body = await res.json();
  console.log(body);
  commit("deleteActivity", id);
  return body;
};
