<template>
  <div class="contenedor-general-g">
    <h1>Mis Compañeros</h1>
    <div class="d-flex justify-content-center contenedor-header-edu">
      <div>
        <p>Grado:</p>
        <p>{{ gradoAlumno }}</p>
      </div>
      <div>
        <p>Sección:</p>
        <p>{{ seccionAlumno }}</p>
      </div>
    </div>
    <div v-if="isLoading" class="spinner-border text-primary" role="status">
      <span class="sr-only"></span>
    </div>
    <div class="contenedor-general">
      <ParnertList
        v-for="partner in partners"
        :key="partner.id"
        :partner="partner"
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
      partners: null,
      gradoAlumno: "",
      seccionAlumno: "",
    };
  },
  components: {
    ParnertList: defineAsyncComponent(() =>
      import("../components/CompañerosList.vue")
    ),
  },
  computed: {
    ...mapState("alumno", {
      isLoading: "isLoading",
    }),
  },
  methods: {
    ...mapActions("alumno", ["loadCompañeros", "myPerfilAlumno"]),
    async ListPartners() {
      const usuario = localStorage.getItem("usuario");
      this.user = JSON.parse(usuario);
      const body = await this.myPerfilAlumno(this.user.DNI);
      console.log(body);
      const { grado, seccion } = body.alumno;
      this.gradoAlumno = grado;
      this.seccionAlumno = seccion;
      const data = {
        numero_grado: grado,
        letra_seccion: seccion,
      };
      const { alumnos } = await this.loadCompañeros(data);
      //   console.log(alumnos);
      this.partners = alumnos;
    },
  },
  created() {
    this.ListPartners();
  },
};
</script>

<style scoped>
.contenedor-general-g {
  width: 100%;
  display: grid;
  gap: 10px;
  padding-bottom: 10px;
}
.contenedor-general-g h1 {
  margin: 0;
  text-align: center;
  color: #c62f00;
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
  gap: 10px;
}
</style>