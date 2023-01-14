<template>
  <div>
    <LikeHeader></LikeHeader>
    <p>{{ number }}</p>
    <LikeNumber :total-number="number"></LikeNumber>
    <LikeNumber :total-number="number"></LikeNumber>
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
  }
}
</script>