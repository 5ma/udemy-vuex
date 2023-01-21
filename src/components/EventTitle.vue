<template>
  <div>
    <label for="title">title</label>
    <input id="title" :value="value" @input="$emit('input', $event.target.value)" type="text">
    <p>「{{ value }}」</p>
  </div>
</template>

<script>
export default {
  props: ["value"]
}
</script>