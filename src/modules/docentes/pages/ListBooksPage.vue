<template>
  <div class="g-container-g">
    <div class="container">
      <div class="row-edu">
        <div class="head-edu">
          <h1>Libros del {{ grado }}° Grado {{ seccion }}</h1>
        </div>
        <div class="button-edu">
          <button
            type="button"
            class="primary-button"
            @click="$router.push({ name: 'create-book' })"
          >
            <i class="far fa-books-medical"> Agregar Nuevo Libro</i>
          </button>
          <button type="button" class="primary-button" @click="mySection">
            Libros de mi sección
          </button>
          <button type="button" class="primary-button" @click="loadListBook">
            Libros de mi grado
          </button>
        </div>
      </div>
    </div>
    <div v-if="validMessage" class="alert alert-danger" role="alert">
      {{ mensaje }}
    </div>
    <div v-if="emptyBooks" class="alert alert-danger" role="alert">
      {{ mensaje }}
    </div>
    <div v-if="isLoading" class="spinner-border text-primary" role="status">
      <span class="sr-only"></span>
    </div>
    <div v-else class="cont-book">
      <BookList v-for="libro in libros" :key="libro.id" :libro="libro" />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "@vue/runtime-core";
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      grado: "",
      seccion: "",
      libros: [],
      emptyBooks: false,
      validMessage: false,
      mensaje: "",
    };
  },
  components: {
    BookList: defineAsyncComponent(() => import("../components/BookList.vue")),
  },
  computed: {
    ...mapState("docente", {
      isLoading: "isLoading",
    }),
  },
  methods: {
    ...mapActions("docente", ["loadBooks", "loadBooksSection"]),
    async loadListBook() {
      const grado_alumno = localStorage.getItem("grado");
      this.grado = grado_alumno;
      const { condicion, libros } = await this.loadBooks(this.grado);
      console.log(libros);
      if (!libros.length) {
        this.emptyBooks = true;
        this.mensaje = "No existe libros en este grado";
      }
      this.libros = libros;
      this.seccion = "";
    },
    async mySection() {
      const grado_docente = localStorage.getItem("grado");
      this.grado = grado_docente;
      const seccion_docente = localStorage.getItem("seccion");
      this.seccion = seccion_docente;
      const datos = {
        numero_grado: this.grado,
        letra_seccion: this.seccion,
      };
      const { condicion, libros } = await this.loadBooksSection(datos);
      console.log(libros);
      if (!libros.length) {
        this.emptyBooks = true;
        this.mensaje = "Suba libros a su grado y seccion";
      }
      this.libros = libros;
    },
  },
  created() {
    this.loadListBook();
  },
};
</script>
<style scoped>
.g-container-g {
  width: 100%;
}
.cont-book {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, 450px);
  gap: 20px;
}
.head-edu {
  text-align: center;
  color: #c62f00;
  text-transform: uppercase;
}
.button-edu {
  display: flex;
  justify-content: center;
  gap: 10px;
  /* text-align: center; */
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
  margin-bottom: 10px;
}
.primary-button:hover {
  background-color: #c62f00;
  color: white;
}
</style>