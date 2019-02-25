<template>
  <section>
    <h2 class="subtitle">
      Links to local Arts Organizations and Hall helpers
    </h2>
    <table class="table is-striped is-narrow" width="100%">
      <tbody>
        <tr v-for="item in localArts" :key="item.link">
          <th>{{ item.title }}</th>
          <td><ExternalLink :link="item.link" onlyHostname /></td>
        </tr>
      </tbody>
    </table>
    <hr />
  </section>
</template>

<script>
import ExternalLink from "./ExternalLink.vue";

export default {
  name: "LinksLocalArts",
  components: {
    ExternalLink
  },
  data() {
    return {
      localArts: [
        {
          title: "Our talented poster artist George Harm",
          link: "http://mman.ca/"
        },
        {
          title: "Arrowsmith Potters Guild",
          link: "http://www.arrowsmithpottersguild.bc.ca/"
        },
        {
          title: "Oceanside Community Arts Council",
          link: "http://www.oceansideartscouncil.com/"
        },
        {
          title: "The Old School House Arts Centre",
          link: "http://www.theoldschoolhouse.org/"
        },
        {
          title: "Oceanside Tourism Association",
          link: "http://www.oceansidetourism.com/"
        },
        {
          title: "Coastal Communities Credit Union",
          link: "http://www.cccu.ca/"
        }
      ]
    };
  }
};
</script>
