<template>
  <a :href="link" class="link-img-container"
    ><div class="inner-wrapper">
      <div class="css-1jke4yk">
        <tag
          class="tag-position"
          :text="tag"
          :fontcolor="tagfontcolor"
          :backgroundcolor="tagcolor"
        ></tag>
        <div class="css-mbamkv">
          <img
            :alt="title + ' screenshot'"
            :src="require('@/assets/' + image)"
            class="css-jettfe"
          />
        </div>
      </div>
      <div class="css-nhqtwa">
        <div class="css-1noxsk3">
          <p class="css-1b98ksb">{{ title }}</p>
          <!-- <p class="css-nv7hy7">2 months ago</p> -->
        </div>
      </div>
    </div></a
  >
</template>

<script>
import Tag from "@/components/Standard/Tag";

export default {
  name: "LinkCard",
  props: {
    title: {
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
a {
  background-color: transparent;
  color: inherit;
  -webkit-text-decoration: inherit;
  text-decoration: inherit;
}

p {
  margin: unset;
}

.link-img-container {
  height: 100%;
}

.inner-wrapper {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  background: #171923;
  border-radius: 0.75rem;
  border-width: 1px;
  border-style: solid;
  border-image: initial;
  border-color: #2d3748;
  transition: all 0.25s ease 0s;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  overflow: hidden;
}
.css-1jke4yk {
  position: relative;
  width: 100%;
}

.tag-position {
  z-index: 2;
  right: 0.5rem;
  top: 0.5rem;
  position: absolute;
}

.css-mbamkv {
  position: relative;
  max-width: 100%;
  width: 100%;
  border-bottom-width: 1px;
  border-color: #2d3748;
}

.css-mbamkv > :not(style) {
  overflow: hidden;
  inset: 0px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.css-jettfe {
  object-fit: cover;
  object-position: 0px 0px;
}

.css-nhqtwa {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  padding-inline-start: 1rem;
  padding-inline-end: 1rem;
  width: 100%;
  background: #171923;
  border-width: 1px;
  border-style: solid;
  border-image: initial;
  border-color: #171923;
}

.css-1noxsk3 {
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  width: 100%;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.css-1b98ksb {
  font-size: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 500;
}

.css-nv7hy7 {
  font-size: 20px;
  color: #a0aec0;
}
</style>