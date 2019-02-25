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

          <h1 class="title">{{ meta.title }}</h1>
          <RentalInfo />
          <ContactMail />
          <hr />
          <ContactPhone />
          <hr />
          <ContactEmail />
          <hr />
          <ContactBoardMeeting />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ContactBoardMeeting from "./snippets/ContactBoardMeeting.vue";
import ContactEmail from "./snippets/ContactEmail.vue";
import ContactMail from "./snippets/ContactMail.vue";
import ContactPhone from "./snippets/ContactPhone.vue";
import RentalInfo from "./snippets/RentalInfo.vue";

export default {
  name: "Contact",
  components: {
    ContactBoardMeeting,
    ContactEmail,
    ContactMail,
    ContactPhone,
    RentalInfo
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
