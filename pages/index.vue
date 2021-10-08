<template>
<div class="home">
  <div class="home__hero glitch" data-text="AYMENDEV">
    aymendev
  </div>
  <h1 class="heading">
    <span class="thin">I</span> <span class="regular">create</span> <span class="black">websites</span> <span class="thin">&&</span> <span class="black">apps</span> <span class="thin">that</span> <span class="medium">enhance</span> <span class="thin">your</span> <span class="medium">business</span>
  </h1>
  <nuxt-link to="/contact">
    <Button>Hire me</Button>
  </nuxt-link>
</div>
</template>

<script>
export default {
  layout: 'home',
  data() {
    return {
      quote: true
    }
  },
}
</script>

<style lang="scss">
.home {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  &__hero {
    font-size: $biggest-font-size*2;
    font-weight: $font-black;
    text-transform: uppercase;

    @include respond(tab-port) {
      font-size: $biggest-font-size;
    }
  }

  &__btn {
    align-self: flex-start;
    justify-self: end;
  }
}
</style>
