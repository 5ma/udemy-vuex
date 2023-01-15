<template>
  <div>
    <LikeHeader></LikeHeader>
    <p>{{ number }}</p>
    <LikeNumber :total-number="number" @my-click="onMyClick"></LikeNumber>
    <LikeNumber :total-number="number" @my-click="onMyClick"></LikeNumber>
  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader.vue";

export default {
  data() {
    return {
      number: 10
    }
  },
  components: {
    LikeHeader
  },
  methods: {
    onMyClick(value) {
      // valueに子コンポーネントの第二引数で渡したdataが渡される
      this.number = value;
    }
  }
}
</script>