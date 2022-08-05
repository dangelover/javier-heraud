<template>
  <h2>DOCENTES</h2>
  <div class="container_b_ld">
    <div class="buscar_edu_ld">
      <label for="">Elegir el grado:</label>
      <select v-model="grado">
        <option selected>Seleccionar un grado</option>
        <option value="1">Primero</option>
        <option value="2">Segundo</option>
        <option value="3">Tercero</option>
        <option value="4">Cuarto</option>
        <option value="5">Quinto</option>
        <option value="6">Sexto</option>
      </select>
      <label for="">Elegir la seccion:</label>
      <select v-model="seccion">
        <option selected>Seleccionar una sección</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
        <option value="D">D</option>
        <option value="E">E</option>
      </select>
      <button @click="ListarDocentes" class="buscar-button-edu login-button">
        Buscar
      </button>
      <button @click="ListaDocentes" class="buscar-button-edu login-button">
        <i class="fas fa-users">Mostrar todos</i>
      </button>
      <div class="container_c_ld">
        <router-link
          class="container_d_ld h_h"
          :to="{ name: 'created-docente' }"
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

    <div class="container_e_ld">
      <table class="tabla_edu_ld">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Correo</th>
            <th scope="col">Direccion</th>
            <th scope="col">DNI</th>
            <th scope="col">Celular</th>
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
        <DocenteList
          v-else
          v-for="docente in docentes"
          :key="docente.id"
          :docente="docente"
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
      docentes: [],
      grado: "",
      seccion: "",
      validMessage: false,
      mensaje: "",
    };
  },
  components: {
    DocenteList: defineAsyncComponent(() =>
      import("../components/DocenteList.vue")
    ),
  },
  computed: {
    ...mapState("administrador", {
      isLoading: "isLoading",
    }),
  },
  methods: {
    ...mapActions("administrador", ["loadDocentes"]),
    async ListaDocentes() {
      const data = {
        numero_grado: "",
        letra_seccion: "",
      };
      const { total, docentes } = await this.loadDocentes(data);
      this.docentes = docentes;
      console.log(this.docentes);
    },
    async ListarDocentes() {
      const datos = {
        numero_grado: this.grado,
        letra_seccion: this.seccion,
      };
      console.log(datos);
      const { total, docentes } = await this.loadDocentes(datos);
      if (!docentes.length) {
        this.validMessage = true;
        this.mensaje = "no existen docentes en este grado. Recargue la pagina";
        setTimeout(() => {
          this.validMessage = false;
          this.mensaje = "";
        }, 2000);
      }
      this.docentes = [];
      this.docentes = docentes;
      console.log(this.docentes);
    },
  },
  created() {
    this.ListaDocentes();
  },
};
</script>
<style scoped>
.container_b_ld {
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
.container_c_ld {
  display: grid;
  justify-content: end;
}
.h_h {
  height: 28px;
}
.buscar_edu_ld {
  display: grid;
  grid-template-columns: 114px 200px 127px 200px 100px 150px auto;
  gap: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
}
.container_e_ld {
  align-self: center;
  overflow-x: auto;
  width: 100%;
}
.container_e_ld .tabla_edu_ld {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  border: 1px solid #ddd;
}
.container_e_ld .tabla_edu_ld > thead > tr > th {
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