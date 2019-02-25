<template>
  <section>
    <RentalInfo class="subtitle" />
    <ContactMail />

    <p>
      Or send email to:
      <EmailAddress address="ewmhbookings@gmail.com" />.
    </p>
  </section>
</template>

<script>
import ContactMail from "./ContactMail.vue";
import EmailAddress from "./EmailAddress.vue";
import RentalInfo from "./RentalInfo.vue";

export default {
  name: "RentalContactInfo",
  components: {
    ContactMail,
    EmailAddress,
    RentalInfo
  }
};
</script>
