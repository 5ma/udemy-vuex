<template>
  <div>
    <div>Users</div>
    <router-link to="/users/1">User 1</router-link>
    <router-link to="/users/2">User 2</router-link>
    <div>User No. {{ id }}</div>
    <router-link :to="`/users/${Number(id) + 1}/profile`">次のユーザー</router-link>
    <router-link :to="{ name: 'users-id-profile', params: { id: Number(id) + 1 }, query: { lang: 'ja', page: 2 } }">次のユーザー</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    props: ["id"],
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