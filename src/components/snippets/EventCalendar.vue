<template>
  <section class="container">
    <div class="message is-info">
      <div class="message-body">
        <h1 class="title">TICKET NOTE</h1>
        <p>
          Online Tickets Now Available at
          <ExternalLink link="https://erringtonhall.tickit.ca/" onlyHostname />.
        </p>
        <p>
          Regular Tickets for Hall concerts are generally available in our
          outlets <strong>1 month</strong> before the event.
        </p>
      </div>
    </div>

    <EventList :data="winterSpringEvents" />
    <EventList :data="summerFallEvents" />
  </section>
</template>

<script>
import EventList from "./EventList.vue";
import ExternalLink from "./ExternalLink.vue";
// data
import summerFallEvents from "../../data/summerFallEvents.json";
import winterSpringEvents from "../../data/winterSpringEvents.json";

export default {
  name: "EventCalendar",
  components: {
    EventList,
    ExternalLink
  },
  data() {
    return {
      summerFallEvents,
      winterSpringEvents
    };
  }
};
</script>
