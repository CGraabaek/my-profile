<template>
  <div class="title">
    <fancy-title :title="'Projects'"></fancy-title>
    <div
      class="project-container"
      v-for="project in projects"
      v-bind:key="project.name"
    >
      <about-project :title="project.name" :description="project.description" :image="project.image" :tags="project.tags" :cardPosition="project.cardPosition"> </about-project>
    </div>
  </div>
</template>


<script>
import FancyTitle from "@/components/Standard/FancyTitle";
import AboutProject from "@/components/AboutProject";
import { projects } from "@/data/projects.js";

export default {
  components: {
    FancyTitle,
    AboutProject,
  },
  data() {
    return {
      projects: projects,
    };
  },
};
</script>

<style scoped>
.title {
  text-align: center;
}
.project-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 4rem;
  margin-bottom: 4rem;
  width: 100%;
  height: 100%;
}
</style>