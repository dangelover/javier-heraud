<template>
  <div class="week-g">
    <h1>SEMANA N° {{ semana.numero_semana }}</h1>
    <tbody v-if="isLoading">
      <tr>
        <div class="spinner-border text-primary" role="status">
          <span class="sr-only"></span>
        </div>
      </tr>
    </tbody>
    <TemaList v-else v-for="tema in temas" :key="tema.id" :tema="tema" />
  </div>
</template>

<script>
import { defineAsyncComponent } from "@vue/runtime-core";
import { mapState, mapActions } from "vuex";
export default {
  props: {
    semana: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      temas: [],
    };
  },
  components: {
    TemaList: defineAsyncComponent(() => import("../components/TemaList.vue")),
  },
  computed: {
    ...mapState("alumno", {
      isLoading: "isLoading",
    }),
  },
  methods: {
    ...mapActions("alumno", ["loadTemas"]),
    async ListaTemas() {
      const { temas } = await this.loadTemas(this.semana.numero_semana);
      this.temas = temas;
      console.log(this.temas);
    },
  },
  created() {
    this.ListaTemas();
  },
};
</script>

<style scoped>
.week-g {
  width: 100%;
  /* background: yellow; */
  border: 2px solid #c62f00;
}
h1 {
  text-align: center;
  background: #c62f00;
  color: white;
  margin: 0;
}
</style>