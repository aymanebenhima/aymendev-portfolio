<template>
  <div class="about">
    <Tabs>
      <Tab name="desc" selected="true">
        <p class="paragraph description">
          Heey dear visitor, I am a Aymane Benhima, <br> an ambitious person who has developed a mature and responsible approach to any task I undertake, or situation that I am presented with. As a graduate with two years of experience in web development. I am excellent at working with others to achieve a certain objective on time and with excellence.
        </p>
      </Tab>
      <Tab name="exp">

      </Tab>
      <Tab name="skill">

      </Tab>
    </Tabs>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.about {
  display: flex;
  flex-direction: column;

}
.description {
  padding: 2rem;
  text-align: justify;
  font-size: 1.5rem;
  &::first-letter {
    font-size: 3rem;
  }
}
</style>
