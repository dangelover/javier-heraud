//el state se hace de esta forma como funcion flecha anonima para que sea reactivo
// export default () => ({});
export default () => ({
  isLoading: true,
  usuarios: [],
  docentes: [],
  alumnos: [],
  alumno: null,
  administradores: [],
  admin: null,
  actividades: [],
  documents: [],
});
