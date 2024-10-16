<template>
  <div class="subscribe-panel">
    <input class="subscribe_input" v-model="email" type="email" placeholder="Введите вашу почту" />
    <button class="subscribe_button" v-on:click="sendEmail" v-motion
            :initial="{
    scale: 1,
  }"
            :hovered="{
    scale: 1.2,
  }">Отправить</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
    };
  },
  methods: {
    sendEmail() {
      if (this.email) {
        console.log('Отправка почты:', this.email);
      } else {
        alert('Пожалуйста, введите почту.');
      }
    },
  },
};
</script>

<style scoped>
.subscribe-panel {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  align-items: center;
}
.subscribe_input {
  margin-top: 5px;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #0a052c;
  color: #ebebeb;
  border: rgb(224, 80, 131);
  outline: none;
  font-size: 20px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

}
.subscribe_button {
  margin-top: 10px;
  padding: 10px;
  background: linear-gradient(100.67deg, rgba(218, 75, 126, 0.69) 0%, rgba(157, 40, 100, 0.853581) 46.67%, #2C092E 100%);
  box-shadow: #0a052c 0px 5px;
  color: #f2f2f2;
  text-shadow: #0a052c 1px 4px;
  border: none;
  cursor: pointer;
  text-align: center;
  font-size: 20px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  border-radius: 20px;
  width: 200px;
  height: 40px;
}
.subscribe_button:hover {
  background-color: #434190;
}
</style>
