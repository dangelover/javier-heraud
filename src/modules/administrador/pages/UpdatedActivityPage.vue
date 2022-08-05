<template>
  <div class="cont-cntrl">
    <div class="container_edu_b_catp">
      <h2 class="tittle-edu-catp">Editar Actividad</h2>
      <div class="form-edu-catp">
        <div class="cont-act">
          <div class="act-img">
            <img v-if="localImage" :src="localImage" />
          </div>
          <div class="act-form">
            <div class="form-ti">
              <label for="">Nombre de la actividad:</label>
              <input type="text" v-model="nombre_actividad" />
            </div>
            <div class="form-ti">
              <label for="">Descripcion de la actividad:</label>
              <textarea
                placeholder="¿Que actividad se va a realizar?"
                v-model="descripcion_actividad"
              ></textarea>
            </div>
            <div class="row">
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
                @click="onUpdateActivity"
              >
                Actualizar
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
import uploadImage from "../helpers/uploadImage";
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
      nombre_actividad: "",
      descripcion_actividad: "",
      img: "",
      localImage:
        "https://thumbs.dreamstime.com/b/sin-foto-ni-icono-de-imagen-en-blanco-cargar-im%C3%A1genes-o-falta-marca-no-disponible-pr%C3%B3xima-se%C3%B1al-silueta-naturaleza-simple-marco-215973362.jpg",
      mensaje: "",
      data: null,
      file: null,
    };
  },
  methods: {
    ...mapActions("administrador", ["updateImageActivity", "updateActivity"]),
    async onLoadActivity() {
      const token = localStorage.getItem("token") || "";
      const url = `https://rest-server-node-n.herokuapp.com/api/actividades/${this.id}`;
      const res = await fetch(url, {
        method: "GET",
        headers: {
          "x-token": token,
        },
      });
      const { condicion, actividad } = await res.json();
      console.log(actividad);
      const { nombre_actividad, descripcion_actividad, img } = actividad;
      this.nombre_actividad = nombre_actividad;
      this.descripcion_actividad = descripcion_actividad;
      this.localImage = img;
    },
    async onUpdateActivity() {
      new Swal({
        title: "Espere por favor",
        allowOutsideClick: false,
      });
      if (this.nombre_actividad.length === 0) {
        this.mensaje = "el nombre de la actividad es necesaria";
        Swal.fire("Error", this.mensaje, "error");
        setTimeout(() => {
          this.mensaje = "";
          // this.isValid = false;
        }, 2000);
        return;
      }
      if (this.descripcion_actividad.length === 0) {
        this.mensaje = "La descripcion de la actividad es necesario";
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
      const respuesta = await this.updateImageActivity(datos);
      //   console.log(respuesta);
      const { img } = respuesta.modelo;
      //   console.log(img);
      this.img = img;
      this.data = {
        id: this.id,
        nombre_actividad: this.nombre_actividad,
        descripcion_actividad: this.descripcion_actividad,
        img: this.img,
      };
      console.log(this.data);
      const body = await this.updateActivity(this.data);
      console.log(body);
      Swal.fire("Actualizado", "Actualizado con exito", "success");
      this.$router.push({ name: "list-actividades" });
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
    this.onLoadActivity();
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
  grid-template-columns: 300px auto;
  gap: 10px;
}
.act-img img {
  height: 300px;
  width: 300px;
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

.act-form div:nth-child(1) input {
  margin: 0 10px 0 10px;
  width: 95%;
}
.act-form div:nth-child(2) textarea {
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