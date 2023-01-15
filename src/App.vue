<template>
  <div>
    <LikeHeader>
      <template #[title]="slotProps">
        <div>{{ slotProps }}</div>
        <p>titleスロットテスト</p>
        <h3>はじめまして</h3>
      </template>
      <template v-slot:[test]>
        <div>動的なslot名を指定する</div>
      </template>
      <div>デフォルトslot</div>
    </LikeHeader>
    <LikeNumber :total-number="number" @my-click="onMyClick"></LikeNumber>
    <LikeNumber :total-number="number" @my-click="onMyClick"></LikeNumber>
  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader.vue";

export default {
  data() {
    return {
      number: 10,
      title: 'title',
      test: 'test'
    }
  },
  components: {
    LikeHeader
  },
  methods: {
    onMyClick(value) {
      // valueに子コンポーネントの第二引数で渡したdataが渡される
      this.number = value;
    }
  }
}
</script>