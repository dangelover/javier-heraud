<template>
  <h1>Enviar comentarios</h1>
  <form @submit.prevent="onPostComment">
    <div className="form-group">
      <label for="">Comentarios del documento</label>
      <input
        type="text"
        className="form-control"
        placeholder="Comentarios"
        v-model="comentarios"
      />
    </div>
    <div>
      <label for="">Elegir estado del documento</label>
      <select
        v-model="verificacion"
        class="form-select select-edu-uup"
        aria-label="Default select example"
      >
        <option value="desaprobado">Desaprobado</option>
        <option value="aprobacion">Aprobado</option>
      </select>
    </div>
    <div className="form-group boton-edu-g-uap">
      <input type="submit" className="boton-edu-uap" value="Enviar" />
    </div>
  </form>
</template>

<script>
import Swal from "sweetalert2";
import { mapActions, mapMutations } from "vuex";
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      comentarios: "",
      verificacion: "",
      mensaje: "",
      data: {},
    };
  },
  methods: {
    ...mapActions("administrador", ["postComment"]),
    async onLoadDocument() {
      console.log(this.id);
      const token = localStorage.getItem("token") || "";
      const url = `https://rest-server-node-n.herokuapp.com/api/documents/${this.id}`;
      const res = await fetch(url, {
        method: "GET",
        headers: {
          "x-token": token,
        },
      });
      const body = await res.json();
      console.log(body);
      const { condicion, document } = body;
      const { comentarios, verificacion } = document;
      this.comentarios = comentarios;
      this.verificacion = verificacion;
    },
    async onPostComment() {
      if (this.comentarios.length === 0) {
        // this.isValid = true;
        this.mensaje = "Agregar los comentarios del documento";
        Swal.fire("Error", this.mensaje, "error");
        setTimeout(() => {
          this.mensaje = "";
          // this.isValid = false;
        }, 2000);
        return;
      }
      if (this.verificacion.length === 0) {
        // this.isValid = true;
        this.mensaje = "Agregar el estado del documento";
        Swal.fire("Error", this.mensaje, "error");
        setTimeout(() => {
          this.mensaje = "";
          // this.isValid = false;
        }, 2000);
        return;
      }
      this.data = {
        uid: this.id,
        comentarios: this.comentarios,
        verificacion: this.verificacion,
      };
      const body = await this.postComment(this.data);
      Swal.fire("Enviado", "El comentario fue enviado al docente", "success");
      this.$router.push({ name: "list-documentos" });
    },
  },
  created() {
    this.onLoadDocument();
  },
};
</script>

<style scoped >
.boton-edu-g-uap {
  place-self: center;
  width: 150px;
  margin: 0;
}
.boton-edu-g-uap .boton-edu-uap {
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

.boton-edu-g-uap .boton-edu-uap:hover {
  /*background: #c62f00;*/
  /* border-color: #721b00; */
  background-position: right;
  color: rgb(255, 255, 255);
}
</style>