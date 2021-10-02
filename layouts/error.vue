<template>
  <div>
    <div class="error__container">
      <input type="checkbox" id="switch" />
      <div class="ellipse"></div>
      <div class="ray"></div>
      <div class="head"></div>
      <div class="neck"></div>
      <div class="body">
        <label for="switch"></label>
      </div>
    </div>
    <div v-if="error.statusCode === 404" class="error__container">
      <div class="msg msg_1">404</div>
      <div class="msg msg_2">Page Not Found</div>
    </div>
    <div v-else class="error__container">
      <div class="msg msg_2">An error occurred - {{ error.statusCode }}</div>
    </div>
    <NuxtLink to="/">Home page</NuxtLink>
  </div>
</template>

<script>
export default {
  props: ["error"]
};
</script>

<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css?family=Fjalla+One);
$black: #000;
$white: rgb(255, 254, 226);
$l-grey: rgb(141, 142, 126);
$grey: rgb(100, 100, 100);
$d-grey: rgb(51, 51, 51);
$yellow: rgb(255, 171, 43);
$time: 9s;

$c-width: 36vmin;
$c-height: 90vmin;

@include animation(rotate) {
  25% {
    @include rotate(-28deg);
  }
  75% {
    @include rotate(28deg);
  }
}

@mixin message($val) {
  @include animation(msg_ + $val) {
    0%,
    25%,
    75.001%,
    100% {
      @if ($val == "first") {
        opacity: 1;
      } @else {
        opacity: 0;
      }
    }

    25.001%,
    75% {
      @if ($val == "first") {
        opacity: 0;
      } @else {
        opacity: 1;
      }
    }
  }
}

@include message("first");
@include message("second");

.error__container {
  position: absolute;
  left: 50%;
  top: 50%;
  width: $c-width;
  height: 0.866 * $c-height;
  margin-left: -$c-width/2;
  margin-top: -0.433 * $c-height;
  overflow: hidden;

  &:first-child {
    transform-origin: 50% 100%;
    @include animation-use(rotate);
  }

  &:last-of-type {
    pointer-events: none;
  }

  #switch {
    display: none;

    &:checked ~ .ellipse,
    &:checked ~ .ray {
      opacity: 0;
    }
  }

  .ellipse {
    position: relative;
    width: $c-width;
    height: 0.75 * $c-width;
    background: $white;
    border-radius: 50%;
    z-index: 1;
  }

  .ray {
    position: relative;
    border-top: 0.4 * $c-height solid $l-grey;
    border-left: 0.13 * $c-height solid transparent;
    border-right: 0.13 * $c-height solid transparent;
    margin-top: -0.14 * $c-height;
  }

  .head {
    position: relative;
    width: 0.4 * $c-width;
    height: 0.02 * $c-height;
    margin-left: 0.3 * $c-width;
    background: $yellow;
  }

  .neck {
    position: relative;
    width: 0.205 * $c-width;
    margin-left: 0.3 * $c-width;
    border-top: 0.12 * $c-width solid $d-grey;
    border-left: 0.1 * $c-width solid transparent;
    border-right: 0.1 * $c-width solid transparent;
  }

  .body {
    position: relative;
    width: 0.203 * $c-width;
    margin-left: 0.4 * $c-width;
    height: 0.24 * $c-height;
    background: $grey;
  }

  label {
    position: absolute;
    top: 0.04 * $c-height;
    left: 0.073 * $c-width;
    width: 0.04 * $c-width;
    height: 0.04 * $c-height;
    border: 0.012 * $c-width solid $d-grey;
    background: $yellow;
    border-radius: 10px;
    cursor: pointer;
  }
}

.msg {
  position: absolute;
  width: $c-width;
  margin-left: -$c-width/2;
  left: 50%;
  text-align: center;
  font-family: "Fjalla One", sans-serif;
  color: var(--bg-color);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  z-index: 2;

  &.msg_1 {
    top: 0.07 * $c-height;
    font-size: 12vmin;
    @include animation-use(msg_first);
  }

  &.msg_2 {
    top: 0.12 * $c-height;
    font-size: 4.2vmin;
    @include animation-use(msg_second);
  }
}
</style>
