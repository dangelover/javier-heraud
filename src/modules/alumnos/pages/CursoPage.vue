<template>
  <div class="curs-all">
    <h1>{{ nombre_curso }}</h1>
    <div v-if="isLoading" class="spinner-border text-primary" role="status">
      <span class="sr-only"></span>
    </div>
    <div v-else class="sep-week">
      <SemanaList v-for="semana in semanas" :key="semana.id" :semana="semana" />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "@vue/runtime-core";
import { mapActions, mapState } from "vuex";
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      semanas: null,
      verified: false,
      ID: this.id,
      nombre_curso: "",
    };
  },
  components: {
    SemanaList: defineAsyncComponent(() =>
      import("../components/SemanaList.vue")
    ),
  },
  computed: {
    ...mapState("alumno", {
      isLoading: "isLoading",
    }),
  },
  methods: {
    ...mapActions("alumno", ["loadSemanas", "loadCurso"]),
    async listarSemanas() {
      const { semanas } = await this.loadSemanas();
      let newSemanas;
      newSemanas = semanas.filter((semana) => semana.curso === this.id);
      // console.log(newSemanas);
      const numeros = newSemanas.map((semana) => semana.numero_semana);
      console.log(numeros);
      localStorage.setItem("numeros", JSON.stringify(numeros));
      this.semanas = newSemanas;
      // console.log(this.semanas);
    },
    async LoadOneCurso() {
      const body = await this.loadCurso(this.id);
      console.log(body);
      const { condicion, curso } = body;
      this.nombre_curso = curso.nombre_curso;
      console.log(this.nombre_curso);
    },
  },
  created() {
    this.listarSemanas();
    this.LoadOneCurso();
  },
};
</script>

<style scoped>
.curs-all {
  width: 100%;
}
h1 {
  color: #c62f00;
  text-align: center;
  text-transform: uppercase;
}
.sep-week {
  display: grid;
  gap: 20px;
  margin-bottom: 10px;
}
@media (min-width: 942px) {
  .curs-all {
    width: 637px;
  }
}
</style>