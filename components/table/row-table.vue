<template>
  <div class="w-100">
    <div class="row-table-item">
      <div class="row p-15-30">
        <div class="row-table-item-icon mobile-not">
          <font-awesome-icon v-bind:icon="['fas', getIconUsingType(content)]" />
        </div>
        <div class="column" v-on:click="routeToDetails()">
          <h4 class="row-table-item-title">
            {{ content.title }}
          </h4>
          <span
            class="row-table-item-data-description line-height-small mobile-not"
          >
            <font-awesome-icon v-bind:icon="['fas', 'calendar']" />
            {{ createdDataFormatting }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>



<script lang="ts">
import Vue from "vue";
import FormatterMixins from "../../utils/FormatterMixins";
import Urls from "../../utils/Urls";
import ContentDetails from "../../utils/ContentDetails";

export default Vue.extend({
  name: "row-table",
  mixins: [FormatterMixins, Urls, ContentDetails],
  props: {
    content: {},
  },
  computed: {
    createdDataFormatting() {
      return this.formatData(this.content.created_at);
    },
    updatedDataFormatting() {
      return this.formatData(this.content.updated_at);
    },
  },
  methods: {
    routeToDetails() {
      let url = `${this.urls.details}/${this.content.id}`;
      this.$router.push(url);
    },
  },
});
</script>

<style>
@import "~/assets/SCSS/components/table/row-table.scss";
</style>
