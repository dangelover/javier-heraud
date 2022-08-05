<template>
  <main class="card">
    <header>
      <img :src="usuario.img" alt="" />
    </header>

    <section>
      <h2>{{ usuario.nombre }}</h2>
      <h3>{{ usuario.correo }}</h3>
      <h3>{{ usuario.DNI }}</h3>
      <p>{{ usuario.rol }}</p>
    </section>

    <footer>
      <p>I.E. Javier Heraud N° 31593</p>
    </footer>
  </main>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      usuario: {},
    };
  },
  computed: {},
  methods: {
    // ...mapActions("administrador", ["loadUser"]),
    async loadUser() {
      const token = localStorage.getItem("token") || "";
      const url = `https://rest-server-node-n.herokuapp.com/api/usuarios/${this.id}`;
      const res = await fetch(url, {
        method: "GET",
        headers: {
          "x-token": token,
        },
      });
      const body = await res.json();
      this.usuario = body.usuario;
      console.log(this.usuario);
    },
  },
  created() {
    this.loadUser();
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Montserrat", sans-serif;
  background-color: #dbe2ef;
}

.card {
  width: 400px;
  overflow: hidden;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border-radius: 15px;
  box-shadow: 7px 13px 37px rgba(0, 0, 0, 0.6);
}

header {
  width: 100%;
  height: 200px;
  overflow: hidden;
  position: relative;
}

header::before {
  content: "";
  position: absolute;
  border-top: 30px solid transparent;
  border-left: 400px solid white;
  bottom: 0;
}

header img {
  width: 100%;
  height: 199px;
}

section {
  padding: 10px;
  overflow: hidden;
  text-align: center;
}

section h2 {
  margin: 0.5em 0;
}

section p {
  margin: 1em 0;
}

ul li {
  list-style: none;
  display: inline-block;
  margin: 0.5em 0.2em;
}

ul li a {
  text-decoration: none;
  color: white;
  background: #314652;
  width: 30px;
  height: 30px;
  line-height: 30px !important;
  border-radius: 50%;
  transition: all 0.3s ease-in-out;
}

ul li a:hover {
  transform: scale(1.2);
}

footer {
  width: 100%;
  height: 80px;
  background: #e41009;
  color: white;
  position: relative;
}

footer::before {
  content: "";
  position: absolute;
  border-bottom: 30px solid transparent;
  border-right: 400px solid white;
  top: 0;
}

footer p {
  padding: 30px;
}
</style>