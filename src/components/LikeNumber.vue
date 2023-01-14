<template>
  <div>
    <div>いいね({{ halfNumber }})</div>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
export default {
  props: {
    totalNumber: {
      type: Number,  // 型を指定(バリデーション)
      default: 10    // 初期値
    },
  },
  computed: {
    halfNumber() {
      return this.totalNumber / 2;
    }
  },
  methods: {
    increment() {
      this.number++;
    }
  }
}
</script>

<style scoped>
  div {
    border: 1px solid red;
  }
</style>