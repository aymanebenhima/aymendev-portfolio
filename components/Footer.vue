<template>
  <footer class="footer">
    <p class="paragraph">
      Made with <font-awesome-icon   :icon="['fa','heart']"/> By Aymane Benhima using Vuejs & Nuxtjs
    </p>
  </footer>
</template>

<style lang="scss">
.footer {
  grid-column: social-start / full-end;
  grid-row: 7 / -1;
  display: flex;
  justify-content: center;
  align-items: center;

  @include respond(tab-port) {
    grid-column: 2 / 3;
    grid-row: 5 / -1;
  }
}
</style>
