<template>
  <section>
    <h2 class="subtitle">Old Fire Hall</h2>
    <p>
      The Old Fire Hall, the smaller Hall next door, served as Errington's Fire
      Hall from the late 1960's till the new building on the Highway was opened
      in 1975. The room measures 31ft by 25ft (9.5m x 7.6m). Fully renovated in
      the 1980's with wood floors, insulation in walls and ceiling, it now (as
      of 2000) features a handicap washroom and a counter/sink unit which
      enables it to operate independently from the main Hall. The Old Fire Hall
      has become a favourite spot for meetings, readings, lectures, films, art
      displays and smaller social occasions. It comes equipped with 8 folding
      plywood tables and 20 padded chairs.
    </p>

    <h3 class="subtitle">Old Fire Hall Rental Rates</h3>
    <section class="columns">
      <div class="column is-half">
        <RateTable :rates="rates" />
      </div>
    </section>
  </section>
</template>

<script>
import RateTable from "./RateTable.vue";

export default {
  name: "RentalOldFireHall",
  components: {
    RateTable
  },
  data() {
    return {
      rates: [
        { title: "Parties", price: "$75" },
        { title: "Full Day Use", price: "$75" },
        {
          title: "Hourly Use",
          price: "$20",
          note: "/hr.",
          noteClass: "has-text-grey"
        }
      ]
    };
  }
};
</script>
