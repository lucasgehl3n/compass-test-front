
<template>
  <div class="flex-grow">
    <div class="column">
      <span class="row-table-item-data-description line-height-small">
        <div class="row">
          <div>
            <font-awesome-icon v-bind:icon="['fas', 'calendar-plus']" />
            Criado em {{ createdDataFormatting }}
          </div>

          <div
            class="row-table-item-data-description line-height-small p-l-20"
            v-if="updatedDataFormatting"
          >
            <font-awesome-icon v-bind:icon="['fas', 'calendar-alt']" />
            Alterado em {{ updatedDataFormatting }}
          </div>
        </div>
      </span>
    </div>
  </div>
</template>


<script lang="ts">
import Vue from "vue";
import VueApollo from "vue-apollo";
import FormatterMixins from "../../utils/FormatterMixins";
import ContentDetails from "../../utils/ContentDetails";

Vue.use(VueApollo);

export default Vue.extend({
  name: "DataInfoDetails",
  mixins: [FormatterMixins, ContentDetails],
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
});
</script>
