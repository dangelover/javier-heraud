<template>
  <tbody>
    <tr>
      <td>{{ alumno.nombre }}</td>
      <td>{{ alumno.apellido }}</td>
      <td>{{ alumno.direccion }}</td>
      <td>{{ alumno.DNI }}</td>
      <td>{{ alumno.grado }}</td>
      <td>{{ alumno.seccion }}</td>
      <td>{{ alumno.estado === true ? "ACTIVO" : "INACTIVO" }}</td>
      <td>
        <div>
          <router-link
            :to="{ name: 'alumno-page', params: { id: alumno.uid } }"
          >
            <i class="fas fa-eye"></i>
          </router-link>
          <router-link
            :to="{ name: 'update-alumno', params: { id: alumno.uid } }"
          >
            <i class="fas fa-edit"></i>
          </router-link>
          <button class="btn" @click="onDeleteStudent(alumno.uid)">
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
    alumno: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      student: this.alumno,
    };
  },
  methods: {
    ...mapActions("administrador", ["deleteStudent"]),
    async onDeleteStudent() {
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
        const body = await this.deleteStudent(this.student.uid);
        if (body.condicion) {
          Swal.fire("Eliminado", "", "error");
          this.$router.push({ name: "list-user-admin" });
        }
      }
    },
  },
};
</script>
<style scoped>
.container_e_lal .tabla_edu_lal {
  height: 80vh;
  overflow: auto;
  display: inline-block;
  width: 100%;
}
.container_e_lal .tabla_edu_lal > thead {
  width: 100%;
}

/*separador*/
.container_e_lal .tabla_edu_lal > tbody {
  width: 100%;
}
.container_e_lal .tabla_edu_lal > tbody:nth-child(even) {
  /*background-color: #E1EEF4;*/
  background-color: #fcd3c7;
}

.container_e_lal .tabla_edu_lal > tbody > tr > td {
  color: black;
  font-weight: normal;
  font-size: 12px;
  padding: 1px 0;
}
.container_e_lal .tabla_edu_lal > tbody > tr > td:nth-child(1) {
  /*text-align: center:*/
  width: 20%;
  padding-left: calc(30% / 50);
}
.container_e_lal .tabla_edu_lal > tbody > tr > td:nth-child(2) {
  /*text-align: center;*/
  width: 20%;
  padding-left: calc(30% / 50);
}
.container_e_lal .tabla_edu_lal > tbody > tr > td:nth-child(3) {
  text-align: center;
  width: 20%;
}
.container_e_lal .tabla_edu_lal > tbody > tr > td:nth-child(4) {
  text-align: center;
  width: 10%;
}
.container_e_lal .tabla_edu_lal > tbody > tr > td:nth-child(5) {
  text-align: center;
  width: 5%;
}
.container_e_lal .tabla_edu_lal > tbody > tr > td:nth-child(6) {
  text-align: center;
  width: 5%;
  /*display:flex;*/
}
.container_e_lal .tabla_edu_lal > tbody > tr > td:nth-child(7) {
  text-align: center;
  width: 10%;
}
.container_e_lal .tabla_edu_lal > tbody > tr > td:nth-child(8) {
  text-align: center;
  width: 10%;
}

.container_e_lal .tabla_edu_lal > tbody > tr > td > div {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 10px;
}
.container_e_lal .tabla_edu_lal > tbody > tr > td > div > a:nth-child(1) {
  color: #04722f;
}
.container_e_lal .tabla_edu_lal > tbody > tr > td > div > a:nth-child(2) {
  color: #337ab7;
}
.container_e_lal .tabla_edu_lal > tbody > tr > td > div > button:nth-child(3) {
  color: #f04f4f;
  padding: 0;
}
</style>