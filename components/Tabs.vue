<template>
  <article>
    <header class="tabs">
      <ul>
        <li v-for="(tab, index) in tabs" :key="index">
          <div class="nav-item"
              :class="{ 'is-active': tab.isActive }"
              @click="selectTab(tab)">
            {{ tab.name }}
          </div>
        </li>
      </ul>
    </header>
    <section class="tabs-details">
      <slot></slot>
    </section>
  </article>
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
  .tabs {
    margin: 0 1rem;
  }
  .tabs-details {
    padding: 10px;
  }
  ul {
    display: flex;
    justify-content: center;
    list-style: none;
    li:not(:last-child){
      margin-right: 4rem;
    }
    .nav-item {
      font-size: $h1-font-size;
      font-weight: $font-medium;
      border-bottom: 2px solid var(--text-color);
      cursor: pointer;
      transition: all .2s;
      &:hover {
        color: var(--container-color);
        border-bottom: 2px solid var(--container-color);
      }
      &.is-active {
        border-bottom: 2px solid var(--container-color);
        color: var(--container-color);
        transform: scale(1.3);
      }
    }
  }
</style>
