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
                <a href="#" aria-current="page">Links</a>
              </li>
            </ul>
          </nav>
          <!-- /breadcrumbs -->

          <h1 class="title">Errington Hall Links</h1>
          <LocalArts />
          <TicketSellers />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import LocalArts from "./snippets/LinksLocalArts.vue";
import TicketSellers from "./snippets/LinksTicketSellers.vue";

export default {
  name: "Links",
  components: {
    LocalArts,
    TicketSellers
  },
  metaInfo() {
    return this.$route.meta;
  }
};
</script>
