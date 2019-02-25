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
                <a href="#" aria-current="page">Rental</a>
              </li>
            </ul>
          </nav>
          <!-- /breadcrumbs -->

          <h1 class="title">Rental Information</h1>
          <RentalWarMemorial />
          <hr />
          <RentalOldFireHall />
          <hr />
          <RentalContactInfo />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import RentalWarMemorial from "./snippets/RentalWarMemorial.vue";
import RentalOldFireHall from "./snippets/RentalOldFireHall.vue";
import RentalContactInfo from "./snippets/RentalContactInfo.vue";

export default {
  name: "Rentals",
  components: {
    RentalWarMemorial,
    RentalOldFireHall,
    RentalContactInfo
  },
  metaInfo() {
    return this.$route.meta;
  }
};
</script>
