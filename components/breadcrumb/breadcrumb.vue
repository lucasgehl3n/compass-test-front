<template>
  <ul class="ul-breadcrumb flex-grow">
    <li class="breadcrumb">
      <div v-for="url in listUrl" v-bind:key="url.description">
        <a v-bind:href="url.url" class="link-breadcrumb">{{
          url.description
        }}</a>
      </div>
    </li>
  </ul>
</template>


<script lang="ts">
import Vue from "vue";
import Urls from "../../utils/Urls";

export default Vue.extend({
  name: "breadcrumb",
  mixins: [Urls],
  props: {
    listUrl: [],
  },
  mounted() {},
  methods: {},
});
</script>


<style lang="scss">
@import "~/assets/SCSS/components/breadcrumb/breadcrumb.scss";
</style>