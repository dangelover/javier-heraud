<template>
  <router-link :to="{ name: 'principal-page' }">Inicio</router-link>
  <router-link :to="{ name: 'nosotros-page' }">Nosotros</router-link>
  <router-link :to="{ name: 'activity-page' }">Comunicados</router-link>
  <!-- <router-link :to="{ name: 'students-page' }">Alumnos</router-link> -->
  <router-link :to="{ name: 'docentes-page' }">Docentes</router-link>
  <router-link :to="{ name: 'auth' }">Login</router-link>
</template>

<script>
export default {};
</script>

<style scoped>
</style>