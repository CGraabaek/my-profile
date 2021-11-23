<template>
  <div class="tag" :style="textStyle">
    {{ text }}
  </div>
</template>


<script>
export default {
  name: "Tag",
  props: {
    text: {
      type: String,
    },
    backgroundcolor: {
      type: String,
    },
    fontcolor: {
      type: String,
    },
  },
  computed: {
    textStyle() {
      return {
        backgroundColor: `${this.backgroundcolor}`,
        color: `${this.fontcolor} !important`,
      };
    },
  },
};
</script>

<style scoped>
.tag > :not(style) ~ :not(style) {
  margin-top: 0px;
  margin-inline: 0.5rem 0px;
  margin-bottom: 0px;
}

.tag {
  display: inline-flex;
  vertical-align: top;
  align-items: center;
  max-width: 100%;
  font-weight: 700;
  line-height: 1.2;
  outline: transparent solid 2px;
  outline-offset: 2px;
  min-height: 1.5rem;
  min-width: 1.5rem;
  font-size: 0.875rem;
  border-radius: 0.375rem;
  padding-inline-start: 0.5rem;
  padding-inline-end: 0.5rem;
  /* background: var(--tag-bg); */
  height: 20px;
}
</style>



