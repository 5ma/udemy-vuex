<template>
  <div>
    <LikeHeader>
      <h3>はじめまして</h3>
    </LikeHeader>
    <LikeNumber :total-number="number" @my-click="onMyClick"></LikeNumber>
    <button @click="currentComponent = 'HomePage'">Home</button>
    <button @click="currentComponent = 'AboutPage'">About</button>
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>
    <div>
      <h2>イベントのフォーム</h2>
      <label for="title">title</label>
      <input id="title" v-model.lazy="eventData.title" type="text">
      <p>「{{ eventData.title }}」</p>
      <label for="max">最大人数</label>
      <input id="max" v-model.number="eventData.max" type="number">
      <p>「{{ typeof eventData.max }}」</p>
      <label for="host">主催者</label>
      <input id="host" v-model.trim="eventData.host" type="text">
      <p>「{{ eventData.host }}」</p>
      <label for="detail">イベントの内容</label>
      <textarea id="detail" cols="30" rows="10" v-model="eventData.detail"></textarea>
      <p>「{{ eventData.detail }}」</p>
      <input type="checkbox" id="isPrivate" v-model="eventData.isPrivate">
      <label for="isPrivate">非公開</label>
      <p>「{{ eventData.isPrivate }}」</p>

      <!-- 複数のcheckboxに同じデータをbindする -->
      <input type="checkbox" id="10" value="10代" v-model="eventData.target">
      <label for="10">10代</label>
      <input type="checkbox" id="20" value="20代" v-model="eventData.target">
      <label for="20">20代</label>
      <input type="checkbox" id="30" value="30代" v-model="eventData.target">
      <label for="30">30代</label>
      <div>{{ eventData.target }}</div>

      <!-- ラジオボタン -->
      <input type="radio" id="free" value="無料" v-model="eventData.price">
      <label for="free">無料</label>
      <input type="radio" id="paid" value="有料" v-model="eventData.price">
      <label for="paid">有料</label>
      <div>{{ eventData.price }}</div>

      <!-- セレクトボックス -->
      <label for="location">開催地</label>
      <select id="location" v-model="eventData.location" multiple>
        <option v-for="location in locations" :key="location">{{ location }}</option>
      </select>
      <div>{{ eventData.location }}</div>

    </div>
  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader.vue";
import HomePage from "./components/HomePage.vue";
import AboutPage from "./components/AboutPage.vue";

export default {
  data() {
    return {
      number: 10,
      currentComponent: 'HomePage',
      locations: [
        "東京",
        "大阪",
        "名古屋",
      ],
      eventData: {
        title: '',
        max: 0,
        host: '',
        detail: '',
        isPrivate: false,
        target: [],
        price: '',
        location: []
      }
    }
  },
  components: {
    LikeHeader,
    HomePage,
    AboutPage,
  },
  methods: {
    onMyClick(value) {
      // valueに子コンポーネントの第二引数で渡したdataが渡される
      this.number = value;
    }
  }
}
</script>