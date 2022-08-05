<template>
  <div class="card">
    <img class="card-img-top" :src="curso.img" alt="Card image cap" />
    <div class="card-body">
      <h5 class="card-title">{{ curso.nombre_curso }}</h5>
      <router-link
        class="boton-edu"
        :to="{ name: 'curso-page', params: { id: curso.uid } }"
      >
        Ingresar
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    curso: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      misCursos: this.curso,
    };
  },
};
</script>

<style scoped>
img {
  height: 135px;
  width: 281px;
}
.card {
  border: 1px solid black;
  border-radius: 20px;
  display: grid;
  justify-content: space-between;
  width: fit-content;
  grid-template-rows: auto 50px;
}
.card-img-top {
  border-radius: 20px 20px 0 0;
  /* height: max-content; */
  /* width: 100%; */
  /* height: 100%; */
  /* object-fit: cover; */
}
.card-body {
  padding: 0;
  display: grid;
}
.card-title {
  text-align: center;
  display: none;
}
.boton-edu {
  display: grid;
  width: 100%;
  height: 50px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  outline: none;
  border: none;
  font-weight: bolder;
  background-image: linear-gradient(to right, #9b2400, #c62f00, #9b2400);
  background-size: 200%;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  transition: 0.5s;
  color: rgb(255, 255, 255);
  place-items: center;
  text-decoration: none;
  bottom: 0;
  align-self: end;
}
.boton-edu:hover {
  background-position: right;
  color: white;
}
</style>