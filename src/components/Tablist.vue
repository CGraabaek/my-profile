
<template>
  <div>
    <div
      role="tablist"
      aria-orientation="horizontal"
      aria-selected="true"
      class="button-row-container"
    >
      <div v-for="item in buttons" v-bind:key="item.id">
        <div
          class="button-round"
          :style="getClass(item)"
          v-bind:class="{
            selected: selected == item.id,
          }"
          @click="selected = item.id"
        >
          <svg
            v-if="item.id == 'mac'"
            :stroke="item.fontcolor"
            :fill="item.fontcolor"
            stroke-width="0"
            viewBox="0 0 1024 1024"
            focusable="false"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M747.4 535.7c-.4-68.2 30.5-119.6 92.9-157.5-34.9-50-87.7-77.5-157.3-82.8-65.9-5.2-138 38.4-164.4 38.4-27.9 0-91.7-36.6-141.9-36.6C273.1 298.8 163 379.8 163 544.6c0 48.7 8.9 99 26.7 150.8 23.8 68.2 109.6 235.3 199.1 232.6 46.8-1.1 79.9-33.2 140.8-33.2 59.1 0 89.7 33.2 141.9 33.2 90.3-1.3 167.9-153.2 190.5-221.6-121.1-57.1-114.6-167.2-114.6-170.7zm-105.1-305c50.7-60.2 46.1-115 44.6-134.7-44.8 2.6-96.6 30.5-126.1 64.8-32.5 36.8-51.6 82.3-47.5 133.6 48.4 3.7 92.6-21.2 129-63.7z"
            ></path>
          </svg>
          <svg
            v-if="item.id == 'ios'"
            :stroke="item.fontcolor"
            :fill="item.fontcolor"
            stroke-width="0"
            viewBox="0 0 16 16"
            focusable="false"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M11 1H5a1 1 0 00-1 1v12a1 1 0 001 1h6a1 1 0 001-1V2a1 1 0 00-1-1zM5 0a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V2a2 2 0 00-2-2H5z"
              clip-rule="evenodd"
            ></path>
            <path
              fill-rule="evenodd"
              d="M8 14a1 1 0 100-2 1 1 0 000 2z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <svg
            v-if="item.id == 'web'"
            :stroke="item.fontcolor"
            :fill="item.fontcolor"
            stroke-width="0"
            viewBox="0 0 1024 1024"
            focusable="false"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M928 140H96c-17.7 0-32 14.3-32 32v496c0 17.7 14.3 32 32 32h380v112H304c-8.8 0-16 7.2-16 16v48c0 4.4 3.6 8 8 8h432c4.4 0 8-3.6 8-8v-48c0-8.8-7.2-16-16-16H548V700h380c17.7 0 32-14.3 32-32V172c0-17.7-14.3-32-32-32zm-40 488H136V212h752v416z"
            ></path>
          </svg>
          <p>{{ item.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    buttons: {
      type: Array,
    },
    initialSelected: {
      type: String,
    },
  },
  computed: {},
  data: function () {
    return {
      selected: this.initialSelected,
    };
  },
  methods: {
    getClass(type) {
      return {
        background: type.color,
        color: type.fontcolor,
      };
    },
  },
};
</script>


<style scoped>
.button-row-container {
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
}

.button-round {
  outline: transparent solid 2px;
  display: flex;
  padding: 5px;
  align-items: center;
  justify-content: center;
  padding-inline-start: 1rem;
  padding-inline-end: 1rem;
  border-radius: 9999px;
  font-weight: 600;
  background: var(--bg-color);
  margin-right: 0.5rem;
  margin-top: 0.5rem;
}
.selected {
  border: 3px solid #fff;
}

p {
  margin: unset;
}
</style>