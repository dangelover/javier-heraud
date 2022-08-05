<template>
  <form @submit.prevent="onCreateDocument">
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
        value="Enviar Documento"
      />
    </div>
  </form>
</template>

<script>
import Swal from "sweetalert2";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      date: new Date(),
      nombre_documento: "",
      archivo_documento: "",
      nombre: "",
      dni: "",
      data: null,
      fecha: "",
      fechaYhora: "",
    };
  },
  methods: {
    ...mapActions("docente", ["createDocument", "myPerfilDocente"]),
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
    async onCreateDocument() {
      let dia = this.date.getDate();
      let mes = this.date.getMonth() + 1;
      let year = this.date.getFullYear();
      if (mes < 10) {
        this.fecha = dia + "-" + "0" + mes + "-" + year;
      }
      this.fecha = dia + "-" + mes + "-" + year;
      let hours =
        this.date.getHours() +
        ":" +
        this.date.getMinutes() +
        ":" +
        this.date.getSeconds();
      this.fechaYhora = this.fecha + " " + hours;
      console.log(this.fechaYhora);
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
        nombre_documento: this.nombre_documento,
        archivo_documento: this.archivo_documento,
        dni_docente: this.dni,
        nombre_docente: this.nombre,
        fecha: this.fechaYhora,
      };
      const body = this.createDocument(this.data);
      console.log(body.document);
      if (!body.condicion) {
        this.mensaje = "Error al crear";
        Swal.fire("Error", this.mensaje, "error");
        setTimeout(() => {
          this.mensaje = "";
          // this.isValid = false;
        }, 2000);
      } else {
        Swal.fire("Creado", "Creado con exito", "success");
        setTimeout(() => {
          this.mensaje = "";
          // this.isValid = false;
        }, 2000);
        this.$router.push({ name: "mis-alumnos" });
      }
      console.log(document);
      Swal.fire("Creado", "Creado con exito", "success");
      this.$router.push({ name: "mis-documentos" });
    },
  },
  created() {
    this.loadProfile();
  },
};
</script>

<style>
</style>