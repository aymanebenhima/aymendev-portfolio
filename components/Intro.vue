<template>
  <div class="loading-screen">
    <div class="container--intro">
      <img class="intro-logo" src="~/assets/img/logo.svg" alt="aymendev logo" />
      <div class="divider"></div>
      <div class="mask"></div>
      <div class="intro-heading">
        Code your life will be <br />
        <span>Awesome.</span>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
export default {
  mounted() {
    let timeline = gsap.timeline({ defaults: { ease: 'power1.out' } });

    timeline.to('.divider', { height: '8rem', duration: 1 });
    timeline.to('.intro-logo', { left: '25%', duration: 1 }, '-=.6');
    timeline.to('.intro-heading', { opacity: '1', left: '55%', duration: 1 }, '-=1');
    timeline.to('.intro-logo', { left: '51%', duration: 1, delay: 1 });
    timeline.to('.intro-heading', { opacity: '0', duration: 1 }, '-=1');
    timeline.to('.divider', { height: '0', duration: 0.5 });
    timeline.to('.loading-screen', { opacity: '0', duration: 0.5, delay: 0.25 });
    timeline.to('.loading-screen', { display: 'none' });
    timeline.to('body', { overflow: 'visible' });
  },
}
</script>

<style lang="scss" scoped>
.loading-screen {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 15;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: black;
  overflow: hidden;
}
.container--intro {
  position: relative;
  display: flex;
  width: 88rem;
  align-items: center;
}
img,
.divider,
.mask,
.intro-heading {
  position: absolute;
}
img,
.mask {
  left: calc(50% + 2px);
}
.divider {
  left: 50%;
  width: 5px;
  height: 0rem;
  margin: 0 auto;
  background-color: white;
}
.mask {
  z-index: 20;
  align-self: 8rem;
  width: 40rem;
  height: 8rem;
  background-color: black;
}

.intro {
  &-heading {
    left: 50%;
    z-index: 30;
    color: var(--text-color);
    font-size: 3rem;
    font-weight: 300;
    line-height: 4rem;
    text-align: center;
    text-transform: uppercase;
    opacity: 0;

    @include respond(tab-port) {
      font-size: 1.5rem;
      line-height: 2rem;
    }
  }

  &-heading span {
    color: var(--title-color);
  }

  &-logo {
    width: 7.5rem;
    height: auto;

  }
}
</style>
