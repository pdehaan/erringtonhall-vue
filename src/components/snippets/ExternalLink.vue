<template>
  <a :href="link" target="_blank" rel="noopener noreferer" v-html="labely"></a>
</template>

<script>
export default {
  name: "ExternalLink",
  props: {
    link: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: false
    },
    onlyHostname: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    labely() {
      if (this.onlyHostname) {
        return this.url(this.link);
      }
      if (this.label) {
        return this.label;
      }
      return this.link;
    }
  },
  methods: {
    url(address) {
      return new URL(address).hostname.replace(/^www\./, "");
    }
  }
};
</script>
