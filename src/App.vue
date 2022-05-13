<template>
  <div>
    <SetFilter @updateFilter="updateFilter" />
    <CalculatedFilter :filterString="filter" />
  </div>
</template>

<script>
import CalculatedFilter from "./components/filter/calculatedFilter.vue";
import SetFilter from "./components/filter/setFilter.vue";
export default {
  components: {
    CalculatedFilter,
    SetFilter,
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
