<template>
  <div class="container_b_lu">
    <h2>USUARIOS</h2>
    <div class="container_c_lu">
      <input type="search" v-model="search" name="" id="" />
      <button @click="onSearch" class="buscar-button-edu login-button">
        <i class="fas fa-search"> Buscar</i>
      </button>
      <button @click="ListarUsuarios" class="buscar-button-edu login-button">
        <i class="fas fa-users"> Mostrar todos</i>
      </button>
      <div class="container_c_lal">
        <router-link class="container_d_lu h_h" :to="{ name: 'create-user' }">
          <button class="primary-button login-button">
            <i class="far fa-user-plus"></i>
          </button>
        </router-link>
      </div>
    </div>

    <div v-if="validMessage" class="alert alert-danger" role="alert">
      {{ mensaje }}
    </div>

    <div class="container_e_lu">
      <table class="tabla_edu_lu">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Correo</th>
            <th scope="col">DNI</th>
            <th scope="col">ROL</th>
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
        <UserList
          v-else
          v-for="usuario in usuarios"
          :key="usuario.id"
          :usuario="usuario"
        />
      </table>
    </div>
  </div>
</template>
<script>
import { defineAsyncComponent } from "vue";
import { mapActions, mapGetters, mapState } from "vuex";
import UserList from "../components/UserListPage.vue";
export default {
  data() {
    return {
      usuarios: null,
      user: null,
      rol: null,
      estado: null,
      search: "",
      validMessage: false,
      mensaje: "",
    };
  },
  components: {
    UserList,
  },
  computed: {
    ...mapState("administrador", {
      isLoading: "isLoading",
    }),
  },
  methods: {
    ...mapActions("administrador", ["loadUsers", "searchUsers"]),
    async ListarUsuarios() {
      const { total, usuarios } = await this.loadUsers();
      this.usuarios = usuarios;
      console.log(this.usuarios);
    },
    async onSearch() {
      console.log(this.search);
      // const users = this.usuarios.find((user) => user.DNI === this.search);
      // console.log(users);
      const { usuarios } = await this.searchUsers(this.search);
      if (!usuarios.length) {
        this.search = "";
        this.validMessage = true;
        this.mensaje = "No se encontro usuarios. Recargue la pagina";
        setTimeout(() => {
          this.validMessage = false;
          this.mensaje = "";
        }, 2000);
      }
      this.usuarios = usuarios;
    },
  },
  created() {
    this.ListarUsuarios();
  },
};
</script>

<style scoped>
.container_b_lu {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
h2 {
  text-align: center;
  color: #c62f00;
  margin: 0;
}

.container_c_lu {
  display: grid;
  grid-template-columns: 300px 98px 152px auto;
  gap: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
}
.h_h {
  height: 28px;
}
.container_c_lal {
  display: grid;
  justify-content: end;
}

.container_e_lu {
  align-self: center;
  overflow-x: auto;
  width: 100%;
}
.container_e_lu .tabla_edu_lu {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  border: 1px solid #ddd;
}
.container_e_lu .tabla_edu_lu > thead > tr > th {
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
.buscar-button-edu {
  background-color: #c62f00;
  border-radius: 8px;
  border: none;
  color: white;
  height: fit-content;
  width: auto;
  padding: 0 15px;
  font-size: "10px";
  font-weight: bold;
  transition: 0.5s;
}
.buscar-button-edu:hover {
  background-color: #7c1d00;
  color: white;
}
</style>