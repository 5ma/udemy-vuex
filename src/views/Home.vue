<template>
  <div>
    <h2>Home</h2>
    <button @click="toUsers">Userのページへ行く</button>
    <div>{{ $store.state.count }}</div>
    <div>x2:{{ doubleCount }}</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  // computed: mapGetters(["doubleCount"]),
  // computed: mapGetters({
  //   myComponentDoubleCount: "doubleCount", // オブジェクトでもOK
  // }),
  computed: {
    // ゲッターを、スプレッド演算子（object spread operator）を使って computed に組み込む
    ...mapGetters(["doubleCount"]),
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
