<template>
  <div class="flex-grow">
    <div v-if="typeImage(content)">
      <img v-bind:src="content.url" class="content-type-image" />
    </div>
    <div v-if="showButtonNewTab" class="w-100 p-b-20">
      <a class="link-ref" target="_blank" v-bind:href="content.url">
        <font-awesome-icon v-bind:icon="['fas', 'external-link-alt']" />
        Abrir conteúdo em nova guia
      </a>
    </div>
    <div v-if="embeddable(content)" class="h-100">
      <iframe
        class="w-100 min-h-50-vh"
        v-bind:src="formatVideoLink"
        frameborder="0"
        allowfullscreen
      >
      </iframe>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ContentDetails from "../../utils/ContentDetails";
export default Vue.extend({
  name: "MediaContent",
  mixins: [ContentDetails],
  props: {
    content: {},
  },
  computed: {
    showButtonNewTab() {
      return (
        (this.documentWithLink || this.typeLink(this.content)) &&
        !this.embeddable(this.content)
      );
    },
    documentWithLink() {
      return this.typeDocument(this.content) && this.content.url;
    },
    formatVideoLink() {
      return this.content.url.replace("watch?v=", "embed/");
    },
  },
  methods: {},
});
</script>

<style lang="scss">
@import "~/assets/SCSS/components/media-content/media-content.scss";
</style>