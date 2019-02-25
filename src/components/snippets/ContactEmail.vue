<template>
  <section>
    <h2 class="subtitle">Email us at:</h2>

    <table class="table is-fullwidth is-narrow is-striped">
      <tbody>
        <tr v-for="info in emailAddresses" :key="info.email">
          <th v-html="info.title"></th>
          <td><EmailAddress :address="info.email" /></td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
import EmailAddress from "./EmailAddress.vue";

export default {
  name: "ContactEmail",
  components: {
    EmailAddress
  },
  data() {
    return {
      emailAddresses: [
        {
          title: "General Information",
          email: "ewmhinfo@gmail.com"
        },
        {
          title: "Bookings or Rental Inquiries",
          email: "ewmhbookings@gmail.com"
        },
        {
          title: "Musician or Entertainer Contact",
          email: "drishti@live.ca"
        }
      ]
    };
  }
};
</script>
