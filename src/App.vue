<template>
  <div>
    <setFilter @updateFilter="updateFilter" />
    <CalculateFilter :filterString="filter" />
  </div>
</template>

<script>
import CalculateFilter from "./components/filter/CalculateFilter.vue";
import setFilter from "./components/filter/setFilter.vue";

export default {
  components: {
    CalculateFilter,
    setFilter,
  },
  data() {
    return {
      filter: "",
    };
  },
  methods: {
    updateFilter(newFilter) {
      this.filter = newFilter;
    },
  },
};
</script>


<style>
</style>