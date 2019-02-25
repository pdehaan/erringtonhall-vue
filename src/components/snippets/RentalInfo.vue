<template>
  <section>
    <p>
      For
      <router-link to="/rental">Hall Rental information</router-link>
      or booking: call <strong>Denise Schmidt</strong> at
      <PhoneNumber number="(250) 248-5685" />
    </p>
    <hr />
  </section>
</template>

<script>
import PhoneNumber from "./PhoneNumber.vue";
export default {
  name: "RentalInfo",
  components: {
    PhoneNumber
  }
};
</script>
