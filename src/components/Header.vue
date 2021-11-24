<template>
  <div class="custom-header">
    <span class="pull-left big-font">
      <!-- <a href="/"><img class="logo-header" src="@/assets/logo.png" /></a> -->
      <a href="/">Christian Graabaek</a>
    </span>

    <div class="pull-right link-container">
      <div>
        <a class="nav-link" href="/projects">Projects</a>
        <a class="nav-link" href="/links">Links</a>
        <a class="nav-link" href="/tools">Tools</a>
      </div>
      <div>
        <theme-switcher></theme-switcher>
      </div>
    </div>
  </div>
</template>

<script>
import ThemeSwitcher from "@/components/ThemeSwitcher";
export default {
  components: {
    ThemeSwitcher,
  },
  data: function () {
    return {
      theme: localStorage.getItem("theme"),
    };
  },
  mounted() {
    this.$root.$on("change-theme", (selection) => {
      this.theme = selection;
    });
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
};
</script>

<style scoped>
.logo-header {
  height: 50px;
  /* padding: 5px 0px 5px 0px; */
}
.header {
  align-items: flex-start !important;
}
.custom-header {
  background-color: var(--bg-color) !important;
  min-height: 40px;
  max-height: 70px;
  align-items: center;
  color: var(--font-color);
  display: flex;
  padding-top:10px;
}

.header-logo {
  padding: 5px;
  max-height: 60px;
}

.pull-right {
  margin-right: 10px;
  margin-left: auto;
}
.pull-left {
  float: left;
  margin-left: 20px;
}

.big-font {
  font-size: 30px;
}

.nav-link {
  margin-right: 25px;
  font-size: 22px;
}

.link-container {
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}

a {
  position: relative;
  margin: 20px 0;
  padding: 10px 20px;
  text-decoration: none;
  color: var(--font-color);
  font-family: sans-serif;
  font-size: 18px;
  font-weight: 600;
  transition: 0.5s;
  z-index: 1;
}
a:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-top: 2px solid var(--link-bg-color);
  border-bottom: 2px solid var(--link-bg-color);
  transform: scaleY(2);
  opacity: 0;
  transition: 0.3s;
}
a:after {
  content: "";
  position: absolute;
  top: 2px;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--link-bg-color);
  transform: scale(0);
  opacity: 0;
  transition: 0.3s;
  z-index: -1;
}
a:hover {
  color: #fff;
}
a:hover:before {
  transform: scaleY(1);
  opacity: 1;
}
a:hover:after {
  transform: scaleY(1);
  opacity: 1;
}

@media screen and (min-width: 48em) {
  .link-container {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    justify-content: space-between;
  }
}
@media screen and (max-width: 699px) {
  .link-container {
    display: flex;
  }

  a {
    /* padding: unset; */
    padding: 2px 5px;
  }

  .nav-link {
    margin-right: 2px;
  }
}
</style>
