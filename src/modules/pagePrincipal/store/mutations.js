// export const myAction = (state) =>{

// }
export const setDocentes = (state, docentes) => {
  state.docentes = [...state.docentes, ...docentes];
  state.isLoading = false;
};
export const setActividades = (state, actividades) => {
  state.actividades = [...state.actividades, ...actividades];
  state.isLoading = false;
};
