<template>
  <div class="header">
    <NuxtLink to="/" class="logo">
      aymen<span class="dev">Dev</span>.
    </NuxtLink>
  </div>
</template>

<script>
import { gsap } from 'gsap'
export default {
  mounted() {
    this.startAnimations()
  },
  methods: {
    startAnimations() {
      gsap.to('.logo', {duration: 6, color: "#b8c1ec"})
    }
  },
}
</script>

<style lang="scss">
.header {
    grid-column: full-start / -1;
    display: flex;
    align-items: center;
    @include respond(tab-port) {
      grid-column: 2 / 3;
    }
}
.logo {
  color: var(--title-color);
  font-size: 3.5rem;
  font-weight: $font-black;
  transition: all .2s;

  @include respond(tab-land) {
    font-size: 2.5rem;
  }

  @include respond(tab-port) {
    font-size: 2rem;
  }
  &:hover {
    -webkit-text-stroke: 1px var(--container-color);
    -webkit-text-fill-color: transparent;
  }
  .dev {
    font-weight: $font-thin;
    font-size: $h2-font-size;
  }
}
</style>
