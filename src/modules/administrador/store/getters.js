//son para traer informacion del state y esto podemos procesarla
// export const myGetters = (state) =>{
//    return state

// }
export const getUserById =
  (state) =>
  (id = "") => {
    const usuario = state.usuarios.find((usuario) => usuario.uid === id);
    if (!usuario) {
      return;
    }
    //es necesario desestructurar mediante el operador spreed(...) sino se podria editar y terminar modificando el state
    //si lo pasamos sin desestructurar lo estariamos pasando como referencia y esto permitiria editar
    return { ...usuario };
  };
