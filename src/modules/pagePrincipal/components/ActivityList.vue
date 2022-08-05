<template>
  <div v-if="actividad.estado">
    <section class="product-container">
      <aside class="product-details">
        <div class="product-image">
          <img :src="actividad.img" />
        </div>
        <div class="product-info">
          <div>
            <p>{{ actividad.nombre_actividad }}</p>
            <p>{{ actividad.descripcion_actividad }}</p>
          </div>
        </div>
      </aside>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    actividad: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped >
.product-container {
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
}

.product-details {
  width: 360px;
  height: 75%;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.product-details-close {
  position: absolute;
  left: 0px;
  top: 0px;
  background-color: var(--white);
  width: 14px;
  height: 14px;
}
.product-details-close > img {
  width: 12px;
  height: 12px;
}

.product-details-close > img:hover {
  cursor: pointer;
}

img {
  width: 360px;
  height: 360px;
  object-fit: cover;
  border-radius: 0 0 20px 20px;
}

.product-info {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100% - 360px);
}

.product-info > div {
  display: flex;
  flex-direction: column;
  margin: 0 24px;
}

.product-info > div p:nth-child(1) {
  font-weight: bold;
  font-size: var(--md);
  margin-top: 0px;
  margin-bottom: 4px;
}

.product-info > div p:nth-child(2) {
  color: var(--very-light-pink);
  font-size: var(--md);
  margin-top: 0px;
  margin-bottom: 4px;
}

.product-info > div p:nth-child(3) {
  color: var(--very-light-pink);
  font-size: var(--sm);
  margin-top: 8px;
  margin-bottom: 4px;
}
</style>