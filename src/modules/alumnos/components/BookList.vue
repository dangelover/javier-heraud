<template>
  <div class="book-g">
    <div class="row-book">
      <div class="row-book-u">
        <div class="book-img">
          <img :src="libro.img" alt="" />
        </div>
        <div class="book-des">
          <div class="w-book">
            <p>Nombre:</p>
            <p>{{ libro.nombre_libro }}</p>
          </div>
          <div class="w-book">
            <p>Autor:</p>
            <p>{{ libro.autor_libro }}</p>
          </div>
          <div class="w-book">
            <p>Año:</p>
            <p>{{ libro.year }}</p>
          </div>
          <div class="w-book">
            <p>Grado:</p>
            <p>{{ libro.grado }}</p>
          </div>
          <div class="w-book">
            <p>Sección:</p>
            <p>{{ libro.seccion }}</p>
          </div>
        </div>
      </div>
      <div class="row-book-b">
        <div class="form-group boton-edu-g">
          <a :href="libro.archivo" target="_blank" class="boton-edu"
            ><i class="fas fa-file-pdf"> Descargar PDF</i></a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import { mapActions } from "vuex";
export default {
  props: {
    libro: {
      type: Object,
      required: true,
    },
  },
  methods: {},
};
</script>

<style scoped>
img {
  height: 196px;
}
p {
  /* margin: 0 0 0 15px; */
  padding: 0;
  margin: 0;
}
.row-book {
  display: grid;
  width: auto;
}
.row-book-u {
  display: flex;
  /* grid-template-columns: auto auto; */
  gap: 10px;
}
.w-book {
  display: grid;
  grid-template-columns: 70px auto;
  gap: 10px;
}
.w-book p:nth-child(1) {
  text-transform: uppercase;
  color: #a30000;
}
.w-book p:nth-child(2) {
  color: rgb(58, 58, 58);
}
.cont-btn-el {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.cont-btn-el button {
  border-radius: 0px;
}
.boton-edu-g .boton-edu {
  display: grid;
  width: 100%;
  height: 50px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  outline: none;
  border: none;
  font-weight: bolder;
  /* background-image: linear-gradient(to right, #32be8f, #38d39f, #32be8f); */
  background-image: linear-gradient(to right, #9b2400, #c62f00, #9b2400);
  background-size: 200%;
  /* font-size: 1.2rem; */
  font-family: "Poppins", sans-serif;
  /* margin: 1rem 0; */
  cursor: pointer;
  transition: 0.5s;
  color: rgb(255, 255, 255);
  place-items: center;
  text-decoration: none;
}

.boton-edu-g .boton-edu:hover {
  /*background: #c62f00;*/
  /* border-color: #721b00; */
  background-position: right;
  color: white;
}

.book-g {
  border: 3px solid #b12900;
  height: fit-content;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
}
</style>