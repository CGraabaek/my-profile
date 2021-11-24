<template>
  <div class="page-container">
    <fancy-title :title="'Projects'"></fancy-title>
    <div
      class="project-container"
      v-for="project in projects"
      v-bind:key="project.name"
    >
      <about-project
        :title="project.name"
        :description="project.description"
        :image="project.image"
        :link="project.link"
        :github="project.github"
        :tags="project.tags"
        :cardPosition="project.cardPosition"
      >
      </about-project>
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
.page-container {
  text-align: center;
  padding-bottom: 25px;
}
.project-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 4rem;
  margin-bottom: 4rem;
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  height: 100%;
}
</style>