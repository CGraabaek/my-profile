<template>
  <div class="about-me-container">
    <div class="about-me-body">
      <img
        alt="Christian Graabaek"
        class="profile-picture"
        src="@/assets/profile.jpeg"
      />
    </div>
    <div class="profile-container">
      <h2 class="page-title-gradient">Hi, I'm Christian!</h2>
      <p class="profile-subtitle">
        Welcome to my website! I use this to show some of my
        <a class="highlight-text" href="/projects">projects</a>
        off, and test things out. You can see what
        <a class="highlight-text" href="/links"> websites</a>
        or the
        <a class="highlight-text" href="/tools"> tools</a>
        that I like.
      </p>
    </div>
  </div>
</template>

<style scoped>
.about-me-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-inline-start: auto;
  margin-inline-end: auto;
  width: 100%;
  max-width: 80rem;
}

.about-me-body {
  animation: 0s ease 0s 1 normal none running none;
  width: 250px;
  height: 250px;
  border-radius: 1rem;
  margin: 50px;
}

.profile-container {
  display: flex;
  flex-direction: column;
  align-self: center;
  padding-left: 0px;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
}

.profile-picture {
  object-fit: cover;
  flex-grow: 3;
  border-radius: 1rem;
  width: 250px;
  height: 250px;
}

.css-1s0vjvd {
  display: flex;
  flex-direction: column;
  align-self: center;
  padding-left: 0px;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
}

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

.profile-subtitle {
  max-width: 650px;
  text-align: center;
  font-size: 1.25rem;
  margin-top: 0.5rem;
}

.highlight-text {
  transition-property: var(--chakra-transition-property-common);
  transition-duration: var(--chakra-transition-duration-fast);
  transition-timing-function: var(--chakra-transition-easing-ease-out);
  cursor: pointer;
  text-decoration: none;
  outline: transparent solid 2 px;
  outline-offset: 2 px;
  color: var(--link-color);
}

.highlight-text:hover,
.highlight-text[data-hover] {
  text-decoration: underline;
}

@media screen and (min-width: 48em) {
  .page-title-gradient {
    line-height: 1.2;
  }
}

@media screen and (min-width: 62em) {
  .about-me-container {
    flex-direction: row;
  }
  .page-title-gradient {
    font-size: 4.5rem;
    text-align: left;
  }

  .profile-subtitle {
    text-align: left;
  }
}

@media screen and (min-width: 80em) {
  .about-me-container {
    margin-top: 4rem;
    margin-bottom: 4rem;
  }
}
</style>