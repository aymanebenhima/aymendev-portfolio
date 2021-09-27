<template>
<div class="home">
  <div class="home__hero glitch" data-text="AYMENDEV">
    aymendev
  </div>
  <h1 class="heading">
    I <span class="medium">create</span> <span class="bold">websites</span> && <span class="bold">apps</span> that <span class="medium">enhance</span> your <span class="medium">business</span>
  </h1>
  <button class="btn home__btn">Hire me</button>
</div>
</template>

<script>
export default {}
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
  }

  &__btn {
    align-self: flex-start;
    justify-self: end;
  }
}
</style>
