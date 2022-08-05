<template>
  <div class="container_edu_b_uup">
    <h2 class="tittle-edu-uup">Editar Usuario</h2>
    <form @submit.prevent="onUpdated" class="form-edu-uup">
      <div>
        <label for="">Elegir rol</label>
        <select
          v-model="rol"
          class="form-select select-edu-uup"
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
          required
        />
      </div>
      <div className="form-group">
        <label for="">Contraseña</label>
        <input
          type="password"
          className="form-control"
          placeholder="Contraseña"
          v-model="pass1"
          required
        />
      </div>

      <div className="form-group">
        <label for="">Repetir Contraseña</label>
        <input
          type="password"
          className="form-control"
          placeholder="Repita la contraseña"
          v-model="pass2"
          required
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
      <div className="form-group boton-edu-g-uup">
        <input
          type="submit"
          className="boton-edu-uup"
          value="Actualizar cuenta"
        />
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
import Swal from "sweetalert2";
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      usuario: {},
      nombre: "",
      dni: "",
      correo: "",
      pass1: "",
      pass2: "",
      isValid: false,
      isValidDNI: false,
      rol: "",
      data: null,
      isValidmsg: false,
      mensaje: "",
      msgError: "",
      condicion: false,
      clasName: "alert alert-danger",
    };
  },
  methods: {
    ...mapActions("administrador", ["updateUser"]),
    async LoadUpdateUser() {
      const token = localStorage.getItem("token") || "";
      const url = `https://rest-server-node-n.herokuapp.com/api/usuarios/${this.id}`;
      const res = await fetch(url, {
        method: "GET",
        headers: {
          "x-token": token,
        },
      });
      const { condicion, usuario } = await res.json();
      const { DNI, correo, nombre, rol } = usuario;
      this.dni = DNI;
      this.correo = correo;
      this.nombre = nombre;
      this.rol = rol;
    },
    async onUpdated() {
      new Swal({
        title: "Espere por favor",
        allowOutsideClick: false,
      });
      Swal.showLoading();
      if (this.dni.toString().length !== 8) {
        this.isValid = true;
        this.mensaje = "El dni debe tener 8 digitos";
        setTimeout(() => {
          this.mensaje = "";
          this.isValid = false;
        }, 2000);
        return;
      }
      if (this.nombre.length === 0) {
        this.isValid = true;
        this.mensaje = "el nombre es necesario";
        setTimeout(() => {
          this.mensaje = "";
          this.isValid = false;
        }, 2000);
        return;
      }
      if (this.pass1 !== this.pass2) {
        this.isValid = true;
        this.mensaje = "contraseñas diferentes";
        setTimeout(() => {
          this.mensaje = "";
          this.isValid = false;
        }, 2000);
        return;
      }
      console.log(this.pass1.length);
      if (this.pass1.length <= 6) {
        this.isValid = true;
        this.mensaje = "contraseñas menor a 6 carateres";
        setTimeout(() => {
          this.mensaje = "";
          this.isValid = false;
        }, 2000);
        return;
      }
      this.correo = `${this.dni}@${this.dni}.com`;
      this.data = {
        id: this.id,
        nombre: this.nombre,
        DNI: this.dni,
        correo: this.correo,
        password: this.pass1,
        rol: this.rol,
      };
      const body = await this.updateUser(this.data);
      console.log(body);
      Swal.fire("Actualizado", "Actualizado con exito", "success");
      this.$router.push({ name: "list-user" });
    },
  },
  created() {
    this.LoadUpdateUser();
  },
};
</script>
<style scope>
/** esta jalando de "CreatedUserPage.vue" */
.container_edu_b_uup {
  border: 5px solid rgb(177, 41, 0);
  border-radius: 20px;
  /* padding: 10px; */
  /* background: rgba(155, 36, 0, 0.8); */
  width: 350px;
  box-sizing: border-box;
}

.tittle-edu-uup {
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
.form-edu-uup {
  margin: 12px 12px;
  display: grid;
  gap: 10px;
}

.form-edu-uup div select {
  margin: 0 10px 0 10px;
  width: 95%;
}
.form-edu-uup div:nth-child(2) input {
  margin: 0 10px 0 10px;
  width: 95%;
}
.form-edu-uup div:nth-child(3) input {
  margin: 0 10px 0 10px;
  width: 95%;
}
.form-edu-uup div:nth-child(4) input {
  margin: 0 10px 0 10px;
  width: 95%;
}
.form-edu-uup div:nth-child(5) input {
  margin: 0 10px 0 10px;
  width: 95%;
}

.boton-edu-g-uup {
  place-self: center;
  width: 150px;
  margin: 0;
}
.boton-edu-g-uup .boton-edu-uup {
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

.boton-edu-g-uup .boton-edu-uup:hover {
  /*background: #c62f00;*/
  /* border-color: #721b00; */
  background-position: right;
  color: rgb(255, 255, 255);
}
@media (max-width: 960px) {
  .container_edu_b_uup {
    width: fit-content;
  }
}
</style>