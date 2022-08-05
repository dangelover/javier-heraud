<template>
  <div>
    <h1>Documentos</h1>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">Nombre del documento</th>
          <th scope="col">Nombre del docente</th>
          <th scope="col">DNI del docente</th>
          <th scope="col">Fecha de envio</th>
          <th scope="col">Archivo del Documento</th>
          <th scope="col">Comentarios</th>
          <th scope="col">Estado</th>
          <th scope="col">Enviar comentarios</th>
        </tr>
      </thead>
      <tbody v-if="isLoading">
        <tr>
          <div class="spinner-border text-primary" role="status">
            <span class="sr-only"></span>
          </div>
        </tr>
      </tbody>
      <DocumentList
        v-else
        v-for="document in documentos"
        :key="document.id"
        :document="document"
      />
    </table>
  </div>
</template>

<script>
import { defineAsyncComponent } from "@vue/runtime-core";
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      documentos: [],
    };
  },
  components: {
    DocumentList: defineAsyncComponent(() =>
      import("../components/DocumentList.vue")
    ),
  },
  computed: {
    ...mapState("administrador", {
      isLoading: "isLoading",
    }),
  },
  methods: {
    ...mapActions("administrador", ["loadDocumentos"]),
    async ListaDocumentos() {
      const { documents } = await this.loadDocumentos();
      console.log(documents);
      this.documentos = documents;
    },
  },
  created() {
    this.ListaDocumentos();
  },
};
</script>

<style scoped>
h1 {
  color: #c62f00;
  text-transform: uppercase;
  margin: 10px 0 0 0;
  text-align: center;
}
tr {
  background: #c62f00;
}
tr > th {
  color: white;
}
.boton_nd {
  display: grid;
  justify-content: end;
  margin-bottom: 10px;
}
.primary-button {
  background-color: white;
  border-radius: 8px;
  border: none;
  color: #c62f00;
  height: 50px;
  width: auto;
  padding: 0 15px;
  font-size: "10px";
  font-weight: bold;
  transition: 0.5s;
}
.primary-button:hover {
  background-color: #c62f00;
  color: white;
}
</style>