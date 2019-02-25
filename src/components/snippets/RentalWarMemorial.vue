<template>
  <section>
    <h2 class="subtitle">War Memorial Hall</h2>
    <p>
      The Errington War Memorial Hall has a Capacity of 120. The main floor
      measures 56 ft. by 29ft. (17m by 8.8m) and the stage to the fron back
      curtain to the front of the stage is 11.5ft by 19ft. wide (3.5m x 5.8m).
      We have 120 padded chairs, 20 folding plastic tables and place settings of
      china and cutlery for 120. The Hall has handicap accessible washrooms, a
      fully equipped kitchen, and a bar. Access to the locked kitchen cupboards,
      coffee urns and the bar must be negotiated with the rental agent at the
      time of signing the rental agreement.
    </p>

    <h3 class="subtitle">War Memorial Hall Rental Rates</h3>
    <section class="columns">
      <div class="column is-half">
        <RateTable :rates="rates" />
      </div>
      <div class="column is-half">
        <!-- message -->
        <div class="message is-info">
          <div class="message-body">
            <p>
              <strong>Note:</strong> A Damage Deposit cheque of $300 will be
              required before the rental date for <strong>Dances</strong>,
              <strong>Parties</strong>, or <strong>Wedding Receptions</strong>.
              This will be fully refunded after the event if there is no damage
              done.
            </p>
          </div>
        </div>
        <!-- /message -->
      </div>
    </section>
  </section>
</template>

<script>
import RateTable from "./RateTable.vue";

export default {
  name: "RentalWarMemorial",
  components: {
    RateTable
  },
  data() {
    return {
      rates: [
        {
          title: "Dances / Concerts",
          price: "$250",
          note: "See Note",
          noteClass: "has-text-info"
        },
        {
          title: "Parties",
          price: "$250",
          note: "See Note",
          noteClass: "has-text-info"
        },
        {
          title: "Wedding Receptions",
          price: "$250",
          note: "See Note",
          noteClass: "has-text-info"
        },
        { title: "Full Day Use", price: "$250" },
        { title: "Kitchen", price: "$25" },
        { title: "Bar", price: "$25" },
        {
          title: "Hourly Use",
          price: "$30",
          note: "/hr.",
          noteClass: "has-text-grey"
        },
        { title: "*Damage Deposit", price: "$300" }
      ]
    };
  }
};
</script>
