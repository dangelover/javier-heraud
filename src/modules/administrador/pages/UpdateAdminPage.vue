<template>
  <div class="container_edu_b_uap">
    <h2 class="tittle-edu-uap">Editar Administrador</h2>
    <form @submit.prevent="onUpdateAdmin" class="form-edu-uap">
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
      <div className="form-group">
        <label for="">Facebook</label>
        <input
          type="text"
          className="form-control"
          placeholder="Facebook"
          v-model="facebook"
        />
      </div>
      <div className="form-group">
        <label for="">Descripcion del Administrador</label>
        <input
          type="text"
          className="form-control"
          placeholder="Descripcion"
          v-model="descripcion"
        />
      </div>
      <div>
        <label for="">Elegir el cargo</label>
        <select
          v-model="cargo"
          class="form-select"
          aria-label="Default select example"
        >
          <option value="DIRECTOR(A)">Director(a)</option>
          <option value="SUBDIRECTOR(A)">SubDirector(a)</option>
          <option value="SECRETARIO(A)">Secretario(a)</option>
        </select>
      </div>

      <!-- subir imagen -->
      <div class="img-edu-uap">
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

      <div className="form-group boton-edu-g-uap">
        <input
          type="submit"
          className="boton-edu-uap"
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
      nombre: "",
      apellido: "",
      correo: "",
      direccion: "",
      dni: "",
      celular: "",
      facebook: "",
      descripcion: "",
      cargo: "",
      data: {},
      img: "",
      localImage: null,
      file: null,
      DNI_Buscar: "",
      mensaje: "",
    };
  },
  methods: {
    ...mapActions("administrador", [
      "loadAdministrador",
      "updateAdministrador",
      "updateImageAdministrador",
      "updateImageAdmin",
      "updateUserDNI",
    ]),
    ...mapActions("auth", ["logout"]),
    async LoadAdmin() {
      console.log(this.id);
      const body = await this.loadAdministrador(this.id);
      // console.log(body);
      const {
        nombre,
        apellido,
        correo,
        direccion,
        DNI,
        celular,
        facebook,
        img,
        descripcion,
        cargo,
      } = body.admin;
      this.DNI_Buscar = DNI;
      this.nombre = nombre;
      this.apellido = apellido;
      this.correo = correo;
      this.direccion = direccion;
      this.dni = DNI;
      this.celular = celular;
      this.facebook = facebook;
      this.localImage = img;
      this.descripcion = descripcion;
      this.cargo = cargo;
    },
    async onUpdateAdmin() {
      new Swal({
        title: "Espere por favor",
        allowOutsideClick: false,
      });
      Swal.showLoading();
      if (this.nombre.length === 0) {
        // this.isValid = true;
        this.mensaje = "el nombre es necesario";
        Swal.fire("Error", "el nombre es necesario", "error");
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
      const respuesta = await this.updateImageAdministrador(datos);
      const res = await this.updateImageAdmin(datos);
      console.log(respuesta);
      console.log(respuesta);
      const { img } = respuesta.modelo;
      this.img = img;
      const newDatosUsuario = {
        DNI: this.DNI_Buscar,
        nombre: this.nombre,
        dni_usuario: this.dni,
        img: this.img,
      };
      console.log(newDatosUsuario);
      const body_usuario = await this.updateUserDNI(newDatosUsuario);
      console.log(body_usuario);
      this.img = img;
      if (this.cargo.length === 0) {
        // this.isValid = true;
        this.mensaje = "el cargo es obligatorio";
        Swal.fire("Error", this.mensaje, "error");
        setTimeout(() => {
          this.mensaje = "";
          // this.isValid = false;
        }, 2000);
        return;
      }
      this.data = {
        id: this.id,
        nombre: this.nombre,
        apellido: this.apellido,
        correo: this.correo,
        direccion: this.direccion,
        DNI: this.dni,
        celular: this.celular,
        facebook: this.facebook,
        img: this.img,
        descripcion: this.descripcion,
        cargo: this.cargo,
      };
      const body = await this.updateAdministrador(this.data);
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
    this.LoadAdmin();
  },
};
</script>
<style scoped>
.container_edu_b_uap {
  border: 5px solid rgb(177, 41, 0);
  border-radius: 20px;
  /* padding: 10px; */
  /* background: rgba(155, 36, 0, 0.8); */
  width: 450px;
  box-sizing: border-box;
}

.tittle-edu-uap {
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
.form-edu-uap {
  margin: 12px 12px;
  display: grid;
  gap: 10px;
}

.form-edu-uap div select {
  margin: 0 10px 0 10px;
  width: 95%;
}
.form-edu-uap div:nth-child(1) input {
  margin: 0 10px 0 10px;
  width: 95%;
}
.form-edu-uap div:nth-child(2) input {
  margin: 0 10px 0 10px;
  width: 95%;
}
.form-edu-uap div:nth-child(3) input {
  margin: 0 10px 0 10px;
  width: 95%;
}
.form-edu-uap div:nth-child(4) input {
  margin: 0 10px 0 10px;
  width: 95%;
}
.form-edu-uap div:nth-child(5) input {
  margin: 0 10px 0 10px;
  width: 95%;
}
.form-edu-uap div:nth-child(6) input {
  margin: 0 10px 0 10px;
  width: 95%;
}
.form-edu-uap div:nth-child(7) input {
  margin: 0 10px 0 10px;
  width: 95%;
}
.form-edu-uap div:nth-child(8) input {
  margin: 0 10px 0 10px;
  width: 95%;
}
.img-edu-uap {
  display: grid;
}
.img-edu-uap img {
  width: 50%;
  justify-self: center;
}

.boton-edu-g-uap {
  place-self: center;
  width: 150px;
  margin: 0;
}
.boton-edu-g-uap .boton-edu-uap {
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

.boton-edu-g-uap .boton-edu-uap:hover {
  /*background: #c62f00;*/
  /* border-color: #721b00; */
  background-position: right;
  color: rgb(255, 255, 255);
}
@media (max-width: 960px) {
  .container_edu_b_uap {
    width: fit-content;
  }
}
</style>