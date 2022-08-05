<template>
  <div class="cont-cntrl">
    <div class="container_edu_b_cup">
      <h2 class="tittle-edu-cup">Crear Tarea</h2>
      <form @submit.prevent="onCreateWork" class="form-edu-cup">
        <div>
          <label for="">Nombre de la tarea</label>
          <input
            type="text"
            class="form-control"
            placeholder="Nombre de la tarea"
            v-model="nombre_tarea"
          />
        </div>
        <div>
          <label for="">Descripcion de la tarea</label>
          <input
            type="text"
            class="form-control"
            placeholder="Nombre de la tarea"
            v-model="descripcion_tarea"
          />
        </div>
        <div>
          <label for="">Fecha de entrega</label>
          <input
            type="date"
            class="form-control"
            pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
            v-model="fecha_envio"
          />
        </div>
        <div>
          <label for=""
            >Material de Trabajo <i class="fab fa-google-drive"></i
          ></label>
          <input
            type="text"
            class="form-control"
            placeholder="URL"
            v-model="archivo"
          />
        </div>
        <div className="form-group boton-edu-g-cup">
          <input type="submit" className="boton-edu-cup" value="Crear Tarea" />
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
  data() {
    return {
      nombre_tarea: "",
      descripcion_tarea: "",
      fecha_envio: "",
      archivo: "",
      tema: "",
      numero_semana: "",
      grado: "",
      seccion: "",
      data: null,
      mensaje: "",
      isValidmsg: false,
      clasName: "alert alert-danger",
      condicion: false,
    };
  },
  methods: {
    ...mapActions("docente", ["createWork"]),
    async onCreateWork() {
      const { id, numero_semana } = this.$route.query;
      this.tema = id;
      this.numero_semana = numero_semana;
      //   console.log(id, numero_semana);
      if (this.nombre_tarea.length === 0) {
        // this.isValid = true;
        this.mensaje = "el nombre de la tarea es necesario";
        Swal.fire("Error", this.mensaje, "error");
        setTimeout(() => {
          this.mensaje = "";
          // this.isValid = false;
        }, 2000);
        return;
      }
      if (this.descripcion_tarea.length === 0) {
        // this.isValid = true;
        this.mensaje = "La descripción de la tarea es necesaria";
        Swal.fire("Error", this.mensaje, "error");
        setTimeout(() => {
          this.mensaje = "";
          // this.isValid = false;
        }, 2000);
        return;
      }
      if (this.fecha_envio.length === 0) {
        // this.isValid = true;
        this.mensaje = "La fecha de envio de la tarea es necesaria";
        Swal.fire("Error", this.mensaje, "error");
        setTimeout(() => {
          this.mensaje = "";
          // this.isValid = false;
        }, 2000);
        return;
      }
      if (this.archivo) {
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
      }
      const grado_alumno = localStorage.getItem("grado");
      this.grado = grado_alumno;
      const seccion_alumno = localStorage.getItem("seccion");
      this.seccion = seccion_alumno;
      this.data = {
        nombre_tarea: this.nombre_tarea,
        descripcion_tarea: this.descripcion_tarea,
        fecha_envio: this.fecha_envio,
        archivo: this.archivo,
        tema: this.tema,
        numero_semana: this.numero_semana,
        grado: this.grado,
        seccion: this.seccion,
      };
      //   console.log(this.data);
      const body = await this.createWork(this.data);
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
        this.$router.push({ name: "mis-cursos-docente" });
      }
    },
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