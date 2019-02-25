<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <p>
        <strong>&copy; Errington Hall</strong> {{ year }}.
        <a href="#app">Top</a>
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "SiteFooter",
  computed: {
    year() {
      return new Date().getFullYear();
    }
  }
};
</script>
