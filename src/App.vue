<template>
  <div>
    <!-- 名前付きビューを使うことで、複数のrouter-viewを1ページ内で置くことが出来る -->
    <router-view name="header"></router-view>
    <router-view></router-view>
  </div>
</template>

<style scoped>
.link {
  width: fit-content;
  min-width: 150px;
  background-color: #000;
  color: #fff;
  cursor: pointer;
  text-align: center;
  text-decoration: underline;
}
.link-active {
  font-size: 20px;
}
</style>
