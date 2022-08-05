import { createStore } from "vuex";
import auth from "../modules/auth/store";
import administrador from "../modules/administrador/store";
import alumno from "../modules/alumnos/store";
import docente from "../modules/docentes/store";
import principal from "../modules/pagePrincipal/store";

//2° vamos a crear la funcion createStorage y lo exportamos por defecto
export default createStore({
  // //vamos a crear el state que es parecido a la data
  // state: {
  //   count: 1,
  //   lastMutation: "none",
  //   isLoading: false,
  //   lastRandomInt: 0,
  // },
  // //las mutaciones son parecidas a los metodos
  // //estos sirven para hacer los cambios en el state
  // //ahora para llamar a esta mutations debemos realizar un commit Mutation
  // mutations: {
  //   //en esta funcion debemos recibir el state como argumento para poder usar las propiades que estan dentro del state
  //   increment(state) {
  //     state.count++;
  //     state.lastMutation = "Increment";
  //   },
  //   //tambien podemos pasarle argumentos a estos mutations
  //   //estos se pasan como segundo parametro del mutation
  //   //si desde el componente se manda un objeto con varias propiedades se tiene que desetructurar aqui
  //   // incrementBy(state, { valor }) {
  //   incrementBy(state, { valor }) {
  //     state.count += valor;
  //     state.lastMutation = "IncrementBy" + valor;
  //     state.lastRandomInt = valor;
  //   },
  //   setLoading(state, valor) {
  //     state.isLoading = valor;
  //     state.lastMutation = "setLoading" + valor;
  //   },
  // },
  // //las acciones son metodos que pueden ser asyncronas, usualmente se dispara una action para comprobar algo contra un backend y cuando recibimos la respuesta
  // //entonces se dispara un commit de una mutation, es decir las acciones son despachadas y las mutaciones son mediante commit
  // //y una accion es mediante un dispatch
  // actions: {
  //   //para llamar al commit es necesario recibir como argumento el context => este tiene referencia y la informacion sobre el contexto del store o del modulo donde nos encontramos
  //   //tambien podemos desestrucutar del context el commit

  //   // async incrementRandomInt(context) {
  //   async incrementRandomInt({ commit }) {
  //     //para modificar el state tenemos que hacer un commmit a alguna mutacion
  //     //ahora para llamar a una mutacion usamos
  //     //context.commit('nombredelamutacion')
  //     commit("setLoading", true);
  //     const randomInt = await getRandomInt();
  //     commit("incrementBy", randomInt);
  //     commit("setLoading", false);
  //   },
  // },
  // //estas son parecidas a las computed propertys
  // //los getters se actualizan cuando los states cambien
  // getters: {
  //   //estos tambien reciben como argumento el state
  //   squareCount(state) {
  //     return state.count * state.count;
  //   },
  // },
  //vamos a crear los modulos estos nos permiten tener todo ordenado
  modules: {
    //vamos a crar los modulos
    //creamos una propiedad e importamos este modulo
    auth,
    administrador,
    alumno,
    docente,
    principal,
  },
});
