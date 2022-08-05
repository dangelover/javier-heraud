<template>
  <div class="container">
    <div class="card">
      <img :src="partner.img" alt="Person" class="card__image" />
      <div class="dat-edu">
        <p>Nombre:</p>
        <p>{{ partner.nombre }}</p>
      </div>
      <div class="dat-edu">
        <p>Apellido:</p>
        <p>{{ partner.apellido }}</p>
      </div>
      <!-- <div class="dat-edu">
        <p>DNI:</p>
        <p>{{ partner.DNI }}</p>
      </div> -->
      <div class="dat-edu">
        <p>Nacimiento:</p>
        <p>{{ partner.fecha_nacimiento }}</p>
      </div>
      <div class="grid-container">
        <div>
          <p>Grado:</p>
          <p>{{ partner.grado }}</p>
        </div>
        <div>
          <p>Sección:</p>
          <p>{{ partner.seccion }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    partner: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Baloo+Paaji+2:wght@400;500&display=swap");
.container {
  padding: 0;
}
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
  align-self: center;
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
</style>