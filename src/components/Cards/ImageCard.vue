<template>
  <div class="image-container">
    <a :href="this.link" target="_blank" class="bike-link">
      <div class="image-wrapper">
        <div class="image-sub-wrapper">
          <div class="css-nme1ty">
            <div class="image-background" :style="imageStyle"></div>
            <img
              :alt="this.title"
              class="chakra-image css-g5oeds"
              :src="require('@/assets/' + image)"
            />
          </div>
        </div>
        <div class="css-1xpi9cw">
          <div class="chakra-stack css-84zodg">
            <p class="css-1lrrxdd">{{ this.title }}</p>
            <tag :text="this.tag" :backgroundcolor="this.tagcolor" :fontcolor="this.tagfontcolor"></tag>
          </div>
          <p class="sub-title">{{ this.sub_title }}</p>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
import Tag from "@/components/Standard/Tag";

export default {
  name: "Card",
  props: {
    title: {
      type: String,
    },
    sub_title: {
      type: String,
    },
    backgroundcolor: {
      type: String,
    },
    color: {
      type: String,
    },
    image: {
      type: String,
    },
    link: {
      type: String,
    },
    tag: {
      type: String,
    },
    tagcolor: {
      type: String,
    },
    tagfontcolor: {
      type: String,
    },
  },
  components: {
    Tag,
  },
  computed: {
    imageStyle() {
      return {
        border: `1px solid ${this.color}`,
        background: this.backgroundcolor,
      };
    },
    subTitleStyle() {
      return {
        color: `${this.fontcolor} !important`,
      };
    },
  },
};
</script>

<style scoped>
.bike-link {
  height: 100%;
}

.image-wrapper {
  display: grid;
  grid-template-columns: 85px 1fr;
  /* background: #171923; */
  background: var(--transparent-bg);
  padding: 12px;
  height: 100%;
  border-width: 1px;
  border-style: solid;
  border-image: initial;
  border-color: var(--card-border-color);
  border-radius: 20px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  transition: all 0.25s ease 0s;
}

.css-1xpi9cw {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  padding-left: 25px;
  height: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.css-1lrrxdd {
  font-size: 20px;
  font-weight: 600;
}

.css-18ntdry {
  display: inline-flex;
  vertical-align: top;
  -webkit-box-align: center;
  align-items: center;
  max-width: 100%;
  font-weight: 500;
  line-height: 1.2;
  outline: transparent solid 2px;
  outline-offset: 2px;
  min-height: 1.5rem;
  min-width: 1.5rem;
  font-size: 0.875rem;
  border-radius: 0.375rem;
  padding-inline-start: 0.5rem;
  padding-inline-end: 0.5rem;
  background: rgba(248, 204, 96, 0.133);
  height: 20px;
  margin-left: 0.5rem;
}

.image-sub-wrapper > *:not(style) {
  overflow: hidden;
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.image-sub-wrapper {
  position: relative;
  width: 85px;
  height: 85px;
}

.sub-title {
  color: var(--font-secondary-color);
  white-space: normal;
  width: 100%;
}

.wrapper {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(2, minmax(1px, 1fr));
  color: #444;
}

.css-nme1ty {
  position: relative;
  max-height: 100%;
  max-width: 100%;
  overflow: hidden;
  box-shadow: rgb(244 220 132 / 10%) 0px 0px 20px 5px inset;
  border-radius: 20px;
}

.image-container {
  width: 100%;
}

.image-background {
  position: absolute;
  inset: 0px;
  opacity: 0.25;
}

.css-g5oeds {
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  position: absolute;
  max-height: 80%;
  max-width: 80%;
}

.css-84zodg {
  display: flex;
  align-items: center;
  flex-direction: row;
}

body,
blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

a {
  color: var(--font-color);
  text-decoration: none;
}
</style>