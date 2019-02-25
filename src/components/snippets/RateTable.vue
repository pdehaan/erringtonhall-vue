<template>
  <table class="table is-fullwidth is-narrow is-striped">
    <tbody>
      <tr v-for="item in rates" :key="item.title">
        <th v-html="item.title"></th>
        <td class="has-text-right" v-text="item.price"></td>
        <td class="is-size-7" :class="item.noteClass" v-text="item.note"></td>
      </tr>
    </tbody>
    <caption>
      <p class="has-text-info">
        Registered Non-Profit groups pay half regular rates.
      </p>
    </caption>
  </table>
</template>

<script>
export default {
  name: "RateTable",
  props: {
    rates: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
caption {
  caption-side: bottom;
}
</style>
