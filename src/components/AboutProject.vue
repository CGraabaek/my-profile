<template>
  <div class="project-wrapper">
    <img
      class="project-image"
      alt="My Websitescreenshot"
      :src="require('@/assets/' + image)"
    />
    <div :class="'info-box-' + cardPosition">
      <div class="info-box-rows">
        <div class="info-box-content">
          <div class="info-box-heading">
            <h2 class="info-box-title">{{ title }}</h2>
            <div class="info-box-title-icons">
              <a
                v-if="github != ''"
                target="_blank"
                rel="noopener noreferrer"
                class="css-duglel"
                :href="github"
                ><svg
                  :stroke="currentColor"
                  :fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 496 512"
                  height="23"
                  width="23"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                  ></path></svg
              ></a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                class="css-duglel"
                :href="link"
                ><svg
                  :stroke="currentColor"
                  :fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"
                  ></path></svg
              ></a>
            </div>
          </div>
          <div class="tag-row">
            <tag
              v-for="tag in tags"
              v-bind:key="tag.text"
              class="tag"
              :text="tag.text"
              :backgroundcolor="tag.backgroundcolor"
              :fontcolor="tag.fontcolor"
            ></tag>
          </div>
          <div class="info-box-body">
            <p>
              {{ description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Tag from "@/components/Standard/Tag";

export default {
  components: {
    Tag,
  },
  props: {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
    },
    link: {
      type: String,
    },
    github: {
      type: String,
    },
    cardPosition: {
      type: String,
    },
    tags: {
      type: Array,
    },
  },
  data() {
    return {
      currentColor: "#B2F5EA",
    };
  },
};
</script>



<style scoped>
h2 {
  margin: unset;
}

*,
*::before,
*::after {
  border-width: 0;
  border-style: solid;
  box-sizing: border-box;
}

.project-wrapper {
  position: relative;
}

.project-image {
  border-width: 1px;
  border-style: solid;
  border-image: initial;
  border-color: #2d3748;
  border-radius: 1rem;
  min-width: 100%;
  max-width: 100%;
  min-height: 100%;
  max-height: 100%;
}

.info-box-left {
  max-height: 100%;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  position: absolute;
  top: 50%;
  left: -10%;
  transform: translate(0px, -50%);
  border-radius: 1rem;
  background: var(--info-box-bg);
  padding: 1.25rem;
  width: 45%;
  max-width: 600px;
  white-space: normal;
  border-width: 1px;
  border-style: solid;
  border-image: initial;
  border-color: #2d3748;
}
.info-box-right {
  max-height: 100%;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  position: absolute;
  top: 50%;
  right: -10%;
  transform: translate(0px, -50%);
  border-radius: 1rem;
  background: var(--info-box-bg);
  padding: 1.25rem;
  width: 45%;
  max-width: 600px;
  white-space: normal;
  border-width: 1px;
  border-style: solid;
  border-image: initial;
  border-color: #2d3748;
}

.info-box-rows {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  flex-direction: column;
  max-height: 100%;
  height: 100%;
  width: 100%;
  max-width: 100%;
}

.info-box-content {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.info-box-heading {
  display: flex;
  justify-content: space-between;
}

.info-box-title {
  font-weight: 700;
  font-size: 36px;
  line-height: 1.33;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--font-color);
}

.info-box-title-icons {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: end;
  justify-content: flex-end;
  flex-direction: row;
  margin-right: 0.25rem;
}
.info-box-title-icons > :not(style) ~ :not(style) {
  margin-top: 0px;
  margin-inline-end: 0px;
  margin-bottom: 0px;
  margin-inline-start: 1rem;
}

.css-duglel {
  transition-property: background-color, border-color, color, fill, stroke,
    opacity, box-shadow, transform;
  transition-duration: 150ms;
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
  cursor: pointer;
  text-decoration: none;
  outline: transparent solid 2 px;
  outline-offset: 2 px;
  color: #8ae1b1;
}

.tag-row {
  display: flex;
  flex-direction: row;
  padding-top: 5px;
  padding-bottom: 5px;
  /* padding: 5px; */
}
.tag ~ .tag {
  margin-left: 10px;
}

.info-box-body {
  text-align: left;
}

@media screen and (min-width: 80em) {
  .project-wrapper {
    max-width: 90%;
  }
  .info-box-left {
    left: -10%;
  }
  .info-box-right {
    right: -10%;
  }
}

@media screen and (min-width: 700px) {
  .project-wrapper {
    max-width: 84%;
  }
}
@media screen and (max-width: 699px) {
  .info-box-title {
    font-size: 2.25rem;
    line-height: 1.2;
  }

  .info-box-right {
    width: 100%;
    left: 0px;
    top: 0px;
    position: unset;
    transform: unset;
  }
  .info-box-left {
    width: 100%;
    left: 0px;
    top: 0px;
    position: unset;
    transform: unset;
  }

  .project-image {
    /* border-radius: unset; */
  }
}
</style>