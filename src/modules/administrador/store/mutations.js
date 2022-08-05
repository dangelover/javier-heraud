// export const myAction = (state) =>{

// }
export const setUsers = (state, usuarios) => {
  state.usuarios = [...state.usuarios, ...usuarios];
  state.isLoading = false;
};
export const addUser = (state, usuario) => {
  state.usuarios.unshift(usuario);
};
export const updateUser = (state, user) => {
  const idx = state.usuarios.map((u) => u.uid).indexOf(user.id);
  console.log(idx);
  state.usuarios[idx] = user;
};
export const deleteUser = (state, id) => {
  state.usuarios = state.usuarios.filter((usuario) => usuario.uid !== id);
};
export const setDocentes = (state, docentes) => {
  state.docentes = [...state.docentes, ...docentes];
  state.isLoading = false;
};
export const addDocente = (state, docente) => {
  state.docentes.unshift(docente);
};
export const updateDocente = (state, docente) => {
  const idx = state.docentes.map((d) => d.uid).indexOf(docente.uid);
  console.log(idx);
  state.docentes[idx] = docente;
};
export const deleteDocente = (state, id) => {
  state.docentes = state.docentes.filter((docente) => docente.uid !== id);
};
export const setAlumnos = (state, alumnos) => {
  state.alumnos = [...state.alumnos, ...alumnos];
  state.isLoading = false;
};
export const addNewAlumno = (state, alumno) => {
  state.alumnos.unshift(alumno);
};
export const addAlumno = (state, alumno) => {
  state.alumno = alumno;
};
export const updateAlumno = (state, alumno) => {
  const idx = state.alumnos.map((a) => a.uid).indexOf(alumno.uid);
  console.log(idx);
  state.alumnos[idx] = alumno;
};
export const deleteAlumno = (state, id) => {
  state.alumnos = state.alumnos.filter((alumno) => alumno.uid !== id);
};
export const setAdministradores = (state, administradores) => {
  state.administradores = [...state.administradores, ...administradores];
  state.isLoading = false;
};
export const addAdministrador = (state, administrador) => {
  state.administradores.unshift(administrador);
};
export const setAdministrador = (state, admin) => {
  state.admin = admin;
};
export const updateAdmin = (state, admin) => {
  const idx = state.administradores.map((a) => a.uid).indexOf(admin.uid);
  state.administradores[idx] = admin;
};
export const deleteAdmin = (state, id) => {
  state.administradores = state.administradores.filter(
    (administrador) => administrador.uid !== id
  );
};
export const addAdmin = (state, admin) => {
  state.admin = admin;
};
export const setActividades = (state, actividades) => {
  state.actividades = [...state.actividades, ...actividades];
  state.isLoading = false;
};
export const addNewActivity = (state, actividad) => {
  state.actividades.unshift(actividad);
};
export const updateActivity = (state, actividad) => {
  const idx = state.actividades.map((a) => a.uid).indexOf(actividad.uid);
  console.log(idx);
  state.actividades[idx] = actividad;
};
export const deleteActivity = (state, id) => {
  state.actividades = state.actividades.filter(
    (actividad) => actividad.uid !== id
  );
};
export const setDocuments = (state, documents) => {
  state.documents = [...state.documents, ...documents];
  state.isLoading = false;
};
export const sendComment = (state, coments) => {
  const idx = state.documents.map((c) => c.uid).indexOf(coments.uid);
  console.log(idx);
  state.documents[idx] = coments;
};
