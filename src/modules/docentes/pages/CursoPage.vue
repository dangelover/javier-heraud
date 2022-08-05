<template>
  <div class="curs-all">
    <h1>{{ nombre_curso }}</h1>
    <div class="container">
      <div class="add-w-t">
        <router-link :to="{ name: 'create-week', params: { id: ID } }">
          <div class="button-edu">
            <button type="button" class="primary-button">
              <i class="fas fa-calendar-week"> SEMANA</i>
            </button>
          </div>
        </router-link>
        <router-link :to="{ name: 'create-theme' }">
          <div class="button-edu">
            <button type="button" class="primary-button">
              <i class="fas fa-books"> TEMA</i>
            </button>
          </div>
        </router-link>
      </div>
    </div>
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
    ...mapState("docente", {
      isLoading: "isLoading",
    }),
  },
  methods: {
    ...mapActions("docente", ["loadSemanas", "loadCurso"]),
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
.add-w-t {
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
}
.sep-week {
  display: grid;
  gap: 20px;
  margin-bottom: 10px;
}
.button-edu {
  display: flex;
  justify-content: center;
  gap: 10px;
  /* text-align: center; */
}
.primary-button {
  background-color: white;
  border-radius: 8px;
  border: none;
  color: #c62f00;
  height: 50px;
  width: 200px;
  padding: 0 15px;
  font-size: "10px";
  font-weight: bold;
  transition: 0.5s;
  margin-bottom: 10px;
}
.primary-button:hover {
  background-color: #c62f00;
  color: white;
}
@media (min-width: 942px) {
  .curs-all {
    width: 637px;
  }
}
</style>