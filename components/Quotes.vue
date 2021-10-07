<template>
  <figure v-if="displayQuote" class="quote">
    <blockquote class="quote__text">"{{ quote.quote }}"</blockquote>
    <figcaption class="quote__author-name">{{ quote.cite }}</figcaption>
  </figure>
</template>

<script>
const quotes = [
  {
    quote:
      "One of my most productive days was throwing away 1,000 lines of code.",
    cite: "Ken Thompson",
  },
  {
    quote:
      "I have always wished for my computer to be as easy to use as my telephone; my wish has come true because I can no longer figure out how to use my telephone.",
    cite: "Bjarne Stroustrup",
  },
  {
    quote: "When in doubt, use brute force.",
    cite: "Ken Thompson",
  },
  {
    quote: "Talk is cheap. Show me the code.",
    cite: "Linus Torvalds",
  },
  {
    quote:
      "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.",
    cite: "Martin Golding",
  },
  {
    quote:
      "Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program.",
    cite: "Linus Torvalds",
  },
  {
    quote:
      "Most software today is very much like an Egyptian pyramid with millions of bricks piled on top of each other, with no structural integrity, but just done by brute force and thousands of slaves.",
    cite: "Alan Kay",
  },
  {
    quote:
      "Most of you are familiar with the virtues of a programmer. There are three, of course: laziness, impatience, and hubris",
    cite: "Larry Wall",
  },
  {
    quote:
      "First learn computer science and all the theory. Next develop a programming style. Then forget all that and just hack.",
    cite: "George Carrette",
  },
];

export default {
  name: "App",
  props: {
    displayQuote: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return { quote: {} };
  },
  mounted() {
    this.generate;
  },
  computed: {
    generate() {
      setInterval(() => {
        let index = Math.floor(Math.random() * quotes.length);
        this.quote = quotes[index];
      }, 4000);
    },
  },
};
</script>

<style lang="scss">
.quote {
  grid-column: col-end 5 / center-end;
  grid-row: 6 / span 1;
  box-shadow: var(--stroke-color);
  padding: 1rem;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  width: 100%;

  @include respond(tab-port) {
    display: none;
  }

  & > * {
    flex-grow: 1;
    flex-basis: 0;
  }

  &__text {
    z-index: 2;
    position: relative;
    align-self: flex-start;
    animation: bounce 4s infinite;
    transition: all .5s ease-out;
  }

  &__author-name {
    font-size: 1.1rem;
    font-weight: $font-bold;
    text-transform: uppercase;
    align-self: flex-end;
    animation: bounce 4s infinite;
    transition: all .5s ease-out;
  }

  &::before {
    content: "\201C";
    position: absolute;
    top: -2.75rem;
    left: -1rem;
    line-height: 1;
    font-size: 20rem;
    color: var(--bg-color-sec);
    opacity: .3;
    font-family: sans-serif;
    z-index: 1;
  }

  &--child {
    display: inline-block;
  }
}
</style>
