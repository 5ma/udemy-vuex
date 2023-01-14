<template>
  <div>
    <button @click="increment">いいね！({{ number }})</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: 0,
    }
  },
  methods: {
    increment() {
      this.number++;
    }
  }
}
</script>