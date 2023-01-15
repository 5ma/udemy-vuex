<template>
  <div>
    <LikeHeader>
      <h3>はじめまして</h3>
    </LikeHeader>
    <LikeNumber :total-number="number" @my-click="onMyClick"></LikeNumber>
    <button @click="currentComponent = 'HomePage'">Home</button>
    <button @click="currentComponent = 'AboutPage'">About</button>
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader.vue";
import HomePage from "./components/HomePage.vue";
import AboutPage from "./components/AboutPage.vue";

export default {
  data() {
    return {
      number: 10,
      currentComponent: 'HomePage'
    }
  },
  components: {
    LikeHeader,
    HomePage,
    AboutPage,
  },
  methods: {
    onMyClick(value) {
      // valueに子コンポーネントの第二引数で渡したdataが渡される
      this.number = value;
    }
  }
}
</script>