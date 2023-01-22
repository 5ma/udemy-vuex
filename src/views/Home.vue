<template>
  <div>
    <h2>Home</h2>
    <button @click="toUsers">Userのページへ行く</button>
  </div>
</template>

<script>
  export default {
    methods : {
      toUsers() {
        this.$router.push("users/10");
        // 下記の書き方でも可能
        // this.$router.push({
        //   path: "users"
        // });
      }
    }
  }
</script>