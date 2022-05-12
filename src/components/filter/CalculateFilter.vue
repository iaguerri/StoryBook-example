<template>
  <div>
    <h1>{{ title }}</h1>
    <input
      :size="size"
      :placeholder="placeHolder"
      :maxlength="maxLength"
      @input="setResult"
    />
    <h2>{{ result }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: Number,
      default: 16,
    },
    placeHolder: {
      type: String,
      default: "Escriba algo para filtrar",
    },
    maxLength: {
      type: Number,
      default: 16,
    },
    title: {
      type: String,
      default: "Filtrador",
    },
    filterString: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      result: "",
    };
  },
  methods: {
    setResult(e) {
      const inputString = e.target.value;
      const inputArray = inputString.split(this.filterString);
      this.result = inputArray.join("");
    },
  },
};
</script>

<style lang="scss" scoped>
</style>