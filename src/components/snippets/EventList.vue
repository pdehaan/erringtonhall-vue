<template>
  <section v-if="freshData.length">
    <h2 class="subtitle" v-html="data.title"></h2>

    <article v-for="(event, idx) in freshData" :key="idx" class="message">
      <div class="message-body">
        <h3
          class="subtitle is-capitalized"
          v-html="event.title.toLowerCase()"
        ></h3>
        <p
          v-if="event.date"
          v-html="dateFormat(event.date)"
          class="has-text-weight-bold"
        ></p>
        <p v-else v-html="event.subtitle" class="has-text-weight-bold"></p>
        <p v-html="linkify(event.description)"></p>
      </div>
    </article>
    <hr />
  </section>
</template>

<script>
import linkifyUrls from "linkify-urls";

export default {
  name: "EventList",
  computed: {
    freshData() {
      return this.data.events
        .filter(event => {
          if (event.archived) {
            return false;
          }
          if (!event.date) {
            return true;
          }
          return Date.parse(event.date) > Date.now();
        })
        .sort((eventA, eventB) => {
          if (!eventA.date || !eventB.date) {
            return -1;
          }
          const dateA = Date.parse(eventA.date);
          const dateB = Date.parse(eventB.date);
          return dateA - dateB;
        });
    }
  },
  methods: {
    linkify(str) {
      return linkifyUrls(str, {
        attributes: {
          target: "_blank",
          rel: ["noopener", "noreferrer"]
        },
        value(url) {
          // Only display the hostname instead of the full/long URL.
          // Generally the links are only to https://erringtonhall.tickit.ca/.
          return new URL(url).hostname.replace(/^www\./, "");
        }
      });
    },
    dateFormat(str) {
      const date = new Date(str);
      const opts = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      };

      if (date.getHours() === 0) {
        // If the event date is midnight, assume it's an "All Day" event and don't display time info.
        return `${date.toLocaleDateString("en-CA", opts)} &mdash; All Day`;
      }
      return date.toLocaleTimeString("en-CA", {
        ...opts,
        hour: "numeric",
        minute: "2-digit"
      });
    }
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  }
};
</script>
