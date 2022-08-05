<template>
  <div class="bloque-docentes">
    <picture>
      <img v-if="docente.img" :src="docente.img" alt="" />
      <img v-else :src="imagen" alt="" />
    </picture>
    <div class="datos-docentes">
      <h1>{{ docente.nombre }} {{ docente.apellido }}</h1>
      <ul>
        <li>Celular: {{ docente.celular }}</li>
        <li>Correo: {{ docente.correo }}</li>
        <li>Grado: {{ docente.grado }}</li>
        <li>Sección: {{ docente.seccion }}</li>
      </ul>
    </div>
  </div>
  <!-- <div class="card">
    <div class="img-avatar">
      <img class="img-avatar" v-if="docente.img" :src="docente.img" alt="" />
      <img class="img-avatar" v-else :src="imagen" alt="" />
    </div>
    <div class="card-text">
      <div class="portada"></div>
      <div class="title-total">
        <div class="title">Ant Collector</div>
        <h2>{{ docente.nombre }} {{ docente.apellido }}</h2>
        <h3>Celular: {{ docente.celular }}</h3>
        <h3>Correo: {{ docente.correo }}</h3>
        <h3>Grado/Sección: {{ docente.grado }} "{{ docente.seccion }}"</h3>
      </div>
    </div>
  </div> -->
</template>

<script>
export default {
  props: {
    docente: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      imagen:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
    };
  },
};
</script>

<style scoped>
/* @import url("https://fonts.googleapis.com/css?family=Roboto:400,400i,700");
body {
  font-family: Roboto, sans-serif;
  margin: 0;
  height: 100vh;
  display: grid;
  align-items: center;
  justify-items: center;
  background-image: linear-gradient(to top, #96fbc4 0%, #f9f586 100%);
}
.card {
  background: #fff;
  border-radius: 4px;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.5);
  max-width: 400px;
  display: flex;
  flex-direction: row;
  border-radius: 25px;
  position: relative;
}
.card h2 {
  margin: 0;
  padding: 0 1rem;
}
.card .title {
  padding: 1rem;
  text-align: right;
  color: green;
  font-weight: bold;
  font-size: 12px;
}
.card .desc {
  padding: 0.5rem 1rem;
  font-size: 12px;
}
.card .actions {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  padding: 0.5rem 1rem;
}
.card svg {
  width: 85px;
  height: 85px;
  margin: 0 auto;
}
.img-avatar {
  width: 80px;
  height: 80px;
  position: absolute;
  border-radius: 50%;
  border: 6px solid white;
  background-image: linear-gradient(-60deg, #16a085 0%, #f4d03f 100%);
  top: 15px;
  left: 85px;
}
.card-text {
  display: grid;
  grid-template-columns: 1fr 2fr;
}
.title-total {
  padding: 2.5em 1.5em 1.5em 1.5em;
}
path {
  fill: white;
}
.img-portada {
  width: 100%;
}
.portada {
  width: 100%;
  height: 100%;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  background-image: url("https://m.media-amazon.com/images/S/aplus-media/vc/cab6b08a-dd8f-4534-b845-e33489e91240._CR75,0,300,300_PT0_SX300__.jpg");
  background-position: bottom center;
  background-size: cover;
}
button {
  border: none;
  background: none;
  font-size: 24px;
  color: #8bc34a;
  cursor: pointer;
  transition: 0.5s;
}
button:hover {
  color: #4caf50;
  transform: rotate(22deg);
} */

.bloque-docentes {
  display: grid;
  width: 565px;
  padding: 10px;
  grid-template-columns: 150px auto;
  gap: 10px;
  border: 2px solid black;
  border-radius: 20px;
  box-sizing: border-box;
}
.bloque-docentes > picture {
  margin: 0;
}
.bloque-docentes > picture > img {
  width: 150px;
  border-radius: 20px;
}
.datos-docentes {
  align-self: center;
  display: grid;
  gap: 10px;
}
.datos-docentes > h1 {
  font-size: 24px;
  margin: 0;
}
.datos-docentes > ul {
  margin: 0;
}
</style>