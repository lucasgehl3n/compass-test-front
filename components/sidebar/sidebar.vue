<template>
  <div class="sidebar">
    <div class="item-sidebar" v-on:click="routeToHome">
      <font-awesome-icon v-bind:icon="['fas', 'home']" />
    </div>
  </div>
</template>


<script lang="ts">
import Vue from "vue";
import Urls from "../../utils/Urls";
export default Vue.extend({
  name: "sidebar",
  mixins: [Urls],
  methods: {
    routeToHome() {
      let url = this.urls.home;
      this.$router.push(url);
    },
  },
});
</script>

<style>
@import "~/assets/SCSS/components/sidebar/sidebar.scss";
</style>
