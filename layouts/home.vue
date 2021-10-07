<template>
<div>
  <Intro />
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
    <Quotes :displayQuote="quote" />
    <Social />
    <Footer />
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      quote: true
    }
  },
/*   mounted() {
    if(window.innerWidth < 900) {
      this.quote = false
    }
  }, */
}
</script>

<style>
	.container {
		position: relative;
	}
	.container::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;
		width: 100%;
		height: 100%;
		opacity: .1;
	}
</style>
