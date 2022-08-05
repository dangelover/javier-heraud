<template>
  <div class="container_b_la">
    <h2>ADMINISTRATIVOS</h2>
    <div class="container_c_la">
      <router-link class="container_d_la" :to="{ name: 'created-admin' }">
        <button class="primary-button login-button">
          <i class="far fa-user-plus"></i>
        </button>
      </router-link>
    </div>

    <div class="container_e_la">
      <table class="tabla_edu_la">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Correo</th>
            <th scope="col">Direccion</th>
            <th scope="col">DNI</th>
            <th scope="col">Celular</th>
            <th scope="col">Cargo</th>
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
        <AdminList
          v-else
          v-for="administrador in administradores"
          :key="administrador.id"
          :administrador="administrador"
        />
      </table>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "@vue/runtime-core";
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      administradores: [],
    };
  },
  components: {
    AdminList: defineAsyncComponent(() =>
      import("../components/AdminList.vue")
    ),
  },
  computed: {
    ...mapState("administrador", {
      isLoading: "isLoading",
    }),
  },
  methods: {
    ...mapActions("administrador", ["loadAdministradores"]),
    async ListaAdmins() {
      const { total, administradores } = await this.loadAdministradores();
      console.log(administradores);
      this.administradores = administradores;
    },
  },
  created() {
    this.ListaAdmins();
  },
};
</script>

<style scoped>
.container_b_la {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
}
h2 {
  text-align: center;
  color: #c62f00;
}
.container_c_la {
  display: grid;
  justify-content: end;
}
.container_e_la {
  align-self: center;
  overflow-x: auto;
  width: 100%;
}
.container_e_la .tabla_edu_la {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  border: 1px solid #ddd;
}
.container_e_la .tabla_edu_la > thead > tr > th {
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
</style>