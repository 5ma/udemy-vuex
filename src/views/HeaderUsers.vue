<template>
  <nav>
    <h2>Users navigation</h2>
    <router-link to="/" active-class="link-active" exact class="link">Home</router-link>
    <!-- tagで好きなタグに置き換えることが出来る -->
    <router-link to="/users" tag="div" active-class="link-active" exact class="link">Users</router-link>
  </nav>
</template>
