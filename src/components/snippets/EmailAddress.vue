<template>
  <a :href="mailto(address)">{{ address }}</a>
</template>

<script>
export default {
  name: "EmailAddress",
  props: {
    address: {
      type: String,
      required: true
    }
  },
  methods: {
    mailto(email) {
      return `mailto:${email}`;
    }
  }
};
</script>
