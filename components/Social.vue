<template>
  <div class="social">
    <a href="https://www.github.com/aymanebenhima/" target="_blank" rel="noopener" title="Github">
      <font-awesome-icon class="icon" :icon="['fab', 'github']" />
    </a>
    <a href="https://www.linkedin.com/in/aymanebenhima/" target="_blank" rel="noopener" title="Linkedin">
      <font-awesome-icon class="icon" :icon="['fab', 'linkedin']" />
    </a>
    <a href="https://twitter.com/aymanebenhima" target="_blank" rel="noopener" title="Twitter">
      <font-awesome-icon class="icon" :icon="['fab', 'twitter']" />
    </a>
    <a class="mb-1" href="https://discordapp.com/users/<Aymen%20/>#7376" target="_blank" rel="noopener" title="<Aymen />#7376">
      <font-awesome-icon class="icon" :icon="['fab', 'discord']" />
    </a>
  </div>
</template>

<script>
import { gsap } from 'gsap'
export default {

  mounted() {
    this.cardAnimations()
  },
  methods: {
    cardAnimations() {
      gsap.from(".icon", {
        duration: 2,
        scale: 1,
        opacity: 0,
        delay: 0.5,
        stagger: 0.2,
        ease: "elastic",
        force3D: true
      });
    }
  },
}
</script>

<style lang="scss">
.social {
  grid-column: social-start / social-end;
  grid-row: 6 / -1;
  border-right: .5px solid var(--text-color);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  z-index: 5;

  @include respond(tab-port) {
    grid-column: 2 / span 1;
    grid-row: 4 / span 1;
    flex-direction: row;
    border-right: none;
    justify-content: space-evenly;
  }

  .icon {
    font-size: 2rem;
    color: var(--title-color);
    cursor: pointer;
    transition: all .2s ease-out;

/*     animation: moveInLeft 1s ease-out; */

    &:hover {
      color: var(--container-color);
    }
  }
}
</style>
