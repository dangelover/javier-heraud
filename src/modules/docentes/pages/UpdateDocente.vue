<template>
  <div class="container_edu_b_ud">
    <h2 class="tittle-edu-ud">Editar mi Perfil</h2>
    <form @submit.prevent="onUpdatedTeacher" class="form-edu-ud">
      <div className="form-group">
        <label for="">Nombre</label>
        <input
          type="text"
          className="form-control"
          placeholder="Nombre"
          v-model="nombre"
        />
      </div>
      <div className="form-group">
        <label for="">Apellido</label>
        <input
          type="text"
          className="form-control"
          placeholder="Apellidos"
          v-model="apellido"
        />
      </div>
      <div className="form-group">
        <label for="">Correo</label>
        <input
          type="email"
          className="form-control"
          placeholder="Correo Electronico"
          v-model="correo"
          required
        />
      </div>
      <div className="form-group">
        <label for="">Direccion</label>
        <input
          type="text"
          className="form-control"
          placeholder="Direccion"
          v-model="direccion"
        />
      </div>
      <div className="form-group">
        <label for="">DNI</label>
        <input
          type="number"
          className="form-control"
          placeholder="DNI"
          v-model="dni"
        />
      </div>
      <div className="form-group">
        <label for="">Celular</label>
        <input
          type="number"
          className="form-control"
          placeholder="DNI"
          v-model="celular"
        />
      </div>
      <!-- subir imagen -->
      <div class="img-edu-ud">
        <input
          type="file"
          @change="onSelectedImage"
          accept="image/png, image/jpeg"
        />
        <!-- <button class="btn btn-primary" @click="onSelectImage">
        Subir Foto
        <i class="fa fa-upload"></i>
      </button> -->
        <img
          v-if="localImage"
          :src="localImage"
          alt="entry-pictures"
          class="img-thumbnail"
        />
      </div>

      <div v-if="isValid" class="alert alert-danger" role="alert">
        <p>{{ mensaje }}</p>
      </div>
      <div v-if="isValidmsg" :class="clasName" role="alert">
        <p>
          {{ condicion ? "Docente Creado" : `Posibles errores: ${mensaje}` }}
        </p>
      </div>
      <br />
      <div className="form-group boton-edu-g-ud">
        <input
          type="submit"
          className="boton-edu-ud"
          value="Actualizar Docente"
        />
      </div>
    </form>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import { mapActions } from "vuex";
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      id: "",
      nombre: "",
      apellido: "",
      correo: "",
      direccion: "",
      dni: "",
      celular: "",
      grado: "",
      seccion: "",
      isValid: false,
      isValidmsg: false,
      clasName: "alert alert-danger",
      condicion: false,
      mensaje: "",
      data: null,
      img: "",
      localImage: null,
      file: null,
    };
  },
  methods: {
    ...mapActions("docente", [
      "myPerfilDocente",
      "updateProfile",
      "updateImageDocente",
      "updateImageAdmin",
      "updateUser",
    ]),
    ...mapActions("auth", ["logout"]),
    async loadProfile() {
      const usuario = localStorage.getItem("usuario");
      this.user = JSON.parse(usuario);
      const body = await this.myPerfilDocente(this.user.DNI);
      console.log(body);
      const {
        uid,
        nombre,
        apellido,
        correo,
        direccion,
        DNI,
        celular,
        img,
        grado,
        seccion,
      } = body.docente;
      this.id = uid;
      this.nombre = nombre;
      this.apellido = apellido;
      this.correo = correo;
      this.direccion = direccion;
      this.dni = DNI;
      this.celular = celular;
      this.localImage = img;
      this.grado = grado;
      this.seccion = seccion;
    },
    async onUpdatedTeacher() {
      new Swal({
        title: "Espere por favor",
        allowOutsideClick: false,
      });
      Swal.showLoading();
      if (this.nombre.length === 0) {
        // this.isValid = true;
        this.mensaje = "el nombre es necesario";
        Swal.fire("Error", this.mensaje, "error");
        setTimeout(() => {
          this.mensaje = "";
          // this.isValid = false;
        }, 2000);
        return;
      }
      if (this.apellido.length === 0) {
        // this.isValid = true;
        this.mensaje = "el apellido es necesario";
        Swal.fire("Error", this.mensaje, "error");
        setTimeout(() => {
          this.mensaje = "";
          // this.isValid = false;
        }, 2000);
        return;
      }
      if (this.correo.length === 0) {
        // this.isValid = true;
        this.mensaje = "el correo es necesario";
        Swal.fire("Error", this.mensaje, "error");
        setTimeout(() => {
          this.mensaje = "";
          // this.isValid = false;
        }, 2000);
        return;
      }
      if (this.direccion.length === 0) {
        // this.isValid = true;
        this.mensaje = "la direccion es necesaria";
        Swal.fire("Error", this.mensaje, "error");
        setTimeout(() => {
          this.mensaje = "";
          // this.isValid = false;
        }, 2000);
        return;
      }
      if (this.dni.toString().length !== 8) {
        // this.isValid = true;
        this.mensaje = "El dni debe tener 8 digitos";
        Swal.fire("Error", this.mensaje, "error");
        setTimeout(() => {
          this.mensaje = "";
          // this.isValid = false;
        }, 2000);
        return;
      }
      if (this.celular.toString().length !== 9) {
        // this.isValid = true;
        this.mensaje = "El celular debe tener 9 digitos";
        Swal.fire("Error", this.mensaje, "error");
        setTimeout(() => {
          this.mensaje = "";
          // this.isValid = false;
        }, 2000);
        return;
      }
      if (this.file === null) {
        this.mensaje = "Suba una imagen";
        Swal.fire("Error", this.mensaje, "error");
        setTimeout(() => {
          this.mensaje = "";
          // this.isValid = false;
        }, 2000);
        return;
      }
      const datos = {
        file: this.file,
        DNI: this.dni,
      };
      const respuesta = await this.updateImageDocente(datos);
      const { modelo } = await this.updateImageAdmin(datos);
      // console.log(respuesta.modelo);
      // console.log(respuesta.img);
      // console.log(img);
      const { img } = respuesta.modelo;
      this.img = img;
      // console.log(this.img)
      console.log(this.img);
      const newDatosUsuario = {
        DNI: this.user.DNI,
        nombre: this.nombre,
        dni_usuario: this.dni,
        img: this.img,
      };
      const body_usuario = await this.updateUser(newDatosUsuario);
      const { condicion, usuario } = body_usuario;
      localStorage.removeItem("usuario");
      // console.log(modelo);
      // const { estado, google, ...datosUsuario } = modelo;
      const { estado, google, ...datosUsuario } = usuario;
      localStorage.setItem("usuario", JSON.stringify(datosUsuario));
      const grado_alumno = localStorage.getItem("grado");
      this.grado = grado_alumno;
      const seccion_alumno = localStorage.getItem("seccion");
      this.seccion = seccion_alumno;
      this.data = {
        id: this.id,
        nombre: this.nombre,
        apellido: this.apellido,
        correo: this.correo,
        direccion: this.direccion,
        DNI: this.dni,
        celular: this.celular,
        img: this.img,
        grado: this.grado,
        seccion: this.seccion,
      };
      console.log(this.data);
      const body = await this.updateProfile(this.data);
      console.log(body);
      Swal.fire("Actualizado", "Vuelva a iniciar sesión", "success");
      this.logout();
      this.$router.push({ name: "auth" });
    },
    onSelectedImage(event) {
      const files = event.target.files[0];
      if (!files) {
        this.localImage = null;
        this.file = null;
        return;
      }
      this.file = files;
      const fr = new FileReader();
      fr.onload = () => (this.localImage = fr.result);
      fr.readAsDataURL(files);
    },
  },
  created() {
    this.loadProfile();
  },
};
</script>
<style scoped>
.container_edu_b_ud {
  border: 5px solid rgb(177, 41, 0);
  border-radius: 20px;
  /* padding: 10px; */
  /* background: rgba(155, 36, 0, 0.8); */
  width: 450px;
  box-sizing: border-box;
}

.tittle-edu-ud {
  text-align: center;
  font-size: 1.5em;
  text-transform: uppercase;
  color: white;
  background: rgb(177, 41, 0);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  padding: 4px 8px;
  margin: 0;
}
.form-edu-ud {
  margin: 12px 12px;
  display: grid;
  gap: 10px;
}

.form-edu-ud div select {
  margin: 0 10px 0 10px;
  width: 95%;
}
.form-edu-ud div:nth-child(1) input {
  margin: 0 10px 0 10px;
  width: 95%;
}
.form-edu-ud div:nth-child(2) input {
  margin: 0 10px 0 10px;
  width: 95%;
}
.form-edu-ud div:nth-child(3) input {
  margin: 0 10px 0 10px;
  width: 95%;
}
.form-edu-ud div:nth-child(4) input {
  margin: 0 10px 0 10px;
  width: 95%;
}
.form-edu-ud div:nth-child(5) input {
  margin: 0 10px 0 10px;
  width: 95%;
}
.form-edu-ud div:nth-child(6) input {
  margin: 0 10px 0 10px;
  width: 95%;
}
.img-edu-ud {
  display: grid;
}
.img-edu-ud img {
  width: 50%;
  justify-self: center;
}

.boton-edu-g-ud {
  place-self: center;
  width: 150px;
  margin: 0;
}
.boton-edu-g-ud .boton-edu-ud {
  display: block;
  width: 100%;
  height: 50px;
  border-radius: 15px;
  outline: none;
  border: none;
  font-weight: bolder;
  /* background-image: linear-gradient(to right, #32be8f, #38d39f, #32be8f); */
  background-image: linear-gradient(to right, #9b2400, #c62f00, #9b2400);
  background-size: 200%;
  /* font-size: 1.2rem; */
  font-family: "Poppins", sans-serif;
  /* margin: 1rem 0; */
  cursor: pointer;
  transition: 0.5s;
  color: rgb(255, 255, 255);
}

.boton-edu-g-ud .boton-edu-ud:hover {
  /*background: #c62f00;*/
  /* border-color: #721b00; */
  background-position: right;
  color: rgb(255, 255, 255);
}
@media (max-width: 960px) {
  .container_edu_b_ud {
    /* width: fit-content; */
  }
}
</style>