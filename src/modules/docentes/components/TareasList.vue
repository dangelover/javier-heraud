<template>
  <div v-if="tarea.estado" class="tema">
    <div class="tarea-head">
      <div class="tittle-h">
        <h4>TAREA:</h4>
        <h4>{{ tarea.nombre_tarea }}</h4>
      </div>
      <div class="boton-e">
        <div class="boton-ed">
          <button
            type="button"
            class="btn btn-success"
            @click="
              $router.push({ name: 'edit-work', params: { id: tarea.uid } })
            "
          >
            <i class="fas fa-edit"></i>
          </button>
        </div>
        <div class="boton-del">
          <button type="button" class="btn btn-danger" @click="onDeleteWork">
            <i class="fal fa-trash-alt"></i>
          </button>
        </div>
      </div>
    </div>

    <div class="tarea-body">
      <div class="tb-i">
        <div class="tb-i-d">
          <p>DESCRIPCIÓN:</p>
          <p>{{ tarea.descripcion_tarea }}</p>
        </div>
        <div class="tb-i-d">
          <p>FECHA DE ENTREGA:</p>
          <p>{{ fecha }}</p>
        </div>
      </div>
      <div class="tb-d">
        <a :href="tarea.archivo" target="_blank"
          ><i class="fad fa-cloud-download"></i
        ></a>
      </div>
    </div>
  </div>
  <div v-else></div>
</template>

<script>
import Swal from "sweetalert2";
import { mapActions } from "vuex";
export default {
  props: {
    tarea: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      fecha: this.tarea.fecha_envio,
    };
  },
  methods: {
    ...mapActions("docente", ["deleteWork"]),
    async onDeleteWork() {
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
        const body = await this.deleteWork(this.tarea.uid);
        if (body.condicion) {
          Swal.fire("Eliminado", "", "error");
          this.$router.push({ name: "mis-cursos-docente" });
        }
      }
    },
  },
};
</script>
<style scoped>
p {
  margin: 0;
}
.tarea-head {
  background: rgb(175, 175, 175);
  display: grid;
  grid-template-columns: 3fr 1fr;
  padding: 0 10px;
}
.tittle-h {
  display: flex;
  gap: 5px;
}
.tittle-h h4:nth-child(1) {
  color: #c62f00;
}
.boton-e {
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: end;
}
.tarea-body {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 50px;
}
.tb-i {
  display: grid;
}
.tb-i-d p:nth-child(1) {
  color: #0d9700;
}
.tb-i-d p:nth-child(2) {
  padding: 0 20px;
}
.tb-d {
  display: flex;
  align-items: center;
  justify-content: center;
}
.tb-d > a {
  font-size: 100px;
}
</style>