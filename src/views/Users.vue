<template>
  <div>
    <div>Users</div>
    <router-link to="/users/1">User 1</router-link>
    <router-link to="/users/2">User 2</router-link>
    <div>User No. {{ $route.params.id }}</div>
  </div>
</template>

<script>
  export default {
    created() {
      console.log("created");
    },
    watch: {
      $route(to, from) {
        console.log("$routeが変わった");
        console.log(to); // 現在のルートオブジェクト
        console.log(from); // 前のルートオブジェクト
      }
    }
  }
</script>