<template>
  <div class="containerEdu">
    <div class="navbarEdu">
      <div>
        <figure>
          <img
            src="https://res.cloudinary.com/dqsh99vzm/image/upload/v1646361220/imagenes-escuela/logos/Grupo_1_cjydiw.png"
            alt=""
          />
        </figure>
        <span>
          <p>I.E. JAVIER HERAUD</p>
          <p>N° 31593</p>
        </span>
      </div>
      <nav class="navEdu">
        <NavBar />
      </nav>
    </div>
    <router-view></router-view>
    <footer class="footer-edu">
      <div class="footer-edu-t">
        <div class="footer-edu-t-t">
          <div class="footer-edu-t-p">
            <i class="fas fa-phone"></i>
            <p>+51 987654321</p>
          </div>
          <div class="footer-edu-t-m">
            <i class="fas fa-envelope"></i>
            <p>Heraud@gmail.com</p>
          </div>
        </div>
        <div class="footer-edu-t-b">
          <div class="footer-edu-t-u">
            <i class="fas fa-map-marker-alt"></i>
            <p>Av. Los Educadores 563 AAHH Justicia Paz y Vida</p>
          </div>
          <div class="footer-edu-t-rs">
            <a href="https://es-la.facebook.com/" target="_blank"
              ><i class="fab fa-facebook"></i
            ></a>
            <!-- <i class="fa-l fa-brands fa-facebook fa-beat" style="--fa-animation-duration: 5s; color: blue;"></i> -->
            <!-- <i class="fa-brands fa-whatsapp fa-beat" style="--fa-animation-duration: 5s; color: green;"></i> -->
          </div>
        </div>
      </div>
      <div class="fotter-b">
        <p>
          <i class="fa-regular fa-copyright"></i> 2022 I.E. N° 31593 Javier
          Heraud
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
import { defineAsyncComponent } from "@vue/runtime-core";
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  computed: {
    ...mapState("principal", {
      isLoading: "isLoading",
    }),
  },
  components: {
    NavBar: defineAsyncComponent(() => import("../components/NavBar.vue")),
  },
};
</script>

<style scoped>
:root {
  --white: #ffffff;
  --black: #000000;
  --very-light-pink: #c7c7c7;
  --text-inpunt-field: #f7f7f7;
  --hospital-green: #acd9b2;
  --sm: 14px;
  --md: 16px;
  --lg: 18px;
}
body {
  margin: 0;
  /* font-family: "Quicksand", sans-serif; */
  overflow-x: hidden;
  /* overflow-y: hidden; */
  /* padding-top: 100px; */
  /* padding-bottom: 100px; */
}

p {
  margin: 0;
}

.containerEdu {
  height: 100%;
  display: grid;
  /* position: relative; */
  grid-template-rows: auto auto auto 1fr;
  width: 100vw;
  background-color: #000000;
  /* position: relative; */
  /* padding-top: 100px; */
  /* background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%); */
}
.navbarEdu {
  display: grid;
  box-sizing: border-box;
  height: 100%;
  width: 100vw;
  grid-template-columns: 1fr 1fr;
  /* position: absolute; */
  top: 0;
  padding: 10px 0px;
  /* position: absolute; */
  /* position: fixed; */
  background-color: #c62f00;
  /* border: 1px solid red; */
}

.navbarEdu div {
  display: grid;
  grid-template-columns: 1fr 3fr;
  align-items: center;
}

.navbarEdu div figure {
  margin: 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
}

.navbarEdu div span {
  /* centrar con flex H-V */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.navbarEdu div span p {
  /* centrar con flex H-V */
  color: var(--white);
}

.navbarEdu .navEdu {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 40px;
}

.navbarEdu .navEdu a {
  text-decoration: none;
  color: white;
  font-weight: bolder;
  font-size: 16px;
}

.navbarEdu .navEdu a:hover {
  color: rgb(0, 0, 0);
  background-color: white;
  font-weight: bolder;
  border-radius: 5px;
}

.navbarEdu div span p {
  font-weight: bold;
  font-size: 25px;
  /* align-items: center; */
}
.g-pro-slide-edu {
  display: grid;
  position: relative;
  width: 100vw;
  height: fit-content;
}

.g-pro-slide-edu .nomp {
  width: 100vw;
  height: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #00000071;
}

.g-pro-slide-edu .nomp p {
  margin: 0;
  color: white;
  font-weight: bolder;
  font-size: 50px;
}

/* slider */

.pro-slide-edu {
  width: 100vw;
  height: fit-content;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  /* display: flex; */
  /* grid-template-rows: auto; */
}

.pro-slide-edu ul {
  list-style: none;
  width: 100%;
  display: flex;
  padding: 0;
  animation: slide 94s infinite;
}

.pro-slide-edu ul {
  margin: 0;
}

.pro-slide-edu ul li img {
  width: 100vw;
  /* object-fit: cover; */
  /* object-position: 50%; */
}

@keyframes slide {
  0% {
    margin-left: 0px;
  }
  4% {
    margin-left: 0px;
  }
  5% {
    margin-left: -100%;
  }
  9% {
    margin-left: -100%;
  }
  10% {
    margin-left: -200%;
  }
  14% {
    margin-left: -200%;
  }
  15% {
    margin-left: -300%;
  }
  19% {
    margin-left: -300%;
  }
  20% {
    margin-left: -400%;
  }
  24% {
    margin-left: -400%;
  }
  25% {
    margin-left: -500%;
  }
  29% {
    margin-left: -500%;
  }
  30% {
    margin-left: -600%;
  }
  34% {
    margin-left: -600%;
  }
  35% {
    margin-left: -700%;
  }
  39% {
    margin-left: -700%;
  }
  40% {
    margin-left: -800%;
  }
  44% {
    margin-left: -800%;
  }
  45% {
    margin-left: -900%;
  }
  49% {
    margin-left: -900%;
  }
  50% {
    margin-left: -1000%;
  }
  54% {
    margin-left: -1000%;
  }
  55% {
    margin-left: -1100%;
  }
  59% {
    margin-left: -1100%;
  }
  60% {
    margin-left: -1200%;
  }
  64% {
    margin-left: -1200%;
  }
  65% {
    margin-left: -1300%;
  }
  69% {
    margin-left: -1300%;
  }
  70% {
    margin-left: -1400%;
  }
  74% {
    margin-left: -1400%;
  }
  75% {
    margin-left: -1500%;
  }
  79% {
    margin-left: -1500%;
  }
  80% {
    margin-left: -1600%;
  }
  84% {
    margin-left: -1600%;
  }
  85% {
    margin-left: -1700%;
  }
  89% {
    margin-left: -1700%;
  }
  90% {
    margin-left: -1800%;
  }
  94% {
    margin-left: -1800%;
  }
  95% {
    margin-left: -1900%;
  }
  99% {
    margin-left: -1900%;
  }
}

@media (min-width: 1200px) {
  .pro-slide-edu {
    height: 550px;
  }
}

/* slider end */

.nomp {
  /* position: absolute; */
  /* position: fixed; */
}

.dvm {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100vw;
  /* position: relative; */
}

.dvm .dvm-m {
  background-color: #acd9b2;
}

.dvm .dvm-vi {
  background-color: darkorange;
}

.dvm .dvm-va {
  background-color: #c62f00;
}

.dvm div figure {
  margin: 0;
}

.dvm div figure img {
  /* position: absolute; */
  width: 100%;
}

.dvm-c {
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  text-align: justify;
  margin: 0 16px 16px 16px;
}

.dh {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.dh h1 {
  margin: 0;
  color: white;
}

.dh figure {
  margin: 0;
  display: flex;
  justify-content: center;
  background-image: radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(147, 67, 67, 1) 0%,
    rgba(111, 27, 27, 1) 90%
  );
}

.dh figure img {
  /* height: 80%; */
  width: 50%;
  margin: 50px 0;
  border: 5px solid rgb(0, 0, 0);
  border-radius: 20px;
}

.footer-edu {
  display: grid;
  grid-template-rows: 1fr 1fr;
  width: 100vw;
  margin: 0;
  /* background-color: #C62F00; */
}

.footer-edu .footer-edu-t {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 10px 0;
}

.footer-edu-t .footer-edu-t-t,
.footer-edu-t-b {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.footer-edu-t-t,
.footer-edu-t-b {
  place-items: center;
  width: 100%;
  /* margin: 20px 20px; */
}

.fotter-b {
  place-self: center;
}

.footer-edu-t-p,
.footer-edu-t-m,
.footer-edu-t-u {
  display: flex;
  width: 80%;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.footer-edu-t-u i {
}

.footer-edu-t-rs {
  display: flex;
  width: 30%;
  justify-content: space-evenly;
}

.footer-edu div p {
  color: white;
}

.footer-edu div i {
  color: white;
}

/* estas cosas que tienen arroba abajo */

@media (min-width: 1321px) {
  /* ajustar tamaño :v */
  .dvm div figure {
    display: flex;
    justify-content: center;
  }
  .dvm div figure img {
    width: 50%;
  }
}

/* prueba :v */

/* no slaio :'v */
</style>