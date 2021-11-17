<template>
  <div class="theme-switch-wrapper m15">
    <svg
      v-if="this.theme == 'dark'"
      @click="switchTheme($event)"
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-sun"
      width="44"
      height="44"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="#d99738"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <circle cx="12" cy="12" r="4" />
      <path
        d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"
      />
    </svg>
    <svg
      v-if="this.theme == 'light'"
      @click="switchTheme($event)"
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-moon"
      width="44"
      height="44"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="#d99738"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"
      />
    </svg>
  </div>
</template>


<script>
export default {
  name: "ThemeSwitcher",
  data: function () {
    return {
      userPref:
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light",
      theme: "light",
    };
  },
  computed: {},
  mounted() {
    const currentTheme = localStorage.getItem("theme");

    if (currentTheme) {
      document.documentElement.setAttribute("data-theme", currentTheme);
      this.theme = currentTheme;
    } else if (this.userPref) {
      document.documentElement.setAttribute("data-theme", this.userPref);
      this.theme = this.userPref;
    } else {
      this.theme = "light";
    }
  },
  methods: {
    switchTheme() {
      if (this.theme === "light") {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
        this.theme = "dark";
      } else {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
        this.theme = "light";
      }

      this.$root.$emit("change-theme", this.theme);
    },
  },
};
</script>
<style scoped>
/*slider switch css */
.theme-switch-wrapper {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
}

em {
  margin-left: 10px;
  font-size: 1rem;
}
</style>