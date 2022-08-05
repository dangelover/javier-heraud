<template>
  <div class="contenedor-general-g">
    <div class="d-flex justify-content-center contenedor-header-edu">
      <div>
        <p>Grado:</p>
        <p>{{ gradoDocente }}</p>
      </div>
      <div>
        <p>Seccion:</p>
        <p>{{ seccionDocente }}</p>
      </div>
      <div class="container_c">
        <router-link class="container_d" :to="{ name: 'create-alumno' }">
          <button class="primary-button login-button">
            <i class="far fa-user-plus"></i>
          </button>
        </router-link>
      </div>
    </div>
    <div v-if="isLoading" class="spinner-border text-primary" role="status">
      <span class="sr-only"></span>
    </div>
    <!-- <AlumnosList
      
      v-for="alumno in alumnos"
      :key="alumno.id"
      :alumno="alumno"
    /> -->
    <div v-else class="contenedor-general">
      <AlumnosList
        v-for="alumno in alumnos"
        :key="alumno.id"
        :alumno="alumno"
      />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "@vue/runtime-core";
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      user: null,
      alumnos: null,
      gradoDocente: "",
      seccionDocente: "",
    };
  },
  components: {
    AlumnosList: defineAsyncComponent(() =>
      import("../components/AlumnosList.vue")
    ),
  },
  computed: {
    ...mapState("docente", {
      isLoading: "isLoading",
    }),
  },
  methods: {
    ...mapActions("docente", ["loadAlumnos", "myPerfilDocente"]),
    async ListarAlumnos() {
      const usuario = localStorage.getItem("usuario");
      this.user = JSON.parse(usuario);
      const body = await this.myPerfilDocente(this.user.DNI);
      console.log(body);
      const { grado, seccion } = body.docente;
      this.gradoDocente = grado;
      this.seccionDocente = seccion;
      const data = {
        numero_grado: grado,
        letra_seccion: seccion,
      };
      const { alumnos } = await this.loadAlumnos(data);
      //   console.log(alumnos);
      this.alumnos = alumnos;
    },
  },
  created() {
    this.ListarAlumnos();
  },
};
</script>

<style scoped>
.contenedor-general-g {
  width: 100%;
  display: grid;
  gap: 25px;
}
.contenedor-header-edu {
  display: flex;
  gap: 50px;
}
.contenedor-header-edu div {
  display: flex;
  gap: 20px;
  align-items: center;
}
.contenedor-header-edu div p {
  margin: 0;
  font-size: 24px;
}
.contenedor-header-edu div p:nth-child(1) {
  color: red;
}
.contenedor-general {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, 400px);
  justify-content: center;
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
</style>