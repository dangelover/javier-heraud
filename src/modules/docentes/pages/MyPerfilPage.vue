<template>
  <div class="profile">
    <div class="profile__header">
      <img
        class="profile__background"
        src="https://res.cloudinary.com/javier-heraud/image/upload/v1650562777/IMG_1692_uv3shz.jpg"
        width="400"
        height="200"
      /><img class="profile__picture" :src="img" />
    </div>
    <div class="profile__content">
      <div class="profile__bio">
        <h3 class="profile__name">{{ nombre }}</h3>
        <h3 class="profile__name">{{ apellido }}</h3>
        <p class="profile__info">{{ direccion }}</p>
        <p class="profile__info">{{ dni }}</p>
      </div>
      <div class="profile__links">
        <a class="profile__link"
          ><i class="profile__link__icon fa fa-map-marker"></i
          ><span class="profile__link__text">{{ celular }}</span></a
        ><a class="profile__link"
          ><i class="profile__link__icon fa fa-envelope"></i
          ><span class="profile__link__text">{{ correo }} </span></a
        >
      </div>
      <div class="profile__twitter">
        <div class="profile__twitter__stats profile__twitter__stats--followers">
          <span class="profile__twitter__stats__count">{{ grado }}</span
          ><span class="profile__twitter__stats__label">Grado</span>
        </div>
        <div class="profile__twitter__stats profile__twitter__stats--following">
          <span class="profile__twitter__stats__count">{{ seccion }}</span
          ><span class="profile__twitter__stats__label">Seccion</span>
        </div>
        <div class="profile__twitter__follow">
          <button class="profile__twitter__follow__button">Docente</button>
        </div>
        <div class="profile__twitter__follow contenedor-actualizar-edu">
          <router-link
            :to="{ name: 'actualizar-perfil-docente' }"
            class="actualizar-edu"
          >
            <div>
              <i class="fas fa-user-edit">Actualizar Perfil</i>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      nombre: "", //*
      apellido: "", //*
      correo: "", //*
      direccion: "", //*
      dni: "", //*
      celular: "", //*
      grado: "",
      seccion: "",
      user: null,
      img: "",
    };
  },
  methods: {
    ...mapActions("docente", ["myPerfilDocente"]),
    async loadProfile() {
      const usuario = localStorage.getItem("usuario");
      this.user = JSON.parse(usuario);
      const body = await this.myPerfilDocente(this.user.DNI);
      console.log(body);
      const {
        nombre,
        apellido,
        correo,
        direccion,
        DNI,
        celular,
        img,
        grado,
        seccion,
      } = body.docente;
      this.nombre = nombre;
      this.apellido = apellido;
      this.correo = correo;
      this.direccion = direccion;
      this.dni = DNI;
      this.celular = celular;
      this.grado = grado;
      this.seccion = seccion;
      this.img = img;
      // location.reload();
    },
  },
  created() {
    this.loadProfile();
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=ABeeZee");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /* font-family: ABeeZee, sans-serif; */
}
body {
  background: #ccc;
  padding: 20px;
  color: #455a64;
}
.profile {
  border-radius: 10px;
  background: #fff;
  width: 400px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
}
.profile__header {
  display: flex;
  position: relative;
  justify-content: center;
}
.profile__background {
  border-radius: 10px 10px 0px 0px;
}
.profile__picture {
  position: absolute;
  bottom: -80px;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
}
.profile__content {
  padding-top: 90px;
  text-align: center;
}
.profile__bio {
  padding: 10px 20px;
}
.profile__name {
  color: #37474f;
  font-size: 28px;
  margin-bottom: 10px;
}
.profile__info {
  line-height: 1.5;
  font-size: 16px;
}
.profile__links {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  flex-direction: column;
}
.profile__link {
  display: flex;
  justify-content: center;
  align-items: center;
  /* flex-basis: 180px; */
  padding: 20px;
  text-decoration: none;
  color: inherit;
  font-size: 18px;
  transition: 0.2s;
  height: fit-content;
}
.profile__link:hover {
  color: #c62f00;
}
.profile__link__icon {
  padding-right: 15px;
  font-size: 20px;
}
.profile__twitter {
  display: flex;
  flex-wrap: wrap;
}
.profile__twitter__stats {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-basis: 50%;
  padding: 15px 20px;
  background: #eceff1;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  transition: 0.2s;
}
.profile__twitter__stats:hover {
  background: #cfd8dc;
}
.profile__twitter__stats--followers {
  border-right: 1px solid #ddd;
}
.profile__twitter__stats__count {
  font-size: 20px;
  font-weight: bold;
  padding-bottom: 2px;
}
.profile__twitter__follow {
  flex-basis: 100%;
}
.profile__twitter__follow__button {
  padding: 20px;
  width: 100%;
  /* border-radius: 0px 0px 10px 10px; */
  background-image: linear-gradient(to right, #9b2400, #c62f00, #9b2400);
  background-size: 200%;
  color: #fff;
  font-size: 18px;
  border: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  cursor: pointer;
  transition: 0.5s;
}
.profile__twitter__follow__button:hover {
  background-position: right;
  color: white;
}
.contenedor-actualizar-edu {
  cursor: pointer;
  border-radius: 0px 0px 10px 10px;
  transition: 1s;
}
.contenedor-actualizar-edu:hover {
  background: black;
  transition: 1s;
}
.actualizar-edu {
  color: rgb(213, 213, 213);
}
.actualizar-edu div {
  width: 100%;
}
</style>