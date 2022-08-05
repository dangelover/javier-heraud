<template>
  <tbody>
    <tr>
      <td>{{ docente.nombre }}</td>
      <td>{{ docente.apellido }}</td>
      <td>{{ docente.correo }}</td>
      <td>{{ docente.direccion }}</td>
      <td>{{ docente.DNI }}</td>
      <td>{{ docente.celular }}</td>
      <td>{{ docente.grado }}</td>
      <td>{{ docente.seccion }}</td>
      <td>{{ docente.estado === true ? "ACTIVO" : "INACTIVO" }}</td>
      <td>
        <div>
          <router-link
            :to="{ name: 'docente-page', params: { id: docente.uid } }"
          >
            <i class="fas fa-eye"></i>
          </router-link>
          <router-link
            :to="{ name: 'update-docente', params: { id: docente.uid } }"
          >
            <i class="fas fa-edit"></i>
          </router-link>
          <button class="btn" @click="onDeleteDocente(docente.uid)">
            <i class="fal fa-trash-alt"></i>
          </button>
        </div>
      </td>
    </tr>
  </tbody>
</template>

<script>
import Swal from "sweetalert2";
import { mapActions } from "vuex";
export default {
  props: {
    docente: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      profesor: this.docente,
    };
  },
  methods: {
    ...mapActions("administrador", ["deleteDocente"]),
    async onDeleteDocente() {
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
        const body = await this.deleteDocente(this.profesor.uid);
        if (body.condicion) {
          Swal.fire("Eliminado", "", "error");
          this.$router.push({ name: "list-user-admin" });
        }
      }
    },
    onload() {
      console.log(this.profesor);
    },
  },
};
</script>
<style scoped>
.container_e_ld .tabla_edu_ld {
  height: 80vh;
  overflow: auto;
  display: inline-block;
  width: 100%;
}
.container_e_ld .tabla_edu_ld > thead {
  width: 100%;
}

/*separador*/
.container_e_ld .tabla_edu_ld > tbody {
  width: 100%;
}
.container_e_ld .tabla_edu_ld > tbody:nth-child(even) {
  /*background-color: #E1EEF4;*/
  background-color: #fcd3c7;
}

.container_e_ld .tabla_edu_ld > tbody > tr > td {
  color: black;
  font-weight: normal;
  font-size: 12px;
  padding: 1px 0;
}
.container_e_ld .tabla_edu_ld > tbody > tr > td:nth-child(1) {
  /*text-align: center:*/
  width: 15%;
  padding-left: calc(30% / 50);
}
.container_e_ld .tabla_edu_ld > tbody > tr > td:nth-child(2) {
  /*text-align: center;*/
  width: 15%;
  padding-left: calc(30% / 50);
}
.container_e_ld .tabla_edu_ld > tbody > tr > td:nth-child(3) {
  text-align: center;
  width: 10%;
}
.container_e_ld .tabla_edu_ld > tbody > tr > td:nth-child(4) {
  text-align: center;
  width: 15%;
}
.container_e_ld .tabla_edu_ld > tbody > tr > td:nth-child(5) {
  text-align: center;
  width: 10%;
}
.container_e_ld .tabla_edu_ld > tbody > tr > td:nth-child(6) {
  text-align: center;
  width: 10%;
  /*display:flex;*/
}
.container_e_ld .tabla_edu_ld > tbody > tr > td:nth-child(7) {
  text-align: center;
  width: 10%;
}
.container_e_ld .tabla_edu_ld > tbody > tr > td:nth-child(8) {
  text-align: center;
  width: 5%;
}
.container_e_ld .tabla_edu_ld > tbody > tr > td:nth-child(9) {
  text-align: center;
  width: 10%;
}
.container_e_ld .tabla_edu_ld > tbody > tr > td > div {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 10px;
}
.container_e_ld .tabla_edu_ld > tbody > tr > td > div > a:nth-child(1) {
  color: #04722f;
}
.container_e_ld .tabla_edu_ld > tbody > tr > td > div > a:nth-child(2) {
  color: #337ab7;
}
.container_e_ld .tabla_edu_ld > tbody > tr > td > div > button:nth-child(3) {
  color: #f04f4f;
  padding: 0;
}
</style>