<template>
  <div v-if="tarea.estado" class="tema">
    <div class="tarea-head">
      <div class="tittle-h">
        <h4>TAREA:</h4>
        <h4>{{ tarea.nombre_tarea }}</h4>
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
    <div class="venc-boton">
      <button v-if="condicion" type="button" class="btn btn-success" disabled>
        Por vencer 😀
      </button>
      <button v-else type="button" class="btn btn-danger" disabled>
        Tarea vencida 😭
      </button>
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
      date: new Date(),
      condicion: true,
    };
  },
  methods: {
    checkTime() {
      let date1 = new Date(this.fecha);
      let diaTarea = date1.getDate();
      let mesTarea = date1.getMonth() + 1;
      let yearTarea = date1.getFullYear();
      let totalWork = diaTarea + mesTarea + yearTarea;
      // console.log(totalWork);
      let diaToday = this.date.getDate();
      let mesToday = this.date.getMonth() + 1;
      let yearToday = this.date.getFullYear();
      let totalToday = diaToday + mesToday + yearToday;
      // console.log(totalToday);
      if (totalWork < totalToday) {
        this.condicion = false;
      } else {
        this.condicion = true;
      }
      // console.log(date1);
      // console.log(date1);
      // console.log(this.fecha);
    },
  },
  created() {
    this.checkTime();
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
.venc-boton {
  display: flex;
  align-items: flex-end;
  justify-content: end;
  margin: 0 10px 10px 0;
}
.venc-boton > button {
  width: 170px;
}
</style>