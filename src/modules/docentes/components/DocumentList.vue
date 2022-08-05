<template>
  <tbody>
    <td>{{ document.nombre_documento }}</td>
    <td>{{ document.fecha }}</td>
    <td>
      <div class="dc-lnk">
        <a :href="document.archivo_documento" target="_blank">
          <i class="far fa-file-pdf"> File</i>
        </a>
      </div>
    </td>
    <td>{{ document.comentarios }}</td>
    <td>
      <div v-if="validate" class="alert alert-danger" role="alert">
        {{ estado }}
      </div>
      <div v-else class="alert alert-danger" role="alert">
        {{ estado }}
      </div>
    </td>
    <td>
      <div>
        <router-link
          :to="{ name: 'edit-document', params: { id: document.uid } }"
        >
          <i class="fas fa-edit"></i>
        </router-link>
        <button class="btn" @click="onDeleteDocument(document.uid)">
          <i class="fal fa-trash-alt"></i>
        </button>
      </div>
    </td>
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
      estado: "",
      validate: true,
    };
  },
  methods: {
    ...mapActions("docente", ["deleteDocument"]),
    loadEstado() {
      if (this.document.verificacion === "desaprobado") {
        this.estado = "DESAPROBADO";
        this.validate = false;
      } else if (this.document.verificacion === "aprobacion") {
        this.estado = "APROBADO";
        this.validate = true;
      }
    },
    async onDeleteDocument() {
      const { isConfirmed } = await Swal.fire({
        title: "Estas seguro",
        text: "Una vez borrado no se puede recuperar",
        showDenyButton: true,
        confirmButtonText: "Si estoy seguro",
      });
      if (isConfirmed) {
        new Swal({
          title: "Espere por favor",
          allowOutsideClick: false,
        });
        Swal.showLoading();
        const body = await this.deleteDocument(this.document.uid);
        if (body.condicion) {
          Swal.fire("Eliminado", "", "error");
          this.$router.push({ name: "my-perfil-docente" });
        }
      }
    },
  },
  created() {
    this.loadEstado();
  },
};
</script>
<style scoped>
.responsive {
  width: 25px;
  height: 25px;
  height: auto;
  border-radius: 25%;
}
td:nth-child(1) {
  text-align: center;
}
td:nth-child(3) {
  text-align: center;
}
td > .dc-lnk > a {
  text-decoration: none;
  color: #c62f00;
  text-align: center;
  width: 100%;
}
td:nth-child(4) > div {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 10px;
}
td:nth-child(4) > div > a:nth-child(1) {
  color: #337ab7;
}
td:nth-child(4) > div > button:nth-child(2) {
  color: #f04f4f;
  padding: 0;
}
td > div {
  display: grid;
  padding: 0;
  justify-items: center;
}
tbody:nth-child(2n) {
  background: #fcd3c7;
}
</style>