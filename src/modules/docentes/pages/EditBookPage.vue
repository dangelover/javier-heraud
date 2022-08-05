<template>
  <div class="cont-cntrl">
    <div class="container_edu_b_catp">
      <h2 class="tittle-edu-catp">Editar Libro Libro</h2>
      <div class="form-edu-catp">
        <div class="cont-act">
          <div class="act-img">
            <img v-if="localImage" :src="localImage" />
          </div>
          <div class="act-form">
            <div class="form-ti">
              <label for="">Nombre del libro: </label>
              <input type="text" v-model="nombre_libro" />
            </div>
            <div class="form-ti">
              <label for="">Autor del libro: </label>
              <input type="text" v-model="autor_libro" />
            </div>
            <div class="form-ti">
              <label for="">Año de publicacion: </label>
              <input type="number" v-model="year" />
            </div>
            <div class="form-ti">
              <label for=""
                >Link del libro <i class="fab fa-google-drive"></i
              ></label>
              <input
                type="text"
                className="form-control"
                placeholder="Drive"
                v-model="archivo"
              />
            </div>
            <div class="form-ti">
              <label for="">Portada </label>
              <input
                type="file"
                @change="onSelectedImage"
                accept="image/png, image/jpeg"
                required
              />
            </div>
            <div class="boton-edu-g-catp">
              <button
                type="button"
                class="boton-edu-catp"
                @click="toUpdateBook"
              >
                Actualizar Libro
              </button>
            </div>
          </div>
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
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      date: null,
      nombre_libro: "",
      autor_libro: "",
      year: "",
      archivo: "",
      file: "",
      img: "",
      grado: "",
      seccion: "",
      data: null,
      mensaje: "",
      localImage:
        "https://edit.org/images/cat/portadas-libros-big-2019101610.jpg",
    };
  },
  methods: {
    ...mapActions("docente", ["loadBook", "EditBook", "updateImageBook"]),
    async onLoadBook() {
      const body = await this.loadBook(this.id);
      const { nombre_libro, autor_libro, img, year, archivo } = body.libro;
      this.nombre_libro = nombre_libro;
      this.autor_libro = autor_libro;
      this.year = year;
      this.localImage = img;
      this.archivo = archivo;
    },
    async toUpdateBook() {
      new Swal({
        title: "Espere por favor",
        allowOutsideClick: false,
      });
      if (this.nombre_libro.length === 0) {
        this.mensaje = "el nombre del libro es necesario";
        Swal.fire("Error", this.mensaje, "error");
        setTimeout(() => {
          this.mensaje = "";
          // this.isValid = false;
        }, 2000);
        return;
      }
      if (this.autor_libro.length === 0) {
        this.mensaje = "el autor del libro es necesario";
        Swal.fire("Error", this.mensaje, "error");
        setTimeout(() => {
          this.mensaje = "";
          // this.isValid = false;
        }, 2000);
        return;
      }
      if (this.year.length === 0) {
        this.mensaje = "el año de publicacion es necesario";
        Swal.fire("Error", this.mensaje, "error");
        setTimeout(() => {
          this.mensaje = "";
          // this.isValid = false;
        }, 2000);
        return;
      }
      if (this.archivo) {
        const nombreArr = this.archivo.split("/");
        const drive = nombreArr[2];
        if (drive !== "drive.google.com") {
          this.mensaje = "Sube primero el archivo a su Drive";
          Swal.fire("Error", this.mensaje, "error");
          setTimeout(() => {
            this.mensaje = "";
            // this.isValid = false;
          }, 2000);
          return;
        }
      }
      console.log(this.file);
      if (this.file === null) {
        this.mensaje = "Es importante la imagen";
        Swal.fire("Error", this.mensaje, "error");
        setTimeout(() => {
          this.mensaje = "";
          // this.isValid = false;
        }, 2000);
        return;
      }
      const datos = {
        file: this.file,
        id: this.id,
      };
      const respuesta = await this.updateImageBook(datos);
      const { img } = respuesta.modelo;
      this.img = img;
      const grado_alumno = localStorage.getItem("grado");
      this.grado = grado_alumno;
      const seccion_alumno = localStorage.getItem("seccion");
      this.seccion = seccion_alumno;
      this.data = {
        id: this.id,
        nombre_libro: this.nombre_libro,
        autor_libro: this.autor_libro,
        img: this.img,
        year: this.year,
        archivo: this.archivo,
        grado: this.grado,
        seccion: this.seccion,
      };
      const body = await this.EditBook(this.data);
      console.log(body);
      if (body.condicion) {
        Swal.fire("Creado", "Creado con exito", "success");
        this.$router.push({ name: "libros-docentes" });
      } else if (body.errors[0] !== undefined) {
        const { msg } = errors[0];
        console.log(msg);
        this.mensaje = msg;
        Swal.fire("Error", this.mensaje, "error");
      }
    },
    onSelectedImage(event) {
      const files = event.target.files[0];
      if (!files) {
        this.localImage = null;
        this.file = null;
        return;
      }
      this.file = files;
      const fr = new FileReader();
      fr.onload = () => (this.localImage = fr.result);
      fr.readAsDataURL(files);
    },
  },
  created() {
    this.onLoadBook();
  },
};
</script>
<style scoped>
.cont-cntrl {
  height: 90vh;
  display: grid;
  place-items: center;
}
.cont-act {
  display: grid;
  grid-template-columns: auto auto;
  gap: 10px;
}
.act-img img {
  height: 358px;
  /* width: 300px; */
}
.act-form {
  display: grid;
}
.container_edu_b_catp {
  border: 5px solid rgb(177, 41, 0);
  border-radius: 20px;
  /* padding: 10px; */
  /* background: rgba(155, 36, 0, 0.8); */
  width: 800px;
  box-sizing: border-box;
}

.tittle-edu-catp {
  text-align: center;
  font-size: 1.5em;
  text-transform: uppercase;
  color: white;
  background: rgb(177, 41, 0);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  padding: 4px 8px;
  margin: 0;
}
.form-edu-catp {
  margin: 12px 12px;
  display: grid;
  gap: 10px;
}

.act-form div input {
  margin: 0 10px 0 10px;
  width: 95%;
}

.boton-edu-g-catp {
  place-self: center;
  width: 150px;
  margin: 0;
}
.boton-edu-g-catp .boton-edu-catp {
  display: block;
  width: 100%;
  height: 50px;
  border-radius: 15px;
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
}

.boton-edu-g-catp .boton-edu-catp:hover {
  /*background: #c62f00;*/
  /* border-color: #721b00; */
  background-position: right;
  color: rgb(255, 255, 255);
}
@media (max-width: 960px) {
  .container_edu_b-catp {
    width: fit-content;
  }
}
</style>