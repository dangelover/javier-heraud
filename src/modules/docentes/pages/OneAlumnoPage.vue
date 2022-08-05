<template>
  <div class="card-g-edu">
    <div class="card card-edu">
      <div class="card-header card-header-edu">Datos del Alumno</div>
      <div class="card-body card-body-edu">
        <div>
          <p>Nombre:</p>
          <p>{{ nombre }}</p>
        </div>
        <div>
          <p>Apellido:</p>
          <p>{{ apellido }}</p>
        </div>
        <div>
          <p>DNI:</p>
          <p>{{ DNI }}</p>
        </div>
        <div>
          <p>Dirección:</p>
          <p>{{ direccion }}</p>
        </div>
        <div>
          <p>Sexo:</p>
          <p>{{ sexo }}</p>
        </div>
        <div>
          <p>lengua:</p>
          <p>{{ lengua_materna }}</p>
        </div>
        <div>
          <p>Tutor:</p>
          <p>{{ correo_tutor }}</p>
        </div>
        <div>
          <p>Grado:</p>
          <p>{{ grado }}</p>
        </div>
        <div>
          <p>Sección:</p>
          <p>{{ seccion }}</p>
        </div>

        <div class="nacimiento">
          <h2>NACIMIENTO</h2>
          <div>
            <p>Fecha:</p>
            <p>{{ fecha_nacimiento }}</p>
          </div>
          <div>
            <p>Departamento:</p>
            <p>{{ departamento_nacimiento }}</p>
          </div>
          <div>
            <p>Provincia:</p>
            <p>{{ provincia_nacimiento }}</p>
          </div>
          <div>
            <p>Distrito:</p>
            <p>{{ distrito_nacimiento }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="card card-edu">
      <div class="card-header card-header-edu">Datos de la Madre</div>
      <div class="card-body card-body-edu">
        <div>
          <p>Nombre:</p>
          <p>{{ nombre_mama }}</p>
        </div>
        <div>
          <p>Apellido:</p>
          <p>{{ apellidos_mama }}</p>
        </div>
        <div>
          <p>DNI:</p>
          <p>{{ DNI_mama }}</p>
        </div>
        <div>
          <p>Dirección:</p>
          <p>{{ direccion_mama }}</p>
        </div>
        <div>
          <p>Celular:</p>
          <p>{{ celular_mama }}</p>
        </div>
      </div>
    </div>
    <div class="card card-edu">
      <div class="card-header card-header-edu">Datos del Padre</div>
      <div class="card-body card-body-edu">
        <div>
          <p>Nombre:</p>
          <p>{{ nombre_papa }}</p>
        </div>
        <div>
          <p>Apellido:</p>
          <p>{{ apellidos_papa }}</p>
        </div>
        <div>
          <p>DNI:</p>
          <p>{{ DNI_papa }}</p>
        </div>
        <div>
          <p>Dirección:</p>
          <p>{{ direccion_papa }}</p>
        </div>
        <div>
          <p>Celular:</p>
          <p>{{ celular_papa }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      nombre: "",
      apellido: "",
      DNI: "",
      fecha_nacimiento: "",
      departamento_nacimiento: "",
      provincia_nacimiento: "",
      distrito_nacimiento: "",
      lengua_materna: "",
      sexo: "",
      correo_tutor: "",
      direccion: "",
      nombre_mama: "",
      apellidos_mama: "",
      DNI_mama: "",
      direccion_mama: "",
      celular_mama: "",
      nombre_papa: "",
      apellidos_papa: "",
      DNI_papa: "",
      direccion_papa: "",
      celular_papa: "",
      grado: "",
      seccion: "",
    };
  },
  methods: {
    ...mapActions("docente", ["loadAlumno"]),
    async LoadOneAlumno() {
      const body = await this.loadAlumno(this.id);
      console.log(body);
      const {
        nombre,
        apellido,
        DNI,
        fecha_nacimiento,
        departamento_nacimiento,
        provincia_nacimiento,
        distrito_nacimiento,
        lengua_materna,
        sexo,
        correo_tutor,
        direccion,
        nombre_mama,
        apellidos_mama,
        DNI_mama,
        direccion_mama,
        celular_mama,
        nombre_papa,
        apellido_papa,
        DNI_papa,
        direccion_papa,
        celular_papa,
        grado,
        seccion,
      } = body.alumno;
      this.nombre = nombre;
      this.apellido = apellido;
      this.DNI = DNI;
      this.fecha_nacimiento = fecha_nacimiento;
      this.departamento_nacimiento = departamento_nacimiento;
      this.provincia_nacimiento = provincia_nacimiento;
      this.distrito_nacimiento = distrito_nacimiento;
      this.lengua_materna = lengua_materna;
      this.sexo = sexo;
      this.correo_tutor = correo_tutor;
      this.direccion = direccion;
      this.nombre_mama = nombre_mama;
      this.apellidos_mama = apellidos_mama;
      this.DNI_mama = DNI_mama;
      this.direccion_mama = direccion_mama;
      this.celular_mama = celular_mama;
      this.nombre_papa = nombre_papa;
      this.apellido_papa = apellido_papa;
      this.DNI_papa = DNI_papa;
      this.direccion_papa = direccion_papa;
      this.celular_papa = celular_papa;
      this.grado = grado;
      this.seccion = seccion;
    },
  },
  created() {
    this.LoadOneAlumno();
  },
};
</script>

<style scoped>
h2 {
  font-size: 20px;
  text-align: center;
  color: rgb(177, 41, 0);
}
.card-g-edu {
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 20px;
}
.card-edu {
  width: 400px;
  height: fit-content;
}
.card-header-edu {
  text-align: center;
  background: rgb(177, 41, 0);
  color: white;
}
.card-body-edu div {
  display: flex;
  gap: 10px;
}
.card-body-edu div p:nth-child(1) {
  color: red;
}
.card-body-edu div p:nth-child(2) {
  color: rgb(86, 86, 86);
}
.card-body-edu .nacimiento {
  display: grid;
}
</style>