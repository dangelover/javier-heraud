<template>
  <h1>Mis Cursos</h1>
  <div v-if="isLoading" class="spinner-border text-primary" role="status">
    <span class="sr-only"></span>
  </div>
  <div v-else class="cursos-e">
    <CursosList v-for="curso in cursos" :key="curso.id" :curso="curso" />
  </div>
</template>

<script>
import { defineAsyncComponent } from "@vue/runtime-core";
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      cursos: [],
    };
  },
  components: {
    CursosList: defineAsyncComponent(() =>
      import("../components/CursosList.vue")
    ),
  },
  computed: {
    ...mapState("docente", {
      isLoading: "isLoading",
    }),
  },
  methods: {
    ...mapActions("docente", ["loadCursos"]),
    async ListarCursos() {
      const { cursos } = await this.loadCursos();
      console.log(cursos);
      this.cursos = cursos;
    },
  },
  created() {
    this.ListarCursos();
  },
};
</script>
<style scoped>
.cursos-e {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, 285.5px);
  justify-content: center;
  gap: 20px;
}
.container_edu_a h1 {
  margin: 0;
  text-align: center;
  color: #c62f00;
}
</style>