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
