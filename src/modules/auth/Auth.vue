<template>
  <div class="general">
    <div class="backg">
      <div></div>
    </div>
    <div class="container">
      <form @submit.prevent="onLogin">
        <img
          src="https://res.cloudinary.com/dqsh99vzm/image/upload/v1646361220/imagenes-escuela/logos/Grupo_1_cjydiw.png"
        />
        <h2 class="title">Iniciar Seción</h2>
        <div class="input-div one">
          <div class="i">
            <i class="fas fa-user"></i>
          </div>
          <div class="div">
            <input id="dni" type="text" class="input" v-model="dni" required />
          </div>
        </div>
        <div class="input-div pass">
          <div class="i">
            <i class="fas fa-lock"></i>
          </div>
          <div class="div">
            <input
              id="pas"
              type="password"
              class="input"
              v-model="pass"
              required
            />
          </div>
        </div>
        <a href="#">Olvidé la Contraseña</a>
        <input type="submit" class="btn" value="Login" />
      </form>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      dni: null,
      pass: null,
      isLoading: false,
      dataUser: null,
    };
  },
  methods: {
    ...mapActions("auth", ["authUser"]),
    ...mapActions("docente", ["myPerfilDocente"]),
    ...mapActions("alumno", ["myPerfilAlumno"]),
    async onLogin() {
      new Swal({
        title: "Espere por favor",
        allowOutsideClick: false,
      }),
        (this.dataUser = {
          DNI: this.dni,
          password: this.pass,
        });

      const body = await this.authUser(this.dataUser);
      console.log(body);
      this.isLoading = true;
      if (body.conexion) {
        const { conexion, usuario, token } = body;
        const { estado, google, ...datosUsuario } = usuario;
        console.log(usuario);
        localStorage.setItem("token", token);
        localStorage.setItem("usuario", JSON.stringify(datosUsuario));
        if (usuario.rol === "DOCENTE_ROLE") {
          const dato = await this.myPerfilDocente(usuario.DNI);
          console.log(dato);
          const { grado, seccion } = dato.docente;
          console.log(grado);
          console.log(seccion);
          localStorage.setItem("grado", grado);
          localStorage.setItem("seccion", seccion);
        } else if (usuario.rol === "ALUMNO_ROLE") {
          const dato = await this.myPerfilAlumno(usuario.DNI);
          console.log(dato);
          const { grado, seccion } = dato.alumno;
          console.log(grado);
          console.log(seccion);
          localStorage.setItem("grado", grado);
          localStorage.setItem("seccion", seccion);
        }
        Swal.fire("Ingreso Correcto", "Entrada con exito", "success");
        if (usuario.rol === "ADMIN_ROLE") {
          this.$router.push({ name: "my-perfil-admin" });
        } else if (usuario.rol === "DOCENTE_ROLE") {
          this.$router.push({ name: "my-perfil-docente" });
        } else {
          this.$router.push({ name: "alumnos" });
        }
        return;
      } else {
        console.log("error");
        Swal.fire("Error", "Verifique el DNI o contraseña", "error");
      }
    },
  },
};
</script>

<style lang="css" scoped>
:root {
  --colorescuela: #c62f00;
  --colorescuelablack: #9b2400;
}

body {
  width: 100vw;
  height: 100vh;
  margin: 0;
  display: grid;
  place-items: center;
  /* overflow-x: hidden; */
  /* overflow-y: hidden; */
  /*estas vainas sirven para quitar el scroll :v*/
}

.general {
  width: 100vw;
  height: 100vh;
  position: relative;
  display: grid;
  place-items: center;
}

.backg > div {
  width: 100vw;
  height: 100vh;
  background-image: url(https://e.rpp-noticias.io/large/2016/05/15/521952_142092.jpg);
  background-size: cover;
  /*imagen fija xd*/
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position-x: 50%;
  position: relative;
  /* filter: blur(10px); */
  transition: 0.5s;
}

.backg > div::before {
  content: "";
  /*esta cosa creo un contenido y mas abajo le damos el color y dimension*/
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.151);
  transition: background 0.5s;
}

.backg.focus > div::before {
  background-color: rgba(0, 0, 0, 0.322);
}

.container {
  width: 400px;
  display: grid;
  position: absolute;
  /* background: radial-gradient(circle, rgba(198, 47, 0, 0.8) 0%, rgba(155, 36, 0, 0.8) 100%); */
  border-radius: 20px;
  transition: background 0.4s;
  /*  */
  background: rgba(155, 36, 0, 0.8);
}

.container.focus {
  /* background: radial-gradient(circle, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.8) 100%); */
  /* transition: background 4s; */
  /*  */
  background: rgba(0, 0, 0, 0.8);
}

.container form {
  width: 100%;
  display: grid;
  grid-template-rows: auto;
  /* position: absolute; */
  /* backdrop-filter: blur(20px) brightness(110%); */
  /* z-index: 1; */
  /* display: block; */
}

.container form img {
  display: flex;
  justify-self: center;
  margin: 10px 0;
}

.title {
  text-align: center;
  margin: 0;
  color: white;
  margin: 10px 0;
}

h5 {
  margin: 0;
}

/* c v */

.container .input-div {
  position: relative;
  display: grid;
  grid-template-columns: 7% 93%;
  margin: 25px 25px;
  padding: 5px 0;
  border-bottom: 2px solid #d9d9d9;
}

.container .input-div.one {
  /* margin-top: 0; */
}

.i {
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.i i {
  transition: 0.4s;
}

.input-div > div {
  position: relative;
  height: 45px;
}

.input-div > div > h5 {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: rgb(255, 255, 255);
  font-size: 18px;
  transition: 0.4s;
}

.input-div:before,
.input-div:after {
  content: "";
  position: absolute;
  bottom: -2px;
  width: 0%;
  height: 2px;
  background-color: var(--colorescuela);
  transition: 0.4s;
}

.input-div:before {
  right: 50%;
}

.input-div:after {
  left: 50%;
}

.input-div.focus:before,
.input-div.focus:after {
  width: 50%;
}

.input-div.focus > div > h5 {
  top: 0px;
  font-size: 15px;
}

.input-div.focus > .i > i {
  color: var(--colorescuela);
}

.input-div.focus > div > h5 {
  color: var(--colorescuela);
}

.input-div > div > input {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background: none;
  padding: 0.5rem 0.7rem;
  font-size: 1.2rem;
  color: #555;
  font-family: "poppins", sans-serif;
}

.input-div.pass {
  /* margin-bottom: 4px; */
}

/* end c v */

a {
  display: block;
  text-align: right;
  text-decoration: none;
  color: rgb(160, 160, 160);
  font-size: 0.9rem;
  transition: 0.3s;
  margin-right: 5%;
}

a:hover {
  color: white;
}

.btn {
  display: block;
  width: 80%;
  justify-self: center;
  height: 50px;
  border-radius: 25px;
  outline: none;
  border: none;
  /* background-image: linear-gradient(to right, #32be8f, #38d39f, #32be8f); */
  background-image: linear-gradient(
    to right,
    #ffffff,
    #ffffff,
    #000000,
    #000000
  );
  background-size: 200%;
  font-size: 1.2rem;
  color: #fff;
  font-family: "Poppins", sans-serif;
  text-transform: uppercase;
  margin: 1rem 0;
  cursor: pointer;
  transition: 0.5s;
  color: black;
}

.btn.focus {
  background-image: linear-gradient(to right, #9b2400, #c62f00, #9b2400);
  transition: 0.5s;
  color: rgb(163, 163, 163);
}

.btn:hover {
  background-position: right;
  color: white;
}
</style>