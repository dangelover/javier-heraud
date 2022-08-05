<template>
  <div class="contenedor-alumnos">
    <div class="grupo-alumnos">
      <h1 class="title-alumnos">Alumnos 2022</h1>
      <div class="grado-alumnos">
        <div class="grado">
          <h1>1° Grado</h1>
          <div class="seccion">
            <ul>
              Sección: A
            </ul>
            <ul>
              Sección: B
            </ul>
            <ul>
              Sección: C
            </ul>
            <ul>
              Sección: D
            </ul>
            <ul>
              Sección: E
            </ul>
          </div>
        </div>
        <div class="grado">
          <h1>2° Grado</h1>
          <div class="seccion">
            <ul>
              Sección: A
            </ul>
            <ul>
              Sección: B
            </ul>
            <ul>
              Sección: C
            </ul>
            <ul>
              Sección: D
            </ul>
            <ul>
              Sección: E
            </ul>
          </div>
        </div>
        <div class="grado">
          <h1>3° Grado</h1>
          <div class="seccion">
            <ul>
              Sección: A
            </ul>
            <ul>
              Sección: B
            </ul>
            <ul>
              Sección: C
            </ul>
            <ul>
              Sección: D
            </ul>
            <ul>
              Sección: E
            </ul>
          </div>
        </div>
        <div class="grado">
          <h1>4° Grado</h1>
          <div class="seccion">
            <ul>
              Sección: A
            </ul>
            <ul>
              Sección: B
            </ul>
            <ul>
              Sección: C
            </ul>
            <ul>
              Sección: D
            </ul>
            <ul>
              Sección: E
            </ul>
          </div>
        </div>
        <div class="grado">
          <h1>5° Grado</h1>
          <div class="seccion">
            <ul>
              Sección: A
            </ul>
            <ul>
              Sección: B
            </ul>
            <ul>
              Sección: C
            </ul>
            <ul>
              Sección: D
            </ul>
            <ul>
              Sección: E
            </ul>
          </div>
        </div>
        <div class="grado">
          <h1>6° Grado</h1>
          <div class="seccion">
            <ul>
              Sección: A
            </ul>
            <ul>
              Sección: B
            </ul>
            <ul>
              Sección: C
            </ul>
            <ul>
              Sección: D
            </ul>
            <ul>
              Sección: E
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style scoped>
.title-alumnos {
  text-align: center;
  color: #c62f00;
  background: white;
  margin: 0;
  padding: 50px 0;
}
.contenedor-alumnos {
  /* background-color: gold; */
  display: grid;
  justify-items: center;
  background: white;
}
.grupo-alumnos {
  display: grid;
  grid-template-rows: auto auto;
  /* background-color: #ACD9b2; */
  width: 80%;
  height: fit-content;
}
.grupo-alumnos > h1 {
  /* background-color: royalblue; */
  text-align: center;
  margin: 25px 0 25px 0;
}
.grado-alumnos {
  background-color: rgb(255, 255, 255);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 150px 150px;
  width: 80%;
  justify-self: center;
  margin-bottom: 25px;
  height: fit-content;
}
.grado {
  width: 100%;
  /* background-color: red; */
  display: grid;
  grid-template-rows: 30px auto;
  /* border: 1px solid #C62F00;
    border-top-left-radius:20px ; */
}
.grado > h1 {
  margin: 0;
  font-size: 24px;
  text-align: center;
  background-color: #c62f00;
  /* border-top-left-radius:20px ;*/
  width: 100%;
  box-sizing: border-box;
  color: white;
}
.seccion {
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto auto;
  width: 100%;
  box-sizing: border-box;
}
.seccion > ul {
  margin: 0;
  padding: 0;
  /* text-align: center; */
  justify-self: center;
  align-self: center;
}
/*      border unicos a cada bloque grado     */
/*h1*/
.grado-alumnos > .grado:nth-child(1) > h1 {
  border-top-left-radius: 20px;
  border-left: 2px solid black;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  border-right: 1px solid black;
}
.grado-alumnos > .grado:nth-child(2) > h1 {
  border-left: 1px solid black;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  border-right: 1px solid black;
}
.grado-alumnos > .grado:nth-child(3) > h1 {
  border-top-right-radius: 20px;
  border-left: 1px solid black;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  border-right: 2px solid black;
}
.grado-alumnos > .grado:nth-child(4) > h1 {
  border-left: 2px solid black;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  border-right: 1px solid black;
}
.grado-alumnos > .grado:nth-child(5) > h1 {
  border-left: 1px solid black;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  border-right: 1px solid black;
}
.grado-alumnos > .grado:nth-child(6) > h1 {
  border-left: 1px solid black;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  border-right: 2px solid black;
}
/*section*/
.grado-alumnos > .grado:nth-child(1) > .seccion {
  border-left: 2px solid black;
  border-right: 1px solid black;
}
.grado-alumnos > .grado:nth-child(2) > .seccion {
  border-left: 1px solid black;
  border-right: 1px solid black;
}
.grado-alumnos > .grado:nth-child(3) > .seccion {
  border-left: 1px solid black;
  border-right: 2px solid black;
}
.grado-alumnos > .grado:nth-child(4) > .seccion {
  border-bottom-left-radius: 20px;
  border-left: 2px solid black;
  border-bottom: 2px solid black;
  border-right: 1px solid black;
}
.grado-alumnos > .grado:nth-child(5) > .seccion {
  border-left: 1px solid black;
  border-bottom: 2px solid black;
  border-right: 1px solid black;
}
.grado-alumnos > .grado:nth-child(6) > .seccion {
  border-bottom-right-radius: 20px;
  border-left: 1px solid black;
  border-bottom: 2px solid black;
  border-right: 2px solid black;
}
</style>