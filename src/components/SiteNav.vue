<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/">
        <img
          src="https://bulma.io/images/bulma-logo.png"
          width="112"
          height="28"
        />
      </router-link>

      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <router-link
          v-for="link in routerLinks"
          :key="link.to"
          :to="link.to"
          class="navbar-item"
        >
          {{ link.label }}
        </router-link>

        <ExternalLink
          class="navbar-item"
          link="http://www.erringtonfarmersmarket.ca/"
          label="Farmers Market"
        />
      </div>
    </div>
  </nav>
</template>

<script>
import ExternalLink from "./snippets/ExternalLink.vue";

export default {
  name: "SiteNav",
  components: {
    ExternalLink
  },
  data() {
    return {
      routerLinks: [
        { to: "/events", label: "Events" },
        // { to: "/regevents", label: "Regular Events" },
        { to: "/rental", label: "Rental" },
        { to: "/location", label: "Location" },
        { to: "/contact", label: "Contact Us" },
        { to: "/links", label: "Links" }
        // { to: "/history", label: "History" }
      ]
    };
  }
};
</script>
