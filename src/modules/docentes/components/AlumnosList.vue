<template>
  <div class="container">
    <div class="card">
      <img :src="student.img" alt="Person" class="card__image" />
      <div class="dat-edu">
        <p>Nombre:</p>
        <p>{{ student.nombre }}</p>
      </div>
      <div class="dat-edu">
        <p>Apellido:</p>
        <p>{{ student.apellido }}</p>
      </div>
      <div class="dat-edu">
        <p>DNI:</p>
        <p>{{ student.DNI }}</p>
      </div>
      <div class="grid-container">
        <div>
          <p>Grado:</p>
          <p>{{ student.grado }}</p>
        </div>
        <div>
          <p>Sección:</p>
          <p>{{ student.seccion }}</p>
        </div>
      </div>
      <ul class="social-icons">
        <li>
          <router-link
            :to="{ name: 'editar-alumno', params: { id: student.uid } }"
          >
            <i class="fas fa-edit"></i>
          </router-link>
        </li>
        <li>
          <router-link
            :to="{ name: 'ver-alumno', params: { id: student.uid } }"
          >
            <i class="fas fa-eye"></i>
          </router-link>
        </li>
        <li>
          <button class="btn" @click="onDeleteStudent(student.uid)">
            <i class="fal fa-trash-alt"></i>
          </button>
        </li>

        <!-- <button class="btn draw-border">Message</button> -->
      </ul>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import { mapActions, mapMutations } from "vuex";
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
    ...mapActions("docente", ["deleteStudent"]),
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
          this.$router.push({ name: "my-perfil-docente" });
        }
      }
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Baloo+Paaji+2:wght@400;500&display=swap");

.card {
  background-color: #ffffff;
  height: fit-content;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgb(0, 0, 0);
  border: 5px solid rgb(177, 41, 0);
  background: rgb(255, 248, 248);
}

.card__image {
  height: 200px;
  width: 200px;
  border-radius: 50%;
  border: 5px solid rgb(0, 0, 0);
  margin-top: 20px;
  margin-bottom: 20px;
  object-fit: cover;
  /* box-shadow: 0 10px 50px rgba(211, 0, 0, 0.659); */
}
.dat-edu {
  display: grid;
  grid-template-columns: 1fr 2fr;
  width: 100%;
  gap: 10px;
}
.dat-edu p {
  margin-top: 10px;
}
.dat-edu p:nth-child(1) {
  text-align: end;
  margin-left: 40px;
  color: red;
}
.dat-edu p:nth-child(2) {
  border: 1px solid rgb(213, 213, 213);
  width: 90%;
  border-radius: 20px;
  padding-left: 10px;
  background: rgb(230, 230, 230);
}
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  font-size: 1.2em;
}
.grid-container div {
  display: flex;
  gap: 10px;
}
.grid-container div p:nth-child(1) {
  color: red;
}

.social-icons {
  padding: 0;
  list-style: none;
  margin: 1em;
  display: flex;
}

.social-icons li {
  display: inline-block;
  margin: 0.15em;
  position: relative;
  font-size: 1em;
}

.social-icons i {
  color: rgb(255, 255, 255);
  position: absolute;
  top: 0.95em;
  left: 0.96em;
  transition: all 265ms ease-out;
}

.social-icons a:before {
  transform: scale(1);
  -ms-transform: scale(1);
  -webkit-transform: scale(1);
  content: " ";
  width: 45px;
  height: 45px;
  border-radius: 100%;
  display: block;
  background: linear-gradient(45deg, #e03400, #721b00);
  transition: all 265ms ease-out;
}

.social-icons a:hover:before {
  transform: scale(0);
  transition: all 265ms ease-in;
}

.social-icons a:hover i {
  transform: scale(2.2);
  -ms-transform: scale(2.2);
  -webkit-transform: scale(2.2);
  color: #ff003c;
  background: -webkit-linear-gradient(45deg, #721b00, #e03400);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 265ms ease-in;
}
/*  */
.social-icons button {
  padding: 0;
}
.social-icons button:before {
  transform: scale(1);
  -ms-transform: scale(1);
  -webkit-transform: scale(1);
  content: " ";
  width: 45px;
  height: 45px;
  border-radius: 100%;
  display: block;
  background: linear-gradient(45deg, #e03400, #721b00);
  transition: all 265ms ease-out;
}

.social-icons button:hover:before {
  transform: scale(0);
  transition: all 265ms ease-in;
}

.social-icons button:hover i {
  transform: scale(2.2);
  -ms-transform: scale(2.2);
  -webkit-transform: scale(2.2);
  color: #ff003c;
  background: -webkit-linear-gradient(45deg, #721b00, #e03400);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 265ms ease-in;
}
</style>