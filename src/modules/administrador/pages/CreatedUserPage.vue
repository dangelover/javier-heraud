<template>
  <div class="container_edu_b_cup">
    <h2 class="tittle-edu-cup">Nuevo Usuario</h2>
    <form @submit.prevent="onCreated" class="form-edu-cup">
      <div>
        <label for="">Elegir rol</label>
        <select
          v-model="rol"
          class="form-select select-edu-cup"
          aria-label="Default select example"
        >
          <option value="DOCENTE_ROLE">Docente</option>
          <option value="ADMIN_ROLE">Administración</option>
          <option value="ALUMNO_ROLE">Alumno</option>
        </select>
      </div>

      <div className="form-group">
        <label for="">Nombre</label>
        <input
          type="text"
          className="form-control"
          placeholder="Nombre"
          v-model="nombre"
        />
      </div>
      <div className="form-group">
        <label for="">DNI</label>
        <input
          type="number"
          className="form-control"
          placeholder="DNI"
          v-model="dni"
        />
      </div>
      <div className="form-group">
        <label for="">Contraseña</label>
        <input
          type="password"
          className="form-control"
          placeholder="Contraseña"
          v-model="pass1"
        />
      </div>

      <div className="form-group">
        <label for="">Repetir Contraseña</label>
        <input
          type="password"
          className="form-control"
          placeholder="Repita la contraseña"
          v-model="pass2"
        />
      </div>
      <div v-if="isValid" class="alert alert-danger" role="alert">
        <p>{{ mensaje }}</p>
      </div>
      <div v-if="isValidmsg" :class="clasName" role="alert">
        <p>
          {{ condicion ? "Usuario Creado" : `Posibles errores: ${mensaje}` }}
        </p>
      </div>
      <br />
      <div className="form-group boton-edu-g-cup">
        <input type="submit" className="boton-edu-cup" value="Crear cuenta" />
      </div>
    </form>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  data() {
    return {
      nombre: "",
      dni: "",
      correo: "",
      pass1: "",
      pass2: "",
      isValid: false,
      isValidDNI: false,
      rol: "",
      dataNewUser: null,
      isValidmsg: false,
      mensaje: "",
      msgError: "",
      condicion: false,
      clasName: "alert alert-danger",
    };
  },
  methods: {
    ...mapActions("administrador", ["createUser"]),

    async onCreated() {
      new Swal({
        title: "Espere por favor",
        allowOutsideClick: false,
      });
      if (this.nombre.length === 0) {
        // this.isValid = true;
        this.mensaje = "el nombre es necesario";
        Swal.fire("Error", this.mensaje, "error");
        setTimeout(() => {
          this.mensaje = "";
          // this.isValid = false;
        }, 2000);
        return;
      }
      if (this.dni.toString().length !== 8) {
        // this.isValid = true;
        this.mensaje = "El dni debe tener 8 digitos";
        Swal.fire("Error", this.mensaje, "error");
        setTimeout(() => {
          this.mensaje = "";
          // this.isValid = false;
        }, 2000);
        return;
      }
      if (this.pass1 !== this.pass2) {
        // this.isValid = true;
        this.mensaje = "contraseñas diferentes";
        Swal.fire("Error", this.mensaje, "error");
        setTimeout(() => {
          this.mensaje = "";
          // this.isValid = false;
        }, 2000);
        return;
      }
      console.log(this.pass1.length);
      if (this.pass1.length <= 6) {
        // this.isValid = true;
        this.mensaje = "contraseñas menor a 6 carateres";
        Swal.fire("Error", this.mensaje, "error");
        setTimeout(() => {
          this.mensaje = "";
          // this.isValid = false;
        }, 2000);
        return;
      }
      this.correo = `${this.dni}@${this.dni}.com`;
      this.dataNewUser = {
        nombre: this.nombre,
        DNI: this.dni,
        correo: this.correo,
        password: this.pass1,
        rol: this.rol,
      };
      console.log(this.dataNewUser);
      const body = await this.createUser(this.dataNewUser);
      if (!body.condicion) {
        this.isValidmsg = true;
        this.clasName = "alert alert-danger";
        this.mensaje = body.msg;
        this.condicion = false;
        setTimeout(() => {
          this.isValidmsg = false;
        }, 3000);
      } else {
        this.isValidmsg = true;
        this.condicion = true;
        this.clasName = "alert alert-success";
        this.mensaje = body.msg;
        setTimeout(() => {
          this.isValidmsg = false;
        }, 3000);
        Swal.fire("Creado", "Creado con exito", "success");
        this.$router.push({ name: "list-user" });
      }
    },
  },
};
</script>
<style scope>
.container_edu_b_cup {
  border: 5px solid rgb(177, 41, 0);
  border-radius: 20px;
  /* padding: 10px; */
  /* background: rgba(155, 36, 0, 0.8); */
  width: 350px;
  box-sizing: border-box;
}

.tittle-edu-cup {
  text-align: center;
  font-size: 1.5em;
  text-transform: uppercase;
  color: white;
  background: rgb(177, 41, 0);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  padding: 4px 8px;
  margin: 0;
}
.form-edu-cup {
  margin: 12px 12px;
  display: grid;
  gap: 10px;
}

.form-edu-cup div select {
  margin: 0 10px 0 10px;
  width: 95%;
}
.form-edu-cup div:nth-child(2) input {
  margin: 0 10px 0 10px;
  width: 95%;
}
.form-edu-cup div:nth-child(3) input {
  margin: 0 10px 0 10px;
  width: 95%;
}
.form-edu-cup div:nth-child(4) input {
  margin: 0 10px 0 10px;
  width: 95%;
}
.form-edu-cup div:nth-child(5) input {
  margin: 0 10px 0 10px;
  width: 95%;
}

.boton-edu-g-cup {
  place-self: center;
  width: 150px;
  margin: 0;
}
.boton-edu-g-cup .boton-edu-cup {
  display: block;
  width: 100%;
  height: 50px;
  border-radius: 15px;
  outline: none;
  border: none;
  font-weight: bolder;
  /* background-image: linear-gradient(to right, #32be8f, #38d39f, #32be8f); */
  background-image: linear-gradient(to right, #9b2400, #c62f00, #9b2400);
  background-size: 200%;
  /* font-size: 1.2rem; */
  font-family: "Poppins", sans-serif;
  /* margin: 1rem 0; */
  cursor: pointer;
  transition: 0.5s;
  color: rgb(255, 255, 255);
}

.boton-edu-g-cup .boton-edu-cup:hover {
  /*background: #c62f00;*/
  /* border-color: #721b00; */
  background-position: right;
  color: rgb(255, 255, 255);
}
@media (max-width: 960px) {
  .container_edu_b-cup {
    width: fit-content;
  }
}
</style>