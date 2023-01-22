<template>
  <div>
    <h2>Home</h2>
    <button @click="toUsers">Userのページへ行く</button>
    <div>{{ count }}</div>
  </div>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
  methods: {
    toUsers() {
      // this.$router.push("users/10");
      this.$router.push({
        name: "users-id-profile",
        params: { id: 1 },
      });
      // 下記の書き方でも可能
      // this.$router.push({
      //   path: "users"
      // });
    },
  },
};
</script>
