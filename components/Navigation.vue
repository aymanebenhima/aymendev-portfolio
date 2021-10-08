<template>
  <div>
  	<input class="menu-icon" type="checkbox" id="menu-icon" name="menu-icon"/>
  	<label for="menu-icon">&nbsp;</label>
  	<nav class="nav">
  		<ul class="pt-5" @click="checkboxToggle">
  			<li><NuxtLink to="/">Home</NuxtLink></li>
  			<li><NuxtLink to="/about">About</NuxtLink></li>
  			<li><NuxtLink to="/projects">Projects</NuxtLink></li>
  			<li><NuxtLink to="/contact">Contact</NuxtLink></li>
  		</ul>
  	</nav>
  </div>
</template>

<script>
export default {
  methods: {
    checkboxToggle() {
      return document.querySelector("label[for='menu-icon']").click()
    }
  },
}
</script>

<style lang="scss">

[type="checkbox"]:checked,
[type="checkbox"]:not(:checked){
  position: absolute;
  left: -9999px;
}
.menu-icon:checked + label,
.menu-icon:not(:checked) + label{
  position: fixed;
  top: 6.3rem;
  right: 7.5rem;
  display: block;
  width: 3rem;
  height: 3rem;
  padding: 0;
  margin: 0;
  cursor: pointer;
  z-index: 10;

  @include respond(tab-port) {
    top: 4.3rem;
    right: 4.5rem;
  }
}
.menu-icon:checked + label:before,
.menu-icon:not(:checked) + label:before{
  position: absolute;
  content: '';
  display: block;
  width: 3rem;
  height: 2rem;
  z-index: 20;
  top: 0;
  left: 0;
  border-top: 2px solid #ececee;
  border-bottom: 2px solid #ececee;
  transition: border-width 100ms 1500ms ease,
              top 100ms 1600ms cubic-bezier(0.23, 1, 0.32, 1),
              height 100ms 1600ms cubic-bezier(0.23, 1, 0.32, 1),
              background-color 200ms ease,
              transform 200ms cubic-bezier(0.23, 1, 0.32, 1);
}
.menu-icon:checked + label:after,
.menu-icon:not(:checked) + label:after{
  position: absolute;
  content: '';
  display: block;
  width: 2.2rem;
  height: .2rem;
  z-index: 20;
  top: 1rem;
  right: .4rem;
  background-color: #ececee;
  margin-top: -1px;
  transition: width 100ms 1750ms ease,
              right 100ms 1750ms ease,
              margin-top 100ms ease,
              transform 200ms cubic-bezier(0.23, 1, 0.32, 1);
}
.menu-icon:checked + label{

  &:before{
    top: 1rem;
    transform: rotate(45deg);
    height: 2px;
    background-color: #ececee;
    border-width: 0;
    transition: border-width 100ms 340ms ease,
                top 100ms 300ms cubic-bezier(0.23, 1, 0.32, 1),
                height 100ms 300ms cubic-bezier(0.23, 1, 0.32, 1),
                background-color 200ms 500ms ease,
                transform 200ms 1700ms cubic-bezier(0.23, 1, 0.32, 1);
  }

  &:after{
    width: 3rem;
    margin-top: 0;
    right: 0;
    transform: rotate(-45deg);
    transition: width 100ms ease,
                right 100ms ease,
                margin-top 100ms 500ms ease,
                transform 200ms 1700ms cubic-bezier(0.23, 1, 0.32, 1);
  }
}

.nav{
  position: fixed;
  top: 3.3rem;
  right: 5rem;
  display: block;
  width: 8rem;
  height: 8rem;
  padding: 0;
  margin: 0;
  z-index: 9;
  overflow: hidden;
  box-shadow: 0 8px 30px 0 rgba(0,0,0,0.3);
  background-color: var(--bg-color-sec);
  animation: border-transform 7s linear infinite;
  transition: top 350ms 1100ms cubic-bezier(0.23, 1, 0.32, 1),
              right 350ms 1100ms cubic-bezier(0.23, 1, 0.32, 1),
              transform 250ms 1100ms ease,
              width 650ms 400ms cubic-bezier(0.23, 1, 0.32, 1),
              height 650ms 400ms cubic-bezier(0.23, 1, 0.32, 1);

  @include respond(tab-port) {
    right: 2rem;
    top: 1rem;
  }
}

.menu-icon:checked ~ .nav {
  animation-play-state: paused;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  width: 200%;
  height: 200%;
  transition: top 350ms 700ms cubic-bezier(0.23, 1, 0.32, 1),
              right 350ms 700ms cubic-bezier(0.23, 1, 0.32, 1),
              transform 250ms 700ms ease,
              width 750ms 1000ms cubic-bezier(0.23, 1, 0.32, 1),
              height 750ms 1000ms cubic-bezier(0.23, 1, 0.32, 1);
}

.nav ul {
  position: absolute;
  top: 50%;
  left: 0;
  display: block;
  width: 100%;
  padding: 0;
  margin: 0;
  z-index: 6;
  text-align: center;
  transform: translateY(-50%);
  list-style: none;

 & li {
    position: relative;
    display: block;
    width: 100%;
    padding: 0;
    margin: 10px 0;
    text-align: center;
    list-style: none;
    pointer-events: none;
    opacity: 0;
    visibility: hidden;
    transform: translateY(30px);
    transition: all 250ms linear;

    &:nth-child(1) {
      transition-delay: 200ms;
    }
    &:nth-child(2) {
      transition-delay: 150ms;
    }
    &:nth-child(3) {
      transition-delay: 100ms;
    }
    &:nth-child(4) {
      transition-delay: 50ms;
    }
    & a{
      font-family: $body-font;
      font-size: 9vh;
      text-transform: uppercase;
      line-height: 1.2;
      font-weight: 800;
      display: inline-block;
      position: relative;
      color: #ececee;
      transition: all 250ms linear;
      text-decoration: none;

      @include respond(tab-port) {
        font-size: 8vh;
      }

      &:hover,
      &.nuxt-link-exact-active {
        text-decoration: none;
        color: var(--container-color);
      }

      &:after{
        display: block;
        position: absolute;
        top: 50%;
        content: '';
        height: 2vh;
        margin-top: -1vh;
        width: 0;
        left: 0;
        background-color: var(--bg-color-sec);
        opacity: 0.8;
        transition: width 250ms linear;
      }

      &:hover::after{
        width: 100%;
      }
    }
  }
}

.menu-icon:checked ~ .nav  ul li {
  pointer-events: auto;
  visibility: visible;
  opacity: 1;
  transform: translateY(0);
  transition: opacity 350ms ease,
              transform 250ms ease;
  &:nth-child(1) {
    transition-delay: 1400ms;
  }
  &:nth-child(2) {
    transition-delay: 1480ms;
  }
  &:nth-child(3) {
    transition-delay: 1560ms;
  }
  &:nth-child(4) {
    transition-delay: 1640ms;
  }
}

</style>
