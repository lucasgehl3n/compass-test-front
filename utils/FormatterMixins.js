import moment from "moment";

export default {
  methods: {
    formatData(data){
      if (!data) {
        return "";
      }
      return moment(data).format("L");
    },
  },
};
`/details`;
