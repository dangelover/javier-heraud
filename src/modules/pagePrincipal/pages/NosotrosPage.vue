<template>
  <div class="contenedor-nosotros">
    <picture>
      <img src="/assets/img/alumnos/a01.png" alt="" />
    </picture>
    <div class="nosotors-texto d1">
      <h1>Nuestra Historia</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt inventore
        reprehenderit iste earum ab ipsum recusandae in sint dolores
        repellendus, tempora aperiam architecto ea numquam. Temporibus modi
        minima quam repudiandae.Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Sunt inventore reprehenderit iste earum ab ipsum
        recusandae in sint dolores repellendus, tempora aperiam architecto ea
        numquam. Temporibus modi minima quam repudiandae.
      </p>
    </div>
    <div class="nosotors-texto d2">
      <h1>Javier Heraud</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, ullam
        pariatur, sint est voluptas blanditiis ipsum assumenda deleniti natus
        illum maxime culpa hic odit. Enim provident unde tempore architecto
        molestiae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
        inventore reprehenderit iste earum ab ipsum recusandae in sint dolores
        repellendus, tempora aperiam architecto ea numquam. Temporibus modi
        minima quam repudiandae.
      </p>
    </div>
    <picture>
      <img src="/assets/img/alumnos/a02.png" alt="" />
    </picture>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.contenedor-nosotros {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 304px 304px;
  padding: 50px 0;
  /********/
  background-color: #ffffff;
}

.contenedor-nosotros > picture {
  display: grid;
  place-self: center;
}

.contenedor-nosotros > picture:nth-child(1) > img {
  width: 50%;
  place-self: end;
  margin-right: 50px;
  border: 2px solid black;
  border-radius: 20px;
}

.contenedor-nosotros > picture:nth-child(4) > img {
  width: 50%;
  place-self: start;
  margin-left: 50px;
  border: 2px solid black;
  border-radius: 20px;
}

.nosotors-texto {
  display: grid;
  place-self: center;
  width: 100%;

  /* gap: 50px; */
  /* margin: 0 50px; */
  /* padding: 0 50px; */
}

.nosotors-texto > h1 {
  justify-self: start;
  margin: 0 0 8px 0px;
}

.nosotors-texto > p {
  width: 50%;
  justify-self: start;
  margin: 0 0 0 50px;
}

.d2 > h1 {
  justify-self: center;
  /* margin: 0 300px 8px 0; */
}

.d2 > p {
  justify-self: end;
  width: 50%;
  margin: 0 50px 0 0;
}

/***************************************************************/

@media (max-width: 960px) {
  /* ajustar tamaño :v */
  .container {
    grid-template-rows: auto auto 100px;
  }
  .contenedor-nosotros {
    padding: 10px 0;
  }
  .contenedor-nosotros > picture:nth-child(1) > img {
    width: 70%;
    transition: 0.5s;
  }

  .contenedor-nosotros > picture:nth-child(4) > img {
    width: 70%;
    transition: 0.5s;
  }
  .nosotors-texto > p {
    width: 85%;
  }

  .d2 > h1 {
    justify-self: start;
    /* margin: 0 300px 8px 0; */
    margin-left: 40px;
  }

  .d2 > p {
    justify-self: start;
    width: 85%;
    margin: 0 50px 0 80px;
    transition: 0.5s;
  }
  .footer {
    font-size: 12px;
  }
}
</style>