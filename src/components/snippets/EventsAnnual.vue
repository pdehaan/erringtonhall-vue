<template>
  <section>
    <h2 class="title">Annual Events</h2>
    <HiNeighborDay />
    <HalloweenPumpkinTrail />
    <ChristmasArtsCrafts />
  </section>
</template>

<script>
import HiNeighborDay from "./EventsHiNeighborDay.vue";
import HalloweenPumpkinTrail from "./EventsHalloweenPumpkinTrail.vue";
import ChristmasArtsCrafts from "./EventsChristmasArtsCrafts.vue";

export default {
  name: "EventsAnnual",
  components: {
    HiNeighborDay,
    HalloweenPumpkinTrail,
    ChristmasArtsCrafts
  }
};
</script>
