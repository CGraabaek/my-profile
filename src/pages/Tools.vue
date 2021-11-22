<template>
  <div class="tools-container">
    <div class="title">
      <fancy-title :title="'Tools'"></fancy-title>
    </div>
    <tab-list
      class="tab-list"
      :buttons="buttons"
      :initial-selected="initialSelect"
    ></tab-list>
  </div>
</template>


<script>
import FancyTitle from "@/components/Standard/FancyTitle";
import TabList from "@/components/Tablist";
export default {
  components: {
    FancyTitle,
    TabList,
  },
  data() {
    return {
      initialSelect: "mac",
      buttons: [
        {
          name: "Mac",
          id: "mac",
          color: "#FED7D7",
          fontcolor: "#2a4365",
        },
        {
          name: "Web",
          id: "web",
          color: "#bee3f8",
          fontcolor: "#2a4365",
        },
        {
          name: "iOS",
          id: "ios",
          color: "#B2F5EA",
          fontcolor: "#234E52",
        },
      ],
      tools: [
        {
          name: "iOS",
          description: "iOS",
          tag: "ios",
          tagcolor: "#B2F5EA",
          fontcolor: "#234E52",
        },
      ],
    };
  },
};
</script>

<style scoped>
.tools-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  text-align: center;
}

.tab-list {
  margin-top: 10px;
}
</style>