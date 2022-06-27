export default {
  methods: {
    embeddable(content) {
      return content.embeddable == true;
    },
    typeImage(content) {
      return content.type == "image";
    },
    typeDocument(content) {
      return content.type == "document";
    },
    typeLink(content) {
      return content.type == "link";
    },
    typeText(content) {
      return content.type == "text";
    },
    getIconUsingType(content) {
      if (this.embeddable(content)) {
        return "code";
      }

      if (this.typeDocument(content)) {
        return "file";
      }

      if (this.typeLink(content)) {
        return "external-link-alt";
      }

      if (this.typeImage(content)) {
        return "file-image";
      }

      if (this.typeText(content)) {
        return "file-alt";
      }

      return "";
    },
  },
};
