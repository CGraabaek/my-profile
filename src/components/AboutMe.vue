<template>
  <div class="css-96w5vx">
    <div class="chakra-skeleton css-qz9p4w">
      <img
        alt="Michael Hall"
        class="chakra-image css-1rqqvn4"
        src="@/assets/profile.jpeg"
      />
    </div>
    <div class="css-1s0vjvd">
      <h2 class="chakra-heading moving-grad css-1pme72q">Hi, I'm Christian!</h2>
      <p class="css-okjtgc">
        Welcome to my website! I use this to show some of my
        <a class="chakra-link css-duglel" href="/projects">projects</a>
        off, and test things out. You can see what
        <a class="chakra-link css-duglel" href="/links"> websites</a>
        or the
        <a class="chakra-link css-duglel" href="/links"> tools</a>
        that I like.
      </p>
    </div>
  </div>
</template>

<style scoped>
.css-96w5vx {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-inline-start: auto;
  margin-inline-end: auto;
  width: 100%;
  max-width: 80rem;
}

.css-qz9p4w {
  animation: 0s ease 0s 1 normal none running none;
  width: 250px;
  height: 250px;
  border-radius: 1rem;
  margin: 50px;
}

.css-1rqqvn4 {
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

.css-1pme72q {
  font-weight: 700;
  font-size: 3rem;
  line-height: 1.33;
  background-image: linear-gradient(to right, #50d38b, #38b2ac, #63b3ed);
  color: transparent;
  background-clip: text;
  text-align: center;
  margin: unset;
}

.css-okjtgc {
  max-width: 650px;
  text-align: center;
  font-size: 1.25rem;
  margin-top: 0.5rem;
}

.css-duglel {
  transition-property: var(--chakra-transition-property-common);
  transition-duration: var(--chakra-transition-duration-fast);
  transition-timing-function: var(--chakra-transition-easing-ease-out);
  cursor: pointer;
  text-decoration: none;
  outline: transparent solid 2 px;
  outline-offset: 2 px;
  color: var(--link-color);
}

.css-duglel:hover,
.css-duglel[data-hover] {
  text-decoration: underline;
}

@media screen and (min-width: 48em) {
  .css-1pme72q {
    line-height: 1.2;
  }
}

@media screen and (min-width: 62em) {
  .css-96w5vx {
    flex-direction: row;
  }
  .css-1pme72q {
    font-size: 4.5rem;
    text-align: left;
  }

  .css-okjtgc {
    text-align: left;
  }
}

@media screen and (min-width: 80em) {
  .css-96w5vx {
    margin-top: 4rem;
    margin-bottom: 4rem;
  }
}
</style>