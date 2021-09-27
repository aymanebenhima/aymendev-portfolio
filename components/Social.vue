<template>
  <div class="social">
    <a href="https://www.github.com/aymanebenhima/" target="_blank" title="Github">
      <font-awesome-icon class="icon" :icon="['fab', 'github']" />
    </a>
    <a href="https://www.linkedin.com/in/aymanebenhima/" target="_blank" title="Linkedin">
      <font-awesome-icon class="icon" :icon="['fab', 'linkedin']" />
    </a>
    <a href="https://twitter.com/aymanebenhima" target="_blank" title="Twitter">
      <font-awesome-icon class="icon" :icon="['fab', 'twitter']" />
    </a>
    <a href="https://discordapp.com/users/<Aymen%20/>#7376" target="_blank" title="<Aymen />#7376">
      <font-awesome-icon class="icon" :icon="['fab', 'discord']" />
    </a>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.social {
  grid-column: social-start / social-end;
  grid-row: 5 / -1;
  border-right: .5px solid var(--text-color);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;


  .icon {
    font-size: 1.8rem;
    color: var(--title-color);
    cursor: pointer;
    transition: all .2s;
    animation: moveInLeft 1s ease-out;

    &:hover {
      color: var(--container-color);
      transform: scale(0.9);
    }
  }
}
</style>
