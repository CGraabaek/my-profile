<template>
  <div class="terminal-container">
    <div class="terminal-header">
      <div class="terminal-header-menu">
        <span class="terminal-green-button"></span>
        <span class="terminal-orange-button"></span>
        <span class="terminal-red-button"></span>
      </div>
      <div class="terminal-header-text-container">
        <p>Executing: introduceSelf.js</p>
      </div>
    </div>
    <div class="terminal-body-container">
      <div class="css-1k2diov"></div>
      <div class="terminal-body-content">
        <!-- <div class="about-row">
          <div class="about-title-text">
            <span class="greater-than">&gt;</span> self.learnAboutMe()
          </div>
          <p class="about-text">Press enter to see what I am about</p>
        </div> -->
        <div class="about-row">
          <div class="about-title-text">
            <span class="greater-than">&gt;</span> self.currentLocation
          </div>
          <p class="about-text">"Aarhus, DK"</p>
        </div>
        <div class="about-row">
          <div class="about-title-text">
            <span class="greater-than">&gt;</span> self.interests
          </div>
          <p class="about-text">
            ["web dev", "running", "bouldering", "motorcycles"]
          </p>
        </div>
        <div class="about-row">
          <div class="about-title-text">
            <span class="greater-than">&gt;</span> self.education
          </div>
          <p class="about-text">"MSc in Computer Engineering"</p>
        </div>
        <div class="about-row">
          <div class="about-title-text">
            <span class="greater-than">&gt;</span> self.skills
          </div>
          <p class="about-text">["JavaScript", "Python", "VueJS"]</p>
        </div>
        <div class="about-row">
          <div class="about-title-text">
            <span class="greater-than">&gt;</span> self.contactMe()
          </div>
          <p class="about-text">
            ["<a
              style="color: #fc0df6; font-weight: 500"
              rel="noopener"
              href="https://www.linkedin.com/in/christian-graab%C3%A6k-steenfeldt-563879ab/"
              >LinkedIn</a
            >", "<a
              style="color: #fc0df6; font-weight: 500"
              rel="noopener"
              href="https://github.com/cgraabaek"
              >Github</a
            >"]
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.terminal-container {
  display: flex;
  flex-direction: column;
  min-height: 300px;
  width: 100%;
  max-width: 80rem;
  margin-inline-start: auto;
  margin-inline-end: auto;
  margin-top: 4rem;
  box-shadow: var(--chart-box-shadow);
  border-radius: 1rem;
}

.terminal-header-text-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-inline-start: auto;
  margin-inline-end: auto;
  height: 36 px;
  width: 100%;
  position: absolute;
}

.terminal-header {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  position: relative;
  height: 36px;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  background: rgba(0, 0, 0, 0.4);
}

.terminal-header-menu {
  display: flex;
  flex-direction: row;
  margin-left: 1.25rem;
}

.terminal-green-button {
  background: #f56565;
  height: 12px;
  width: 12px;
  border-radius: 999px;
}

.terminal-orange-button {
  background: #ed8936;
  height: 12px;
  width: 12px;
  border-radius: 999px;
}

.terminal-red-button {
  background: #32cc77;
  height: 12px;
  width: 12px;
  border-radius: 999px;
}

.terminal-header-menu > *:not(style) ~ *:not(style) {
  margin-top: 0px;
  -webkit-margin-end: 0px;
  margin-inline-end: 0px;
  margin-bottom: 0px;
  -webkit-margin-start: 0.5rem;
  margin-inline-start: 0.5rem;
}

.terminal-body-container {
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.2);
}

.css-1k2diov {
  display: flex;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  width: 100%;
  height: 100%;
  background: transparent;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: -5;
}

.about-title-text {
  display: flex;
  font-family: "Courier New", Courier, monospace;
  font-size: 1.125rem;
}

.greater-than {
  margin-right: 0.5rem;
  color: #fc0df6;
  font-weight: 700;
}

.terminal-body-content {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  padding: 1.25rem;
}

.about-text {
  font-family: "Courier New", Courier, monospace;
  font-size: 1.125rem;
  color: var(--terminal-font-color);
  visibility: visible;
  align-self: flex-start;
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  white-space: nowrap; /* Keeps the content on a single line */
  
  letter-spacing: 0.15em; /* Adjust as needed */
  animation: typing 3.5s steps(30, end), blink-caret 0.5s step-end infinite;
}

.about-title-text {
  display: flex;
  font-family: "Courier New", Courier, monospace;
  font-size: 1.125rem;
}


/* The typing effect */
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: orange;
  }
}
</style>