<template>
  <tbody>
    <tr>
      <td>{{ usuario.nombre }}</td>
      <td>{{ usuario.correo }}</td>
      <td>{{ usuario.DNI }}</td>
      <td>{{ rol }}</td>
      <td>{{ usuario.estado === true ? "ACTIVO" : "INACTIVO" }}</td>
      <td>
        <div>
          <router-link :to="{ name: 'user-page', params: { id: usuario.uid } }">
            <i class="fas fa-eye"></i>
          </router-link>
          <router-link
            :to="{ name: 'updated-user', params: { id: usuario.uid } }"
          >
            <i class="fas fa-edit"></i>
          </router-link>
          <button class="btn" @click="onDeleteUser(usuario.uid)">
            <i class="fal fa-trash-alt"></i>
          </button>
        </div>
      </td>
    </tr>
  </tbody>
</template>


<script>
import Swal from "sweetalert2";
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  props: {
    usuario: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      user: this.usuario,
      estado: null,
      rol: "",
    };
  },
  methods: {
    ...mapActions("administrador", ["deleteUser", "loadUsers"]),
    loadRol() {
      if (this.usuario.rol === "ADMIN_ROLE") {
        this.rol = "ADMINISTRADOR";
      } else if (this.usuario.rol === "DOCENTE_ROLE") {
        this.rol = "DOCENTE";
      } else {
        this.rol = "ALUMNO";
      }
      this.usuario.id;
    },
    async onDeleteUser() {
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
        const body = await this.deleteUser(this.usuario.uid);
        if (body.condicion) {
          Swal.fire("Eliminado", "", "error");
          this.$router.push({ name: "list-user-admin" });
        }
      }
    },
  },
  created() {
    this.loadRol();
  },
};
</script>
<style scope>
.container_e_lu .tabla_edu_lu {
  height: 80vh;
  overflow: auto;
  display: inline-block;
  width: 100%;
}
.container_e_lu .tabla_edu_lu > thead {
  width: 100%;
}

/*separador*/
.container_e_lu .tabla_edu_lu > tbody {
  width: 100%;
}
.container_e_lu .tabla_edu_lu > tbody:nth-child(even) {
  /*background-color: #E1EEF4;*/
  background-color: #fcd3c7;
}

.container_e_lu .tabla_edu_lu > tbody > tr > td {
  color: black;
  font-weight: normal;
  font-size: 12px;
  padding: 1px 0;
}
.container_e_lu .tabla_edu_lu > tbody > tr > td:nth-child(1) {
  /*text-align: center:*/
  width: calc(0.3 * 1503px);
  padding-left: calc(30% / 50);
}
.container_e_lu .tabla_edu_lu > tbody > tr > td:nth-child(2) {
  /*text-align: center;*/
  width: 30%;
  padding-left: calc(30% / 50);
}
.container_e_lu .tabla_edu_lu > tbody > tr > td:nth-child(3) {
  text-align: center;
  width: 10%;
}
.container_e_lu .tabla_edu_lu > tbody > tr > td:nth-child(4) {
  text-align: center;
  width: 10%;
}
.container_e_lu .tabla_edu_lu > tbody > tr > td:nth-child(5) {
  text-align: center;
  width: 10%;
}
.container_e_lu .tabla_edu_lu > tbody > tr > td:nth-child(6) {
  text-align: center;
  width: 10%;
  /*display:flex;*/
}
.container_e_lu .tabla_edu_lu > tbody > tr > td > div {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 10px;
}
.container_e_lu .tabla_edu_lu > tbody > tr > td > div > a:nth-child(1) {
  color: #04722f;
}
.container_e_lu .tabla_edu_lu > tbody > tr > td > div > a:nth-child(2) {
  color: #337ab7;
}
.container_e_lu .tabla_edu_lu > tbody > tr > td > div > button:nth-child(3) {
  color: #f04f4f;
  padding: 0;
}
</style>