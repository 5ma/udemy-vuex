<template>
  <div>
    <slot :user="user" text="hogehoge"><h2>デフォルトのタイトル</h2></slot>
    <hr>
    <slot></slot>
    <hr>
    <p>いいねの数</p>
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        firstName: 'John',
        lastName: 'Donald',
        age: 60
      },
    }
  }
}
</script>