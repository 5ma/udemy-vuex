<template>
  <div>
    <nav>
      <router-link
       to="/"
       active-class="link-active"
       exact
       class="link"
       >Home</router-link>
      <!-- tagで好きなタグに置き換えることが出来る -->
      <router-link
       to="/users" 
       tag="div"
       active-class="link-active"
       exact
       class="link"
       >Users</router-link>
    </nav>
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