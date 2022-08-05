<template>
  <tbody>
    <td>{{ actividad.nombre_actividad }}</td>
    <td>{{ actividad.descripcion_actividad }}</td>
    <td><img :src="actividad.img" alt="" /></td>
    <td>{{ actividad.estado === true ? "ACTIVO" : "INACTIVO" }}</td>
    <td>
      <div>
        <router-link
          :to="{ name: 'update-activity', params: { id: actividad.uid } }"
        >
          <i class="fas fa-edit"></i>
        </router-link>
        <button class="btn" @click="onDeleteActivity">
          <i class="fal fa-trash-alt"></i>
        </button>
      </div>
    </td>
  </tbody>
</template>

<script>
import Swal from "sweetalert2";
import { mapActions } from "vuex";
export default {
  props: {
    actividad: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapActions("administrador", ["deleteActivity"]),
    async onDeleteActivity() {
      console.log("hacer click");
      //   console.log(this.administrador.uid);
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
        const body = await this.deleteActivity(this.actividad.uid);
        if (body.condicion) {
          Swal.fire("Eliminado", "", "error");
          this.$router.push({ name: "my-perfil-admin" });
        }
      }
    },
  },
};
</script>
<style scoped>
img {
  max-width: 100%;
  max-height: 174px;
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
tbody > td:nth-child(1) {
  width: 250px;
  font-weight: bolder;
  padding: 8px 5px 8px 5px;
}
tbody > td:nth-child(2) {
  width: 500px;
  padding: 8px 5px 8px 5px;
}
tbody > td:nth-child(3) {
  width: 250px;
  display: flex;
  justify-content: center;
}
tbody > td:nth-child(3) > img {
  height: 148px;
}
tbody > td:nth-child(4) {
  width: 100px;
  padding: 8px 5px 8px 5px;
}
tbody > td:nth-child(5) {
  width: 100px;
}
.table > tbody > td > div {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 10px;
  align-self: center;
}
.table > tbody > td > div > a:nth-child(1) {
  color: #337ab7;
}
.table > tbody > td > div > button:nth-child(2) {
  color: #f04f4f;
  padding: 0;
}
</style>