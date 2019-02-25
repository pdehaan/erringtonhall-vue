<template>
  <div>
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <!-- breadcrumbs -->
          <nav class="breadcrumb" aria-label="breadcrumbs">
            <ul>
              <li><a href="/">Home</a></li>
              <li class="is-active">
                <a href="#" aria-current="page">Regular Events</a>
              </li>
            </ul>
          </nav>
          <!-- /breadcrumbs -->

          <section>
            <h1 class="title">Monthly Events</h1>
            <CoffeeHouse />
            <BoardMeeting />
          </section>

          <section>
            <h1 class="title">Annual Events</h1>
            <HiNeighborDay />
            <HalloweenPumpkinTrail />
            <ChristmasArtsCrafts />
          </section>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import CoffeeHouse from "./snippets/EventsCoffeeHouse.vue";
import BoardMeeting from "./snippets/ContactBoardMeeting.vue";
import HiNeighborDay from "./snippets/EventsHiNeighborDay.vue";
import HalloweenPumpkinTrail from "./snippets/EventsHalloweenPumpkinTrail.vue";
import ChristmasArtsCrafts from "./snippets/EventsChristmasArtsCrafts.vue";

export default {
  name: "RegularEvents",
  components: {
    CoffeeHouse,
    BoardMeeting,
    HiNeighborDay,
    HalloweenPumpkinTrail,
    ChristmasArtsCrafts
  },
  metaInfo() {
    return this.$route.meta;
  }
};
</script>
