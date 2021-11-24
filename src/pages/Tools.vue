<template>
  <div class="tools-container">
    <div class="title">
      <fancy-title :title="'Tools'"></fancy-title>
    </div>
    <tab-list class="tab-list" :buttons="buttons" :initial-selected="selected">
    </tab-list>
    <div class="wrapper">
      <div
        class="card-item"
        v-bind:key="tool.id"
        v-for="tool in this.tools.filter((item) => item.type == selected)"
      >
        <image-card
          :title="tool.name"
          :sub_title="tool.description"
          :image="tool.image"
          :color="tool.bgcolor"
          :backgroundcolor="tool.bgcolor"
          :link="tool.link"
          :tag="tool.tag"
          :tagcolor="tool.tagcolor"
          :tagfontcolor="tool.tagfontcolor"
        ></image-card>
      </div>
    </div>
  </div>
</template>


<script>
import FancyTitle from "@/components/Standard/FancyTitle";
import TabList from "@/components/Tablist";
import ImageCard from "@/components/Cards/ImageCard";

import { tools } from "@/data/tools.js";

export default {
  components: {
    FancyTitle,
    TabList,
    ImageCard,
  },
  data() {
    return {
      selected: "mac",
      buttons: [
        {
          name: "Mac",
          id: "mac",
          color: "#FED7D7",
          fontcolor: "#2a4365",
        },
        // {
        //   name: "Web",
        //   id: "web",
        //   color: "#bee3f8",
        //   fontcolor: "#2a4365",
        // },
        {
          name: "iOS",
          id: "ios",
          color: "#B2F5EA",
          fontcolor: "#234E52",
        },
      ],
      tools: tools,
    };
  },
  mounted() {
    this.$on("item-selected", (selection) => {
      this.selected = selection;
    });
  },
};
</script>

<style scoped>
.card-container {
  max-width: 72rem;
}
.tools-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 25px;
}

.title {
  text-align: center;
}

.tab-list {
  margin-top: 10px;
}

.bike-link {
  height: 100%;
}

.image-wrapper {
  display: grid;
  grid-template-columns: 85px 1fr;
  background: #171923;
  padding: 12px;
  height: 100%;
  border-width: 1px;
  border-style: solid;
  border-image: initial;
  border-color: #2d3748;
  border-radius: 20px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  transition: all 0.25s ease 0s;
}

.wrapper {
  width: 100%;
  max-width: 72em;
  margin-top: 10vh;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(2, minmax(1px, 1fr));
  color: #444;
}

.box {
  background-color: #171923;
  color: #fff;
  border-radius: 5px;
  padding: 20px;
  font-size: 150%;
}

@media only screen and (max-width: 768px) {
  .wrapper {
    margin-top: 10vh;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(1, minmax(1px, 1fr));
    color: #444;
  }
}
</style>