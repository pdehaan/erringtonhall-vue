<template>
  <section>
    <h2 class="subtitle">Our Ticket Sellers</h2>
    <table class="table is-striped is-narrow" width="100%">
      <tbody>
        <tr v-for="item in ticketSellers" :key="item.phone">
          <th>{{ item.name }}</th>
          <td v-html="item.address"></td>
          <td><PhoneNumber :number="item.phone" /></td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
import PhoneNumber from "./PhoneNumber.vue";

export default {
  name: "LinksTicketSellers",
  components: {
    PhoneNumber
  },
  data() {
    return {
      ticketSellers: [
        {
          name: "Cranky Dog Music",
          address: "154 Morison Avenue (Parksville) ",
          phone: "(250) 954-3465"
        },
        {
          name: "Heaven on Earth",
          address: "149 West Second Avenue",
          phone: "(250) 752-3132"
        },
        {
          name: "Errington General Store",
          address: "Corner of Errington &amp; Grafton Roads",
          phone: "(250) 248-3641"
        }
      ]
    };
  }
};
</script>
