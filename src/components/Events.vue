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
                <a href="#" aria-current="page">{{ meta.title }}</a>
              </li>
            </ul>
          </nav>
          <!-- /breadcrumbs -->

          <section>
            <h1 class="title">{{ meta.title }}</h1>
            <EventCalendar />
            <EventsMonthly />
            <EventsAnnual />
          </section>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import EventCalendar from "./snippets/EventCalendar.vue";
import EventsMonthly from "./snippets/EventsMonthly.vue";
import EventsAnnual from "./snippets/EventsAnnual.vue";

export default {
  name: "Events",
  components: {
    EventCalendar,
    EventsMonthly,
    EventsAnnual
  },
  data() {
    return {
      meta: this.$route.meta
    };
  },
  metaInfo() {
    return this.meta;
  }
};
</script>
