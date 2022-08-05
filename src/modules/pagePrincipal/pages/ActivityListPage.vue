<template>
  <h1>Actividades y Comunicados</h1>
  <div v-if="isLoading">
    <div class="spinner-border text-primary" role="status">
      <span class="sr-only"></span>
    </div>
  </div>
  <ActivityLista
    v-for="actividad in actividades"
    :key="actividad.id"
    :actividad="actividad"
  />
</template>

<script>
import { defineAsyncComponent } from "@vue/runtime-core";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      actividades: [],
    };
  },
  components: {
    ActivityLista: defineAsyncComponent(() =>
      import("../components/ActivityList.vue")
    ),
  },
  methods: {
    ...mapActions("principal", ["loadActivities"]),
    async ListaActiviades() {
      const { actividades } = await this.loadActivities();
      console.log(actividades);
      this.actividades = actividades;
    },
  },
  created() {
    this.ListaActiviades();
  },
};
</script>

<style>
</style>