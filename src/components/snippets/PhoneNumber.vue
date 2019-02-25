<template>
  <a :href="tel(number)">{{ number }}</a>
</template>

<script>
export default {
  name: "PhoneNumber",
  props: {
    number: {
      type: String,
      required: true
    }
  },
  methods: {
    tel(number) {
      return `tel:${number.replace(/[^\d]/g, "")}`;
    }
  }
};
</script>
