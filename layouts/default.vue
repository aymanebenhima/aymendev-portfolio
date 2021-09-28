<template>
  <div class="container">
    <Header />
    <Navigation />
    <div class="job">
      <div class="job__title">
        I am a <span class="job__title--option"><TypeWriter :typeArray="['Full Stack', 'Software', 'Frontend', 'Backend', 'Web', 'Mobile']" /></span> Developer
      </div>
    </div>
    <transition
      name="fade"
      mode="in-out"
    >
      <Nuxt class="container__wrapper" />
    </transition>
    <Social />
    <Footer />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.container {
  position: relative;
  background-color: var(--bg-color);
  background-image: url("~/assets/img/bg.svg");
  background-blend-mode: screen;
  background-repeat: no-repeat;
  background-size: auto 100vh;
  background-position-x: 75vw;
  &__wrapper {
    height: 70vh;
    grid-column: col-start 2 / col-end 6;
    grid-row: 2 / 6;
  }
  .job {
    grid-column: center-start / col-start;
    grid-row: 2 / 3;
    border-left: .4px solid var(--text-color);
    display: flex;
    justify-content: center;

    &__title {
      color: var(--title-color);
      font-size: $h1-font-size;
      line-height: 1.3;
      font-family: 'sans-serif';
      font-weight: $font-bold;

      &--option {
        color: var(--container-color);
        display: block;
        font-family: $body-font;
        font-weight: $font-light;
      }
    }
  }
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateX(-2rem);
}

.fade-enter-active,
.fade-leave-active {
  transition: all .4s ease;
  overflow: hidden;
}
</style>
