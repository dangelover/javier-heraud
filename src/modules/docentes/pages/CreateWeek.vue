<template>
  <div class="cont-cntrl">
    <div class="container_edu_b_cup">
      <h2 class="tittle-edu-cup">Crear Semana</h2>
      <form @submit.prevent="onCreateWeek" class="form-edu-cup">
        <div>
          <label for="">Numero de semana</label>
          <input
            type="number"
            className="form-control"
            placeholder="Numero de semana"
            v-model="numero_semana"
          />
        </div>
        <div className="form-group boton-edu-g-cup">
          <input type="submit" className="boton-edu-cup" value="Crear Semana" />
        </div>
      </form>
      <div v-if="isValidmsg" :class="clasName" role="alert">
        <p>
          {{ condicion ? "Alumno creado" : `Posibles errores: ${mensaje}` }}
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
      numero_semana: "",
      mensaje: "",
      mensaje: "",
      isValidmsg: false,
      clasName: "alert alert-danger",
      condicion: false,
    };
  },
  methods: {
    ...mapActions("docente", ["createWeek", "myPerfilDocente"]),
    async onCreateWeek() {
      new Swal({
        title: "Espere por favor",
        allowOutsideClick: false,
      });
      const semana = this.numero_semana.toString();
      console.log(typeof semana);
      if (this.numero_semana.toString().length === 0) {
        this.mensaje = "el numero de semana es necesario";
        Swal.fire("Error", this.mensaje, "error");
        setTimeout(() => {
          this.mensaje = "";
          // this.isValid = false;
        }, 2000);
        return;
      }
      const usuario = localStorage.getItem("usuario");
      this.user = JSON.parse(usuario);
      const body = await this.myPerfilDocente(this.user.DNI);
      console.log(body);
      const { grado, seccion } = body.docente;
      this.gradoDocente = grado;
      this.seccionDocente = seccion;
      const data = {
        id: this.id,
        numeroSemana: semana,
        numero_grado: grado,
        letra_seccion: seccion,
      };
      console.log(data);
      const respuesta = await this.createWeek(data);
      if (!respuesta.condicion) {
        this.isValidmsg = true;
        this.clasName = "alert alert-danger";
        this.mensaje = respuesta.msg;
        this.condicion = false;
        setTimeout(() => {
          this.isValidmsg = false;
        }, 3000);
      } else {
        this.isValidmsg = true;
        this.condicion = true;
        this.clasName = "alert alert-success";
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