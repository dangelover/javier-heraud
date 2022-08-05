<template>
  <h1>Editar documento</h1>
  <form @submit.prevent="onUpdateDocument">
    <label for="">Nombre del documento</label>
    <input
      type="text"
      className="form-control"
      placeholder="Nombre del documento"
      v-model="nombre_documento"
    />
    <label for="">Link del drive</label>
    <input
      type="text"
      className="form-control"
      placeholder="Link del drive"
      v-model="archivo_documento"
    />
    <div className="form-group">
      <input
        type="submit"
        className="btn btn-success"
        value="Actualizar Documento"
      />
    </div>
  </form>
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
      nombre_documento: "",
      archivo_documento: "",
      nombre: "",
      dni: "",
      data: null,
    };
  },
  methods: {
    ...mapActions("docente", [
      "loadDocument",
      "updateDocument",
      "myPerfilDocente",
    ]),
    async onLoadDocument() {
      const { condicion, document } = await this.loadDocument(this.id);
      const { nombre_documento, archivo_documento } = document;
      this.nombre_documento = nombre_documento;
      this.archivo_documento = archivo_documento;
    },
    async loadProfile() {
      const usuario = localStorage.getItem("usuario");
      this.user = JSON.parse(usuario);
      const body = await this.myPerfilDocente(this.user.DNI);
      console.log(body);
      const { nombre, DNI } = body.docente;
      this.nombre = nombre;
      this.dni = DNI;
      // location.reload();
    },
    async onUpdateDocument() {
      if (this.nombre_documento.length === 0) {
        // this.isValid = true;
        this.mensaje = "el nombre del documento es necesario";
        Swal.fire("Error", this.mensaje, "error");
        setTimeout(() => {
          this.mensaje = "";
          // this.isValid = false;
        }, 2000);
        return;
      }
      if (this.archivo_documento.length === 0) {
        // this.isValid = true;
        this.mensaje = "el link del drive es necesario";
        Swal.fire("Error", this.mensaje, "error");
        setTimeout(() => {
          this.mensaje = "";
          // this.isValid = false;
        }, 2000);
        return;
      }
      const nombreArr = this.archivo_documento.split("/");
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
      this.data = {
        id: this.id,
        nombre_documento: this.nombre_documento,
        archivo_documento: this.archivo_documento,
        dni_docente: this.dni,
        nombre_docente: this.nombre,
      };
      console.log(this.data);
      const { documents } = this.updateDocument(this.data);
      console.log(documents);
      Swal.fire("Actualizado", "Actualizado con exito", "success");
      this.$router.push({ name: "mis-documentos" });
    },
  },
  created() {
    this.loadProfile();
    this.onLoadDocument();
  },
};
</script>

<style>
</style>