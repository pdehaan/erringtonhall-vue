<template>
  <section>
    <h2 class="title">Monthly Events</h2>
    <CoffeeHouse />
    <BoardMeeting />
  </section>
</template>

<script>
import CoffeeHouse from "./EventsCoffeeHouse.vue";
import BoardMeeting from "./ContactBoardMeeting.vue";

export default {
  name: "EventsMonthly",
  components: {
    CoffeeHouse,
    BoardMeeting
  }
};
</script>
