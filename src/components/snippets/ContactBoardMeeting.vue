<template>
  <section>
    <p class="subtitle">Hall Board Meeting:</p>
    <p>
      At <strong>7:30pm on the 3<sup>rd</sup> Monday of each month</strong> we
      meet in the Hall kitchen. Public and new members or volunteers are always
      welcome.
    </p>
    <p>
      For more information contact <strong>Lane</strong> at
      <PhoneNumber number="(250) 248-5724" />.
    </p>
  </section>
</template>

<script>
import PhoneNumber from "./PhoneNumber.vue";

export default {
  name: "ContactBoardMeeting",
  components: {
    PhoneNumber
  }
};
</script>
