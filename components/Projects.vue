<template>
  <HorizontalScroll class="horizontal-scroll">
    <div class="content">
      <div class="gallery">
        <div data-aos="slide-left" class="gallery__text"><span class="gallery__text-inner">Scroll</span><span class="gallery__text-inner">to see</span></div>

        <figure v-for="(project, index) in projects" :key="index" class="gallery__item">
          <div v-tilt class="gallery__item-img"><div class="gallery__item-imginner" :style='"background-image: url(img/demo1/"+project.id+".jpg)"'></div></div>
          <figcaption class="gallery__item-caption">
            <h2 class="gallery__item-title">{{ project.name }}</h2>
            <span class="gallery__item-number">{{ (index > 8) ? index+1:`0${index+1}` }}</span>
            <p class="gallery__item-tags">
              <span v-for="(techno, index) in project.using" :key="index.using">#{{ techno.name }}</span>
            </p>
            <a class="gallery__item-link" :href='project.github' rel="noopener" target="_blank">explore</a>
          </figcaption>
        </figure>
        <div class="gallery__text"><span class="gallery__text-inner">That's</span><span class="gallery__text-inner">All</span></div>
      </div>
    </div>
  </HorizontalScroll>
</template>

<script>
import { gsap } from 'gsap'
import { projects } from '@/data/projects'

export default {
  data() {
    return { projects: projects, }
  },
  mounted() {
    this.cardAnimations()
  },
  methods: {
    cardAnimations() {
      gsap.from(".gallery__item", {
        duration: 2,
/*         scale: 0.5, */
        opacity: 0,
        delay: 0.5,
        stagger: 0.2,
        ease: "elastic",
        force3D: true
      });
    },
  },
}
</script>

<style lang="scss" scoped>
.horizontal-scroll {
  display: flex;
  width: 100%;
  height: 100%;
}
.gallery::-webkit-scrollbar,
.gallery::-moz-scrollbar {
    display: none;
}

.gallery {
	display: flex;
	margin-left: 2rem;
	padding-right: 2rem;
  overflow-x: auto;
  overflow-y: hidden;

  &__item {
    margin: 0 2rem;
    display: grid;
    grid-template-areas: '... ...'
              '... gallery-image'
              '... ...' ;
    grid-template-columns: 8rem 21vmax;
    grid-template-rows: 8rem 24vmax 3rem;

    @include respond(tab-port) {
      grid-template-rows: 8rem 40vmax 4rem;
    }
    &:nth-child(even) {
      padding-top: 2.5rem;
    }

    &-img {
      grid-area: gallery-image;
      width: 100%;
      height: 100%;
      overflow: hidden;
      position: relative;
      box-shadow: 0.8em 0.8em 0 0 var(--stroke-color);
      transform-origin: 50% 100%;
      filter: grayscale(100%);
      transition: filter .5s ease;

      &:hover {
        filter: none;
      }
    }

    &-imginner {
      background-size: cover;
      background-position: 50% 0;
      width: 100%;
      height: 100%;
    }

    &-caption {
      grid-area: 1 / 1 / 4 / 3;
      display: grid;
      grid-template-areas: 'gallery-number gallery-title'
                'gallery-link ...'
                'gallery-link gallery-tags' ;
      grid-template-columns: 8rem auto;
      grid-template-rows: 8rem auto 3rem;
    }

    &-number {
      grid-area: gallery-number;
      font-size: 6rem;
      font-size: clamp(2.5rem,9vw,6.5rem);
      justify-self: end;
      padding-right: 2rem;
      color: var(--bg-color-sec);
      z-index: 5;
    }

    &-title {
      grid-area: gallery-title;
      margin: 0;
      font-size: 1.6rem;
      font-size: clamp(2rem,4vw,3rem);
      color: var(--title-color);
      z-index: 5;
    }
    &-link {
      grid-area: gallery-link;
      align-self: end;
      font-size: 1.5rem;
      background: var(--stroke-color);
      color: var(--container-color);
      text-decoration: underline;
      width: 10rem;
      height: 10rem;
      border-radius: 50%;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      &:focus,
      &:hover {
        background: var(--container-color);
        color: var(--stroke-color);
        text-decoration: none;
      }
    }

    &-tags {
      grid-area: gallery-tags;
      justify-self: center;
      font-size: 1.5rem;
      display: grid;
      grid-auto-flow: column;
      grid-gap: 1rem;
      cursor: pointer;
      z-index: 5;

      @include respond(tab-port) {
        font-size: 1rem;
        grid-gap: .5rem;
      }
    }
  }

  &__text {
    font-size: 20vw;
    line-height: 0.8;
    margin: 0 10vw 0 14vw;
    text-transform: lowercase;
    color: var(--stroke-color);
    color: transparent;
    -webkit-text-stroke: 1px #978c77;
    text-stroke: 1px #978c77;
    -webkit-text-fill-color: transparent;
    text-fill-color: transparent;

    &-inner {
      display: block;
    }
  }

  &__item-number,
  &__item-title,
  &__text {
    font-family: moret, serif;
    font-weight: 800;
    font-style: italic;
    align-self: center;
  }
}
</style>
