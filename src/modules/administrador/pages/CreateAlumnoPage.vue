<template>
  <div class="container_edu_b_3">
    <h2 class="tittle-edu-3">Nuevo Alumno</h2>
    <form @submit.prevent="onCreateAlumno" class="form-edu-3">
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
        <label for="">DNI del estudiante</label>
        <input
          type="number"
          className="form-control"
          placeholder="DNI"
          v-model="dni"
        />
      </div>
      <div className="form-group">
        <label for="">Fecha de nacimiento</label>
        <datepicker
          v-model="date"
          lang="en"
          type="date"
          format="dd-mm-YYYY"
          style="
            width: 95%;
            margin: 0px 10px;
            border-radius: 0.25rem;
            border: 1px solid #ced4da;
            height: 38px;
            padding: 6px 0;
          "
        ></datepicker>
      </div>
      <div className="form-group">
        <label for="">Departamento de nacimiento</label>
        <input
          type="text"
          className="form-control"
          placeholder="Departamento"
          v-model="departamento_nacimiento"
        />
      </div>
      <div className="form-group">
        <label for="">Provincia de nacimiento</label>
        <input
          type="text"
          className="form-control"
          placeholder="Provincia"
          v-model="provincia_nacimiento"
        />
      </div>
      <div className="form-group">
        <label for="">Distrito de nacimiento</label>
        <input
          type="text"
          className="form-control"
          placeholder="Distrito"
          v-model="distrito_nacimiento"
        />
      </div>
      <div className="form-group">
        <label for="">Lengua materna del estudiante</label>
        <input
          type="text"
          className="form-control"
          placeholder="Lengua materna"
          v-model="lengua_materna"
        />
      </div>
      <div className="form-group">
        <label for="">Sexo del estudiante</label>
        <select
          v-model="sexo"
          class="form-select"
          aria-label="Default select example"
        >
          <option value="M">Masculino</option>
          <option value="F">Femenino</option>
        </select>
      </div>
      <div className="form-group">
        <label for="">Correo Tutor</label>
        <input
          type="email"
          className="form-control"
          placeholder="Correo Electronico"
          v-model="correo_tutor"
          required
        />
      </div>
      <div className="form-group">
        <label for="">Direccion del estudiante</label>
        <input
          type="text"
          className="form-control"
          placeholder="Direccion"
          v-model="direccion"
        />
      </div>
      <div className="form-group">
        <label for="">Nombre de la madre del estudiante</label>
        <input
          type="text"
          className="form-control"
          placeholder="Direccion"
          v-model="nombre_mama"
        />
      </div>
      <div className="form-group">
        <label for="">Apellido de la madre del estudiante</label>
        <input
          type="text"
          className="form-control"
          placeholder="Direccion"
          v-model="apellidos_mama"
        />
      </div>
      <div className="form-group">
        <label for="">DNI de la madre del estudiante</label>
        <input
          type="number"
          className="form-control"
          placeholder="DNI"
          v-model="DNI_mama"
        />
      </div>
      <div className="form-group">
        <label for="">Direccion de la madre del estudiante</label>
        <input
          type="text"
          className="form-control"
          placeholder="Direccion"
          v-model="direccion_mama"
        />
      </div>
      <div className="form-group">
        <label for="">Celular de la madre del estudiante</label>
        <input
          type="number"
          className="form-control"
          placeholder="DNI"
          v-model="celular_mama"
        />
      </div>
      <div className="form-group">
        <label for="">Nombre del padre del estudiante</label>
        <input
          type="text"
          className="form-control"
          placeholder="Direccion"
          v-model="nombre_papa"
        />
      </div>
      <div className="form-group">
        <label for="">Apellido del padre del estudiante</label>
        <input
          type="text"
          className="form-control"
          placeholder="Direccion"
          v-model="apellidos_papa"
        />
      </div>
      <div className="form-group">
        <label for="">DNI del padre del estudiante</label>
        <input
          type="number"
          className="form-control"
          placeholder="DNI"
          v-model="DNI_papa"
        />
      </div>
      <div className="form-group">
        <label for="">Direccion del padre del estudiante</label>
        <input
          type="text"
          className="form-control"
          placeholder="Direccion"
          v-model="direccion_papa"
        />
      </div>
      <div className="form-group">
        <label for="">Celular del padre del estudiante</label>
        <input
          type="number"
          className="form-control"
          placeholder="DNI"
          v-model="celular_papa"
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
      <div class="cont-img-edu-3">
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
          class="img-thumbnail img-edu-3"
        />
      </div>

      <div v-if="isValidmsg" :class="clasName" role="alert">
        <p>
          {{ condicion ? "Alumno creado" : `Posibles errores: ${mensaje}` }}
        </p>
      </div>
      <br />
      <div className="form-group boton-edu-g-3">
        <input type="submit" className="boton-edu-3" value="Crear Alumno" />
      </div>
    </form>
  </div>
</template>

<script>
import Datepicker from "vue3-datepicker";
import Swal from "sweetalert2";
import uploadImage from "../helpers/uploadImage";
import { mapActions } from "vuex";
export default {
  components: {
    Datepicker,
  },
  data() {
    return {
      date: new Date(),
      nombre: "",
      apellido: "",
      dni: "",
      fecha_nacimiento: "",
      departamento_nacimiento: "",
      provincia_nacimiento: "",
      distrito_nacimiento: "",
      lengua_materna: "",
      sexo: "",
      correo_tutor: "",
      direccion: "",
      nombre_mama: "",
      apellidos_mama: "",
      DNI_mama: "",
      direccion_mama: "",
      celular_mama: "",
      nombre_papa: "",
      apellidos_papa: "",
      DNI_papa: "",
      direccion_papa: "",
      celular_papa: "",
      img: "",
      grado: "",
      seccion: "",
      data: null,
      mensaje: "",
      isValidmsg: false,
      clasName: "alert alert-danger",
      condicion: false,
      localImage: null,
      file: null,
    };
  },
  methods: {
    ...mapActions("administrador", ["createAlumno"]),
    async onCreateAlumno() {
      new Swal({
        title: "Espere por favor",
        allowOutsideClick: false,
      });
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
      let dia = this.date.getDate();
      let mes = this.date.getMonth() + 1;
      let year = this.date.getFullYear();
      if (mes < 10) {
        this.fecha_nacimiento = dia + "-" + "0" + mes + "-" + year;
      }
      this.fecha_nacimiento = dia + "-" + mes + "-" + year;
      if (this.departamento_nacimiento.length === 0) {
        // this.isValid = true;
        this.mensaje = "el departamento de nacimiento es necesario";
        Swal.fire("Error", this.mensaje, "error");
        setTimeout(() => {
          this.mensaje = "";
          // this.isValid = false;
        }, 2000);
        return;
      }
      if (this.provincia_nacimiento.length === 0) {
        // this.isValid = true;
        this.mensaje = "La provincia de nacimiento es necesaria";
        Swal.fire("Error", this.mensaje, "error");
        setTimeout(() => {
          this.mensaje = "";
          // this.isValid = false;
        }, 2000);
        return;
      }
      if (this.distrito_nacimiento.length === 0) {
        // this.isValid = true;
        this.mensaje = "el distrito de nacimiento es necesario";
        Swal.fire("Error", this.mensaje, "error");
        setTimeout(() => {
          this.mensaje = "";
          // this.isValid = false;
        }, 2000);
        return;
      }
      if (this.lengua_materna.length === 0) {
        // this.isValid = true;
        this.mensaje = "La lengua materna es necesaria";
        Swal.fire("Error", this.mensaje, "error");
        setTimeout(() => {
          this.mensaje = "";
          // this.isValid = false;
        }, 2000);
        return;
      }
      if (this.sexo.length === 0) {
        // this.isValid = true;
        this.mensaje = "el sexo del alumno es necesario";
        Swal.fire("Error", this.mensaje, "error");
        setTimeout(() => {
          this.mensaje = "";
          // this.isValid = false;
        }, 2000);
        return;
      }
      if (this.correo_tutor.length === 0) {
        // this.isValid = true;
        this.mensaje = "el correo del tutor es necesario";
        Swal.fire("Error", this.mensaje, "error");
        setTimeout(() => {
          this.mensaje = "";
          // this.isValid = false;
        }, 2000);
        return;
      }
      if (this.direccion.length === 0) {
        // this.isValid = true;
        this.mensaje = "La direccion del alumno es necesaria";
        Swal.fire("Error", this.mensaje, "error");
        setTimeout(() => {
          this.mensaje = "";
          // this.isValid = false;
        }, 2000);
        return;
      }
      if (this.nombre_mama.length === 0) {
        // this.isValid = true;
        this.mensaje = "el nombre de la madre es necesario";
        Swal.fire("Error", this.mensaje, "error");
        setTimeout(() => {
          this.mensaje = "";
          // this.isValid = false;
        }, 2000);
        return;
      }
      if (this.apellidos_mama.length === 0) {
        // this.isValid = true;
        this.mensaje = "Los apellidos de la madre son necesarios";
        Swal.fire("Error", this.mensaje, "error");
        setTimeout(() => {
          this.mensaje = "";
          // this.isValid = false;
        }, 2000);
        return;
      }
      if (this.DNI_mama.toString().length !== 8) {
        // this.isValid = true;
        this.mensaje = "el DNI de la madre debe tener 8 digitos";
        Swal.fire("Error", this.mensaje, "error");
        setTimeout(() => {
          this.mensaje = "";
          // this.isValid = false;
        }, 2000);
        return;
      }
      if (this.direccion_mama.length === 0) {
        // this.isValid = true;
        this.mensaje = "La direccion de la madre es necesario";
        Swal.fire("Error", this.mensaje, "error");
        setTimeout(() => {
          this.mensaje = "";
          // this.isValid = false;
        }, 2000);
        return;
      }
      if (this.celular_mama.toString().length !== 9) {
        // this.isValid = true;
        this.mensaje = "el celular de la madre debe tener 9 digitos";
        Swal.fire("Error", this.mensaje, "error");
        setTimeout(() => {
          this.mensaje = "";
          // this.isValid = false;
        }, 2000);
        return;
      }
      if (this.nombre_papa.length === 0) {
        // this.isValid = true;
        this.mensaje = "el nombre de la padre es necesario";
        Swal.fire("Error", this.mensaje, "error");
        setTimeout(() => {
          this.mensaje = "";
          // this.isValid = false;
        }, 2000);
        return;
      }
      if (this.apellidos_papa.length === 0) {
        // this.isValid = true;
        this.mensaje = "Los apellidos del padre son necesarios";
        Swal.fire("Error", this.mensaje, "error");
        setTimeout(() => {
          this.mensaje = "";
          // this.isValid = false;
        }, 2000);
        return;
      }
      if (this.DNI_papa.toString().length !== 8) {
        // this.isValid = true;
        this.mensaje = "el DNI del padre debe tener 8 digitos";
        Swal.fire("Error", this.mensaje, "error");
        setTimeout(() => {
          this.mensaje = "";
          // this.isValid = false;
        }, 2000);
        return;
      }
      if (this.direccion_papa.length === 0) {
        // this.isValid = true;
        this.mensaje = "La direccion del padre es necesario";
        Swal.fire("Error", this.mensaje, "error");
        setTimeout(() => {
          this.mensaje = "";
          // this.isValid = false;
        }, 2000);
        return;
      }
      if (this.celular_papa.toString().length !== 9) {
        // this.isValid = true;
        this.mensaje = "el celular del padre debe tener 9 digitos";
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
      const imagen = await uploadImage(this.file);
      this.img = imagen;
      if (this.grado.length === 0) {
        // this.isValid = true;
        this.mensaje = "el grado es obligatorio";
        Swal.fire("Error", this.mensaje, "error");
        setTimeout(() => {
          this.mensaje = "";
          // this.isValid = false;
        }, 2000);
        return;
      }
      if (this.seccion.length === 0) {
        // this.isValid = true;
        this.mensaje = "La seccion es necesaria";
        Swal.fire("Error", this.mensaje, "error");
        setTimeout(() => {
          this.mensaje = "";
          // this.isValid = false;
        }, 2000);
        return;
      }
      this.data = {
        nombre: this.nombre,
        apellido: this.apellido,
        DNI: this.dni,
        fecha_nacimiento: this.fecha_nacimiento,
        departamento_nacimiento: this.departamento_nacimiento,
        provincia_nacimiento: this.provincia_nacimiento,
        distrito_nacimiento: this.distrito_nacimiento,
        lengua_materna: this.lengua_materna,
        sexo: this.sexo,
        correo_tutor: this.correo_tutor,
        direccion: this.direccion,
        nombre_mama: this.nombre_mama,
        apellidos_mama: this.apellidos_mama,
        DNI_mama: this.DNI_mama,
        direccion_mama: this.direccion_mama,
        celular_mama: this.celular_mama,
        nombre_papa: this.nombre_papa,
        apellidos_papa: this.apellidos_papa,
        DNI_papa: this.DNI_papa,
        direccion_papa: this.direccion_papa,
        celular_papa: this.celular_papa,
        img: this.img,
        grado: this.grado,
        seccion: this.seccion,
      };
      console.log(this.data);
      const body = await this.createAlumno(this.data);
      if (!body.condicion) {
        this.isValidmsg = true;
        this.clasName = "alert alert-danger";
        this.mensaje = body.msg;
        this.condicion = false;
        setTimeout(() => {
          this.isValidmsg = false;
        }, 3000);
      } else {
        this.isValidmsg = true;
        this.condicion = true;
        this.clasName = "alert alert-success";
        this.mensaje = body.msg;
        setTimeout(() => {
          this.isValidmsg = false;
        }, 3000);
        Swal.fire("Creado", "Creado con exito", "success");
        this.$router.push({ name: "list-alumnos" });
      }
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
};
</script>
<style scoped>
.container_edu_b_3 {
  border: 5px solid rgb(177, 41, 0);
  border-radius: 20px;
  /* padding: 10px; */
  /* background: rgba(155, 36, 0, 0.8); */
  width: 1450px;
  box-sizing: border-box;
}

.tittle-edu-3 {
  text-align: center;
  font-size: 1.5em;
  text-transform: uppercase;
  color: white;
  background: #b12900;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  padding: 4px 8px;
  margin: 0;
}
.form-edu-3 {
  margin: 12px 12px;
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr 1fr 1fr;
}

.form-edu-3 div:nth-child(1) input {
  margin: 0 10px 0 10px;
  width: 95%;
}
.form-edu-3 div:nth-child(2) input {
  margin: 0 10px 0 10px;
  width: 95%;
}
.form-edu-3 div:nth-child(3) input {
  margin: 0 10px 0 10px;
  width: 95%;
}
.form-edu-3 div:nth-child(4) input {
  margin: 0 10px 0 10px;
  width: 95%;
}
.form-edu-3 div:nth-child(5) input {
  margin: 0 10px 0 10px;
  width: 95%;
}
.form-edu-3 div:nth-child(6) input {
  margin: 0 10px 0 10px;
  width: 95%;
}
.form-edu-3 div:nth-child(7) input {
  margin: 0 10px 0 10px;
  width: 95%;
}
.form-edu-3 div:nth-child(8) input {
  margin: 0 10px 0 10px;
  width: 95%;
}
.form-edu-3 div:nth-child(10) input {
  margin: 0 10px 0 10px;
  width: 95%;
}
.form-edu-3 div:nth-child(11) input {
  margin: 0 10px 0 10px;
  width: 95%;
}
.form-edu-3 div:nth-child(12) input {
  margin: 0 10px 0 10px;
  width: 95%;
}
.form-edu-3 div:nth-child(13) input {
  margin: 0 10px 0 10px;
  width: 95%;
}
.form-edu-3 div:nth-child(14) input {
  margin: 0 10px 0 10px;
  width: 95%;
}
.form-edu-3 div:nth-child(15) input {
  margin: 0 10px 0 10px;
  width: 95%;
}
.form-edu-3 div:nth-child(16) input {
  margin: 0 10px 0 10px;
  width: 95%;
}
.form-edu-3 div:nth-child(17) input {
  margin: 0 10px 0 10px;
  width: 95%;
}
.form-edu-3 div:nth-child(18) input {
  margin: 0 10px 0 10px;
  width: 95%;
}
.form-edu-3 div:nth-child(19) input {
  margin: 0 10px 0 10px;
  width: 95%;
}
.form-edu-3 div:nth-child(20) input {
  margin: 0 10px 0 10px;
  width: 95%;
}
.form-edu-3 div:nth-child(21) input {
  margin: 0 10px 0 10px;
  width: 95%;
}

.form-edu-3 div select {
  margin: 0 10px 0 10px;
  width: 95%;
}
.cont-img-edu-3 {
  display: grid;
}
.img-edu-3 {
  justify-self: center;
  /* content: ""; */
  /* width: 283px; */
  height: 200px;
}
.cont-img-edu-3 input {
  /* padding: 50px; */
  margin: 30px 0 0 0;
}
.boton-edu-g-3 {
  place-self: center;
  width: 150px;
  margin: 0;
}
.boton-edu-g-3 .boton-edu-3 {
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

.boton-edu-g-3 .boton-edu-3:hover {
  /*background: #c62f00;*/
  /* border-color: #721b00; */
  background-position: right;
  color: white;
}
@media (max-width: 960px) {
  .container_edu_b_3 {
    width: fit-content;
  }
}
</style>