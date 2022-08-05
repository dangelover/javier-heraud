// export const myAction = (state) =>{

// }
export const addDocente = (state, docente) => {
  state.docente = docente;
};
export const setAlumnos = (state, alumnos) => {
  state.alumnos = [...state.alumnos, ...alumnos];
  state.isLoading = false;
};
export const addAlumno = (state, alumno) => {
  state.alumno = alumno;
};
export const addNewAlumno = (state, alumno) => {
  state.alumnos.unshift(alumno);
};
export const updateAlumno = (state, alumno) => {
  const idx = state.alumnos.map((a) => a.uid).indexOf(alumno.uid);
  console.log(idx);
  state.alumnos[idx] = alumno;
};
export const deleteAlumno = (state, id) => {
  state.alumnos = state.alumnos.filter((alumno) => alumno.uid !== id);
};
export const updateProfile = (state, docente) => {
  state.docente = docente;
};
export const updateUser = (state, usuario) => {
  state.mi_usuario = usuario;
};
export const setCursos = (state, cursos) => {
  state.cursos = [...state.cursos, ...cursos];
  state.isLoading = false;
};
export const setSemanas = (state, semanas) => {
  state.semanas = [...state.semanas, ...semanas];
  state.isLoading = false;
};
export const setTemas = (state, temas) => {
  state.temas = [...state.temas, ...temas];
  state.isLoading = false;
};
export const setTheme = (state, tema) => {
  state.tema = tema;
};
export const addNewTheme = (state, tema) => {
  state.temas.unshift(tema);
};
export const updateTheme = (state, tema) => {
  const idx = state.temas.map((t) => t.uid).indexOf(tema.uid);
  console.log(idx);
  state.temas[idx] = tema;
};
export const deleteTheme = (state, id) => {
  state.temas = state.temas.filter((tema) => tema.uid !== id);
};
export const addNewWeek = (state, semana) => {
  state.semanas.unshift(semana);
};
export const setTareas = (state, tareas) => {
  state.tareas = [...state.tareas, ...tareas];
  state.isLoading = false;
};
export const addWork = (state, tarea) => {
  state.tarea = tarea;
};
export const updateWork = (state, tarea) => {
  const idx = state.tareas.map((w) => w.uid).indexOf(tarea.uid);
  console.log(idx);
  state.tareas[idx] = tarea;
};
export const setBooks = (state, libros) => {
  state.libros = [...state.libros, ...libros];
  state.isLoading = false;
};
export const setDocuments = (state, documents) => {
  state.documents = [...state.documents, ...documents];
  state.isLoading = false;
};
export const addNewDocument = (state, document) => {
  state.documents.unshift(document);
};
export const addDocument = (state, document) => {
  state.document = document;
};
export const updateDocument = (state, document) => {
  const idx = state.documents.map((d) => d.uid).indexOf(document.uid);
  console.log(idx);
  state.documents[idx] = document;
};
export const deleteDocument = (state, id) => {
  state.documents = state.documents.filter((document) => document.uid !== id);
};
export const addNewBook = (state, libro) => {
  state.libros.unshift(libro);
};
export const addBook = (state, libro) => {
  state.libro = libro;
};
export const updateBook = (state, libro) => {
  const idx = state.libros.map((l) => l.uid).indexOf(libro.uid);
  console.log(idx);
  state.libros[idx] = libro;
};
export const addNewTarea = (state, tarea) => {
  state.tareas.unshift(tarea);
};
export const deleteWork = (state, id) => {
  state.tareas = state.tareas.filter((tarea) => tarea.uid !== id);
};
export const setCurso = (state, curso) => {
  state.curso = curso;
};
export const deleteBook = (state, id) => {
  state.libros = state.libros.filter((book) => book.uid !== id);
};
