<template>
  <p v-border:solid.round.shadow="{ width: '12px', color: 'lightBlue' }">Home</p>
</template>

<script>
export default {
  directives: {
    border(el, binding) {
      el.style.border = `${binding.arg} ${binding.value.color} ${binding.value.width}`;
      if (binding.modifiers.round) {
        el.style.borderRadius = "0.5rem";
      }
      if (binding.modifiers.shadow) {
        el.style.boxShadow = "0 2px 5px rgba(0,0,0,0.3)";
      }
    }
  }
}
</script>