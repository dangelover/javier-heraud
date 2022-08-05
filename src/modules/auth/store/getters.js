//son para traer informacion del state y esto podemos procesarla
// export const myGetters = (state) =>{
//    return state

// }
export const loadUser = (state) => {
  return state.user;
};
export const currentState = (state) => {
  return state.status;
};
