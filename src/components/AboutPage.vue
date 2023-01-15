<template>
  <div>
    <p>About</p>
    <input type="text">
  </div>
</template>

<script>
export default {
  deactivated() {
    console.log('deactivated');
  },
  activated() {
    console.log('activated');
  }
}
</script>