<script setup>
import { RouterLink, RouterView } from 'vue-router'
import SubscribeView from "./views/SubscribeView.vue";
import 'animate.css'


</script>

<template>
  <header>
    <div class="wrapper">
      <div class="Dioniss_top_text animate__animated animate__fadeIn">
        <h1 class="Dioniss_name" v-motion
            :initial="{
    scale: 1,
  }"
            :hovered="{
    scale: 1.2,
  }">Дионисс Криптин</h1>
        <h1 class="Dioniss_disc" v-motion
            :initial="{
    scale: 1,
  }"
            :hovered="{
    scale: 1.1,
  }"> - твой лучший друг в мире трейдинга!</h1>
      </div>
      <vue-carousel class="dioniss_main_image animate__animated animate__fadeIn" :data="dioniss_photo" :indicators="false"></vue-carousel>
<!--      <img class="dioniss_main_image animate__animated animate__fadeIn" src="/public/image/Dioniss.jpg" alt="Dioniss" height="430" width="430">-->
      <div class="page_icons_list animate__animated animate__fadeInUpBig">
        <nav>
          <RouterLink to="/" v-motion
                      :initial="{
    scale: 1,
  }"
                      :hovered="{
    scale: 1.05,
  }"
                      :tapped="{
    scale: 0.75,
  }">Главная</RouterLink>
          <RouterLink to="/about" v-motion
                      :initial="{
    scale: 1,
  }"
                      :hovered="{
    scale: 1.05,
  }"
                      :tapped="{
    scale: 0.75,
  }">Обо мне</RouterLink>
          <RouterLink to="/cases" v-motion
                      :initial="{
    scale: 1,
  }"
                      :hovered="{
    scale: 1.05,
  }"
                      :tapped="{
    scale: 0.75,
  }">Кейсы</RouterLink>
          <RouterLink to="/quotes" v-motion
                      :initial="{
    scale: 1,
  }"
                      :hovered="{
    scale: 1.05,
  }"
                      :tapped="{
    scale: 0.75,
  }">Цитаты</RouterLink>
        </nav>
        <div class="links">
          <img src="/public/image/telegram.svg" alt="tg" class="links_image" onclick="window.open('https://t.me/DionissCryptoBot')">
          <img src="/public/image/youtube.svg" alt="youtube" class="links_image" onclick="window.open('https://youtube.com/dioniss')">
          <img src="/public/image/boosty.svg" alt="boosty" class="links_image"  onclick="window.open('https://boosty.to/dioniss')">
        </div>
      </div>
      <div class="subscribe_container animate__animated animate__fadeInUpBig animate__delay-1s" >
        <button class="subscribe_button" @click="toggleSubscribePanel" v-motion
                :initial="{
    scale: 1,
  }"
                :hovered="{
    scale: 1.2,
  }">Подписаться</button>
        <component v-if="press_subscribe_button" :is="SubscribeView"></component>
      </div>




    </div>
  </header>
  <main>
    <RouterView class="animate__animated animate__bounceInDown animate__faster"/>
  </main>


</template>

<style scoped>
main{
  align-items: flex-start;

}
.subscribe_button{
  text-align: center;
  font-size: 20px;
  font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #f2f2f2;
  text-shadow: #0a052c 1px 4px;
  margin-bottom: 10px;



  margin-top: 40px;
  background: linear-gradient(100.67deg, rgba(218, 75, 126, 0.69) 0%, rgba(157, 40, 100, 0.853581) 46.67%, #2C092E 100%);
  box-shadow: #0a052c 0px 5px;
  border-radius: 20px;
  border: none;
  width: 200px;
  height: 40px;

}

.subscribe_container{
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
}

.dioniss_main_image{

}

.Dioniss_top_text
{
  align-items: flex-start;
  margin-bottom: 40px;
}
.page_icons_list
{
  display: flex;
  flex-direction: column;


  justify-content: center;
  align-items: center;

}
.links{
  display: flex;
}
.links_image{
  height: 80px;
  width: 80px;
  margin-top: 10px;
  margin-inline: 20px;
  transition: transform 0.3s ease-in-out;
}
.links img:hover{
  transform: scale(1.5);
  cursor: pointer;
}
.Dioniss_name {
  font-size: 40px;
  color: rgb(224, 80, 131);
}
.Dioniss_disc{

}

header {
  line-height: 1.5;
}
/*.dioniss_main_image{*/
/*  border-radius: 25%;*/
/*}*/

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  border-radius: 5%;
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
    align-items: first baseline;
  }
  html{
    font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    /*position: fixed;*/
    /*top: 120px;*/
  }

  nav {
    font-size: 25px;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>


<script>
import VueCarousel from '@chenfengyuan/vue-carousel';

export default {
  components: {
    VueCarousel,
  },
  data() {
    return {
      press_subscribe_button: false,
      dioniss_photo: [
        '<div class="dioniss_main_image"><img src="/image/Dioniss_1.jpg" alt="Dioniss" height="430" width="430" style="border-radius: 25%;   margin-left: 40px; margin-right: 40px"></div>',
        '<div class="dioniss_main_image"><img src="/image/Dioniss_2.png" alt="Dioniss" height="430" width="430" style="border-radius: 25%;   margin-left: 40px; margin-right: 40px"></div>',
        '<div class="dioniss_main_image"><img src="/image/dioniss_logo.png" alt="Dioniss" height="430" width="430" style="border-radius: 25%;   margin-left: 40px; margin-right: 40px"></div>',
      ],
    };
  },
  methods: {
    toggleSubscribePanel() {
      this.press_subscribe_button = !this.press_subscribe_button;
    }
  },
};
</script>
