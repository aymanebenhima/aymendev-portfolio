<template>
  <div class="header">
    <NuxtLink to="/" class="logo">
      aymen<span class="dev">Dev</span>.
    </NuxtLink>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.header {
    grid-column: full-start / -1;
    display: flex;
    align-items: center;
}
.logo {
  color: var(--text-color);
  font-size: 3.5rem;
  font-weight: $font-black;
  transition: all .2s;
  &:hover {
    -webkit-text-stroke: 1px var(--container-color);
    -webkit-text-fill-color: transparent;
  }
  .dev {
    font-weight: $font-thin;
    font-size: $h2-font-size;
  }
}
</style>
