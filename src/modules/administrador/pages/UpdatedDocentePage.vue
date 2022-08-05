<template>
  <div class="container_edu_b_udp">
    <h2 class="tittle-edu-udp">Editar Docente</h2>
    <form @submit.prevent="onUpdatedTeacher" class="form-edu-udp">
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
      <div>
        <label for="">Elegir el grado</label>
        <select
          v-model="grado"
          class="form-select"
          aria-label="Default select example"
        >
          <option value="1">Primero</option>
          <option value="2">Segundo</option>
          <option value="3">Tercero</option>
          <option value="4">Cuarto</option>
          <option value="5">Quinto</option>
          <option value="6">Sexto</option>
        </select>
      </div>
      <div>
        <label for="">Elegir la seccion</label>
        <select
          v-model="seccion"
          class="form-select"
          aria-label="Default select example"
        >
          <option selected>Seleccionar una sección</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
          <option value="E">E</option>
        </select>
      </div>

      <!-- subir imagen -->
      <div class="img-edu-udp">
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
          {{
            condicion ? "Docente actualizado" : `Posibles errores: ${mensaje}`
          }}
        </p>
      </div>

      <div className="form-group boton-edu-g-udp">
        <input
          type="submit"
          className="boton-edu-udp"
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
      DNI_Buscar: "",
    };
  },
  methods: {
    ...mapActions("administrador", [
      "updateDocente",
      "updateImageDocente",
      "updateImageAdmin",
      "updateUserDNI",
    ]),
    async LoadUpdateTeacher() {
      const token = localStorage.getItem("token") || "";
      const url = `https://rest-server-node-n.herokuapp.com/api/docentes/${this.id}`;
      const res = await fetch(url, {
        method: "GET",
        headers: {
          "x-token": token,
        },
      });
      const { condicion, docente } = await res.json();
      const {
        nombre,
        apellido,
        correo,
        direccion,
        DNI,
        celular,
        img,
        grado,
        seccion,
      } = docente;
      this.DNI_Buscar = DNI;
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
        this.isValid = true;
        this.mensaje = "el nombre es necesario";
        setTimeout(() => {
          this.mensaje = "";
          this.isValid = false;
        }, 2000);
        return;
      }
      if (this.apellido.length === 0) {
        this.isValid = true;
        this.mensaje = "el apellido es necesario";
        setTimeout(() => {
          this.mensaje = "";
          this.isValid = false;
        }, 2000);
        return;
      }
      if (this.correo.length === 0) {
        this.isValid = true;
        this.mensaje = "el correo es necesario";
        setTimeout(() => {
          this.mensaje = "";
          this.isValid = false;
        }, 2000);
        return;
      }
      if (this.direccion.length === 0) {
        this.isValid = true;
        this.mensaje = "la direccion es necesaria";
        setTimeout(() => {
          this.mensaje = "";
          this.isValid = false;
        }, 2000);
        return;
      }
      if (this.dni.toString().length !== 8) {
        this.isValid = true;
        this.mensaje = "El dni debe tener 8 digitos";
        setTimeout(() => {
          this.mensaje = "";
          this.isValid = false;
        }, 2000);
        return;
      }
      if (this.celular.toString().length !== 9) {
        this.isValid = true;
        this.mensaje = "El celular debe tener 9 digitos";
        setTimeout(() => {
          this.mensaje = "";
          this.isValid = false;
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
      if (!respuesta.condicion) {
        const msg = respuesta.msg;
        console.log(msg);
      }
      const res = await this.updateImageAdmin(datos);
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
      console.log(this.img);
      this.data = {
        id: this.id,
        nombre: this.nombre,
        apellido: this.apellido,
        correo: this.correo,
        direccion: this.direccion,
        DNI: this.dni,
        img: this.img,
        celular: this.celular,
        grado: this.grado,
        seccion: this.seccion,
      };
      const body = await this.updateDocente(this.data);
      console.log(body);
      Swal.fire("Actualizado", "Actualizado con exito", "success");
      this.$router.push({ name: "list-docentes" });
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
    this.LoadUpdateTeacher();
  },
};
</script>

<style scope>
.container_edu_b_udp {
  border: 5px solid rgb(177, 41, 0);
  border-radius: 20px;
  /* padding: 10px; */
  /* background: rgba(155, 36, 0, 0.8); */
  width: 450px;
  box-sizing: border-box;
}

.tittle-edu-udp {
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
.form-edu-udp {
  margin: 12px 12px;
  display: grid;
  gap: 10px;
}

.form-edu-udp div select {
  margin: 0 10px 0 10px;
  width: 95%;
}
.form-edu-udp div:nth-child(1) input {
  margin: 0 10px 0 10px;
  width: 95%;
}
.form-edu-udp div:nth-child(2) input {
  margin: 0 10px 0 10px;
  width: 95%;
}
.form-edu-udp div:nth-child(3) input {
  margin: 0 10px 0 10px;
  width: 95%;
}
.form-edu-udp div:nth-child(4) input {
  margin: 0 10px 0 10px;
  width: 95%;
}
.form-edu-udp div:nth-child(5) input {
  margin: 0 10px 0 10px;
  width: 95%;
}
.form-edu-udp div:nth-child(6) input {
  margin: 0 10px 0 10px;
  width: 95%;
}
.img-edu-udp {
  display: grid;
}
.img-edu-udp img {
  width: 50%;
  justify-self: center;
}

.boton-edu-g-udp {
  place-self: center;
  width: 150px;
  margin: 0;
}
.boton-edu-g-udp .boton-edu-udp {
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

.boton-edu-g-udp .boton-edu-udp:hover {
  /*background: #c62f00;*/
  /* border-color: #721b00; */
  background-position: right;
  color: rgb(255, 255, 255);
}
@media (max-width: 960px) {
  .container_edu_b_udp {
    width: fit-content;
  }
}
</style>