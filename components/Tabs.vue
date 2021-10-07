<template>
  <div class="about__container">
    <header class="tabs">
      <ul class="tabs__nav-list">
        <li v-for="(tab, index) in tabs" :key="index">
          <div class="tabs__nav-list__item"
              :class="{ 'tabs__nav-list__item--active': tab.isActive }"
              @click="selectTab(tab)">
            {{ tab.name }}
          </div>
        </li>
      </ul>
    </header>
    <section class="tabs__details">
      <slot></slot>
    </section>
  </div>
</template>

<script>
  export default {
    data: () => {
      return {
        tabs: []
      }
    },
    methods: {
      selectTab(selectedTab) {
        this.tabs.forEach(tab => {
          tab.isActive = tab.name === selectedTab.name;
        });
      }
    },
    created() {
      this.tabs = this.$children;
    }
  }
</script>

<style lang="scss" scoped>
  .about__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
  }
  .tabs {
    margin: 1.5rem 0;
    position: relative;
    width: 50%;
    border-radius: 3rem;

    @include respond(tab-port) {
      width: 75%;
    }
    @include respond(phone) {
      width: 100%;
    }

/*     overflow: hidden; */

    &__nav-list {
      position: relative;
      list-style: none;
      border-bottom: 1px solid #FFFFFE;
      overflow: hidden;
      display: flex;
      justify-content: space-around;

      &__item {
        font-size: $h1-font-size;
        display: inline;
        margin: 0 .4rem;
        text-align: center;
        cursor: pointer;
        width: 100%;
        color: var(--text-color);
        font-weight: $font-light;
        background: none;
        border: 1px solid var(--stroke-color);
        border-bottom: 0;
        border-radius: .75rem .75rem 0 0;
        padding: 0.1rem 3.5rem;
        transition: all 240ms ease;
        @include respond(tab-port) {
          padding: 0.3rem 4.5rem;
        }

@include respond(phone) {
          padding: 0.1rem 3.5rem;
        }

        &:not(&--active):hover {
          color: var(--container-color);
          transition: all .2s ease-in-out;
        }

        &--active {
          background: var(--stroke-color);
          color: var(--title-color);
          font-weight: $font-medium;
          transform: scale(1.05);
          transition: all 360ms cubic-bezier(.53,.32,.22,1.07);
        }
      }

    }

    &__details {
      padding: 1rem;
      overflow: auto;
    }
  }
/*   ul {
    display: flex;
    justify-content: center;

    .nav-item {
      position: relative;
      font-size: $h1-font-size;
      font-weight: $font-medium;
      width: 100%;
      cursor: pointer;
      transition: all .2s;

    }
  } */
</style>
