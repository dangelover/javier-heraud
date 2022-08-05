<template>
  <div class="container_b_lal">
    <h2>ALUMNOS</h2>
    <div class="buscar_edu_lal">
      <label for="">Elegir el grado</label>
      <select v-model="grado">
        <option selected>Seleccionar un grado</option>
        <option value="1">Primero</option>
        <option value="2">Segundo</option>
        <option value="3">Tercero</option>
        <option value="4">Cuarto</option>
        <option value="5">Quinto</option>
        <option value="6">Sexto</option>
        <option value="">Todos los grados</option>
      </select>
      <label for="">Elegir la seccion</label>
      <select v-model="seccion">
        <option selected>Seleccionar una sección</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
        <option value="D">D</option>
        <option value="E">E</option>
        <option value="">Todas las secciones</option>
      </select>
      <button @click="ListarAlumnos" class="buscar-button-edu login-button">
        <i class="fas fa-search"> Buscar</i>
      </button>
      <button @click="ListaAlumnos" class="buscar-button-edu login-button">
        <i class="fas fa-users"> Mostrar todos</i>
      </button>
      <div class="container_c_lal">
        <router-link
          class="container_d_lal h_h"
          :to="{ name: 'created-alumno' }"
        >
          <button class="primary-button login-button">
            <i class="far fa-user-plus"></i>
          </button>
        </router-link>
      </div>
    </div>

    <div v-if="validMessage" class="alert alert-danger" role="alert">
      {{ mensaje }}
    </div>

    <div class="container_e_lal">
      <table class="tabla_edu_lal">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Direccion</th>
            <th scope="col">DNI</th>
            <th scope="col">Grado</th>
            <th scope="col">Seccion</th>
            <th scope="col">ESTADO</th>
            <th scope="col">ACCIONES</th>
          </tr>
        </thead>
        <tbody v-if="isLoading">
          <tr>
            <div class="spinner-border text-primary" role="status">
              <span class="sr-only"></span>
            </div>
          </tr>
        </tbody>
        <AlumnoList
          v-else
          v-for="alumno in alumnos"
          :key="alumno.id"
          :alumno="alumno"
        />
      </table>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "@vue/runtime-core";
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  data() {
    return {
      alumnos: null,
      grado: "",
      seccion: "",
      validMessage: false,
      mensaje: "",
    };
  },
  components: {
    AlumnoList: defineAsyncComponent(() =>
      import("../components/AlumnoList.vue")
    ),
  },
  computed: {
    ...mapState("administrador", {
      isLoading: "isLoading",
    }),
  },
  methods: {
    ...mapActions("administrador", ["loadAlumnos"]),
    async ListaAlumnos() {
      const data = {
        numero_grado: "",
        letra_seccion: "",
      };
      const { total, alumnos } = await this.loadAlumnos(data);
      this.alumnos = alumnos;
      console.log(this.alumnos);
    },
    async ListarAlumnos() {
      const datos = {
        numero_grado: this.grado,
        letra_seccion: this.seccion,
      };
      console.log(datos);
      const { total, alumnos } = await this.loadAlumnos(datos);
      if (!alumnos.length) {
        this.validMessage = true;
        this.mensaje = "no existen docentes en este grado";
        setTimeout(() => {
          this.validMessage = false;
          this.mensaje = "";
        }, 2000);
      }
      this.alumnos = alumnos;
      console.log(this.alumnos);
    },
  },
  created() {
    this.ListaAlumnos();
  },
};
</script>

<style scoped>
.container_b_lal {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
}
h2 {
  text-align: center;
  color: #c62f00;
  font-weight: bold;
}
.container_c_lal {
  display: grid;
  justify-content: end;
}
.buscar_edu_lal {
  display: grid;
  grid-template-columns: 114px 200px 127px 200px 98px 152px auto;
  gap: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
}
.h_h {
  height: 28px;
}
.container_e_lal {
  align-self: center;
  overflow-x: auto;
  width: 100%;
}
.container_e_lal .tabla_edu_lal {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  border: 1px solid #ddd;
}
.container_e_lal .tabla_edu_lal > thead > tr > th {
  font-weight: normal;
  text-align: center;
  /*background:#064F68;*/
  background: #c62f00;
  color: white;
}

.primary-button {
  background-color: white;
  border-radius: 8px;
  border: none;
  color: #c62f00;
  height: 50px;
  width: auto;
  padding: 0 15px;
  font-size: "10px";
  font-weight: bold;
  transition: 0.5s;
}
.primary-button:hover {
  background-color: #c62f00;
  color: white;
}
.buscar-button-edu {
  background-color: #c62f00;
  border-radius: 8px;
  border: none;
  color: white;
  height: fit-content;
  width: auto;
  padding: 0 15px;
  font-size: "10px";
  font-weight: bold;
  transition: 0.5s;
}
.buscar-button-edu:hover {
  background-color: #7c1d00;
  color: white;
}
</style>