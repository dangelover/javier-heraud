<template>
  <div v-if="tema.estado" class="container-t-t">
    <div class="tema">
      <div class="tema-head">
        <div class="tittle-h">
          <h2>TEMA:</h2>
          <h4>{{ tema.nombre_tema }}</h4>
        </div>
      </div>

      <div class="tema-body">
        <div class="tittle-b">
          <h3>Materiales de Clase</h3>
        </div>
        <div class="url-e">
          <a :href="tema.archivo" target="_blank"
            ><i class="fas fa-file-pdf"></i
          ></a>
        </div>
      </div>
    </div>

    <div>
      <div v-if="isLoading" class="spinner-border text-primary" role="status">
        <span class="sr-only"></span>
      </div>
      <TareaList
        v-else
        v-for="tarea in tareas"
        :key="tarea.id"
        :tarea="tarea"
      />
    </div>
  </div>
  <div v-else></div>
</template>

<script>
import Swal from "sweetalert2";
import { defineAsyncComponent } from "@vue/runtime-core";
import { mapState, mapActions } from "vuex";
export default {
  components: {
    TareaList: defineAsyncComponent(() =>
      import("../components/TareasList.vue")
    ),
  },
  computed: {
    ...mapState("alumno", {
      isLoading: "isLoading",
    }),
  },
  props: {
    tema: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      tareas: [],
    };
  },
  methods: {
    ...mapActions("alumno", ["loadTareas"]),
    async ListTareas() {
      const { tareas } = await this.loadTareas(this.tema.uid);
      this.tareas = tareas;
      console.log(this.tareas);
    },
  },
  created() {
    this.ListTareas();
  },
};
</script>

<style scoped>
h2 {
  margin: 0;
}
h3 {
  margin: 0;
}
h4 {
  margin: 0;
}
.tema-head {
  background: rgb(221, 135, 135);
  display: grid;
  grid-template-columns: 1fr;
  padding: 0 10px;
}
.tittle-h {
  display: flex;
  gap: 5px;
  align-items: center;
}
.tittle-h h2:nth-child(1) {
  color: #c62f00;
}

.tema-body {
  background: white;
  display: grid;
  grid-template-columns: 2fr 2fr;
  padding: 0 10px;
}
.tittle-b {
  display: flex;
  align-items: center;
  justify-content: end;
}
.url-e {
  display: flex;
  align-items: center;
  justify-content: center;
}
.url-e > a {
  font-size: 100px;
  color: red;
  margin: 15px 0;
}
</style>