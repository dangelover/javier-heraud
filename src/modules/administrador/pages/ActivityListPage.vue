<template>
  <div>
    <h1>Actividades</h1>
    <div class="boton_na">
      <router-link class="container_b" :to="{ name: 'created-activity' }">
        <button class="primary-button login-button">
          <i class="far fa-plus"> Nueva Actividad</i>
        </button>
      </router-link>
    </div>

    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">Nombre de Actividad</th>
          <th scope="col">Descripcion de Actividad</th>
          <th scope="col">Imagen de la Actividad</th>
          <th scope="col">Estado</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody v-if="isLoading">
        <tr>
          <div class="spinner-border text-primary" role="status">
            <span class="sr-only"></span>
          </div>
        </tr>
      </tbody>
      <ActivityLista
        v-for="actividad in actividades"
        :key="actividad.id"
        :actividad="actividad"
      />
    </table>
  </div>
</template>
<script>
import { defineAsyncComponent } from "@vue/runtime-core";
import { mapState, mapActions } from "vuex";
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
  computed: {
    ...mapState("administrador", {
      isLoading: "isLoading",
    }),
  },
  methods: {
    ...mapActions("administrador", ["loadActivities"]),
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

<style scoped>
h1 {
  color: #c62f00;
  text-transform: uppercase;
  margin: 10px 0 0 0;
  text-align: center;
}
tr {
  background: #c62f00;
}
tr > th {
  color: white;
}
.boton_na {
  display: grid;
  justify-content: end;
  margin-bottom: 10px;
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