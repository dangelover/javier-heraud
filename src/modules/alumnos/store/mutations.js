// export const myAction = (state) =>{

// }
export const addAlumno = (state, alumno) => {
  state.alumno = alumno;
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
export const setCurso = (state, curso) => {
  state.curso = curso;
};
export const setTareas = (state, tareas) => {
  state.tareas = [...state.tareas, ...tareas];
  state.isLoading = false;
};
export const setPartners = (state, alumnos) => {
  state.partners = [...state.partners, ...alumnos];
  state.isLoading = false;
};
export const setBooks = (state, libros) => {
  state.libros = [...state.libros, ...libros];
  state.isLoading = false;
};
