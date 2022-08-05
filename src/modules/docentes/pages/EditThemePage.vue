<template>
  <div class="cont-cntrl">
    <div class="container_edu_b_cup">
      <h2 class="tittle-edu-cup">Editar Tema</h2>
      <form @submit.prevent="onUpdateTheme" class="form-edu-cup">
        <div>
          <label for="">Nombre del Tema</label>
          <input
            type="text"
            className="form-control"
            placeholder="Nombre"
            v-model="nombre_tema"
          />
        </div>
        <div>
          <label for=""
            >Material de Clase<i class="fab fa-google-drive"></i
          ></label>
          <input
            type="text"
            className="form-control"
            placeholder="URL"
            v-model="archivo"
          />
        </div>
        <div>
          <label for="">Elegir el numero de semana</label>
          <select
            v-model="numero_semana"
            class="form-select"
            aria-label="Default select example"
          >
            <option v-for="numero in numeros" :value="numero" :key="numero.id">
              {{ numero }}
            </option>
          </select>
        </div>
        <div className="form-group boton-edu-g-cup">
          <input
            type="submit"
            className="boton-edu-cup"
            value="Actualizar Tema"
          />
        </div>
      </form>
      <div v-if="isValidmsg" :class="clasName" role="alert">
        <p>
          {{ condicion ? "Tema creado" : `Posibles errores: ${mensaje}` }}
        </p>
      </div>
    </div>
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
      nombre_tema: "",
      numero_semana: "",
      archivo: "",
      grado: "",
      seccion: "",
      data: null,
      mensaje: "",
      isValidmsg: false,
      clasName: "alert alert-danger",
      condicion: false,
    };
  },
  computed: {
    numeros() {
      let numeros = localStorage.getItem("numeros");
      numeros = JSON.parse(numeros);
      return numeros;
    },
  },
  methods: {
    ...mapActions("docente", ["loadTheme", "updateTheme"]),
    async onLoadTheme() {
      const body = await this.loadTheme(this.id);
      const { nombre_tema, numero_semana, archivo } = body.tema;
      this.nombre_tema = nombre_tema;
      this.numero_semana = numero_semana;
      this.archivo = archivo;
    },
    async onUpdateTheme() {
      if (this.nombre_tema.length === 0) {
        // this.isValid = true;
        this.mensaje = "el nombre del tema es necesario";
        Swal.fire("Error", this.mensaje, "error");
        setTimeout(() => {
          this.mensaje = "";
          // this.isValid = false;
        }, 2000);
        return;
      }
      if (this.archivo.length === 0) {
        // this.isValid = true;
        this.mensaje = "el link del drive es necesario";
        Swal.fire("Error", this.mensaje, "error");
        setTimeout(() => {
          this.mensaje = "";
          // this.isValid = false;
        }, 2000);
        return;
      }
      const nombreArr = this.archivo.split("/");
      const drive = nombreArr[2];
      if (drive !== "drive.google.com") {
        this.mensaje = "Sube primero el archivo a su Drive";
        Swal.fire("Error", this.mensaje, "error");
        setTimeout(() => {
          this.mensaje = "";
          // this.isValid = false;
        }, 2000);
        return;
      }
      if (this.numero_semana.length === 0) {
        // this.isValid = true;
        this.mensaje = "la semana es necesaria";
        Swal.fire("Error", this.mensaje, "error");
        setTimeout(() => {
          this.mensaje = "";
          // this.isValid = false;
        }, 2000);
        return;
      }
      const grado_alumno = localStorage.getItem("grado");
      this.grado = grado_alumno;
      const seccion_alumno = localStorage.getItem("seccion");
      this.seccion = seccion_alumno;
      this.data = {
        id: this.id,
        nombre_tema: this.nombre_tema,
        numero_semana: this.numero_semana,
        archivo: this.archivo,
        grado: this.grado,
        seccion: this.seccion,
      };
      console.log(this.data);
      const body = await this.updateTheme(this.data);
      console.log(body);
      Swal.fire("Actualizado", "Actualizado con exito", "success");
      this.$router.push({ name: "mis-cursos-docente" });
    },
  },
  created() {
    this.onLoadTheme();
  },
};
</script>
<style scoped>
.cont-cntrl {
  height: 90vh;
  display: grid;
  place-items: center;
}
.container_edu_b_cup {
  border: 5px solid rgb(177, 41, 0);
  border-radius: 20px;
  /* padding: 10px; */
  /* background: rgba(155, 36, 0, 0.8); */
  width: 350px;
  box-sizing: border-box;
}
.tittle-edu-cup {
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
.form-edu-cup {
  margin: 12px 12px;
  display: grid;
  gap: 10px;
}
.form-edu-cup div input {
  margin: 0 10px 0 10px;
  width: 95%;
}
.form-edu-cup div select {
  margin: 0 10px 0 10px;
  width: 95%;
}
.boton-edu-g-cup {
  place-self: center;
  width: 150px;
  margin: 0;
}
.boton-edu-g-cup .boton-edu-cup {
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

.boton-edu-g-cup .boton-edu-cup:hover {
  /*background: #c62f00;*/
  /* border-color: #721b00; */
  background-position: right;
  color: rgb(255, 255, 255);
}
@media (max-width: 960px) {
  .container_edu_b-cup {
    width: fit-content;
  }
}
</style>