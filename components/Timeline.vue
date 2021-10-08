<template>
  <section class="timeline">
    <div class="timeline__items">
      <div class="timeline__item" v-for="(experience, index) in experiences.slice().reverse()" :key="index">
        <div class="timeline__dot"></div>
        <div class="timeline__date">
          {{ experience.startDate }} - {{ experience.endDate }}
        </div>
        <div class="timeline__content">
          <h3>{{ experience.jobTitle }}</h3>
          <h4>{{ experience.company }} - <span class="location">{{ experience.location }}</span></h4>
          <ul>
            <li v-for="(task, index) in experience.tasks" :key="index">{{ task }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { exp } from '~/data/Experience'
export default {
  data() {
    return {
      experiences: exp
    }
  },
};
</script>

<style lang="scss">
.timeline {
  min-height: 100%;
  padding: 2rem 1.5rem;

  &__items {
    max-width: 100%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      width: 2px;
      height: 100%;
      background-color: var(--stroke-color);
      left: calc(50% - 1px);

      @include respond(tab-port) {
        left: 7px;
      }
    }
  }

  &__item {
    margin-bottom: 40px;
    width: 100%;
    position: relative;

    &:last-child {
      margin-bottom: 0;
    }

    &:nth-child(odd) {
      padding-right: calc(50% + 3rem);
      text-align: right;

      @include respond(tab-port) {
        padding-right: 0;
        text-align: left;
      }
    }

    &:nth-child(even) {
      padding-left: calc(50% + 30px);
    }

    &:nth-child(odd),
    &:nth-child(even) {
      @include respond(tab-port) {
        padding-left: 3.7rem;
      }
    }
  }

  &__dot {
    height: 1.5rem;
    width: 1.5rem;
    background-color: var(--container-color);
    position: absolute;
    left: calc(50% - .8rem);
    border-radius: 50%;
    top: 1rem;

    @include respond(tab-port) {
      left: 2px;
    }
  }

  &__date {
    font-size: 1.2rem;
    color: var(--container-color);
    margin: .5rem 0 1.5rem;
  }

  &__content {
    background-color: var(--stroke-color);
    padding: 3rem;
    border-radius: .5rem;

    & h3 {
      font-size: 2rem;
      color: var(--title-color);
      margin: 0 0 1rem;
      text-transform: capitalize;
      font-weight: $font-medium;
    }

    & h4 {
      font-size: 1rem;
      margin: 0 0 .75rem;
      font-weight: $font-regular;
      text-transform: uppercase;
    }

    & .location {
      font-size: .9rem;
      font-weight: $font-light;
      text-transform: uppercase;
    }

    & li {
      color: var(--text-color);
      font-size: 1.2rem;
      font-weight: $font-regular;
/*       line-height: 1.5rem; */
    }
  }
}
</style>
