<template>
  <div class="w-100 h-100">
    <div class="overflow-auto">
      <template v-for="content in contents">
        <row-table v-bind:content="content" v-bind:key="content.id"></row-table>
      </template>
    </div>
  </div>
</template>


<script lang="ts">
import Vue from "vue";
import cardTitle from "../card/card-title.vue";
import rowTable from "./row-table.vue";

export default Vue.extend({
  components: { cardTitle, rowTable },
  name: "table-component",
  props: {
    contents: [],
  },
});
</script>
