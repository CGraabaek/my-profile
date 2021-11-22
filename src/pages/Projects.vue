<template>
  <div class="title">
    <fancy-title :title="'Projects'"></fancy-title>
  </div>
</template>


<script>
import FancyTitle from "@/components/Standard/FancyTitle";
export default {
  components: {
    FancyTitle,
  },
};
</script>

<style scoped>
.title {
  text-align: center;
}
</style>