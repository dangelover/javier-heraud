<template>
  <tbody>
    <td>{{ document.nombre_documento }}</td>
    <td>{{ document.nombre_docente }}</td>
    <td>{{ document.dni_docente }}</td>
    <td>{{ document.fecha }}</td>
    <td>
      <a :href="document.archivo_documento" target="_blank"
        ><i class="far fa-file-pdf"> PDF</i></a
      >
    </td>
    <td>{{ document.comentarios }}</td>
    <td>
      <div v-if="validate" class="alert alert-success" role="alert">
        {{ estado }}
      </div>
      <div v-else class="alert alert-danger" role="alert">
        {{ estado }}
      </div>
    </td>
    <td>
      <router-link
        :to="{ name: 'send-comments', params: { id: document.uid } }"
      >
        <i class="far fa-paper-plane"></i>
      </router-link>
    </td>
    <!-- <td>{{ document.estado === true ? "ACTIVO" : "INACTIVO" }}</td> -->
  </tbody>
</template>

<script>
import Swal from "sweetalert2";
import { mapActions, mapMutations } from "vuex";
export default {
  props: {
    document: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      comentarios: "",
      verificacion: "",
      data: {},
      mensaje: "",
      clasName: "",
      validate: true,
      idDocument: "",
      estado: "",
    };
  },
  methods: {
    // ...mapActions("administrador", ["oneComment", "postComment"]),
    loadEstado() {
      if (this.document.verificacion === "desaprobado") {
        this.estado = "DESAPROBADO";
        this.validate = false;
      } else if (this.document.verificacion === "aprobacion") {
        this.estado = "APROBADO";
        this.validate = true;
      }
    },
  },
  created() {
    this.loadEstado();
  },
};
</script>
<style scoped>
td:nth-child(1) {
  text-align: center;
}
td:nth-child(2) {
  text-align: center;
}
td:nth-child(3) {
  text-align: center;
}
td:nth-child(5) {
  text-align: center;
}
td > div > a {
  text-decoration: none;
  color: #c62f00;
  text-align: center;
  width: 100%;
}

td > div {
  display: grid;
  padding: 0;
  justify-items: center;
}
.responsive {
  width: 25px;
  height: 25px;
  height: auto;
  border-radius: 25%;
}
tbody:nth-child(2n) {
  background: #fcd3c7;
}
</style>