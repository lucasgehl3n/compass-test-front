<template>
  <div class="row w-100">
    <breadcrumb v-bind:listUrl="mountBreadcrumb()"></breadcrumb>
    <div class="w-100 padding-10">
      <card>
        <div class="p-b-20">
          <card-title>
            <div class="column">
              <div>
                <font-awesome-icon
                  v-bind:icon="['fas', getIconUsingType(content)]"
                />
                {{ content.title }}
              </div>
              <data-info-details v-bind:content="content"></data-info-details>
            </div>
          </card-title>
        </div>
        <p v-if="content.description" v-html="content.description" class="line-height-large"></p>

        <div class="h-100 p-v-10 flex-1-1-auto">
          <media-content v-bind:content="content"> </media-content>
        </div>
      </card>
    </div>
  </div>
</template>


<script lang="ts">
import Vue from "vue";
import VueApollo from "vue-apollo";
import ComunicationService from "../../apis/ComunicationService";
import CardTitle from "../../components/card/card-title.vue";
import Card from "../../components/card/card.vue";
import MediaContent from "../../components/mediaContent/media-content.vue";
import FormatterMixins from "../../utils/FormatterMixins";
import Urls from "../../utils/Urls";
import ContentDetails from "../../utils/ContentDetails";
import DataInfoDetails from "./data-info-details.vue";

Vue.use(VueApollo);

export default Vue.extend({
  components: { Card, CardTitle, MediaContent, DataInfoDetails },
  name: "DetailsPage",
  mixins: [FormatterMixins, Urls, ContentDetails],
  data() {
    return {
      id: 0,
      content: {},
    };
  },
  mounted() {
    this.id = this.$route.params.id;
    this.searchContent();
    this.mountBreadcrumb();
  },
  methods: {
    mountBreadcrumb() {
      let urlHome = {
        url: this.urls.home,
        description: "Home",
      };

      let urlDetails = {
        url: "#",
        description: "Detalhes",
      };

      return [urlHome, urlDetails];
    },
    async searchContent() {
      let requestResult = await this.$apollo.query({
        query: ComunicationService.GetDetails(this.id),
        fetchPolicy: "network-only",
      });

      this.content = requestResult.data.getContent;
    },
  },
});
</script>
