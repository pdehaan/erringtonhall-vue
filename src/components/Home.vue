<template>
  <div>
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Errington War Memorial Hall</h1>
          <img
            src="http://www.erringtonhall.ca/hall2bw.jpg"
            class="hall-image"
            alt="Errington Hall"
          />

          <p class="subtitle">
            Built as a memorial to those who died in World War I, the Errington
            War Memorial Hall opened its doors on March 22nd, 1922. It is
            maintained by a non-profit society made up of volunteers who sponsor
            cultural, social and recreational activities for the community.
          </p>
          <p>
            The Hall is located in Errington at
            <router-link to="/location">1390 Errington Road</router-link>,
            approximately 6km southwest of Parksville on central Vancouver
            Island, British Columbia, Canada.
          </p>
          <p><router-link to="/rental">Rental information</router-link></p>
        </div>

        <div class="container">
          <HomeNote />

          <p>
            If you have any photos or memories of the Hall you'd like to share
            with us, contact us at
            <EmailAddress address="ewmhinfo@gmail.com" /> and we'll get
            something organized.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import EmailAddress from "./snippets/EmailAddress.vue";
import HomeNote from "./snippets/HomeNote.vue";

export default {
  name: "Home",
  components: {
    EmailAddress,
    HomeNote
  },
  metaInfo() {
    return {
      ...this.$route.meta,
      title: "Errington Hall",
      titleTemplate: null
    };
  }
};
</script>

<style>
.hall-image {
  float: left;
  padding-right: 20px;
}
</style>
