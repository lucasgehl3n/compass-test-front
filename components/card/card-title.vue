<template>
  <div class="title-card">
    <slot/>  
  </div>
</template>


<script lang="ts">
  import Vue from "vue";

  export default Vue.extend({
    name: "card-title",
  });
</script>


<style lang="scss">
@import "~/assets/SCSS/components/card/card.scss";
</style>
