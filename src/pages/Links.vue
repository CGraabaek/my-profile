<template>
  <div class="page-container">
    <div class="title">
      <fancy-title :title="'Links'"></fancy-title>
    </div>
    
    <div class="links-container">
      <link-card
        v-for="link in links"
        v-bind:key="link.name"
        :title="link.name"
        :tag="link.tag.text"
        :tagfontcolor="link.tag.fontcolor"
        :tagcolor="link.tag.backgroundcolor"
        :link="link.link"
        :image="link.image"
      ></link-card>
    </div>
  </div>
</template>


<script>
import FancyTitle from "@/components/Standard/FancyTitle";
import LinkCard from "@/components/Cards/LinkCard";
import { links } from "@/data/links.js";

export default {
  components: {
    FancyTitle,
    LinkCard,
  },
  data() {
    return {
      links: links,
    };
  },
};
</script>

<style scoped>
.page-container {
  text-align: center;
  padding-bottom: 25px;
}

.title {
  text-align: center;
}


.links-container {
  display: grid;
  grid-template-columns: repeat(1, minmax(0px, 1fr));
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 2.5rem;
  grid-row-gap: 2rem;
  grid-column-gap: 2.5rem;
}

@media screen and (min-width: 48em) {
  .links-container {
    grid-template-columns: repeat(3, minmax(0px, 1fr));
  }
}
</style>