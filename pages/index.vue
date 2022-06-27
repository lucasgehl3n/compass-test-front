<template>
  <div>
    <div class="container-grid-card">
      <card class="h-100">
        <div class="padding-20 h-100">
          <card-title>
            <font-awesome-icon v-bind:icon="['fas', 'comment']" />
            Conteúdos
          </card-title>
          <table-component v-bind:contents="contents"> </table-component>
        </div>
      </card>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import VueApollo from "vue-apollo";
import ComunicationService from "../apis/ComunicationService";
import Urls from "../utils/Urls";

Vue.use(VueApollo);

export default Vue.extend({
  name: "IndexPage",
  mixins: [Urls],
  apollo: {
    contents: ComunicationService.GetAllContents,
  },
  methods: {
    mountBreadcrumb() {
      let urlHome = {
        url: this.urls.home,
        description: "Home",
      };

      return [urlHome];
    },
  },
});
</script>

