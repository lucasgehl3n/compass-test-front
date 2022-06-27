<template>
  <div class="card">
    <slot/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Card",
});
</script>

<style lang="scss">
@import "~/assets/SCSS/components/card/card.scss";
</style>