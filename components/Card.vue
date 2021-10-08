<template>
<div class="card__container">
  <div v-for="(project, index) in projects" :key="index" v-tilt class="card">
    <div class="card__img"></div>
    <div class="card__content">
      <h3 class="card__title mb-4">{{ project.name }}</h3>
      <div class="card__body">
        <p class="mb-2">{{ project.desc }}</p>
        <div class="card__body--icons">
<!--           <div v-for="(techno, index) in project.using" :key="index" class="card__body--icon">
            <img :src="`@/assets/img/tech_icons/${techno.icon}`" :alt="techno.name">
          </div> -->
          <div v-for="(techno, index) in project.using" :key="index" class="card__body--icon">
            <img class="card__body--icon-tech" :src="require(`/assets/img/tech_icons/${techno.icon}`)" :alt='techno.name'>
          </div>
<!--           <div class="card__body--icon">
            <img class="card__body--icon-tech" src="@/assets/img/tech_icons/vuejs.png" alt="techno name">
          </div> -->
        </div>
      </div>
      <div class="card__btn">Source code <font-awesome-icon :icon="['fab', 'github']" /></div>
    </div>
  </div>
</div>
</template>

<script>
import { gsap } from 'gsap'
import { projects } from '@/data/projects'
export default {
  data() {
    return {
      projects: projects,

    }
  },
  mounted() {
    this.cardAnimations()
  },
  methods: {
    cardAnimations() {
      gsap.from(".card", {
        duration: 2,
/*         scale: 0.5, */
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
.card {
  background: #000;
  background-size: cover;
  padding: 10rem 0 0;
  border-radius: 1.2rem;
  max-width: 50ch;
  overflow: hidden;

  &:nth-child(3n+1) {
    background-image: linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1);
  }
  &:nth-child(3n+2) {
    background: linear-gradient(to right, #bdc3c7, #2c3e50);
  }
  &:nth-child(3n+3) {
    background-image: linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12);
  }

/*     &__img {
    background-image: url("~/assets/img/tech_icons/apibg.png");
    background-position: center;
    background-repeat: no-repeat;
    height: 100%;
    width: auto;

  } */

  &__container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
    overflow: hidden;
    margin: 3rem;

    @include respond(tab-port) {
      grid-template-columns: 1fr;
      grid-column-gap: 1rem;
      justify-items: center;
      overflow: hidden;
      margin: 1.5rem;
    }
  }

  &__title {
    position: relative;
    width: max-content;
    color: var(--title-color);

    &::after {
      content: "";
      position: absolute;
      height: .4rem;
      left: calc(1.5rem * -1);
      bottom: -2px;
      width: calc(100% + 1.5rem);
      background: var(--container-color);
      transform: scaleX(0);
      transform-origin: left;
      transition: transform .5s ease;
    }
  }

  &:hover &__title::after {
    transform: scaleX(1);
  }

  &__body {
    text-align: left;
    display: grid;
    grid-template-columns: 1fr 3rem;
    grid-gap: 1rem;
    &--icons {
      display: flex;
      flex-direction: column;
      justify-content: center;
      justify-items: center;
      align-items: center;
    }
    &--icon {
      width: 20px;
      height: 20px;
      &-tech {
        width: 90%;
        height: 90%;
        position: relative;
        margin-bottom: .25rem;
        filter: grayscale(100%);
        transition: all .3s ease-in-out;
        &:hover {
          filter: none;
          transform: scaleX(-1);
        }
      }
    }

  }

  &__content {
    padding: 1.5rem;
    background: linear-gradient(
      hsla(0, 0%, 0%, 0),
      hsla(20, 0%, 0%, 0.3) 20%,
      hsla(0, 0%, 0%, 1)
    );
    transform: translateY(70%);
    transform-origin: bottom;
    transition: transform .5s ease;

    & > *:not(.card__title) {
      opacity: 0;
      transition: opacity .5s linear;
    }
  }

  &:hover,
  &:focus-within {
    transform: scale(1.05);
  }

  &:hover &__content {
    transform: translateY(0);
    transition-delay: .5s;

  & > *:not(.card__title) {
    opacity: 1;
    transition-delay: 1s;
  }
  }

  &__btn {
    cursor: pointer;
    display: inline-block;
    text-decoration: none;
    color: var(--stroke-color);
    background-color: var(--container-color);
    padding: .5rem 1rem;
    border-radius: .25rem;
    transition: all .3s;

    &:hover,
    &:focus {
      opacity: .8;
    }
  }

}

@media (hover) {
  .card {
    &__content {
      transform: translateY(70%);
      transition: transform .5s ease;

    }
    &__title::after {
      transform: scaleX(0);
    }
  }
}
</style>
