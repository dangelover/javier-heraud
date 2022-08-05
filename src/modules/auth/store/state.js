//el state se hace de esta forma como funcion flecha anonima para que sea reactivo
// export default () => ({});
export default () => ({
  user: null,
  status: "authenticating",
  token: null,
  rol: null,
  finishSesion: true,
});
