<template>
  <div>
    <about-me />
    <about-terminal />
  </div>
</template>

<script>
import AboutTerminal from "@/components/AboutTerminal.vue";
import AboutMe from "@/components/AboutMe.vue";

export default {
  components: {
    AboutTerminal,
    AboutMe,
  },
};
</script>