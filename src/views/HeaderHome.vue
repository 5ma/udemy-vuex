<template>
  <nav>
    <h2>Home navigation</h2>
    <router-link to="/" active-class="link-active" exact class="link">Home</router-link>
    <!-- tagで好きなタグに置き換えることが出来る -->
    <router-link to="/users" tag="div" active-class="link-active" exact class="link">Users</router-link>
    <button @click="increment(2)">+1</button>
    <button @click="decrement(1)">-1</button>
  </nav>
</template>

<script>
import { mapActions, mapMutations } from "vuex";

export default {
  methods: {
    // increment() {
    //   this.$store.dispatch("increment", 2);
    // },
    ...mapMutations(["decrement"]),
    ...mapActions(["increment"]),
    // ...mapMutations({
    //   hoge: "increment",
    // }),
    // increment() {
    //   this.$store.commit("increment", 1);
    // },
  },
};
</script>
