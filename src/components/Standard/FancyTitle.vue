<template>
  <h3 class="heading heading--3">{{ this.title }}</h3>
</template>

<script>
export default {
  components: {},
  props: {
    title: {
      type: String,
    },
  },
};
</script>

<style scoped>
.heading {
  display: inline;
  --underline-width-scale: calc(
    var(--underline-width) / var(--underline-intrinsic-width)
  );
  padding: 0
    calc(
      var(--underline-padding-x) +
        calc(var(--underline-cap-width) * var(--underline-width-scale))
    );
  box-decoration-break: clone;
  background-repeat: no-repeat;
  color: var(--font-color);
  background-image: linear-gradient(
    180deg,
    var(--underline-color),
    var(--underline-color)
  );
  background-position-x: calc(
      var(--underline-cap-width) * var(--underline-width-scale)
    ),
    0, 100%;
  background-position-y: calc(100% - var(--underline-offset-y) * -1);
  background-size: calc(
        100% -
          calc(var(--underline-cap-width) * var(--underline-width-scale) * 2)
      )
      calc(var(--underline-width) * 1px),
    auto calc(var(--underline-width) * 1px),
    auto calc(var(--underline-width) * 1px);
}

.heading--3 {
  font-size: 3rem;
  font-weight: bold;
  --underline-width: 20;
  --underline-offset-y: -2px;
}
</style>