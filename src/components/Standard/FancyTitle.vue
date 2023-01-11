<template>
  <!-- <h3 class="heading heading--3">{{ this.title }}</h3> -->
  <!-- <h3 class="fancy">{{ this.title }}</h3> -->
  <h3 class="page-title-gradient">{{ this.title }}</h3>
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
.page-title-gradient {
  font-weight: 700;
  font-size: 3rem;
  line-height: 1.33;
  background-image: linear-gradient(
    to right,
    var(--gradient-color-1),
    var(--gradient-color-2),
    var(--gradient-color-3)
  );
  color: transparent;
  background-clip: text;
  text-align: center;
  margin: unset;
}

.fancy {
  font-size: 3.5vw;
  text-transform: uppercase;
  text-align: center;
  line-height: 1;
  background-image: url("data:image/svg+xml,%3Csvg width='2250' height='900' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg%3E%3Cpath fill='%2300A080' d='M0 0h2255v899H0z'/%3E%3Ccircle cx='366' cy='207' r='366' fill='%2300FDCF'/%3E%3Ccircle cx='1777.5' cy='318.5' r='477.5' fill='%2300FDCF'/%3E%3Ccircle cx='1215' cy='737' r='366' fill='%23008060'/%3E%3C/g%3E%3C/svg%3E%0A");
  background-size: 110% auto;
  background-position: center;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
}
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