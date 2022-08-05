<template>
  <div class="wrapper">
    <div class="section">
      <div class="top_navbar">
        <div></div>
        <div>
          <img
            src="https://res.cloudinary.com/dqsh99vzm/image/upload/v1646361220/imagenes-escuela/logos/Grupo_1_cjydiw.png"
            alt=""
          />
        </div>
        <div class="d-flex">
          <button class="btn btn-danger" @click="onLogout">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-box-arrow-in-left"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0v-2z"
              />
              <path
                fill-rule="evenodd"
                d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div class="container_edu_a">
        <!-- el router view es donde se cambia la vista de acuerdo a la ruta que
        queremos mostrar, es el papá de las rutas -->
        <router-view></router-view>
      </div>
      <div class="sidebar">
        <div class="profile">
          <img :src="user.img" alt="profile_picture" />
          <h3>{{ user.nombre }}</h3>
          <p>{{ rol }}</p>
        </div>
        <SideBar />
      </div>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "@vue/runtime-core";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      user: null,
      rol: null,
    };
  },
  components: {
    SideBar: defineAsyncComponent(() => import("../components/SideBar")),
  },
  methods: {
    ...mapActions("auth", ["logout"]),
    LoadingUser() {
      const usuario = localStorage.getItem("usuario");
      console.log(usuario);
      this.user = JSON.parse(usuario);
      if (this.user.rol === "ADMIN_ROLE") {
        this.rol = "ADMINISTRADOR";
      } else if (this.user.rol === "DOCENTE_ROLE") {
        this.rol = "DOCENTE";
      } else {
        this.rol = "ALUMNO";
      }
    },
    onLogout() {
      this.logout();
      this.$router.push({ name: "auth" });
    },
  },
  created() {
    this.LoadingUser();
  },
};
</script>

<style scoped>
* {
  list-style: none;
  text-decoration: none;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Open Sans", sans-serif;
}

body {
  background: #f5f6fa;
}

.wrapper .sidebar {
  background: #c62f00;
  position: fixed;
  top: 0;
  left: 0;
  width: 225px;
  height: 100%;
  padding: 20px 0;
  transition: all 0.5s ease;
}

.wrapper .sidebar .profile {
  margin-bottom: 30px;
  text-align: center;
}

.wrapper .sidebar .profile img {
  display: block;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 0 auto;
}

.wrapper .sidebar .profile h3 {
  color: #ffffff;
  margin: 10px 0 5px;
}

.wrapper .sidebar .profile p {
  color: rgb(206, 240, 253);
  font-size: 14px;
}

.wrapper .sidebar ul li a {
  display: block;
  padding: 13px 30px;
  border-bottom: 1px solid #10558d;
  color: rgb(241, 237, 237);
  font-size: 16px;
  position: relative;
}

.wrapper .sidebar ul li a .icon {
  color: #dee4ec;
  width: 30px;
  display: inline-block;
}

.wrapper .sidebar ul li a:hover,
.wrapper .sidebar ul li a.active {
  color: #0de21f;

  background: white;
  border-right: 2px solid rgb(5, 68, 104);
}

.wrapper .sidebar ul li a:hover .icon,
.wrapper .sidebar ul li a.active .icon {
  color: #0c7db1;
}

.wrapper .sidebar ul li a:hover:before,
.wrapper .sidebar ul li a.active:before {
  display: block;
}

.wrapper .section {
  display: flex; /**  */
  align-items: center; /** */
  gap: 10px; /** */
  flex-direction: column; /** */
  width: calc(100% - 225px);
  margin-left: 225px;
  transition: all 0.5s ease;
}

.wrapper .section .top_navbar {
  background: #c62f00;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  width: calc(100vw - 225px); /** */
}
.top_navbar div:nth-child(2) img {
  width: 40%; /** */
}

.wrapper .section .top_navbar .hamburger a {
  font-size: 28px;
  color: #f4fbff;
}

.wrapper .section .top_navbar .hamburger a:hover {
  color: #0de21f;
}

/** ---------------------------------------------------------------------------------*/

/* .wrapper .section .container {
    margin: 30px;
    background: #fff;
    padding: 50px;
    line-height: 28px;
  } */

.wrapper .section .container_edu_a {
  line-height: 28px;
  width: calc(90vw - 225px);
  display: grid;
  justify-items: center;
  grid-template-rows: auto;
}

body.active .wrapper .sidebar {
  left: -225px;
}

body.active .wrapper .section {
  margin-left: 0;
  width: 100%;
}
/* .container_b {
    width: 100%;
    margin-bottom: 10px;
    justify-content: end;
  }

  .primary-button {
    background-color: rgb(0, 240, 140);
    border-radius: 8px;
    border: none;
    color: "blanco";
    height: 50px;
    width: 100px;
    cursor: pointer;
    font-size: "10px";
    font-weight: bold;
  } */
.btn-danger {
  color: #ffffff;
  background-color: #bb2d3b;
  border: 2px solid #ffffff;
  transition: 0.5s;
}

.btn-danger:focus,
.btn-danger:hover {
  color: #bb2d3b;
  background-color: #ffffff;
  border: 2px solid #b02a37;
  transition: 0.5s;
}
</style>