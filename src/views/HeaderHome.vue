<template>
  <nav>
    <h2>Home navigation</h2>
    <router-link to="/" active-class="link-active" exact class="link">Home</router-link>
    <!-- tagで好きなタグに置き換えることが出来る -->
    <router-link to="/users" tag="div" active-class="link-active" exact class="link">Users</router-link>
    <button @click="increment(1)">+1</button>
    <button @click="decrement(1)">-1</button>
  </nav>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations(["increment", "decrement"]),
  },
};
</script>
