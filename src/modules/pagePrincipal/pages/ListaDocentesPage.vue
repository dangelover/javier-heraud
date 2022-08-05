<template>
  <h1>DOCENTES</h1>
  <div v-if="isLoading">
    <div class="spinner-border text-primary" role="status">
      <span class="sr-only"></span>
    </div>
  </div>
  <div v-else class="contenedor-docentes">
    <div class="conjunto-docentes">
      <DocenteLista
        v-for="docente in docentes"
        :key="docente.id"
        :docente="docente"
      />
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
    DocenteLista: defineAsyncComponent(() =>
      import("../components/DocenteLista.vue")
    ),
  },
  computed: {
    ...mapState("principal", {
      isLoading: "isLoading",
    }),
  },
  methods: {
    ...mapActions("principal", ["loadDocentes"]),
    async ListaDocentes() {
      const data = {
        numero_grado: "",
        letra_seccion: "",
      };
      const { total, docentes } = await this.loadDocentes(data);
      console.log(docentes);
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
h1 {
  text-align: center;
  color: #c62f00;
  background: white;
  margin: 0;
  padding: 50px 0;
}
.contenedor-docentes {
  background: white;
}
.contenedor-docentes > h1 {
  text-align: center;
}
.conjunto-docentes {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(565px, 1fr));
  justify-items: center;
  /* justify-content: space-evenly; */
  gap: 20px;
  margin-bottom: 20px;
}
</style>