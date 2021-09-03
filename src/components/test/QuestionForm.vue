<template>


</template>

<script>
export default {
  methods: {
    onSelectAnswer() {
      this.$emit("changeData", { index: 1, data: { name: "hello" } });
    }
  },
}
</script>
