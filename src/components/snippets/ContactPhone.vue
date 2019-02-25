<template>
  <section>
    <p class="subtitle">Phone Numbers:</p>
    <table class="table is-fullwidth is-narrow is-striped">
      <tbody>
        <tr v-for="info in phoneNumbers" :key="info.number">
          <th v-html="info.title"></th>
          <td>{{ info.subtitle }}</td>
          <td><PhoneNumber :number="info.number" /></td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
import PhoneNumber from "./PhoneNumber.vue";

export default {
  name: "ContactPhone",
  components: {
    PhoneNumber
  },
  data() {
    return {
      phoneNumbers: [
        {
          title: "Errington Hall",
          subtitle: "Answering Machine - current info",
          number: "(250) 248-5106"
        },
        {
          title: "President",
          subtitle: "Lane",
          number: "(250) 248-5724"
        },
        {
          title: "Vice-President",
          subtitle: "Susanne",
          number: "(250) 954-2922"
        },
        {
          title: "Hall Manager",
          subtitle: "Denise",
          number: "(250) 248-5685"
        },
        {
          title: "Music Coordinator",
          subtitle: "Virginia",
          number: "(250) 954-2133"
        }
      ]
    };
  }
};
</script>
